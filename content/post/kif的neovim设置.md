---
title: kif的neovim设置
author: kif
tags:
  - neovim
categories:
  - 工具
abbrlink: 9aee
cover: "https://kifimg.oss-cn-beijing.aliyuncs.com/img/202304191059908.png"
date: 2023-04-19 10:58:00
---



> 配置教程来自《[Neovim 配置实战：从0到1打造自己的IDE](https://juejin.cn/book/7051157342770954277/section)》 
>
> 
>
> 个人github配置仓库：github: https://github.com/wkif/kifsNeovimConfig/tree/v2





## 快捷键：

### 窗口： 

`sh` 代表水平分屏（Split Horizontally），`sv` 代表垂直分屏 (Split Vertically）， `sc` 关闭窗口 (Close)， `so` 关闭其他 (Others)。 

`Alt + h/j/k/l` 设置为在窗口之间跳转。 `Ctrl + 上下左右` 或者 `s,` `s.` `sj` `sk` 调整比例

### Terminal：

`leader + t` 在下边窗口打开，或 `leader + vt` 侧边窗口打开



### 浏览代码：

`Ctrl+j` / `Ctrl+k` 移动 4 行，`Ctrl+u` / `Ctrl + d` 移动 9 行

### 侧边栏：

 `Alt + m` 打开/关闭， `j/k` 上下移动， `Alt + h` / `Alt + l` 可以左右窗口跳转

 `o` 来打开关闭文件夹，`a` 添加一个文件，`d` 删除文件，`r`重命名，`x`剪切，`c`复制，`p`粘贴，`s`文件管理器打开。

### 标签页：

使用 `Ctrl + h` 和 `Ctrl + l` 左右切换标签页， `Ctrl + w` 关闭当前标签页。

### 模糊查找：

模糊查找 `Ctrl + p` 来查找文件，使用 `Ctrl + shift + f` 来全局查找

### 代码缩进：

`=` `gg=G` 组合键，因为 `gg` 是跳到首行，`G` 是跳到尾行，`gg=G` 就是从首行一直缩进到尾行，相当于 `ggvG` 选中整个文件然后用 `=` 格式化

### 代码折叠：

 `zc` 组合键来折叠 `{}` 中的内容，还可以使用 `zo` 组合键来打开对应的折叠。

### 自动补全：

- `<A-.>` alt + . 出现补全弹窗
- `<A-,>` alt + , 取消补全弹窗
- `<C-k>` 上一个
- `<C-j>` 下一个
- `<CR>` 回车确认
- `<C-u>` 滚动上
- `<C-d>` 滚动下

### 注释：

 `gcc` 快捷键作为行注释，`gbc` 快捷键作为块注释



### LSP 快捷键

`gd` 跳转到定义， 然后 `gh` 显示提示
