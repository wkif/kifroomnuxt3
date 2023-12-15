---
title: Javascript字符串处理
author: kif
tags:
  - javascript
  - 前端
categories:
  - 学习笔记
  - 转载
abbrlink: '4428'
date: 2021-01-10 18:38:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/20201202142640.jpg
coverWidth: 1200
coverHeight: 750
---

> 作为JavaScript基础数据类型，字符串具有一些很强大的方法，在平时的工作中用到的地方也特别的多，很多时候因为不熟悉某个字符串的方法，往往走了很多弯路，所以整理了15个常用又高效的字符串方法，来一起看看这15个提升工作效率的方法吧！

## 1. 字符串去除首尾空格 —— trim()

**说明：** 去除字符串两边的空白。

**需求场景：** 用户搜索前去除输入的首尾空格。

**用法：** `string.trim()`

**例子：**

```
let str = "    白色不白，黑色不黑，我...我不喜欢你   "
let result = str.trim()
console.log(result); // 控制台打印："白色不白，黑色不黑，我...我不喜欢你"
复制代码
```

## 2. 字符串替换指定字符（串）—— replace()

**说明：** 字符串替换字符还是`replace()`最强大~默认替换第一个符合条件的字符串，也可用正则做全局匹配

**需求场景：** 字符串的替换，关键词的屏蔽隐藏等

**用法：** `string.replace(searchvalue,newvalue)`

**例子：**

```
let str = "你知道吗？世界上有60亿人，宇宙有60万亿小行星，你比小行星还要珍贵一万倍"
let result1 = str.replace("亿","个")
let result2 = str.replace(/亿/g,"个")
console.log(result1)  // 控制台打印："你知道吗？世界上有60个人，宇宙有60万亿小行星，你比小行星还要珍贵一万倍"
console.log(result2)  // 控制台打印："你知道吗？世界上有60个人，宇宙有60万个小行星，你比小行星还要珍贵一万倍"
复制代码
```

## 3. 字符串合并 —— concat()

**说明：** 连接两个或更多字符串，并返回新的字符串。（悄悄告诉你，数组也可以使用哦~）

**需求场景：** 字符串合并展示。

**用法：** `string.concat()`

**例子：**

```
let str1 = "我有很多好听的情话,"
let str2 = "可面对你都不敢说不出口。"
let result = str1.concat(str2)
console.log(result) // 控制台打印："我有很多好听的情话,可面对你都不敢说不出口。"
复制代码
```

## 4. 字符串转数组 —— split()

**说明：** 把字符串通过特定字符分割为字符串数组，`split`还可以使用正则表达式实现拆分多个分隔符。

**需求场景：** 字符串转数组进行遍历等操作。

**用法1：** `string.split()`

**用法2：** `string.split(/[*]/)`

**例子：**

```
let str = "张三,李四;王五"
let result1 = str.split(',')
let result2 = str.split(/[,;]/)
console.log(result1) // 控制台打印：["张三", "李四;王五"]
console.log(result2) // 控制台打印：["张三", "李四", "王五"]
复制代码
```

## 5. 字符串转数组 —— [...string]

**说明：** 说起来，这并不是字符串的方法，主要是我觉得ES6语法中的扩展操作符的...语法是转数组最简洁的方法。它和`split()`区别在于：`...`语法不根据特定字符切割，而是把每个字符都当作单独的元素添加到数组中。

**需求场景：** 字符串全部分割成字符数组。

**用法：** `[...string]`

**例子：**

```
let str = '这是一个字符串string'
let arr = [...str]
console.log(arr) // 控制台打印：["这", "是", "一", "个", "字", "符", "串", "s", "t", "r", "i", "n", "g"]
复制代码
```

## 6. 字符串反转 —— [...string].reverse().join("")

**说明：** 这个也不能算是字符串方法，但是好用。本质上还是转成数组，数组反转之后，再拼接成字符串。

**需求场景：** 将当前字符串反转输出

**用法：** `[...string].reverse().join("")`

**例子：**

```
let str = "两极反转，龙卷风摧毁停车场!"
let result = [...str].reverse().join("")
console.log(result) // 控制台打印：!场车停毁摧风卷龙，转反极两
复制代码
```

## 7. 字符串的多次复制 —— repeat ()

**说明：** 复制字符串指定次数，并将它们连接在一起返回。

**需求场景：** 字符串需要进行 n 次自动复制。

**用法：** `string.repeat(n)`

**例子：**

