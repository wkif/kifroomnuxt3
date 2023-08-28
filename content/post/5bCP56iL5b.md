---
title: 小程序事件之bind 、catch 、capture-bind和capture-catch的区别
author: kif
tags:
  - 微信小程序
categories: []
abbrlink: 3ceb
date: 2022-05-22 20:34:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/project/202205222038395.jpg
coverWidth: 1200
coverHeight: 750
---


# 小程序事件之bind 、catch 、capture-bind和capture-catch的区别

### 事件分类

#### 事件分为冒泡事件和非冒泡事件

1. 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
2. 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

事件的绑定：

  bind和catch都是用来绑定事件的，与 `bind` 不同， `catch` 会阻止事件向上冒泡

```html
<view id="outer" bindtap="handleTap1">
  outer view
  <view id="middle" catchtap="handleTap2">
    middle view
    <view id="inner" bindtap="handleTap3">
      inner view
    </view>
  </view>
</view>
```



上例中，点击 inner view 会先后调用`handleTap3`和`handleTap2`(因为tap事件会冒泡到 middle view，而 middle view 阻止了 tap 事件冒泡，不再向父节点传递)，点击 middle view 会触发`handleTap2`，点击 outer view 会触发`handleTap1`



### 事件的捕获阶段

 \1. 事件是有两个阶段的：捕获阶段 和 冒泡阶段， 且捕获阶段位于冒泡阶段之前。

 \2. 在捕获阶段中，事件到达节点的顺序与冒泡阶段恰好相反

 \3. 在捕获阶段监听事件时，可以采用`capture-bind`、`capture-catch`关键字，后者将中断捕获阶段和取消冒泡阶段

 示例：

点击 inner view 会先后调用`handleTap2`、`handleTap4`、`handleTap3`、`handleTap1`

```html


<view id="outer" bind:touchstart="handleTap1" capture-bind:touchstart="handleTap2">
  outer view
  <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
    inner view
  </view>
</view>


```



 如果把上面的代码改成如下，将只会触发`handleTap2`

```html


<view id="outer" bind:touchstart="handleTap1" capture-catch:touchstart="handleTap2">
  outer view
  <view id="inner" bind:touchstart="handleTap3" capture-bind:touchstart="handleTap4">
    inner view
  </view>


```





转载自：

https://www.cnblogs.com/hzhuxin/p/15074300.html