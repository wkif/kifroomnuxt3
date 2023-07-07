---
title: 个人博客搭建（1）：Hexo搭建个人博客部署到Github 
author: kif
tags:
  - hexo
categories:
  - 教程
abbrlink: a167
date: 2020-08-14 00:00:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/20201202142824.jpg
coverWidth: 1200
coverHeight: 750
---

本文介绍Hexo搭建个人博客部署到Github

 Hexo 是一个轻量、快速，简单和强大的博客框架，当我们需要发布博文的时候，只需要将写好的文章（MarkDown文件）放入本地的 `\source\_posts` 文件夹，然后再推送上去就行了，原理就是当我们在执行 `hexo g` 命令时，`.md` 文件就会被转化成 HTML 文件，

<a id="more"></a>

## [](#安装Hexo "安装Hexo")安装Hexo

### [](#利用-npm-命令即可安装。在任意位置点击鼠标右键，选择Git-Bash "利用 npm 命令即可安装。在任意位置点击鼠标右键，选择Git Bash")利用 npm 命令即可安装。在任意位置点击鼠标右键，选择Git Bash

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/hexo/2.png)

### [](#输入命令： "输入命令：")输入命令：
<pre>`npm install -g hexo

`</pre>

-g是指全局安装hexo。

#### [](#注： "注：")注：

如果被”墙“，可使用[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM?from=tnpm)

<pre>`
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

`</pre>

使用淘宝NPM安装Hexo

<pre>`
$ cnpm install -g hexo-cli

`</pre>

与原先的npm完全一样，只是命令改为cnpm,一样等待hexo安装完成
出现的WARN可以不用理会
继续输入以下命令

<pre>`
$ cnpm install hexo --save

`</pre>

### [](#检验 "检验")检验
<pre>`
$ hexo -v

`</pre>

## [](#初始化Hexo "初始化Hexo")初始化Hexo

### [](#创建文件夹 "创建文件夹")创建文件夹

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/hexo/3.png)

### [](#在Hexo文件下，右键运行Git-Bash，输入命令： "在Hexo文件下，右键运行Git Bash，输入命令：")在Hexo文件下，右键运行Git Bash，输入命令：
<pre>`
hexo init
`</pre>

![转自：致Great https://www.jianshu.com/p/189fd945f38f](https://upload-images.jianshu.io/upload_images/1531909-f6ae9b7089741c89.png)

![转自：致Great https://www.jianshu.com/p/189fd945f38f ](https://upload-images.jianshu.io/upload_images/1531909-d0452912537c03e8.png)

### [](#在-config-yml-进行基础配置 "在_config.yml,进行基础配置")在_config.yml,进行基础配置

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/hexo/4.png)
    这里只列举了部分，其他可以根据自己要求更改

### [](#主题 "主题")主题

[主题下载](https://hexo.io/themes/)

可以选择更多主题，然后在Hexo文件夹下 Git Bash

<pre>`
git clone https://github.com/iissnan/hexo-theme-nextthemes/next

（next为主题名字），来获得更多主题

`</pre>

并在_config.yml中更改

![1](https://upload-images.jianshu.io/upload_images/1531909-9e10141923fcdf7a.png)

### [](#本地浏览博客 "本地浏览博客")本地浏览博客

  分别输入 如下命令：

<pre>`
hexo g
 hexo s

`</pre>

[更多命令](https://segmentfault.com/a/1190000002632530)

![图源同上](https://upload-images.jianshu.io/upload_images/1531909-0501276ece21c570.png)

在浏览器输入：localhost：4000 ，就可以进行访问

### [](#写文章 "写文章")写文章

在我们放置博客文件的文件夹Hexo中，source/_posts/
目录下存放着所有博文的Markdown文件，初始化只有一个hello-world.md文件。
我们可以在Git Bash中创建新博文：

<pre>`
hexo new &lt;title&gt;

`</pre>

在_posts目录下会生成相应的.md文件，接下来我们可以编辑该文件，直接写博文。（注意使用Markdown语法）

文章中头部内容

<pre class="line-numbers language----">`
title: typora-vue-theme主题介绍
date: 2018-09-07 09:25:00
author: kif
img: /source/images/xxx.jpg
top: true
cover: true
coverImg: /images/1.jpg
password: 8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92
toc: false
mathjax: false
summary: 这是你自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
categories: Markdown
tags:
  - Typora
  - Markdown
---

itle    Markdown 的文件标题    文章标题，强烈建议填写此选项
date    文件创建时的日期时间    发布时间，强烈建议填写此选项，且最好保证全局唯一
author    根 _config.yml 中的 author    文章作者
img    featureImages 中的某个值    文章特征图，推荐使用图床(腾讯云、七牛云、又拍云等)来做图片的路径.如: http://xxx.com/xxx.jpg
top    true    推荐文章（文章是否置顶），如果 top 值为 true，则会作为首页推荐文章
cover    false    v1.0.2版本新增，表示该文章是否需要加入到首页轮播封面中
coverImg    无    v1.0.2版本新增，表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片
password    无    文章阅读密码，如果要对文章设置阅读验证密码的话，就可以设置 password 的值，该值必须是用 SHA256 加密后的密码，防止被他人识破。前提是在主题的 config.yml 中激活了 verifyPassword 选项
toc    true    是否开启 TOC，可以针对某篇文章单独关闭 TOC 的功能。前提是在主题的 config.yml 中激活了 toc 选项
mathjax    false    是否开启数学公式支持 ，本文章是否开启 mathjax，且需要在主题的 _config.yml 文件中也需要开启才行
summary    无    文章摘要，自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
categories    无    文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类
tags    无    文章标签，一篇文章可以多个标签
keywords    文章标题    文章关键字，SEO 时需要
reprintPolicy    cc_by    文章转载规则， 可以是 cc_by, cc_by_nd, cc_by_sa, cc_by_nc, cc_by_nc_nd, cc_by_nc_sa, cc0, noreprint 或 pay 中的一个



写完博文后，执行即可在博客中更新。

hexo g
hexo d

如果要删除博文，则直接把_posts目录下相应的.md文件删除，再执行上述命令即可。
PS：关于在博文中插入图片
可以把图片统一放置在source/images目录下，然后在使用时用下述方式引用。


![](/images/image.jpg)

`</pre>

### [](#部署到Github上 "部署到Github上")部署到Github上

#### [](#申请Github账号 "申请Github账号")申请Github账号

#### [](#new-repository "new repository")new repository

![1](https://upload-images.jianshu.io/upload_images/1531909-8decffce7d3866b3.png)

然后点击  Create repository

#### [](#在-config-yml进行配置 "在_config.yml进行配置")在_config.yml进行配置

![1](https://cdn.jsdelivr.net/gh/wkif/CDN/img/hexo/5.png)

##### [](#仓库地址 "仓库地址")仓库地址

![2](https://cdn.jsdelivr.net/gh/wkif/CDN/img/hexo/6.png)

#### [](#安装hexo-deployer-git自动部署发布工具 "安装hexo-deployer-git自动部署发布工具")安装hexo-deployer-git自动部署发布工具
<pre>`
npm install hexo-deployer-git  --save
`</pre>

#### [](#发布到Github "发布到Github")发布到Github
<pre>`hexo c
hexo g
hexo d