```
let str1 = '复制'
let result = str1.repeat(2)
consol.log(result) // 控制台打印：复制复制

let str2 = '10'
let result = str2.repeat(5)
console.log(result) // 控制台打印：1010101010
复制代码
```

## 8. 字符串是否包含某字符 （串）—— search()

**说明：**检索字符串中指定的或与正则表达式相匹配的首个子字符串。如果匹配到了则返回匹配字符串首字符下标，如果没有匹配到，则返回 -1。

**需求场景：** 字符串内关键字的搜索查询定位。

**用法：** `string.search(searchvalue)`。

**例子：**

```
let str = "今天的夜色很好，月亮也很圆，唯一遗憾的是，我不是从你的窗子里看到的月亮。"
let result1 = str.search("月亮")
let result2 = str.search(/[，。]/)
console.log(result1) // 控制台打印：8
console.log(result2) // 控制台打印：7
复制代码
```

## 9. 字符串内是否包含某字符（串）—— includes()

**说明：** `includes()`可选择从某处下标之后开始查找，返回true或false。第二个参数代表从某下标处开始查找，忽略则代表从下标0开始查找。

它和search()区别在于：`search()`返回指定下标， `includes()`返回true或false；`search()`不能从指定下标开始查找， `includes()`可以从指定下标处开始查找。

**需求场景：** 判断字符串中是否有不合法字符等

**用法：** `string.includes(searchvalue, start)`

**例子：**

```
let str = "没有夏日的的凉风，也没有冬日的暖阳，它们只是恰好出现在了合适的时间罢了"
let result1 = str.includes("冬日")
let result2 = str.includes("冬日",20)
console.log(result1); // 控制台打印：true
console.log(result2); // 控制台打印：false
复制代码
```

## 10. 字符串中指定的字符串值在首次或最后一次出现的位置 —— indexOf() 和 lastIndexOf()

**说明：**

`indexOf()` 方法可返回某个指定的字符串值首次出现的位置，即从前向后搜索。如果指定第二个参数 start，则在字符串中的指定位置开始从前向后搜索。

`lastIndexOf()` 方法可返回某个指定的字符串值最后出现的位置，即从后向前搜索。如果指定第二个参数 start，则在字符串中的指定位置从后向前搜索。

**需求场景：** 关键字首次或最后一次出现的位置

**用法1：** `string.indexOf(searchvalue,start)` 指定的字符串值首次出现的位置

**用法2：** `string.lastIndexOf(searchvalue,start)` 指定的字符串值最后出现的位置

**例子：**

```
let str = "你来人间一趟，你要看看太阳。和你的心上人一起走在街上，了解她，也要了解太阳"
let result1 = str.indexOf("太阳")
let result2 = str.indexOf("太阳",10)  // 从10下标的字符开始查找"太阳"，查找范围是"太阳。和你的心上人一起走在街上，了解她，也要了解太阳"，下标还是相对原字符串而言的，因此返回11。
let result3 = str.lastIndexOf("太阳") 
let result4 = str.lastIndexOf("太阳",10)  // 0-10下标的字符串为"你来人间一趟，你要看看"，没有"太阳"，返回-1
console.log(result1) // 控制台打印：11
console.log(result2) // 控制台打印：11
console.log(result3) // 控制台打印：35
console.log(result4) // 控制台打印：-1
复制代码
```

## 11. 字符串转大小写 —— toLowerCase() 和 toUpperCase()

**说明：** 字符串大小写之间的转换

**需求场景：** 网址，英文名，首字母大写等要求。

**用法1：** `string.toLowerCase()` 转成小写字母

**用法2：** `string.toUpperCase()` 转成大写字母

**例子：**

```
let str = "For you, A thousand times over"
let result1 = str.toLowerCase()
let result2 = str.toUpperCase()
console.log(result1) // 控制台打印："for you, a thousand times over"
console.log(result2) // 控制台打印："FOR YOU, A THOUSAND TIMES OVER"
复制代码
```

## 12. 字符串填充到指定长度 —— padStart () 和 padEnd ()

**说明：** 字符串填充指定字符到指定长度

**需求场景：** 字符串长度不足，需要补充至指定长度n，如年月日，隐藏手机号，隐藏昵称等。

**用法1：** `string.padStart(n,'补充内容')` 从字符串前添加补充内容。

**用法2：** `string.padEnd (n,'补充内容')` 从字符串后添加补充内容。

**例子：**

```
// 在字符串前补充"-"，直到字符串的长度为5
let str1 = '预备开始'
let result = str1.padStart(5, '-')
console.log(result) // 控制台打印："---预备开始"

//在末尾添加"*"，直到字符串的长度为11
let str2 = "184"
let result = str2.padEnd(11, "*")
console.log(result) // 控制台打印："184********"
复制代码
```

