---
title: vs code 开发微信小程序
author: kif
tags:
  - VS code
  - 微信小程序
categories:
  - 教程
abbrlink: f738
date: 2020-07-13 00:00:00
---
这里推荐大家使用号称“宇宙第一IDE”的编辑器——vscode。安装方法看博客上一篇文章，主要介绍一下几个vscode插件，在vscode中搜索插件关键字点击安装即可。

![搜索插件](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/6.png)

### [](#小程序助手 "小程序助手")小程序助手

让vscode 提供对 .wxss .wxml 文件后缀的支持
![小程序助手](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/8.png)

### [](#minapp "minapp")minapp

支持微信小程序标签、属性的智能补全，并且提示中包含文档内容（同时支持原生小程序、mpvue 和 wepy 框架，并提供 snippets）。
![minapp](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/9.png)

### [](#wechat-snippet "wechat-snippet")wechat-snippet

这个插件主要的功能就是代码辅助，代码片段自动完成，可以作为上个插件的补充。
![wechat-snippet](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/10.png)

### [](#wxml "wxml")wxml

这款插件用于将wxml代码进行高亮显示，并且提供代码格式化的功能，可将代码格式化为较易阅读的样式。
![wxml](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/11.png)

### [](#vscode-wxml "vscode wxml")vscode wxml

提供微信小程序代码的提示
对wxml文件进行格式化
![vscode wxml](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/12.png)

### [](#wechat-snippet-1 "wechat-snippet")wechat-snippet

![wechat-snippet](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/13.png)

有了上面这几款插件，便可以开始高效地撸代码了。至于代码的调试以及效果的查看，当然还是得打开微信开发者工具。将编辑器隐藏，调试工具调到最大，快速找到元素的位置，修改样式，Ctrl+S，提交代码，一顿操作猛如虎。

下面这是我的界面，可以把微信开发程序仅打开模拟器，放在右边，左边用vscode写好代码后，鼠标点击到 右边，ctrl+r刷新就可以看到效果了。
![我的界面](https://cdn.jsdelivr.net/gh/wkif/CDN/img/vscode/7.png)