---
title: 重温前端-css篇
author: kif
tags:
  - CSS
categories:
  - 学习笔记
  - 前端
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241828510.jpg'
coverWidth: 1200
coverHeight: 750
abbrlink: cc32
date: 2022-02-13 15:53:00
---
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
| ::placeholder  | input::placeholder | 匹配每个表单输入框（例如 input）的 placeholder 属性 |



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



### 17.继承

css属性分为继承属性和非继承属性

继承属性的默认值为父元素的该属性的 计算值，非继承属性和根元素的继承属性的默认值为初始值。

对于非继承属性，可以显示的声明属性值为 inherit，让子元素的属性继承父元素。

#### 常见的继承属性：

​	字体 font 系列
​			文本 text-align text-ident line-height letter-spacing
​		颜色 color
列表 list-style
可见性 visibility
光标 cursor





### 18.什么是浮动，如何清除浮动？

