---
title: 奇奇怪怪的兼容性Bug
author: kif
tags:
  - 兼容性
categories:
  - 开发笔记
  - ''
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212060030103.png'
coverWidth: 1200
coverHeight: 750
abbrlink: 2b51
date: 2022-12-06 00:28:00
---



## IOS 不支持this.$router.go

项目中遇到需要刷新当前界面，就使用了this.$router.go(0)，结果ios端不生效,this.router.go(0) 和 window.location.reload() 都是刷新当前页面的方法,Vue 写H5页面时，用 this.$router.go(0); 方法刷新当前页面，在苹果手机失效，安卓、pc、开发工具等都可以改用 ***\*window.location.reload()\**** 问题解决！

## 微信端input type=file 无法上传图片

在做一个上传头像功能时

```
<input id="photo" type="file" accept="image/jpeg, image/x-png, image/gif" capture="camera">
```

这段代码在非微信浏览器内能选中图片并上传，而在微信浏览器内就失效了，查了各种资料并没有找个解决方案，一次 偶然的机会将代码改成

```
<input id="photo" type="file" accept="image/*" capture="camera">
```

发现奇迹般的在微信里成功了。

自己猜测，可能是 accept="image/jpeg, image/x-png, image/gif" 这个属性在微信里寻找手机里的图片的时候类型不匹配，导致上传失败，将其改成 accept="image/*" 这个时候就能成功。可能是微信浏览器内对input的配置问题。

最后发现可以不要 capture="camera" 也能调用摄像头。最后代码为

```
<input id="photo" type="file" accept="image/*">
```

或者使用JSSDK

