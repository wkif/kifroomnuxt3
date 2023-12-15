---
title: Math.toFixed中的四舍五入问题
author: kif
tags:
  - toFixed
categories:
  - 学习笔记
abbrlink: 32d2
date: 2023-08-28 11:09:00
cover: https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308280943672.jpg
coverWidth: 1200
coverHeight: 750

---

# Math.fixed中的四舍五入问题

## MDN

### Number.prototype.toFixed()

**`toFixed()`** 方法使用定点表示法来格式化一个数值。



### [语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#语法)

```
numObj.toFixed(digits)
```

#### [参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#参数)

- digits

  小数点后数字的个数；介于 0 到 20（包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 0。

#### [返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#返回值)

使用定点表示法表示给定数字的字符串。

#### [抛出异常](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#抛出异常)

- [`RangeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError)

  如果 *digits* 参数太小或太大。0 到 20（包括）之间的值不会引起 [`RangeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RangeError)。实现环境（implementations）也可以支持更大或更小的值。

- [`TypeError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypeError)

  如果该方法在一个非[`Number`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)类型的对象上调用。

### [描述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#描述)

一个数值的字符串表现形式，不使用指数记数法，而是在小数点后有 digits（注：digits 具体值取决于传入参数）位数字。该数值在必要时进行四舍五入，另外在必要时会用 0 来填充小数部分，以便小数部分有指定的位数。如果数值大于 1e+21，该方法会简单调用 [`Number.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)并返回一个指数记数法格式的字符串。

**警告：** 浮点数不能精确地用二进制表示所有小数。这可能会导致意外的结果，例如 `0.1 + 0.2 === 0.3` 返回 `false` .



## 问题表现

```js
(2.005).toFixed(2)
// '2.00'
(1.45).toFixed(1)
// '1.4'
```

## 问题纠因

重点：**该数值在必要时进行四舍五入，另外在必要时会用 0 来填充小数部分，以便小数部分有指定的位数。**

那么，什么时候是 必要，什么时候是不必要呢？

