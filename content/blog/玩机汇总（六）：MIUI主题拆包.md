---
title: 玩机汇总（六）：MIUI主题拆包
author: kif
tags:
  - MIUI
categories:
  - 教程
abbrlink: f25
date: 2020-08-15 00:00:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/202203310006808.jpg
coverWidth: 1200
coverHeight: 750
---
**开始教程（电脑）：**

# [](#一：总概括 "一：总概括")**一：总概括**

## [](#1-主题包大概所包含常用的模块： "1. 主题包大概所包含常用的模块：")**1.** **主题包大概所包含常用的模块：**

**如下图：**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815134259.jpg)

## [](#2-常用模块介绍： "2. 常用模块介绍：")**2.** **常用模块介绍：**

**（1）.boots文件夹—开机动画。**

**（2）.fonts文件夹—字体。**

**（3）.preview文件夹—该主题的截图介绍。**

**（4）.wallpaper文件夹—锁屏壁纸和桌面壁纸。**

**（5）.clock_2*4模块—桌面时间样式。**

**（6）.com.android.contacts模块—拨号键盘样式。**

**（7）.com.android.mms模块—短信界面（气泡、字体颜色等）。**

**（8）.com.android.settings模块—设置（自定义设置名字、设置内容图标等）。**

**（9）.com.android.systemui模块—状态栏（背景、开关图标、自定义电池后文字、纵横排开关个数，自定义信号、WIFI、电池、蓝牙、静音、闹钟等图标）。**

**（10）.com.android.thememanger模块—主题中心（自定义主题商店的名字、背景、修改导入本地主题按钮名称等）。**

**（11）.com.android.updater模块—系统升级（系统更新背景图、自定义更新按钮名字等）。**

**（12）.com.miui.home模块—桌面布局（修改图标布局、图标大小等）。**

**（13）.com.android.securitycenter模块—安全中心（背景图）。**

**（14）.com.android.touchassistant模块—悬浮球（自定义悬浮球样式、颜色）。**

**（15）.com.tencent.mobileqq模块—默认QQ主题（修改QQ默认主题样式）。**

**（16）.** **description.xml****模块—主题信息（设计师名字、主题名字、主题介绍）。**

**（17）. framework-miui-res模块—全局背景（设置背景，短信背景、音量图、搜索栏背景图等）。**

**（18）.icons模块—图标**

**（19）.** **Lockscreen****模块—锁屏样式**

## [](#3-所需工具： "3.所需工具：")**3.所需工具：**

**（1）.打开MTZ主题包工具：WINR压缩或者360压缩（选择MTZ文件右键选择压缩打开，里面的模块则用****ctrl+enter****组合键打开）。注：我用的360压缩！！！**

**（2）.XML代码修改工具：****notepad++****（百度搜索下载）。**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815134259.jpg)

**（3）.图片编辑器：PS或者其他（光影魔术手）。**

**（4）.点九图软件：****Nine-PatchEditor

**小技巧：****手机应用你需要修改的主题，电脑或手机打开主题文件对应着看！**

# [](#二．模块详细修改介绍 "二．模块详细修改介绍")二．模块详细修改介绍

（想替换的素材直接复制粘贴进主题包对应位置替换即可！名称或图片格式或大小相同即可。）

**（1）. boots文件夹—开机动画，如图：（都是用很多张图片组成开机动画）**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815134259.jpg)

**附上网上开机动画制作教程（教程仅供参考）：[http://www.miui.com/thread-571473-1-1.html](http://www.miui.com/thread-571473-1-1.html)**

[**http://www.xiaomi.cn/content-20-6690-1.html**](http://www.xiaomi.cn/content-20-6690-1.html)

（2）. fonts文件夹—字体（打开后字体为ttf格式）

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815134259.jpg)

**（3）. preview文件夹—该主题的截图（格式：png）介绍，如图：**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815134259.jpg)

**注：这只是随意的主题介绍图，主题商店的主题介绍图，名称都是对应的，区别请自己下载主题商店的主题拆包研究！**

**（4）. wallpaper文件夹—锁屏壁纸和桌面壁纸（格式：jpg）**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135028.jpg)

**（5）. clock_2*4模块—桌面时间样式（一般没什么可以改的，有好看的时钟样式，直接替换就行）**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135034.jpg)

**（6）. com.android.contacts模块—拨号键盘样式**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135039.jpg)

**注：拨号键盘背景图名称：dialer_background.9.png/** **dialer_bottom_bar_bg.9.png**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135044.jpg)

**（7）.com.android.mms模块—短信界面（气泡、字体颜色等）**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135047.jpg)

**（8）.com.android.settings模块—设置（自定义设置名字、设置内容图标等）**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135050.jpg)

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135054.jpg)

**（9）. com.android.systemui模块—状态栏（背景、开关图标、自定义电池后文字、纵横排开关个数，自定义信号、WIFI、电池、蓝牙、静音、闹钟等图标）**

**信号，WiFi，电池等通知图标所在文件夹：**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135057.jpg)

**状态栏全背景图名字：notification_panel_bg.png**

**状态栏半背景图名字：notification_list_bg.9.png**

**清理背景图名字：recent_task_bg.9.png**

**注：需要修改的内容直接复制粘贴进去替换就行！**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135101.jpg)

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135104.jpg)

**（10）.com.android.thememanger模块—主题中心（自定义主题商店的名字、背景、修改导入本地主题按钮名称等）**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135111.jpg)

**背景图名字：theme_window_background.9.png**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135116.jpg)

**（11）.com.android.updater模块—系统升级（系统更新背景图、自定义更新按钮名字等）。**

**![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135144.jpeg)**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135146.jpg)

**（12）.com.miui.home模块—桌面布局（修改图标布局、图标大小等）**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135152.jpg)

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135155.jpg)

**![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135159.jpg)**

**（13）.com.android.securitycenter模块—安全中心（背景图）。**

**![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135212.jpg)**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135215.jpg)

**（14）.com.android.touchassistant模块—悬浮球（自定义悬浮球样式、颜色）。**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135219.jpg)

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135222.jpg)

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135225.jpg)

**附上颜色代码查询表：**[**http://yusi123.com/1090.html**](http://yusi123.com/1090.html)

**（16）.** **description.xml****模块—主题信息（设计师名字、主题名字、主题介绍）。**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135230.jpg)

**（17）. framework-miui-res模块—全局背景（设置背景，短信背景、音量图、搜索栏背景图等）。**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135233.jpg)

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135235.jpg)

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135238.jpg)

**（18）.icons模块—图标**

![img](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200815135242.jpg)

**（19）.** **Lockscreen****模块—锁屏样式**

**注：这个没什么好说的，好看的锁屏直接替换！！！**

​               

来自：

小米主题框架交流群：【Ⅰ群：534025609、Ⅱ群：107086533】

  **—Mr.****阿傑！**