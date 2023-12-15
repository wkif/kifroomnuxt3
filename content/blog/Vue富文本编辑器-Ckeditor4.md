---
title: Vue富文本编辑器-Ckeditor4
author: kif
tags:
  - Ckeditor4
categories:
  - 开发笔记
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212021459403.png'
coverWidth: 1200
coverHeight: 750
abbrlink: ea71
date: 2022-11-08 18:46:00
---

## Ckeditor4的下载



link: https://ckeditor.com/ckeditor-4/download/



![image-20221202144002932](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212021440600.png)



下载好后解压,



![image-20221202143929813](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212021439837.png)



打开index,



 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190109103910244.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk5MjEwOQ==,size_16,color_FFFFFF,t_70)



 打开后就是配置界面



 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190109104019725.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk5MjEwOQ==,size_16,color_FFFFFF,t_70)



在这里进行增删移动，看自己需求,调整好后

 ![在这里插入图片描述](https://img-blog.csdnimg.cn/20190109104140556.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80Mjk5MjEwOQ==,size_16,color_FFFFFF,t_70)



 这里就是配置文件了，复制





## 导入

将整个目录放在你的项目下



 ![image-20221202143929813](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212021439837.png)



在需要用到的地方引用



![image-20221202144133642](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212021441745.png)

```

<script src="../static/ckeditor/ckeditor.js"></script>
```

> vue主要在index.html



需要的界面通过id引入

```
   <div>
    <textarea :id="id"></textarea>
  </div>
```

之后再mounted周期里面

```js
 mounted: function () {
    const self = this;
    // 渲染编辑器
    self.ckeditor = window.CKEDITOR.replace(self.id, {
      toolbarGroups: [
        { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
        {
          name: "paragraph",
          groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
        },
        { name: "links", groups: ["links"] },
        { name: "insert", groups: ["insert"] },

        { name: "styles", groups: ["styles"] },
        { name: "colors", groups: ["colors"] },
        { name: "tools", groups: ["tools"] }
        // { name: 'others', groups: ['others'] },
      ],
      // eslint-disable-next-line
      removeButtons:
 "Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,CreateDiv,BidiLtr,BidiRtl,Language,Anchor,Flash,HorizontalRule,PageBreak,Iframe,About,Maximize"
    });

    // 设置初始内容
    // self.ckeditor.setData(self.value)

    // 监听内容变更事件
    self.ckeditor.on("change", function () {
      console.log('change')
     
    });

    self.ckeditor.on("instanceReady", function () {
     
    });
  },
```

removeButtons可以隐藏不需要的按钮；这里面可以通过change事件来监听内容，从而实现 图片上传。

instanceReady 事件来实现数据缓存载入

```js
self.ckeditor.on("instanceReady", function () {
      if (window.localStorage.getItem("ckeditorContent")) {
        console.log('击中内容缓存')
        self.ckeditor.setData(window.localStorage.getItem("ckeditorContent"));
      } else {
        self.ckeditor.setData(self.value);
      }
    });
```

self.ckeditor.setData 事件进行内容赋值；其他事件见[官方文档](https://ckeditor.com/docs/ckeditor4/latest/guide/index.html)。

## config.js

原文件如下：

```js
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For complete reference see:
	// https://ckeditor.com/docs/ckeditor4/latest/api/CKEDITOR_config.html

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'others' },
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
		{ name: 'styles' },
		{ name: 'colors' },
		{ name: 'about' }
	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
};

```

config.toolbarGroups 在mounted 配置过了，这儿删掉，

```js
/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
	// Define changes to default configuration here. For example:
	config.language = 'zh-CN';
	// config.uiColor = '#AADC6E';
	config.extraPlugins += (config.extraPlugins ? ',lineheight' : 'lineheight');
	config.allowedContent = true;
	config.removePlugins = 'elementspath';
	config.toolbarCanCollapse = true,
	config.pasteFilter = null

};
CKEDITOR.dtd.$removeEmpty.span = 0;
```

config.language 设置语言；当前我的配置文件加了行高，

## 扩展

### 行高

具体参考 ：

[ckeditor富文本编辑器使用行间距插件lineheight扩充，改变行距](https://blog.csdn.net/mao871863224/article/details/115749065)

### 图片上传

编辑器默认使用base64存储图片，可能造成内容字符过长

```js
  self.ckeditor.on("change", function () {
      console.log('change')
      self.$emit("input", self.ckeditor.getData());
      window.localStorage.setItem("ckeditorContent", self.ckeditor.getData());
      setTimeout(async function () {
        var p = self.ckeditor.document.find("p");
        // 复制图片上传
        let imgList = self.ckeditor.document.find("img");
        for (let i = 0; i < imgList.count(); i++) {
          if (imgList.getItem(i)) {
            let baseUrl = imgList.getItem(i).$.dataset.ckeSavedSrc; //获取img的src
            if (baseUrl.substring(0, 4) == "data") {
              let resUrl = await self.uploadImg(baseUrl);
              imgList.getItem(i).$.src = resUrl;
              imgList.getItem(i).$.dataset.ckeSavedSrc = "";
            }
          }
        }
      }, 500);
    });
```