查阅 [W3C文档](https://link.juejin.cn/?target=https%3A%2F%2Fwww.w3.org%2Fhtml%2Fig%2Fzh%2Fwiki%2FES5%2F%E6%A0%87%E5%87%86_ECMAScript_%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1%23Number.prototype.toFixed_.28fractionDigits.29)，但是却没有看到对于 `round/四舍五入` 规则的说明；

查阅[社区文章](https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Franyonsue%2Fp%2F11388281.html)发现，这个 四舍五入问题和 [银行家算法](https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2F%E9%93%B6%E8%A1%8C%E5%AE%B6%E7%AE%97%E6%B3%95) 有关；

猜测，这个 四舍五入错误 应该和这几个个因素有关系：

- IEEE-754 标准
- 浮点数的精度
- 银行家算法

### IEEE-754 标准和浮点数的精度

> [IEEE 754-维基百科](https://link.juejin.cn/?target=https%3A%2F%2Fzh.wikipedia.org%2Fwiki%2FIEEE_754)
>
> [浮点运算](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFloating-point_arithmetic%23IEEE_754%3A_floating_point_in_modern_computers)

IEEE二进制浮点数算术标准（IEEE 754）是20世纪80年代以来最广泛使用的浮点数运算标准，为许多CPU与浮点运算器所采用。

以及 它定义的 两种基本的浮点格式：单精度和双精度。我们知道， JavaScript的`Number`类型为[双精度IEEE 754 64位浮点](https://link.juejin.cn/?target=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFloating-point_arithmetic)类型

> 以下内容参考 [你不是真正的四舍五入](https://juejin.cn/post/6844903663790473229)

```
IEEE 单精度格式具有 24 位有效数字精度，并总共占用 32 位。

IEEE 双精度格式具有 53 位有效数字精度，并总共占用 64 位。
```

在 IEEE-754 标准中，定义 科学计数法 来表示浮点数：

如：123.45 用十进制科学计数法可以表达为 1.2345 × 10 ^ 2 ，其中 1.2345 为尾数，10 为基数，2 为指数。

那么，上面浮点数在空间上的表示大致如下图：

![Snipaste_2023-08-28_09-45-03](https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202308280945463.png)


也就是说，1.2345 × 10 ^ 2 最终展示为：

```yaml
符号位： + 占 1  位
指数位： 2 占 11 位
小数位： 2345 占 52 位
```

那么问题来了，如果一个数52位存储空间不够，也就是二进制也会出现想十进制一样的无限数的时候，会发生什么事情呢？

IEEE754采用的浮点数舍入规则有时被称为 舍入到偶数（Round to Even）

```
这有点像我们熟悉的十进制的四舍五入，即不足一半则舍，一半以上（包括一半）则进。
不过对于二进制浮点数而言，还多一条规矩，就是当需要舍入的值刚好是一半时，不是简单地进，
而是在前后两个等距接近的可保存的值中，取其中最后一位有效数字为零者。
```

也就是这个规则，带来的精度问题：

```yaml
0.1 + 0.2 !== 0.3
```

两个数的加法运算，通过十进制转二进制后相加计算的二进制然后转换成十进制，转换成的结果为

```
0.30000000000000004
```

这就带来了精度问题。

因为数字运算将十进制转换成二进制，浮点数的二进制又存在 舍入规则，

那么加减运算存在精度问题，乘除运算也存在；

总结一句话：[浮点数不能精确的代表二进制](https://link.juejin.cn/?target=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F588004%2Fis-floating-point-math-broken)

### 银行家算法

很多文章表示使用的是**银行家算法**。

一句话介绍银行家算法：**四舍六入五考虑，五后非零就进一，五后为零看奇偶，五前为偶应舍去，五前为奇要进一。**

银行家舍入法是由 IEEE 754 标准规定的浮点数取整算法，大部分的编程软件都使用这种方法。

### 但是！

银行家算法依然不是完全正确的，0既不是奇数也不是偶数，所以对于5前面为0的情况和下面的情况都不适用并不适用

```js
// 5前为0
console.log((1.00005).toFixed(4))
// 1.0001
(1.0005).toFixed(3)
// 1.000
console.log((1.005).toFixed(2))
// 1.00
console.log((1.05).toFixed(1))
// 1.01

console.log((1.45).toFixed(1))
// 1.4 符合银行家算法

console.log((1.25).toFixed(1))
// 1.3 又不符合银行家算法
```

貌似变得不可控起来了，所以 **toFixed既不是四舍五入也不是银行家舍入法**



## 自用解决版本

```ts
/**
 *  四舍五入
 * @param number  数字
 * @param precision 精度
 * @returns   number
 */
function toFixed(number: number, precision: number) {
  const multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return (Math.round(wholeNumber / 10) * 10) / multiplier;
}
```

但该方法并未解决5前为0的问题，推荐下面方法：

使用 [**toLocaleString**](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString)



```ts
/**
 *  四舍五入
 * @param number  数字
 * @param precision 精度
 * @returns   number
 */
function toFixed(number, precision) {
  const format = (num) =>
    num.toLocaleString("en-US", {
      minimumFractionDigits: precision,
      maximumFractionDigits: precision,
    });
  return format(number);
}
```



> 参考：
>
> [js toFixed 四舍五入问题](https://juejin.cn/post/7050760083239600141#heading-0)
>
> [Number.prototype.toFixed (fractionDigits)](https://www.w3.org/html/ig/zh/wiki/ES5/%E6%A0%87%E5%87%86_ECMAScript_%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1#Number.prototype.toFixed_.28fractionDigits.29)
>
> [js中toFixed精度问题的原因及解决办法](https://www.cnblogs.com/ranyonsue/p/11388281.html)
>
> 

