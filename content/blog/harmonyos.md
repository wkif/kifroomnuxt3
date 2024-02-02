---
date: 2024-01-24  16:07:50
url: 
aliases: 
tags: 
  - harmonyos 

title: harmonyos
---

## 生命周期



### aboutToAppear

aboutToAppear?(): void

aboutToAppear函数在创建自定义组件的新实例后，在执行其build()函数之前执行。允许在aboutToAppear函数中改变状态变量，更改将在后续执行build()函数中生效。

从API version 9开始，该接口支持在ArkTS卡片中使用。



### aboutToDisappear

aboutToDisappear?(): void

aboutToDisappear函数在自定义组件析构销毁之前执行。不允许在aboutToDisappear函数中改变状态变量，特别是@Link变量的修改可能会导致应用程序行为不稳定。

从API version 9开始，该接口支持在ArkTS卡片中使用。



### onPageShow

onPageShow?(): void

页面每次显示时触发一次，包括路由过程、应用进入前台等场景，仅@Entry装饰的自定义组件生效。



### onPageHide

onPageHide?(): void

页面每次隐藏时触发一次，包括路由过程、应用进入后台等场景，仅@Entry装饰的自定义组件生效。



### onBackPress

onBackPress?(): void

当用户点击返回按钮时触发，仅@Entry装饰的自定义组件生效。

