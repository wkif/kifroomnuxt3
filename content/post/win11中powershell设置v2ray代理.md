---
title: win11中powershell设置v2ray代理
author: kif
tags:
  - v2ray
categories:
  - 工具
abbrlink: 5fbb
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304191057671.png'
coverWidth: 1200
coverHeight: 750
date: 2023-04-19 10:54:00
---



本文用socks5协议进行设置代理，用户可以根据自己的需求将socks5替换http和https 协议自行设置
**本文测试需要打开代理软件，打开即可，无需在软件上开启代理。**

## windows

#### cmd

设置**临时**代理（关闭cmd即设置的代理消失）
`set all_proxy=socks5://127.0.0.1:10808` (**端口号为你代理软件socks5协议的端口**)
删除临时代理
`set all_proxy=`
查看当前环境变量
`set`
查看当前公网ip判断代理是否成功
`curl cip.cc`

#### [powershell](https://so.csdn.net/so/search?q=powershell&spm=1001.2101.3001.7020)

设置**临时**代理（关闭powershell即设置的代理消失）
`$env:all_proxy="socks5://127.0.0.1:10808"` (**端口号为你代理软件socks5协议的端口**)
删除当前临时代理
`$env:all_proxy=""`
查看当前环境变量
`ls env:*`
暂不知晓curl 和 ping层面上检测代理是否成功,设置完临时代理，通过命令行界面已成功获得下载相关速度

#### cmd和powershell设置永久代理

单击我的电脑属性=》选择高级系统设置=》选择环境变量=》选择系统变量=》选择新建
新建all_proxy，值设置为socks5://127.0.0.1:10808
![在这里插入图片描述](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304191055167.png)
保存即可保存为永久代理

#### 快捷代码设置临时命令行代理

##### cmd

可以 设置**临时**代理保存为cmd_setproxy.bat如下：
![在这里插入图片描述](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304191106873.png)
删除**临时**代理如下
![在这里插入图片描述](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304191106929.png)
***将两个bat保存为同一路径下，将路径粘贴入系统变量的PATH中，即可设置成功***
输入cmd_setproxy即可设置成功
![在这里插入图片描述](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304191055418.png)

##### powershell

用管理员模式打开powershell
`code $profile`（code表示用vscode打开$profile文件,$profile表示powershell的配置文件）

```c
function setproxy{
    $env:all_proxy="socks5://127.0.0.1:10808"
}

function unsetproxy{
    $env:unsetproxy=""
}
1234567
```

保存完后 另外再开powershell如果出现
系统无法使用脚本的报错
用管理员打开的powershell运行
`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`
选择同意更改策略，如果需要具体更改相关策略选项可以到官网文档进行查看

> https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

保存完成 即可使用power shell使用setproxy快捷设置临时代理
![在这里插入图片描述](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304191055372.png)