## 13. 字符串是否以特定字符（串）开头或结尾 —— startsWith()、endsWith()

**说明：** 用于检测字符串是否以指定的子字符串开始。如果是以指定的子字符串开头返回 true，否则 false。`startsWith()`、`endsWith()`方法区分大小写。第二个参数代表从某下标处开始判断是否以特定字符（串）开头或结尾，忽略则`startsWith()`从下标0开始检测，`endsWith()`从字符串最后一位下标开始检测。

**值得注意的是：**

当`startsWith()` 的第二个参数如果超出了当前字符串的最大长度，依旧生效，返回false。

当`endsWith()` 的第二个参数如果超出了当前字符串的最大长度，会不生效，改为从字符串最后一位下标开始检测。

**需求场景：** 判断字符串是否以指定字符开头或结尾

**用法1：** `string.startsWith(searchvalue, start)`

**用法2：** `string.endsWith(searchvalue, start)`

**例子：**

```
let str = "过去的时候，我们相视一笑，就已过了大半辈子"
let result1 = str.startsWith("过去")
let result2 = str.startsWith("过去",10)
let result3 = str.endsWith("半辈子")
let result4 = str.endsWith("半辈子",20)
console.log(result1); // 控制台打印：true
console.log(result2); // 控制台打印：false
console.log(result3); // 控制台打印：true
console.log(result4); // 控制台打印：false
复制代码
```

## 14. 字符串长度计算 —— length

**说明：** length属性不仅是数组的属性，同时伪数组，字符串都有length属性。但是遇到某些生僻字如“𩸽”或者表情符号“🙂”，它们的length为2，这时候返回的length可能不是我们真正想要的。这是因为js字符串是由16位的代码单元组成，而不是由Unicode代码点组成。同时js使用两个代码单元表示216及其以上的Unicode代码点。这两个代码单元被称为代理对。一个代码单元被默认为1个长度单位，像“𩸽”或者“🙂”是由两个代码单元组成的代理对，因此它们的length为2。

**需求场景：** 求出当前字符串长度

**用法：** `string.length`

**例子：**

```
let str = "相约白头偕老，你却悄悄秃了头"
let result = str.length
console.log(result) // 控制台打印：14
复制代码
```

## 15. 字符串截取 —— substr() 和 slice() 和 substring()

**说明：** 字符串截取和拼接是字符串最常用也是最易错的方法。主要原因是 `substr()` 、 `slice()` 和 `substring()`的区别有很多小伙伴还不太明白。

**substr()：**

> 参数一（必须）：一个整数，要开始截取字符的下标，如为负则代表从尾部开始截取。参数二（可选）：一个整数，要截取字符的数量。如果省略该参数，则默认为`string.length`，即当前字符串的长度。

**slice() ：**

> 参数一（必须）：一个整数，要开始截取字符的下标，如为负则代表从尾部开始截取。参数二（可选）：一个整数，要结束截取字符的下标，如为负则代表从尾部截取多少个字符。如果省略该参数，则默认为string.length，即当前字符串的长度。

**substring() ：**

> 参数一（必须）：一个非负的整数，要开始截取字符的下标。参数二（可选）：一个非负的整数，要结束截取字符的下标。如果省略该参数，则默认为string.length，即当前字符串的长度。

**需求场景：** 截取指定下标指定长度的字符串

**用法1：** string.substr(*start*,*length*)

**用法2：** string.slice(*start*,*end*)

**用法3：** string.substring(*start*,*end*)

**例子：**

```
let str = '0123456789'
let result1 = str.substr(2,5) // 从下标2开始截取，截取5位
let result2 = str.slice(2,5)  // 从下标2开始截取，截取到下标5（不含下标5）
let result3 = str.substring(2,5) // 从下标2开始截取，截取到下标5（不含下标5）

console.log(result1) // 控制台打印：23456
console.log(result2) // 控制台打印：234
console.log(result3) // 控制台打印：234
复制代码
```

## 总结

这就是关于字符串常用的15个方法详细说明，可在我们工作中的很多时候，可能并不能很好的使用它们。大多是因为不够熟练，看一遍容易忘记，所以我们要时常翻一翻这些常用的方法，也许就能节省你工作中几十分钟~ 为摸鱼大业添砖加瓦 ~



转自：[《看完就懂系列》15个方法教你玩转字符串](https://mp.weixin.qq.com/s/RjSx5K11Z06C-Yl381m7zQ)