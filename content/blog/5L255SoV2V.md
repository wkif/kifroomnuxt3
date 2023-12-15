---
title: 使用WebAssembly优化性能问题
author: kif
tags:
  - WebAssembly
categories:
  - 开发笔记
abbrlink: a34e
date: 2023-09-02 13:47:00
cover: https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202309021720156.jpg
coverWidth: 1200
coverHeight: 750
---

## 问题背景

项目有个CMS的新需求，分为三端：后台管理端、PC端和移动端，后台管理端实现CMS资讯的编辑发布等，使用了富文本编辑器（PS：富文本是一大天坑），编辑的内容通过接口返回后使用v-html来展示，在移动端展示的时候，编辑的各种样式需要做移动端适配，字体等样式还比较容易处理，但对于下面这些编辑时指定了特定样式的，就需要做相关转换了，

```html
<img style="width:1920px;height:80px" />
```

## 思路

对于移动端适配，比较容易想到的就是 [postcss-px-to-viewport-8-plugin](https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin)，但对于v-html 处理的带行内样式的html字符串，插件就没办法做处理，之后考虑到可以通过正则替换来对px单位转换为所需的vw，查询到有一个库实现对行内样式转换，查看源码也是正则替换这个思路，但是是一个webpack loader，并不适用与当前项目，就考虑自己写一套utils，

## 实现

有了下面的1.0版本：

```ts
function StylePx2Vw(
  source: string,
  option = {
    ignoreUnitCase: true, // 转换单位是否忽略大小写
    viewportWidth: 750, // 750设计稿的viewport
    unitPrecision: 2, // 单元精度
    viewportUnit: "vw", // 转换单位
    minPixelValue: 1, // 最小转换单位
  },
) {
  // 匹配小数或者整数px正则
  const stylePXRegExp = /(\d*\.?\d+)px/;
  const pxReg = new RegExp(stylePXRegExp.source, option.ignoreUnitCase ? "ig" : "g");

  if (pxReg.test(source)) {
    return source.replace(
      pxReg,
      createPxReplace(
        option.viewportWidth,
        option.minPixelValue,
        option.unitPrecision,
        option.viewportUnit,
      ),
    );
  }
  return source;
}

function createPxReplace(
  viewportSize: number,
  minPixelValue: number,
  unitPrecision: number,
  viewportUnit: string,
): (substring: string, ...args: any[]) => string {
  return function ($0: any, $1: string) {
    if (!$1) return "";
    const pixels = parseFloat($1);
    if (pixels <= minPixelValue) return "";
    return toFixed((pixels / viewportSize) * 100, unitPrecision) + viewportUnit;
  };
}
/**
 *  四舍五入
 * @param number  数字
 * @param precision 精度
 * @returns   number
 */
function toFixed(number, precision) {
  const format = (num) =>
    num.toLocaleString("en-US", {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    });
  return format(number);
}

export default StylePx2Vw;

```