参考：[微信端input type=file 无法上传图片](https://cloud.tencent.com/developer/article/1399109)



## 网页刷新或标签页关闭时发个请求

应用场景：一般来说埋点数据请求遇到这个场景可能比较多，项目需要对信息编辑页内容进行数据缓存，由于操作会到其他分包，所以基于vueRouter的keepalive便失去了效果，诚然，这种情况使用localStorage才是更好的，但是这个信息编辑页数据之间太复杂，接手项目再来梳理时间成本太高，考虑到已经有保存草稿这个功能，遂打算稍微改造这个接口用来做信息缓存，故需要考虑到网页刷新或标签页关闭时发个请求。

项目中使用Axios做数据请求，但Axios异步的，不支持同步的请求，请求会被cancel。

与浏览器关闭事件相关事件有onunload和onbeforeunload两个。区别在于onbeforeunload在onunload之前执行，它还可以阻止onunload的执行。因此我们着重关注onbeforeunload事件。

### fetch

Fetch 的keepalive属性提供了一套健壮的与服务器端交互的方式，提供了跨越不同平台 API 的一致接口。它提供了一个keepalive属性，保证不管发送请求的页面关闭与否，请求都会持续直到结束。不过上传数据的限制是64 KB。写法如下：

```js
window.addEventListener(‘onbeforeunload’, {
fetch('/api', {
  method: 'POST',
  body: data,
  keepalive: true
});
}
```

这个方法可以在刷新或标签页关闭前把请求发出去，但是 **企业微信**中不支持

### SendBeacon()

![image-20221207225912863](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212072259919.png)



群里一问了解到这个 [Navigator.sendBeacon()](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon)

但![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202212072300083.png)



只能吐槽企微和微信。。。



最终考虑到最不想用的：使用定时器检查编辑数据和上次提交的数据有无变化，此处可以用diff的包也可以自己写，如果变了就发个请求，缺陷在于定时diff性能消耗可能有点大。





## ios及部分安卓浏览器引入unocss报错导致首屏白屏



先说问题原因：

浏览器内核不支持 toplevel await, 解决办法参看pr （https://github.com/unocss/unocss/pull/2066）



vite.config.ts 中配置 hmrTopLevelAwait 为false

```
UnoCSS({
     hmrTopLevelAwait: false,
})
```



在unocss源码中 packages\vite\src\modes\global\dev.ts，

 

```
let hmr = `
try {
 let hash = __vite__css.match(/__uno_hash_(\\w{${HASH_LENGTH}})/)
 hash = hash && hash[1]
 if (!hash)
  console.warn('[unocss-hmr]', 'failed to get unocss hash, hmr might not work kif')
 else
  await import.meta.hot.send('${WS_EVENT_PREFIX}', ['${layer}', hash]);
} catch (e) {
 console.warn('[unocss-hmr]', e)
}
if (!import.meta.url.includes('?'))
 await new Promise(resolve => setTimeout(resolve, 100))`



const config = await getConfig() as VitePluginConfig

if (config.hmrTopLevelAwait === false)
	hmr = `;(async function() {${hmr}\n})()`
hmr = `\nif (import.meta.hot) {${hmr}}`

const s = new MagicString(code)
s.append(hmr)


```

通过 config.hmrTopLevelAwait 判断是否支持 顶级await，向上找发现此项是UnoCSS 的手动配置项



## ios端 Unexpected token '='. Expected an opening '(' before a method's parameter list

问题出在项目中Axios封装：

```ts
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { ApiDataResponse } from "#/axios";
import Axios from "axios";
import { Toast } from "vant";
import { whiteCodes } from "./codes";

Axios.defaults.withCredentials = true;

const defaultConfig: AxiosRequestConfig = {
  baseURL: "",
  timeout: 1000 * 30,
};
class Request {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = Axios.create(defaultConfig);
    this.httpInterceptorsRequest();
    this.httpInterceptorsResponse();
 }
  /**
   * @description 请求拦截器
   */
  private httpInterceptorsRequest(): void {
    this.axiosInstance.interceptors.request.use(
     (config: AxiosRequestConfig) => {
        // 添加逻辑
        return config;
     },
     (error: AxiosError): Promise<any> => {
        return Promise.reject(error);
     },
   );
 }
  /**
   * @description 响应拦截器
   */
  private httpInterceptorsResponse(): void {
    this.axiosInstance.interceptors.response.use(
     (response: AxiosResponse) => {
        if (response.headers.hxe_auth) {
          response.data.data.userToken = response.headers.hxe_auth;
       }
        this.responseHandle(response);
        return response;
     },
     (error: AxiosError): Promise<any> => {
        const { response, message } = error;
        if (response) {
          this.responseHandle(response, message);
       } else {
          const message = error.message.includes("timeout")
            ? "请求超时！请检查网络是否正常"
           : "请求失败，请检查网络是否已连接";
          Toast.fail(message);
       }
        return Promise.reject(error);
     },
   );
 }
  request<T = any, U = any>(config: AxiosRequestConfig): Promise<ApiDataResponse<T> | U> {
    return new Promise((resolve, reject) => {
      this.axiosInstance(config)
       .then((res: AxiosResponse) => {
          resolve(res.data);
       })
       .catch((err: Error | AxiosError) => {
          reject(err);
       });
   });
 }

  /**
   * @description 错误码处理
   * @param { Object } response 响应结果
   */
  private responseHandle(response: AxiosResponse, message?: string): void {
    switch (response.status) {
      case 401:
      case 403:
        console.log("需要登录");
        break;
      case 404:
        Toast.fail("请求资源不存在");
        break;
      case 200:
        if (response.config.responseType === "blob") {
          return;
       }
        const code = response.data?.code;
        if (code !== 0 && !Object.keys(whiteCodes).includes(String(code))) {
          Toast.fail(response.data?.message ?? response.data?.msg ?? "出错了");
       }
        break;
      default:
        Toast.fail(response.data?.message ?? message ?? "未知错误");
        break;
   }
 }
}

export const http = new Request();
```



`private axiosInstance: AxiosInstance` 使用了 公有字段声明[Private class features](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#field_declarations)，例子如下：

```
class Account {
 accountFields = ['field1', 'field2', 'field3']
}
```

其兼容性如下：

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields#browser_compatibility

bug记录：

https://bugs.webkit.org/show_bug.cgi?id=194095



It's currently [supported](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields#browser_compatibility) by most modern browsers. However, **the only Safari versions that support this feature are v14.1** (released April 26th, 2021) and higher. If you need to support older versions of Safari / a wider variety of older browsers you'll need to follow one of the suggestions below.

Instead of using public field declarations, you can use a [constructor() method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Constructor) to define the properties for your class instances. Using a constructor does have [good browser compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Browser_compatibility) (for IE support you can use a [constructor function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new#description)):

```
class Account {
  constructor() {
    this.accountFields = ['field1', 'field2', 'field3'];
 }
}
```

As pointed out in the comments by [@Baz](https://stackoverflow.com/users/1062794/baz), you can also use Babel as an alternative solution. Using babel means that you won't have to change your code, which can make things easier on you if you're using public field declarations a lot throughout your project. Babel will transpile/compile your modern JS code into older (ES5 and below) JS code which can be understood by many browsers. You can use [this](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) babel plugin like so.

First, install the babel plugin:

```
npm install --save-dev @babel/plugin-proposal-class-properties
```

Then add the plugin to your configuration file:

```
{
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

For other installation options (babel CLI, etc), see the [usage section](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties#usage) of the plugin's docs.





> https://stackoverflow.com/questions/60026651/safari-unexpected-token-expected-an-opening-before-a-methods-paramet





待續......







