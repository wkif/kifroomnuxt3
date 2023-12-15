---
title: '个人博客搭建（3）:Typora+PicGo+Github/Gitee搭建免费稳定的图床'
author: kif
tags:
  - hexo
categories:
  - 教程
abbrlink: 8bd5
date: 2020-07-21 00:00:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/20201202142824.jpg
coverWidth: 1200
coverHeight: 750
---
# [](#PicGo "PicGo")PicGo

一个用于快速上传图片并获取图片URL链接的工具

![picgo](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721122645.png)

## [](#PicGo官网：PicGo "PicGo官网：PicGo")PicGo官网：[PicGo](https://picgo.github.io/PicGo-Doc/zh/)

## [](#下载：仓库地址 "下载：仓库地址")下载：[仓库地址](https://github.com/Molunerfinn/PicGo)

按照官方安装方法安装

注：在安装的时候安装目录千万不能选`C:\Program Files\`下的任何地方，因为PicGo无法解析这一路径，如果你不知道安装在哪里的话，选择`仅为我安装`，否则在[设置Typora](https://www.cnblogs.com/focksor/p/12402471.html#设置Typora)时会出现错误：

# [](#Github仓库图床 "Github仓库图床")Github仓库图床

## [](#新建Public-Github仓库 "新建Public Github仓库")新建Public Github仓库

创建Repository
点击”New repository”按钮，仓库名字随意

### [](#新生成一个Personal-access-tokens "新生成一个Personal access tokens")新生成一个Personal access tokens

生成一个Token用于操作GitHub repository
`Settings --&gt; Developer Settings --&gt; Personal access tokens`

![setting](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721123236.png)

![Developer Settings](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721123320.png)

![Personal access tokens`]([https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721123456.png](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721123456.png))

生成Token

![token](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721124302.png)

会生成如上图的一串token，这串token之后不会再显示，所以第一次看到的时候，可以建个文本文件保存，忘记了只有重新生成，每次都不一样。

# [](#PicGo配置 "PicGo配置")PicGo配置

## [](#配置Github图床 "配置Github图床")配置Github图床

### [](#填写说明 "填写说明")_填写说明_

![picgo](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721133202.png)

仓库名：按照“账户名/仓库名的格式填写”，比如我的是wkif/ImageHosting

分支名：填写master
TOKEN：Token粘贴在这里
路径：可留空，如需自己填写记得末尾加上/
设定自定义域名：自定义域名的作用是在上传图片后成功后，PicGo会将“自定义域名+上传的图片名”生成的访问链接，放到剪切板上，这里我用到了jsdeliver  的免费CDN加速，自定义域名需要按照这样去填写：[https://cdn.jsdelivr.net/账户名/仓库名/master，比如我的是：https://cdn.jsdelivr.net/gh/wkif/ImageHosting](https://cdn.jsdelivr.net/账户名/仓库名/master，比如我的是：https://cdn.jsdelivr.net/gh/wkif/ImageHosting)

# [](#Typora配置PicGo "Typora配置PicGo")Typora配置PicGo

## [](#下载Typora "下载Typora")下载Typora

[下载地址](https://www.typora.io/)

## [](#配置 "配置")配置

![typora](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721133821.png)

验证设置是否正确

![验证](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721133924.png)

## [](#错误解决 "错误解决")错误解决

错误1：

`failed to launch PicGo app: Command failed: C:\Program Files\PicGo\PicGo.exe 'C:\Program' �����ڲ����ⲿ���Ҳ���ǿ����еĳ��� ���������ļ���`

前面提到的安装的问题，不要放在c盘下

错误2：

`

Failed to fetch

`

way:

![1](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721134318.png)

![2](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/kif_img/20200721135358.png)

# [](#gitee的后续在写吧！ "gitee的后续在写吧！")gitee的后续在写吧！