通过 StylePx2Vw 方法实现对str的转换，其中还细究了一下Math.toFixed的准确率问题，感兴趣可以看这篇详细的记录 [Math.toFixed中的四舍五入问题](https://hexo.kifroom.icu/post/kif1.html)。

上到测试环境测试一波效果不错，但就在上线前一天，测试突然反馈有项目几率卡死，刚开始还以为是哪里死循环了，之后排查到是某一个特定的资讯详情会稳定触发，原因就在于那条资讯内容过于长,达到5w多字符，问题就在这个**长字符串的正则replace耗时太久**。

但对于这个场景除了正则替换也没有其他好的处理策略，归根到底是JS语言的性能问题，那么解决的话就得考虑不使用JS来做处理了，让后端来处理？怕后端打我。。中午吃饭突然想到了看掘金看到过的一个东西，也就是这次记录的主角：**WebAssembly**



## WebAssembly

MDN： https://developer.mozilla.org/zh-CN/docs/WebAssembly/Concepts

WebAssembly 是一种运行在现代网络浏览器中的新型代码，并且提供新的性能特性和效果。它设计的目的不是为了手写代码而是为诸如 C、C++和 Rust 等低级源语言提供一个高效的编译目标。

对于网络平台而言，这具有巨大的意义——这为客户端 app 提供了一种在网络平台以接近本地速度的方式运行多种语言编写的代码的方式；在这之前，客户端 app 是不可能做到的。

而且，你在不知道如何编写 WebAssembly 代码的情况下就可以使用它。WebAssembly 的模块可以被导入的到一个网络 app（或 Node.js）中，并且暴露出供 JavaScript 使用的 WebAssembly 函数。JavaScript 框架不但可以使用 WebAssembly 获得巨大性能优势和新特性，而且还能使得各种功能保持对网络开发者的易用性。



简而言之这玩意和js一样也可以在浏览器运行，而且性能还牛皮！正好自己在学Rust，于是上手体验一波。参考这份[webassembly：小伙子，你渴望力量吗？](https://juejin.cn/post/7156250334082367496#heading-4) 对比了一下，觉得方法可行，于是采用Rust+WebAssembly 来实现对这个转换的优化。







## **postcss-px-to-viewport-wasm-plugin**  

```rust
mod utils;

use regex::Regex;
use wasm_bindgen::prelude::*;
use js_sys::Number; 

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub struct ConversionOptions {
    prototype_width: f64,
    ignore_case: bool,
    conversion_precision: usize,
}

#[wasm_bindgen]
impl ConversionOptions {
    #[wasm_bindgen(constructor)]
    pub fn new(prototype_width: f64, ignore_case: bool, conversion_precision: usize) -> Self {
        Self {
            prototype_width,
            ignore_case,
            conversion_precision,
        }
    }

    pub fn prototype_width(&self) -> f64 {
        self.prototype_width
    }

    pub fn ignore_case(&self) -> bool {
        self.ignore_case
    }

    pub fn conversion_precision(&self) -> usize {
        self.conversion_precision
    }
}

#[wasm_bindgen]
pub fn convert_px_to_vw_with_options(html_str: &str, options: &ConversionOptions) -> String {
    // 根据 ignore_case 选项创建适当的正则表达式
    let mut re_flags = regex::RegexBuilder::new(r"([\d.]+)px");
    if options.ignore_case {
        re_flags.case_insensitive(true);
    }
    let re = re_flags.build().unwrap();

    let converted = re.replace_all(html_str, |caps: &regex::Captures| {
        if let Some(px_value) = caps.get(1) {
            let px_value: f64 = px_value.as_str().parse().unwrap();
            let vw_value = (px_value / options.prototype_width) * 100.0; // 转换为 vw 单位
            format!("{:.1$}vw", vw_value, options.conversion_precision)
        } else {
            caps[0].to_string()
        }
    });

    converted.to_string()
}
```

实现思路和上面是一样的，简单的通过正则匹配替换。

通过 wasm-pack打包后得到wasm文件和胶水js：

![image-20230902162816717](https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202309021628769.png)



再编码写一个入口文件就可以

```js
import * as postcss_px_to_viewport_wasm_plugin from "./pkg/postcss_px_to_viewport_wasm_plugin.js";

function convert_px_to_vw(str, options) {
  // options { viewportWidth,ignoreUnitCase,unitPrecision}
  const { viewportWidth, ignoreUnitCase, unitPrecision } = options;
  return postcss_px_to_viewport_wasm_plugin.convert_px_to_vw_with_options(
    str,
    new postcss_px_to_viewport_wasm_plugin.ConversionOptions(
      viewportWidth,
      ignoreUnitCase,
      unitPrecision
    )
  );
}
export { convert_px_to_vw };

```



于是有了 postcss-px-to-viewport-wasm-plugin 这样一个库，具体效果：

![image-20230902162950276](https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202309021629302.png)

65535字符转换最低耗时7ms，相较于之前的崩掉可好太多了！



## 后话

对于WebAssembly，其实早已经不新鲜了，asm.js作为其前身，在2015年，迎来了WebAssembly，早在2017 年底，四大浏览器厂商就全部完成对 WebAssembly 的初步实现，它的诞生其实就是为了解决前端的开发逻辑越来越复杂的趋势下性能瓶颈问题。

![image-20230902163857235](https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202309021638308.png)

AutoCAD、GoogleEarth等大型项目在此基础上实现，但对于一般开发场景，这项技术貌似并没有进入大众视野，以至于遇到这类js性能问题时并没有想到使用 WebAssembly 来解决。

参考文章：

> [webassembly：小伙子，你渴望力量吗？](https://juejin.cn/post/7156250334082367496#heading-4)
>
> [WebAssembly](https://developer.mozilla.org/zh-CN/docs/WebAssembly)

