---
title: Win 上安装Git和node.js
author: kif
tags:
  - Win
  - git
  - node.js
categories:
  - 教程
abbrlink: c402
date: 2020-06-18 00:00:00
---
本文介绍Win上安装Gitd 和node.js方法
个人安装的环境：（快速安装基本简单；下一步默认其实也可以；看图就懂）

Windows10 64bit

# [](#Git-2-13-0 "Git 2.13.0")Git 2.13.0

(下载 git网址 ： [https://git-scm.com/download）](https://git-scm.com/download）)

<a id="more"></a>

## [](#安装步骤 "安装步骤")安装步骤

### [](#安装 "安装")安装

[https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/1.png](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/1.png)

[路径选择](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/2.png)

### [](#选择安装组件 "选择安装组件")选择安装组件

当然建议全选哈

[组件](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/7.png)

### [](#创建菜单文件夹 "创建菜单文件夹")创建菜单文件夹

![文件夹](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/4.png)

### [](#修改系统的环境变量 "修改系统的环境变量")修改系统的环境变量

![修改环境变量](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/5.png)

### [](#选择SSL的证书 "选择SSL的证书")选择SSL的证书
> https：（全称：Hyper Text Transfer Protocol over Secure Socket Layer）简单讲是HTTP的安全版。即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。 它是一个URI scheme（抽象标识符体系），句法类同http:体系。用于安全的HTTP数据传输。

![SSL证书](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/6.png)

### [](#配置行尾结束符 "配置行尾结束符")配置行尾结束符

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/8.png)

### [](#配置终端仿真 "配置终端仿真")配置终端仿真

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/9.png)

> 大多数其他Cygwin/MSYS终端一样，MinTTY也是基于pseudo终端(“pty”)设备的。但是MinTTY并不能完全替代windows的命令提示符。windows上自带简单的文本输出的原生态的命令提示符通常可以很好的工作，但交互性更好的诸如MinTTY这样的应用程序却可能出现故障——虽然通常都有应对方案。这就是为什么MinTTY不能完全替代windows自带的命令提示符

### [](#其他的配置–默认即可 "其他的配置–默认即可")其他的配置–默认即可

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/10.png)

### [](#等待安装 "等待安装")等待安装

### [](#测试 "测试")测试

![测试](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/11.png)

### [](#后续 "后续")后续

如果中文没有正常显示，请求鼠标右击选择“option”选项，更换语言即可
[中文](https://cdn.jsdelivr.net/gh/wkif/CDN/img/git/12.png)

转自：
作者：weir_will
链接：[https://www.jianshu.com/p/414ccd423efc](https://www.jianshu.com/p/414ccd423efc)
来源：简书

# [](#node-js "node.js")node.js

## [](#下载链接：https-nodejs-org-en "下载链接：https://nodejs.org/en/")下载链接：[https://nodejs.org/en/](https://nodejs.org/en/)

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/hexo/1.png)
安装步骤：一路默认就行（安装路径根据自己需要更改）

## [](#验证软件正确安装 "验证软件正确安装")验证软件正确安装

同时按下Win键和R键（或者点击“开始菜单”-&gt;点击“运行”）,打开运行窗口,输入“cmd”
然后输入以下命令，结果与下图相同则说明安装正确，若不正确可以卸载软件重新安装

    git --version
    node -v
    npm -v