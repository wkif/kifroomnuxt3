---
title: 玩机汇总（三）：刷入第三方rec 与magisk、Edx安装
author: kif
tags:
  - 玩机
categories:
  - 教程
abbrlink: '6255'
date: 2020-06-16 00:00:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/202203310006664.jpg
coverWidth: 1200
coverHeight: 750
---
本文介绍手机第三方rec刷入和magisk、Edxp的安装
有变砖风险。
玩机有风险，搞机需谨慎。

<a id="more"></a>

# [](#前言 "前言")前言

## [](#什么是第三方rec？ "什么是第三方rec？")什么是第三方rec？

Recovery模式指的是一种可以对安卓机内部的数据或系统进行修改的模式（类似于windows PE或DOS）。在这个模式下我们可以刷入新的安卓系统，或者对已有的系统进行备份或升级，也可以在此恢复出厂设置，按类型分为官方的rec和第三方rec（CWM REC和TWRP REC。REC是Recovery的缩写，是每部安卓机出厂时自带的恢复模式，不过那都是官方的Recovery。官方Recovery只能用来刷入官方的系统，如小米rec
![图源：百度百科](https://gss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh=600,800/sign=00603032040828386858d41288a98539/1ad5ad6eddc451daa6d497c6b5fd5266d01632f8.jpg)

如果你想刷入别的系统，只能通过第三方Recovery来实现，但是，你平时所用到的在线升级也就是OTA升级，是基于官方Rec的，如果你刷入了第三方Rec，OTA升级就会失败。

TWRP
TWRP是国外android爱好者开发的一个第三方REC，全名是：TeamWin Recovery Project，也是我们现在刷第三方ROM通常用到的REC。[twrp官网](https://twrp.me/)

此教程是线刷rec教程

## [](#什么是magisk？ "什么是magisk？")什么是magisk？

官网：[https://magiskmanager.com/](https://magiskmanager.com/)

![图源：Android 派小队](https://cdn.sspai.com/2019/02/25/f9ba127eb6c341faadf8fbb3df725572.jpeg?imageView2/2/w/1120/q/90/interlace/1/ignore-error/1)
Magisk 是出自一位台湾学生[ @topjohnwu ](https://forum.xda-developers.com/member.php?u=4470081)开发的 Android 框架，是一个通用的第三方 systemless 接口，通过这样的方式实现一些较强大的功能。
看似很简单的一个框架，甚至与大名鼎鼎的 Xposed 框架在功能性上有点重复。很多人批评 Magisk的模块太少了，想替代 Xposed 根本不可能（在那个 Xposed Framework for Android 7.0 难产的时代，很多人将 Magisk 看是做是 Xposed 的替代品）。这是不正确的，因为 Magisk 从来没有想过要代替 Xposed ，Magisk 与 Xposed 是可以互相兼容的，你甚至可以通过 Magisk 来安装 Xposed（安装 Xposed 后就不能绕过 SafetyNet 了）。

Magisk 的厉害之处在于它实现了一种绕过 SafetyNet 使用 root 的方法。

实现原理：由于它是通过启动时在 boot 中创建钩子，把 /data/magisk.img 挂载到 /magisk，构建出一个在 system 基础上能够自定义替换，增加以及删除的文件系统，所有操作都在启动的时候完成，实际上并没有对 /system 分区进行修改（即 systemless 接口，以不触动 /system 的方式修改 /system）。

转自：
作者：Mogeko丶
链接：[https://www.jianshu.com/p/393f5e51716e](https://www.jianshu.com/p/393f5e51716e)
来源：简书

## [](#3-什么是Edxp "3.什么是Edxp?")3.什么是Edxp?

官网：[https://github.com/ElderDrivers/EdXposed/releases/](https://github.com/ElderDrivers/EdXposed/releases/)

   Edxposed全称 Elder driver Xposed Framework，简称edxp.
大名鼎鼎的xposed框架可以实现QQ抢红包，微信抢红包，防止消息撤回等功能。xposed也是所有android系统获取root后必装的东西。但可惜，自从android 7.0之后xposed的开发者rovo89基本就不维护了，针对android 8.0的版本草草发布了一个测试版本撒手不管了。现在越来越多的新机型出厂就是android 9.0系统，那么怎么才能继续使用xposed框架，如何才能继续快乐的抢红包呢？其实有办法！xposed虽然死了，但它却不再是唯一。比如今天我要提到的Edxposed框架，Edxposed全称 Elder driver Xposed Framework，简称edxp，Edxposed框架现在支持android 8.0 -android 9.0 ，如果是android 7.0或更早的版本，推荐使用xposed框架。针对框架的安装问题，官方推出了Magisk模块的安装方式，也就是提供了一个zip压缩包，在Magisk中安装重启即可。在安装edxposed的magisk模块之前，你需要先安装riru的magisk模块。
本文主要是Magisk安装Edx。

参考：
作者：coderstory
《后Xposed时代: 一篇文章看懂如何安装和使用Edxposed》
[https://blog.coderstory.cn/guide-install-edxposed/](https://blog.coderstory.cn/guide-install-edxposed/)

# [](#刷入第三方rec "刷入第三方rec")刷入第三方rec

## [](#下载准备 "下载准备")下载准备

准备：电脑 数据线 手机 

所需工具来自 rom乐园 参考教程：[http://www.romleyuan.com/lec/read?id=201](http://www.romleyuan.com/lec/read?id=201)

小米全机型TWRP一键刷机工具：

百度网盘下载：[https://pan.baidu.com/s/1K0VuCxwwKT9OI3yCouV3Gg](https://pan.baidu.com/s/1K0VuCxwwKT9OI3yCouV3Gg)
高速下载，请关注微信公众号：ROM乐园 回复关键字：全机型recovery下载

twrp机型下载地址汇总
链接：[https://pan.baidu.com/s/1zIZ9ObMiKwjlW3LvpOixMw](https://pan.baidu.com/s/1zIZ9ObMiKwjlW3LvpOixMw)
提取码：9kam

## [](#刷入 "刷入")刷入

解压刷入RECOVERY工具并打开

![图源：rom乐园](http://www.romleyuan.com:9001/attach/photo/910fe8164e8549328f7f9ca5e8377841.jpg)

彻底关闭手机，音量下和开机按键进入fastboot模式
双击运行一键刷入RECOVERY.bat脚本

![图源：rom乐园](http://www.romleyuan.com:9001/attach/photo/53b675e71b7a4aa6980a0572a15cac6b.jpg)

提示连接成功后，根据提示一步步刷完RECOVERY
![图源：rom乐园](http://www.romleyuan.com:9001/attach/photo/7ae894fdf6fe46c597d7cdbf9fffe6ac.jpg)
刷机完成后，会自动进入RECOVERY，或者提示进入RECOVERY方法

## [](#小米手机进入TWRP-Recovery教程： "小米手机进入TWRP_Recovery教程：")小米手机进入TWRP_Recovery教程：

开机状态下，选择重启手机，按住音量山不松手，即可进入TWRP_Recovery

关机状态下，长开机键和音量上不松手，震动后松开开机按键，保持音量上

不松手，等待手机自带进入twrp界面

# [](#刷入magisk "刷入magisk")刷入magisk

安装 Magisk 需要解锁 Bootloader 并刷入第三方 Recovery。所以每个品牌的手机都或多或少的有点不一样，这里只介绍一个标准的流程，

## [](#下载准备-1 "下载准备")下载准备

网站下载[magisk](https://forum.xda-developers.com/apps/magisk)包；

下面提供个人云盘的下载：
magisk app:
链接：[https://pan.baidu.com/s/1YXTdIAbbp0xMoBT0UWFboA](https://pan.baidu.com/s/1YXTdIAbbp0xMoBT0UWFboA)
提取码：p15w

magisk v20.4
链接：[https://pan.baidu.com/s/1q6kBqFDuAVIQeQ2KRji0sw](https://pan.baidu.com/s/1q6kBqFDuAVIQeQ2KRji0sw)
提取码：mzd5 

magisk卸载包 链接：[https://pan.baidu.com/s/1UjigsfnuHwFpC1YkjNLrQQ](https://pan.baidu.com/s/1UjigsfnuHwFpC1YkjNLrQQ)
提取码：6lg7

下载 APP 和magisk v20.4 就好了

## [](#方法 "方法")方法

首先将下好的magisk v20.4 包放入手机中

进入第三方 Recovery（以 twrp 为例）

![图源：CSDN unique-R](https://img-blog.csdnimg.cn/20190524124806103.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3Mjc3OTQ0,size_16,color_FFFFFF,t_70)

安装刷机包  找到我让你放在硬盘中的那个包（后缀为 .zip）

![图源：CSDN unique-R](https://img-blog.csdnimg.cn/2019052412515435.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3Mjc3OTQ0,size_16,color_FFFFFF,t_70)

滑动滑块，开始刷机 

![图源：CSDN unique-R](https://img-blog.csdnimg.cn/2019052412540624.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3Mjc3OTQ0,size_16,color_FFFFFF,t_70)

刷好后立即重启。

![图源：CSDN 苦瓜亦叫半生瓜](https://i.loli.net/2018/11/15/5bed4ed4966d5.jpg)

至此，magisk安装完毕。

## [](#模块 "模块")模块

  magisk安装之后可以安装很多模块实现对手机的功能扩展。具体的模块分享会专门出一个板块。

# [](#刷入-Edx "刷入 Edx")刷入 Edx

## [](#下载准备： "下载准备：")下载准备：

有了magisk之后安装Edxp相对比较简单，Edxp作为一个Magisk模块被刷入。
以前需要刷入 Riru Core和Edx两个模块，但之后有大佬对模块进行了整合，这里分享的就是整合后的模块，用magisk输入后就可以了。

Magisk模块-EdXposed完整框架v2.7Y版
链接：[https://pan.baidu.com/s/1oxvrpwnWLQWzoQJKYroOUw](https://pan.baidu.com/s/1oxvrpwnWLQWzoQJKYroOUw)
提取码：a9dk

## [](#安装 "安装")安装

下载之后进入第三方rec ，找到模块安装
重启之后一般就会出现 Edx的图标

至此，Edxp安装完毕。

## [](#模块-1 "模块")模块

Edxp  也有很多模块，模块分享会和Magisk模块一起发出。

# [](#后话 "后话")后话

magisk 和Edxp是我个人用的比较多的，当然市面上还有太极之类的玩机软件也不错，有想法的可以去试试。

此次教程参考转载了很多大佬的文章，主要在于自己表达水平不行，在此对这些大佬表示感谢。如有侵权，请联系我删除。