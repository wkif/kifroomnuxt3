---
title: 个人博客搭建（4）：matery 主题调教（持续更新...）
author: kif
tags:
  - hexo
  - matery
categories:
  - 教程
abbrlink: f390
date: 2020-08-14 00:00:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/20201202142824.jpg
coverWidth: 1200
coverHeight: 750
---
# [](#介绍： "介绍：")介绍：

项目地址：[hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)

是一个采用 `Material Design` 和响应式设计的 Hexo 博客主题。

主页：

![主页](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/20200814185900.png)

![2](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814190043.png)

# [](#下载： "下载：")下载：

当你看到这里的时候，应该已经有一个自己的 [Hexo](https://hexo.io/zh-cn/) 博客了。如果还没有的话，不妨使用 Hexo 和 [Markdown](https://www.appinn.com/markdown/) 来写博客和文章。

点击 [这里](https://codeload.github.com/blinkfox/hexo-theme-matery/zip/master) 下载 `master` 分支的最新稳定版的代码，解压缩后，将 `hexo-theme-matery` 的文件夹复制到你 Hexo 的 `themes` 文件夹中即可。

当然你也可以在你的 `themes` 文件夹下使用 `Git clone` 命令来下载:

    git clone https://github.com/blinkfox/hexo-theme-matery.git`</pre>

    会得到如下文件

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814190654.png)

    # [](#配置 "配置")配置

    ## [](#切换 "切换")切换

    修改 Hexo **根目录下的 `_config.yml`** （注意区分更目录下的config和主题文件下的config）的 `theme` 的值：`theme: hexo-theme-matery`

    （如果你重命名下载的文件的话就改为重命名后的名字，此教程已重命名为matery）

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814190510.png)

    ## [](#新建分类-categories-页 "新建分类 categories 页")新建分类 categories 页

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210041.png)

    categories即主页顶部”分类：点击所要跳转的页面

    `categories` 页是用来展示所有分类的页面，如果在你的博客 `source` 目录下还没有 `categories/index.md` 文件，那么你就需要新建一个，命令如下：

    <pre>`hexo new page "categories"`</pre>

    编辑你刚刚新建的页面文件 `/source/categories/index.md`，写入以下内容：

    <pre>`---
    title: categories
    date: 2018-09-30 17:25:30
    type: "categories"
    layout: "categories"
    ---`</pre>

    ## [](#新建标签-tags-页 "新建标签 tags 页")新建标签 tags 页

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210005.png)

    `about` 页是用来展示**关于我和我的博客**信息的页面，如果在你的博客 `source` 目录下还没有 `about/index.md` 文件，那么你就需要新建一个，命令如下：

    <pre>`hexo new page "about"`</pre>

    编辑你刚刚新建的页面文件 `/source/about/index.md`，至少需要以下内容：

    <pre>`---
    title: about
    date: 2018-09-30 17:25:30
    type: "about"
    layout: "about"
    ---`</pre>

    ## [](#新建留言板-contact-页 "新建留言板 contact 页")新建留言板 contact 页

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814205915.png)

    `contact` 页是用来展示**留言板**信息的页面，如果在你的博客 `source` 目录下还没有 `contact/index.md` 文件，那么你就需要新建一个，命令如下：

    <pre>`hexo new page "contact"`</pre>

    编辑你刚刚新建的页面文件 `/source/contact/index.md`，至少需要以下内容：

    <pre>`---
    title: contact
    date: 2018-09-30 17:25:30
    type: "contact"
    layout: "contact"
    ---`</pre>

    ## [](#新建友情链接-friends-页 "新建友情链接 friends 页")新建友情链接 friends 页

    `friends` 页是用来展示**友情链接**信息的页面，如果在你的博客 `source` 目录下还没有 `friends/index.md` 文件，那么你就需要新建一个，命令如下：

    <pre>`hexo new page "friends"`</pre>

    编辑你刚刚新建的页面文件 `/source/friends/index.md`，至少需要以下内容：

    <pre>`---
    title: friends
    date: 2018-12-12 21:25:30
    type: "friends"
    layout: "friends"
    ---`</pre>

    同时，在你的博客 `source` 目录下新建 `_data` 目录，在 `_data` 目录中新建 `friends.json` 文件，

    ![image-20200814202349576](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814202349.png)

    文件内容如下所示：

    <pre>`[{
        "avatar": "https://s1.ax1x.com/2020/06/23/NUr8pQ.jpg",
        "name": "kif",
        "introduction": "就是本人啦！",
        "url": "https://kifroom.icu/",
        "title": "前去学习"
    }, {
        "avatar": "头像地址",
        "name": "名字",
        "introduction": "介绍",
        "url": "网址",
        "title": "前去学习"
    }]`</pre>

    后期添加就在这儿添加就可以了

    ### [](#友链信息声明： "友链信息声明：")友链信息声明：

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814212249.png)

    `/source/friends/index.md`文件内填写即可

    ## [](#新建-404-页 "新建 404 页")新建 404 页

    如果在你的博客 `source` 目录下还没有 `404.md` 文件，那么你就需要新建一个

    编辑你刚刚新建的页面文件 `/source/404.md`，至少需要以下内容：

    <pre>`---
    title: 404
    date: 2018-09-30 17:25:30
    type: "404"
    layout: "404"
    description: "Oops～，我崩溃了！找不到你想要的页面 :("
    ---`</pre>

    这是默认的404，之后会介绍加入不受主题渲染的网页，届时可以自己写喜欢的404网页

    效果：

    ![](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/20200814205755.png)

    ## [](#菜单导航配置 "菜单导航配置")菜单导航配置

    ### [](#配置基本菜单导航的名称、路径url和图标icon "配置基本菜单导航的名称、路径url和图标icon.")配置基本菜单导航的名称、路径url和图标icon.

    1.菜单导航名称可以是中文也可以是英文(如：`Index`或`主页`) 

    2.图标icon 可以在[Font Awesome](https://fontawesome.com/icons) 中查找

    <pre>`menu:
      Index:
        url: /
        icon: fas fa-home
      Tags:
        url: /tags
        icon: fas fa-tags
      Categories:
        url: /categories
        icon: fas fa-bookmark
      Archives:
        url: /archives
        icon: fas fa-archive
      About:
        url: /about
        icon: fas fa-user-circle
      Friends:
        url: /friends
        icon: fas fa-address-book`</pre>

    ### [](#二级菜单配置方法 "二级菜单配置方法")二级菜单配置方法

    如果你需要二级菜单则可以在原基本菜单导航的基础上如下操作
    1.在需要添加二级菜单的一级菜单下添加`children`关键字(如:`About`菜单下添加`children`)
    2.在`children`下创建二级菜单的 名称name,路径url和图标icon.
    3.注意每个二级菜单模块前要加 `-`.
    4.注意缩进格式

    <pre>`menu:
      Index:
        url: /
        icon: fas fa-home
      Tags:
        url: /tags
        icon: fas fa-tags
      Categories:
        url: /categories
        icon: fas fa-bookmark
      Archives:
        url: /archives
        icon: fas fa-archive
      About:
        url: /about
        icon: fas fa-user-circle-o
      Friends:
        url: /friends
        icon: fas fa-address-book
      Medias:
        icon: fas fa-list
        children:
          - name: Musics
            url: /musics
            icon: fas fa-music
          - name: Movies
            url: /movies
            icon: fas fa-film
          - name: Books
            url: /books
            icon: fas fa-book
          - name: Galleries
            url: /galleries
            icon: fas fa-image`</pre>

    执行 `hexo clean &amp;&amp; hexo g` 重新生成博客文件，然后就可以在文章中对应位置看到你用`emoji`语法写的表情了。

    ## [](#配置gitalk评论 "配置gitalk评论")配置gitalk评论

    效果：

    ![](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/20200814205633.png)

    教程：[个人博客搭建（2）:配置gitalk评论](https://kifroom.icu/posts/4.html)

    ## [](#代码高亮 "代码高亮")代码高亮

    由于 Hexo 自带的代码高亮主题显示不好看，所以主题中使用到了 [hexo-prism-plugin](https://github.com/ele828/hexo-prism-plugin) 的 Hexo 插件来做代码高亮，安装命令如下：

    <pre>`npm i -S hexo-prism-plugin`</pre>

    然后，修改 Hexo 根目录下 `_config.yml` 文件中 `highlight.enable` 的值为 `false`，并新增 `prism` 插件相关的配置，主要配置如下：

    <pre>`highlight:
      enable: false

    prism_plugin:
      mode: 'preprocess'    # realtime/preprocess
      theme: 'tomorrow'
      line_number: false    # default false
      custom_css:`</pre>

    ## [](#搜索 "搜索")搜索

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210129.png)

    本主题中还使用到了 [hexo-generator-search](https://github.com/wzpan/hexo-generator-search) 的 Hexo 插件来做内容搜索，安装命令如下：

    <pre>`npm install hexo-generator-search --save`</pre>

    在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

    <pre>`search:
      path: search.xml
      field: post`</pre>

    ## [](#中文链接转拼音（建议安装） "中文链接转拼音（建议安装）")中文链接转拼音（建议安装）

    如果你的文章名称是中文的，那么 Hexo 默认生成的永久链接也会有中文，这样不利于 `SEO`，且 `gitment` 评论对中文链接也不支持。我们可以用 [hexo-permalink-pinyin](https://github.com/viko16/hexo-permalink-pinyin) Hexo 插件使在生成文章时生成中文拼音的永久链接。

    安装命令如下：

    <pre>`npm i hexo-permalink-pinyin --save`</pre>

    在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

    <pre>`permalink_pinyin:
      enable: true
      separator: '-' # default: '-'`</pre>> **注**：除了此插件外，[hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink) 插件也可以生成非中文的链接。

    ## [](#文章字数统计插件（建议安装） "文章字数统计插件（建议安装）")文章字数统计插件（建议安装）

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210200.png)

    如果你想要在文章中显示文章字数、阅读时长信息，可以安装 [hexo-wordcount](https://github.com/willin/hexo-wordcount)插件。

    安装命令如下：

    <pre>`npm i --save hexo-wordcount`</pre>

    然后只需在本主题下的 `_config.yml` 文件中，将各个文章字数相关的配置激活即可：

    <pre>`postInfo:
      date: true
      update: false
      wordCount: false # 设置文章字数统计为 true.
      totalCount: false # 设置站点文章总字数统计为 true.
      min2read: false # 阅读时长.
      readCount: false # 阅读次数.`</pre>

    ## [](#添加emoji表情支持（可选的） "添加emoji表情支持（可选的）")添加emoji表情支持（可选的）

    本主题新增了对`emoji`表情的支持，使用到了 [hexo-filter-github-emojis](https://npm.taobao.org/package/hexo-filter-github-emojis) 的 Hexo 插件来支持 `emoji`表情的生成，把对应的`markdown emoji`语法（`::`,例如：`:smile:`）转变成会跳跃的`emoji`表情，安装命令如下：

    <pre>`npm install hexo-filter-github-emojis --save`</pre>

    在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

    <pre>`githubEmojis:
      enable: true
      className: github-emoji
      inject: true
      styles:
      customEmojis:`</pre>

    ## [](#添加-RSS-订阅支持（可选的） "添加 RSS 订阅支持（可选的）")添加 RSS 订阅支持（可选的）

    本主题中还使用到了 [hexo-generator-feed](https://github.com/hexojs/hexo-generator-feed) 的 Hexo 插件来做 `RSS`，安装命令如下：

    <pre>`npm install hexo-generator-feed --save`</pre>

    在 Hexo 根目录下的 `_config.yml` 文件中，新增以下的配置项：

    <pre>`feed:
      type: atom
      path: atom.xml
      limit: 20
      hub:
      content:
      content_limit: 140
      content_limit_delim: ' '
      order_by: -date`</pre>

    执行 `hexo clean &amp;&amp; hexo g` 重新生成博客文件，然后在 `public` 文件夹中即可看到 `atom.xml` 文件，说明你已经安装成功了。

    ## [](#添加-DaoVoice-在线聊天功能（可选的） "添加 DaoVoice 在线聊天功能（可选的）")添加 [DaoVoice](http://www.daovoice.io/) 在线聊天功能（可选的）

    前往 [DaoVoice](http://www.daovoice.io/) 官网注册并且获取 `app_id`，并将 `app_id` 填入主题的 `_config.yml` 文件中。

    ## [](#添加-Tidio-在线聊天功能（可选的） "添加 Tidio 在线聊天功能（可选的）")添加 [Tidio](https://www.tidio.com/) 在线聊天功能（可选的）

    前往 [Tidio](https://www.tidio.com/) 官网注册并且获取 `Public Key`，并将 `Public Key` 填入主题的 `_config.yml` 文件中。

    ## [](#修改页脚 "修改页脚")修改页脚

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210231.png)

    页脚信息可能需要做定制化修改，而且它不便于做成配置信息，所以可能需要你自己去再修改和加工。修改的地方在主题文件的 `/layout/_partial/footer.ejs` 文件中，包括站点、使用的主题、访问量等。

    ## [](#修改社交链接 "修改社交链接")修改社交链接

    在主题的 `_config.yml` 文件中，默认支持 `QQ`、`GitHub` 和邮箱等的配置，你可以在主题文件的 `/layout/_partial/social-link.ejs` 文件中，新增、修改你需要的社交链接地址，增加链接可参考如下代码：

    <pre>`&lt;% if (theme.socialLink.github) { %&gt;
        &lt;a href="&lt;%= theme.socialLink.github %&gt;" class="tooltipped" target="_blank" data-tooltip="访问我的GitHub" data-position="top" data-delay="50"&gt;
            &lt;i class="fab fa-github"&gt;&lt;/i&gt;
        &lt;/a&gt;
    &lt;% } %&gt;`</pre>

    其中，社交图标（如：`fa-github`）你可以在 [Font Awesome](https://fontawesome.com/icons) 中搜索找到。以下是常用社交图标的标识，供你参考：

*   Facebook: `fab fa-facebook`
*   Twitter: `fab fa-twitter`
*   Google-plus: `fab fa-google-plus`
*   Linkedin: `fab fa-linkedin`
*   Tumblr: `fab fa-tumblr`
*   Medium: `fab fa-medium`
*   Slack: `fab fa-slack`
*   Sina Weibo: `fab fa-weibo`
*   Wechat: `fab fa-weixin`
*   QQ: `fab fa-qq`
*   Zhihu: `fab fa-zhihu`
    > **注意**: 本主题中使用的 `Font Awesome` 版本为 `5.11.0`。

    ## [](#修改打赏的二维码图片 "修改打赏的二维码图片")修改打赏的二维码图片

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210345.png)

    在主题文件的 `source/medias/reward` 文件中，你可以替换成你的的微信和支付宝的打赏二维码图片。

    ## [](#配置音乐播放器（可选的） "配置音乐播放器（可选的）")配置音乐播放器（可选的）

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210411.png)

    要支持音乐播放，在主题的 `_config.yml` 配置文件中激活music配置即可：

    <pre>`# 是否在首页显示音乐
    music:
      enable: true
      title:             # 非吸底模式有效
        enable: true
        show: 听听音乐
      server: netease   # require music platform: netease, tencent, kugou, xiami, baidu
      type: playlist    # require song, playlist, album, search, artist
      id: 503838841     # require song id / playlist id / album id / search keyword
      fixed: false      # 开启吸底模式
      autoplay: false   # 是否自动播放
      theme: '#42b983'
      loop: 'all'       # 音频循环播放, 可选值: 'all', 'one', 'none'
      order: 'random'   # 音频循环顺序, 可选值: 'list', 'random'
      preload: 'auto'   # 预加载，可选值: 'none', 'metadata', 'auto'
      volume: 0.7       # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
      listFolded: true  # 列表默认折叠`</pre>> `server`可选`netease`（网易云音乐），`tencent`（QQ音乐），`kugou`（酷狗音乐），`xiami`（虾米音乐），
> 
>     `baidu`（百度音乐）。
> 
>     `type`可选`song`（歌曲），`playlist`（歌单），`album`（专辑），`search`（搜索关键字），`artist`（歌手）
> 
>     <pre>`id`获取方法示例: 浏览器打开网易云音乐，点击我喜欢的音乐歌单，浏览器地址栏后面会有一串数字，`playlist`的`id`</pre>
> 
>     即为这串数字。

    ## [](#文章-Front-matter-介绍 "文章 Front-matter 介绍")文章 Front-matter 介绍

    ### [](#Front-matter-选项详解 "Front-matter 选项详解")Front-matter 选项详解

    `Front-matter` 选项中的所有内容均为**非必填**的。但我仍然建议至少填写 `title` 和 `date` 的值。

    <table>
    <thead>
    <tr>
    <th>配置选项</th>
    <th>默认值</th>
    <th>描述</th>
    </tr>
    </thead>
    <tbody><tr>
    <td>title</td>
    <td>`Markdown` 的文件标题</td>
    <td>文章标题，强烈建议填写此选项</td>
    </tr>
    <tr>
    <td>date</td>
    <td>文件创建时的日期时间</td>
    <td>发布时间，强烈建议填写此选项，且最好保证全局唯一</td>
    </tr>
    <tr>
    <td>author</td>
    <td>根 `_config.yml` 中的 `author`</td>
    <td>文章作者</td>
    </tr>
    <tr>
    <td>img</td>
    <td>`featureImages` 中的某个值</td>
    <td>文章特征图，推荐使用图床(腾讯云、七牛云、又拍云等)来做图片的路径.如: `http://xxx.com/xxx.jpg`</td>
    </tr>
    <tr>
    <td>top</td>
    <td>`true`</td>
    <td>推荐文章（文章是否置顶），如果 `top` 值为 `true`，则会作为首页推荐文章</td>
    </tr>
    <tr>
    <td>cover</td>
    <td>`false`</td>
    <td>`v1.0.2`版本新增，表示该文章是否需要加入到首页轮播封面中</td>
    </tr>
    <tr>
    <td>coverImg</td>
    <td>无</td>
    <td>`v1.0.2`版本新增，表示该文章在首页轮播封面需要显示的图片路径，如果没有，则默认使用文章的特色图片</td>
    </tr>
    <tr>
    <td>password</td>
    <td>无</td>
    <td>文章阅读密码，如果要对文章设置阅读验证密码的话，就可以设置 `password` 的值，该值必须是用 `SHA256` 加密后的密码，防止被他人识破。前提是在主题的 `config.yml` 中激活了 `verifyPassword` 选项</td>
    </tr>
    <tr>
    <td>toc</td>
    <td>`true`</td>
    <td>是否开启 TOC，可以针对某篇文章单独关闭 TOC 的功能。前提是在主题的 `config.yml` 中激活了 `toc` 选项</td>
    </tr>
    <tr>
    <td>mathjax</td>
    <td>`false`</td>
    <td>是否开启数学公式支持 ，本文章是否开启 `mathjax`，且需要在主题的 `_config.yml` 文件中也需要开启才行</td>
    </tr>
    <tr>
    <td>summary</td>
    <td>无</td>
    <td>文章摘要，自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要</td>
    </tr>
    <tr>
    <td>categories</td>
    <td>无</td>
    <td>文章分类，本主题的分类表示宏观上大的分类，只建议一篇文章一个分类</td>
    </tr>
    <tr>
    <td>tags</td>
    <td>无</td>
    <td>文章标签，一篇文章可以多个标签</td>
    </tr>
    <tr>
    <td>keywords</td>
    <td>文章标题</td>
    <td>文章关键字，SEO 时需要</td>
    </tr>
    <tr>
    <td>reprintPolicy</td>
    <td>cc_by</td>
    <td>文章转载规则， 可以是 cc_by, cc_by_nd, cc_by_sa, cc_by_nc, cc_by_nc_nd, cc_by_nc_sa, cc0, noreprint 或 pay 中的一个</td>
    </tr>
    </tbody></table>
    > **注意**:
> 
> 1.  如果 `img` 属性不填写的话，文章特色图会根据文章标题的 `hashcode` 的值取余，然后选取主题中对应的特色图片，从而达到让所有文章都的特色图**各有特色**。
> 2.  `date` 的值尽量保证每篇文章是唯一的，因为本主题中 `Gitalk` 和 `Gitment` 识别 `id` 是通过 `date` 的值来作为唯一标识的。
> 3.  如果要对文章设置阅读验证密码的功能，不仅要在 Front-matter 中设置采用了 SHA256 加密的 password 的值，还需要在主题的 `_config.yml` 中激活了配置。有些在线的 SHA256 加密的地址，可供你使用：[开源中国在线工具](http://tool.oschina.net/encrypt?type=2)、[chahuo](http://encode.chahuo.com/)、[站长工具](http://tool.chinaz.com/tools/hash.aspx)。
> 4.  您可以在文章md文件的 front-matter 中指定 reprintPolicy 来给单个文章配置转载规则

    以下为文章的 `Front-matter` 示例。

    ### [](#最简示例 "最简示例")最简示例
    <pre>`---
    title: typora-vue-theme主题介绍
    date: 2018-09-07 09:25:00
    ---`</pre>

    ### [](#最全示例 "最全示例")最全示例
    <pre>`---
    title: typora-vue-theme主题介绍
    date: 2020-09-07 09:25:00
    author: kif
    img: /source/images/xxx.jpg
    top: true
    cover: true
    coverImg: /images/1.jpg
    password: 123456
    toc: false
    mathjax: false
    summary: 这是你自定义的文章摘要内容，如果这个属性有值，文章卡片摘要就显示这段文字，否则程序会自动截取文章的部分内容作为摘要
    categories: Markdown
    tags:
      - Typora
      - Markdown
    ---`</pre>

    ## [](#页尾鱼塘效果美化 "页尾鱼塘效果美化")页尾鱼塘效果美化

    效果：

    ![1](https://cdn.jsdelivr.net/gh/wkif/ImageHosting/img/20200814204700.gif)

    教程：[个人博客搭建：网页页尾鱼塘效果美化](https://kifroom.icu/posts/63210.html)

    ## [](#修改导航栏颜色以及透明效果 "修改导航栏颜色以及透明效果")修改导航栏颜色以及透明效果

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210442.png)

    打开`themes/matery/source/css/matery.css`文件，大约在250行，有一个`.bg-color`属性，修改其属性值即可，代码如下：

    <pre class="line-numbers language-css">`<span class="token selector"><span class="token class">.bg-color</span> </span><span class="token punctuation">{</span>
        <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token function">linear-gradient</span><span class="token punctuation">(</span>to right, <span class="token hexcode">#4cbf30</span> <span class="token number">0%</span>, <span class="token hexcode">#0f9d58</span> <span class="token number">100%</span><span class="token punctuation">)</span><span class="token punctuation">;</span> //修改成自己喜欢的颜色值
        <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token number">0.8</span><span class="token punctuation">;</span>  //透明效果 值范围 <span class="token number">0</span>~<span class="token number">1</span>，看情况自己修改
    <span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span></span>`</pre>

    ## [](#鼠标点击文字特效 "鼠标点击文字特效")鼠标点击文字特效

    实现方法，引入js文件，在主题文件下的`/source/js/`下新建`click_show_text.js`，其代码如下：

    <pre class="line-numbers language-javascript">`<span class="token keyword">var</span> a_idx <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token function">jQuery</span><span class="token punctuation">(</span>document<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ready</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>$<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token string">"富强"</span><span class="token punctuation">,</span> <span class="token string">"民主"</span><span class="token punctuation">,</span> <span class="token string">"文明"</span><span class="token punctuation">,</span> <span class="token string">"和谐"</span><span class="token punctuation">,</span> <span class="token string">"自由"</span><span class="token punctuation">,</span> <span class="token string">"平等"</span><span class="token punctuation">,</span> <span class="token string">"公正"</span><span class="token punctuation">,</span> <span class="token string">"法治"</span><span class="token punctuation">,</span> <span class="token string">"爱国"</span><span class="token punctuation">,</span> <span class="token string">"敬业"</span><span class="token punctuation">,</span> <span class="token string">"诚信"</span><span class="token punctuation">,</span> <span class="token string">"友善"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">var</span> $i <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"&lt;span/>"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>a_idx<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            a_idx <span class="token operator">=</span> <span class="token punctuation">(</span>a_idx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token keyword">var</span> x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">,</span>
                y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
            $i<span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                <span class="token string">"z-index"</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
                <span class="token string">"top"</span><span class="token punctuation">:</span> y <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">,</span>
                <span class="token string">"left"</span><span class="token punctuation">:</span> x<span class="token punctuation">,</span>
                <span class="token string">"position"</span><span class="token punctuation">:</span> <span class="token string">"absolute"</span><span class="token punctuation">,</span>
                <span class="token string">"font-weight"</span><span class="token punctuation">:</span> <span class="token string">"bold"</span><span class="token punctuation">,</span>
                <span class="token string">"color"</span><span class="token punctuation">:</span> <span class="token string">"#FF0000"</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>$i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            $i<span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    <span class="token string">"top"</span><span class="token punctuation">:</span> y <span class="token operator">-</span> <span class="token number">180</span><span class="token punctuation">,</span>
                    <span class="token string">"opacity"</span><span class="token punctuation">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token number">3000</span><span class="token punctuation">,</span>
                <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    $i<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token string">'delay()'</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">function</span> <span class="token function">delay</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">".buryit"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeAttr</span><span class="token punctuation">(</span><span class="token string">"onclick"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>`</pre>

    ## [](#添加天气小插件 "添加天气小插件")添加天气小插件

    首先去中国天气官网：[[https://cj.weather.com.cn/plugin/pc，](https://cj.weather.com.cn/plugin/pc，)

    [配置自己的插件，选择自定义插件—&gt;自定义样式——&gt;生成代码，然后会生成一段代码，复制粘贴到`themes/matery/layout/layout.ejs`即可。

    ## [](#关于我页面添加个人简历 "关于我页面添加个人简历")关于我页面添加个人简历

    打开`theme/matery/layout/about.ejs`文件，大约在13行。有一个``标签，找出其对应结尾的标签，大约在61行左右，然后在新增如下代码：

    <pre class="line-numbers language-html">`<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>card<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>card-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
             <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>card-content article-card-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>title center-align<span class="token punctuation">"</span></span> <span class="token attr-name">data-aos</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zoom-in-up<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fa fa-address-book<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">></span></span><span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token entity" title="&nbsp;">&amp;nbsp;</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>%-</span> <span class="token attr-name">__('个人简历')</span> <span class="token attr-name">%</span><span class="token punctuation">></span></span>
                  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>articleContent<span class="token punctuation">"</span></span> <span class="token attr-name">data-aos</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fade-up<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
                         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>%-</span> <span class="token attr-name">page.content</span> <span class="token attr-name">%</span><span class="token punctuation">></span></span>
                     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
               <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>`</pre>

    注意粘贴的位置和空格要正确，这里的位置随你自己设置，你也可以把简历作为第一个card，然后`/source/about/index.md`下面写上你的简历了（就像写博客一样）。

    ## [](#添加鼠标点击烟花爆炸效果 "添加鼠标点击烟花爆炸效果")添加鼠标点击烟花爆炸效果

    效果：

    ![2](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814210735.gif)

    首先在`themes/matery/source/js`目录下新建`fireworks.js`文件，打开这个网址[传送门](https://links.jianshu.com/go?to=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fbaifeng66%2Fcdn%401.1%2Fsource%2Fjs%2Ffireworks.js)，将内容复制粘贴到`fireworks.js`即可。

    然后再`themes/matery/layout/layout.ejs`文件内添加下面的内容：

    <pre class="line-numbers language-javascript">`<span class="token operator">&lt;</span>canvas <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"fireworks"</span> style<span class="token operator">=</span><span class="token string">"position: fixed;left: 0;top: 0;z-index: 1; pointer-events: none;"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>canvas<span class="token operator">></span> 
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span> src<span class="token operator">=</span><span class="token string">"//cdn.bootcss.com/animejs/2.2.0/anime.min.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
    <span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span> src<span class="token operator">=</span><span class="token string">"/js/fireworks.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span>`</pre>

    然后`hexo clean &amp;&amp; hexo g &amp;&amp; hexo s`即可，就可以看到效果了。

    ## [](#添加樱花飘落效果 "添加樱花飘落效果")添加樱花飘落效果

    在`themes/matery/source/js`目录下新建`sakura.js`文件，打开这个网址[传送门](https://links.jianshu.com/go?to=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fbaifeng66%2Fcdn%401.1%2Fsource%2Fjs%2Fsakura.js)，将内容复制粘贴到sakura.js即可。

    然后再`themes/matery/layout/layout.ejs`文件内添加下面的内容：

    <pre class="line-numbers language-javascript">`<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>
    <span class="token comment" spellcheck="true">//只在桌面版网页启用特效</span>
    <span class="token keyword">var</span> windowWidth <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span>window<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>windowWidth <span class="token operator">></span> <span class="token number">768</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">'&lt;script type="text/javascript" src="/js/sakura.js">&lt;\/script>'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span>`</pre>

    ## [](#添加鼠标彩虹星星掉落跟随效果 "添加鼠标彩虹星星掉落跟随效果")添加鼠标彩虹星星掉落跟随效果

    在`themes/matery/source/js`目录下新建`cursor.js`文件，打开这个网址[传送门](https://links.jianshu.com/go?to=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fbaifeng66%2Fcdn%401.1%2Fsource%2Fjs%2Fcursor.js)，将内容复制粘贴到cursor.js即可。

    然后再`themes/matery/layout/layout.ejs`文件内添加下面的内容：

    <pre class="line-numbers language-javascript">`<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"/js/cursor.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span><span aria-hidden="true" class="line-numbers-rows"><span></span></span>`</pre>

    ## [](#添加雪花飘落效果 "添加雪花飘落效果")添加雪花飘落效果

    在`themes/matery/source/js`目录下新建`snow.js`文件，打开这个网址[传送门](https://links.jianshu.com/go?to=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fbaifeng66%2Fcdn%401.1%2Fsource%2Fjs%2Fsnow.js)，将内容复制粘贴到cursor.js即可。

    然后再`themes/matery/layout/layout.ejs`文件内添加下面的内容：

    <pre class="line-numbers language-javascript">`<span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">"/js/snow.js"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span><span aria-hidden="true" class="line-numbers-rows"><span></span></span>`</pre>

    ## [](#文章生成永久链接 "文章生成永久链接")文章生成永久链接

    主题默认的文章链接配置是

    <pre class="line-numbers language-yaml">`<span class="token key atrule">permalink</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>day/<span class="token punctuation">:</span>title<span aria-hidden="true" class="line-numbers-rows"><span></span></span>`</pre>

    这种生成的链接地址很长，文章版权的链接地址会出现一大串字符编码，一点也不好看。因此需要修改文章生成链接的格式。

    **注：设置之后之前的文章评论就没了**

    首先再根目录下执行下面的命令：

    <pre class="line-numbers language-bash">`<span class="token function">npm</span> <span class="token function">install</span> hexo-abbrlink --save<span aria-hidden="true" class="line-numbers-rows"><span></span></span>`</pre>

    然后再站点配置文件下添加如下配置：

    <pre class="line-numbers language-yaml">`<span class="token key atrule">abbrlink</span><span class="token punctuation">:</span>
        <span class="token key atrule">alg</span><span class="token punctuation">:</span> crc16   <span class="token comment" spellcheck="true">#算法： crc16(default) and crc32</span>
        <span class="token key atrule">rep</span><span class="token punctuation">:</span> hex     <span class="token comment" spellcheck="true">#进制： dec(default) and hex: dec #输出进制：十进制和十六进制，默认为10进制。丨dec为十进制，hex为十六进制</span><span aria-hidden="true" class="line-numbers-rows"><span></span><span></span><span></span></span>`</pre>

    再将站点配置文件的`permalink`的值修改为：

    <pre class="line-numbers language-yaml">`<span class="token key atrule">permalink</span><span class="token punctuation">:</span> posts/<span class="token punctuation">:</span>abbrlink.html  <span class="token comment" spellcheck="true"># 此处可以自己设置，也可以直接使用 :/abbrlink</span><span aria-hidden="true" class="line-numbers-rows"><span></span></span>`</pre>

    生成完后，原md文件的Front-matter 内会增加`abbrlink` 字段，值为生成的ID 。这个字段确保了在我们修改了`Front-matter` 内的博客标题title或创建日期date字段之后而不会改变链接地址。

    ## [](#添加Live2d看板娘 "添加Live2d看板娘")添加Live2d看板娘

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814211201.png)

    插件：hexo-helper-live2d
    github仓库：[https://github.com/EYHN/hexo-helper-live2d](https://github.com/EYHN/hexo-helper-live2d)**

    ### [](#1-安装插件 "1.安装插件")1.安装插件

    运行命令`npm install --save hexo-helper-live2d`

    ### [](#2-选择模型 "2.选择模型")2.选择模型

    **可到 [https://huaji8.top/post/live2d-plugin-2.0/](https://huaji8.top/post/live2d-plugin-2.0/) 预览效果。**

    **命令为:`npm install live2d-widget-model-模型名`，模型为可参考上面的预览内容。**

    ### [](#3-配置 "3.配置")3.配置

    站点更目录的配置文件`_config.yml`或者是主题的配置文件中添加：

    <pre>`# Live2D
    ## https://github.com/EYHN/hexo-helper-live2d
    live2d:
      enable: true
      scriptFrom: local
      pluginRootPath: live2dw/
      pluginJsPath: lib/
      pluginModelPath: assets/
      tagMode: false
      debug: false
      model:
        use: live2d-widget-model-tororo # 模型：https://huaji8.top/post/live2d-plugin-2.0/
      display:
        position: left
        width: 150
        height: 350

      mobile:
        show: true
    admin:
      deployCommand: 'hexo-pubish.bat'`</pre>

    **_注意这里的use参数是上面安装的那个模型全名_**

    ### [](#取消看板娘 "取消看板娘")取消看板娘

    将配置中的`enable`设置成`false`即可。

    ### [](#卸载插件 "卸载插件")卸载插件

    运行命令下载插件，删除配置信息：

    1.卸载模型：npm uninstall live2d-widget-model-模型名
    2.卸载live2d插件：npm uninstall hexo-helper-live2d
    3.去掉站点_config.yml下的配置信息即可。

    ## [](#添加实时发布说说页面（Artitalk） "添加实时发布说说页面（Artitalk）")添加实时发布说说页面（Artitalk）

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814212059.png)

    教程：

    ## [](#自定义不使用主题模板渲染的独立页面 "自定义不使用主题模板渲染的独立页面")自定义不使用主题模板渲染的独立页面

    效果：

    ![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20200814212511.png)

    用途：加入一些不用主题的页面，如404页面，新建一个导航页，具有自己独立的样式，可以放一些自己的作品，相册什么的，以下就介绍这种独立页面的实现方法。

    使用 Hexo 提供的跳过渲染配置，在博客根目录的配置文件 `_config.yml` 里找到 `skip_render` 关键字，在后面添加想要跳过渲染的页面，比如我们创建 `\source\about\index.html`， 配置文件填写：`skip_render: about\**`，那么就表示 `\source\about` 里所有的文件将跳过渲染，里面的文件将会被直接复制到 public 文件夹，此时就会得到一个独立的 about 页面；官方文档：[https://hexo.io/docs/configuration](https://hexo.io/docs/configuration)

    如：

    <pre>`# 屏蔽渲染
    skip_render:
      - "404.md"
      - "Nobaidu/**"

这里面对404.html页面屏蔽渲染，对Nobaidu文件夹下的html文件屏蔽渲染

参考文章：

[hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery/blob/develop/README_CN.md)

[【Hexo】Hexo 主题 Matery 配置](https://www.cnblogs.com/mfrank/p/12830097.html#autoid-0-3-0)

[Hexo+yilia添加Live2d看板娘](https://lete114.github.io/article/6d70fe9c.html)