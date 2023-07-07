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





待續......







