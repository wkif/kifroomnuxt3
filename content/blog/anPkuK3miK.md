---
title: js中截取字符串的三个方法 substring()、substr()、slice()
author: kif
tags:
  - javascript
categories:
  - 学习笔记
abbrlink: a426
date: 2022-07-28 23:10:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/project/202207282315497.jpg
coverWidth: 1200
coverHeight: 750
---



`js`中有三个截取字符的方法，分别是`substring()`、`substr()`、`slice()`，平时我们可能都用到过，但总是会对这些方法有点混淆，特别是`substring()`和`substr()`，连方法名都差不多，下面就具体来看一下区别。

## 相同点

这三个方法都可以对字符串进行截取，并且返回一个新的字符串，也就是不会对原字符串进行修改

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substr(1,5)
< "12345"
> a
< "0123456789"  //没有发生改变
```

## 不同点

这三个方法的不同之处在于参数不同。

### substring

> substring() 方法用于提取字符串中介于两个指定下标之间的字符。

**语法**

```crmsh
string.substring(start,stop)
```

**参数**

| 参数    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| `start` | **必需**。一个*非负的整数*，规定要提取的子串的第一个字符在 `string` 中的位置。 |
| `stop`  | **可选**。一个*非负的整数*，比要提取的子串的最后一个字符在 `string` 中的位置多 1。**如果省略该参数，那么返回的子串会一直到字符串的结尾。** |

**说明**

1.`substring()` 方法返回的子串包括 `start` 处的字符，但不包括 `stop` 处的字符。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substring(1,5)
< "1234"
```

2.如果参数 `start` 与 `stop` 相等，那么该方法返回的就是一个空串（即长度为 0 的字符串）。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substring(1,1)
< ""
```

3.如果 `start` 比 `stop` 大，那么该方法在提取子串之前会先交换这两个参数。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substring(5,1) //=>a.substring(1,5)
< "1234"
```

4.如果 `start` 和 `stop` 有负数，那么会把该参数自动转为`0`，然后继续上述规则。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substring(5,-1) //=>a.substring(5,0) => a.substring(0,5)
< "1234"
```

5.如果 `start` 和 `stop` 有**正**小数（负数直接进行第4条），那么会把该参数向下取整，然后继续上述规则。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substring(5,2.5) //=>a.substring(5,2) => a.substring(2,5)
< "234"
```

6.如果 `start` 和 `stop` 有字符串，那么会先进行`parseInt()`，如果转换结果为`NaN`，那么就转换为`0`，其余情况继续上述规则。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substring(5,'2.5') // =>a.substring(5,2) => a.substring(2,5)
< "234"
> a.substring(5,'ss') // =>a.substring(5,2) =>a.substring(5,0) => a.substring(2,5)
< "234"
```

其他情况就没有一一测试了，当然正常情况下尽量不要这么干，毕竟语法上已经规定了是整数。

### substr

> substr() 方法可在字符串中抽取从 start 下标开始的指定数目的字符。

**语法**

```livecodeserver
string.substr(start,length)
```

> 重要事项：ECMAscript 没有对该方法进行标准化，因此反对使用它。

**参数**

| 参数     | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| `start`  | **必需**。要抽取的子串的起始下标。必须是数值。如果是负数，那么该参数声明从字符串的尾部开始算起的位置。也就是说，-1 指字符串中最后一个字符，-2 指倒数第二个字符，以此类推。 |
| `length` | **可选**。子串中的字符数。必须是数值。**如果省略了该参数，那么返回从 `string` 的开始位置到结尾的字串。** |

**说明**

该方法与`substring()`最大的区别在于第二个参数是你需要截取字符串的长度，而不是位置。

1.`substr()` 方法返回的子串从 `start` 处的字符开始（包括）往后截取`length`长度，如果超过最末端就到最末端结束。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substr(1,5)
< "12345"
> a.substr(1,15) //只会到最末端，多了没用
< "123456789"
```

2.`start`可以取**负值**，表示从字符串尾部往头部开始数（从右到左，注意是从`1`开始，比如`-1` 指字符串中最后一个字符），但是截取长度还是从左到右，如果超过最末端就到最末端结束。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substr(-4,2) //-4表示从右开始数第4个，就是'6'，然后取2个长度的字符串，就是'67'
< "67"
```

3.如果`length`为*负值*，那么会直接当成`0`处理，最终返回`""`。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substr(4,-2) // => a.substr(4,0)
< ""
```

4.如果`start`或者`length`为小数，那么会截取小数部分。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substr(1.2,5.2) // => a.substr(1,5)
< "12345"
```

5.如果 `start` 和 `length` 有字符串，那么会先进行`parseInt()`，如果转换结果为`NaN`，那么就转换为`0`，其余情况继续上述规则。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.substr('aa','5') // => a.substr(0,5)
< "01234"
```

### slice

> slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

**语法**

```livecodeserver
string.slice(start,end)
```

**参数**

| 参数    | 描述                                                         |
| ------- | ------------------------------------------------------------ |
| `start` | **必须**。要抽取的片断的起始下标。如果是负数，则该参数规定的是从字符串的尾部开始算起的位置。也就是说，-1 指字符串的最后一个字符，-2 指倒数第二个字符，以此类推。 |
| `end`   | **可选**。紧接着要抽取的片段的结尾的下标。若未指定此参数，则要提取的子串包括 `start` 到原字符串结尾的字符串。如果该参数是负数，那么它规定的是从字符串的尾部开始算起的位置。 |

该方法的两个参数均为位置坐标，和`subtring`比较像，区别就是该方法支持**负数**，并且不会交换位置，始终是从`start`到`end`，如果该区间不存在，那么返回`''`。

1.`slice()` 方法返回的子串包括 `start` 处的字符，但不包括 `end` 处的字符。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.slice(1,5)
< "1234"
```

2.当`start`或者`end`为**负值**时，定位方式和`substr`一直，从右往左数，从1开始。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.slice(1,-1)//起始点从第1（包括）开始，结束点为从右往左数第1个（不包括）
< "12345678"
```

2.`start`到`end`的顺序始终是**从左到右**，如果最终`start`的位置在`end`的右边，那么返回`''`。

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.slice(2,1)//2所在的位置是'2'，1所在的位置是'1'，从2=>1，方向相反，返回为空
< ""
> a.slice(-2,1)//-2所在的位置是'8'，1所在的位置是'1'，从8=>1，方向相反，返回为空
< ""
> a.slice(-2,-1)//-2所在的位置是'8'，-1所在的位置是'9'，从8=>9，方向正常，返回为'8'
< "8"
```

3.其他情况和`substring`处理方式一致

```javascript
//chrome控制台
> var a = '0123456789'
< undefined
> a.slice('xx','5.5')// => a.slice(0,5)
< "01234"
```

## 小节

从上面测试得出结论，`substring`不支持**负值**，其他两种方式均支持负数表示，并且是从右边第一位开始计数。
`substr`的第二个参数是长度，这是和其他两种方式最大的不同之处，`slice`的方向性比较强，永远是从`start=>end`对应`左=>右`。