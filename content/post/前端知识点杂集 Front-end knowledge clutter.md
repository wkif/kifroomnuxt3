---
title: 前端知识点杂集 
author: kif
abbrlink: e277
date: 2022-09-10 11:19:51
tags:
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/project/202209101122421.jpg
coverWidth: 1200
coverHeight: 750
---



# 第一题

尝试推测它的输出：

```javascript
const person = { name: '代码与野兽' }
Object.defineProperty(person, 'age', { value: 18 })

console.log(person.age)
console.log(Object.keys(person))
```

输出：

```javascript
18
['name']
```

解析：
很多人容易搞错第二个输出，因为使用 defineProperty 定义的属性默认是不可枚举的。



# 第二题

尝试推测它的输出：

```javascript
const name = '代码与野兽'
age = 18

console.log(delete name)
console.log(delete age)
console.log(typeof age)
```

输出：

```latex
false
true
"undefined"
```

解析：
第一个 false 是因为 delete 只能删除对象上的属性，name 不是属性，所以删除失败。
第二个 true 是因为我们不使用任何声明创建变量，它会被视作全局变量，挂载到 window 对象上面，等价于 delete window.age，所以删除成功。
第三个 undefined 是因为 age 被删除了。

# 第三题

尝试推测它的输出：

```javascript
let person = { name: '代码与野兽' }
const members = [person]
person = null
console.log(members)

```

输出：

```javascript
[{
  name: "代码与野兽"
}]

```

解析：
很多人会认为输出结果应该是 [ null ]，但是，我们只是设置了 person 这个变量的新引用，之前的引用还在 members 中。
简单来说，{ name: '代码与野兽' } 这个对象存在某个内存空间中，假设它的地址是 X201。它的逻辑大概像下面这样：

```javascript
let person = X201
const members = [X201]
persion = null
```



# 第四题

尝试推测它的输出：

```javascript
function SuperHero() {
  this.make = '代码与野兽'
  return { make: '野兽与代码'}
}

const mySuperhero = new SuperHero()
console.log(mySuperhero)
```

输出：

```javascript
{
  make: "野兽与代码"
}
```

解析：
如果构造函数最终返回了一个对象，那么之前设置的属性都将失效。



# 第五题

尝试推测它的输出：

```javascript
const name = '代码与野兽'
console.log(name.padStart(14))
console.log(name.padStart(2))
```

输出：

```latex
"         代码与野兽"
"代码与野兽"
```

解析：
padStart 方法可以在字符串的开头填充空格。
参数是新字符串的总长度，如果这个长度比原来的字符串长度短，那么不会填充。



# 第六题

尝试推测它的输出：

```javascript
console.log(parseInt("7"))
console.log(parseInt("7*6"))
console.log(parseInt("7Din"))
```

输出：

```latex
7
7
7
```

解析：
如果 parseInt 的参数是字符串和数字的组合，那么它会从头开始检查，直到碰到数据类型错误的位置，如果在数据类型错误的位置之前是一个有效的数字，它就会返回数字。

# 第七题

尝试推测它的输出：

```javascript
[1, 2, 3, 4].reduce((x, y) => console.log(x, y))
```

输出：

```latex
1
2
undefined
3
undefined
4

```

解析：
如果我们不给 reduce 传递初始值，那么 x 会是数组的第一个值，y 是数组的第二个值。

```js
const arr = [1, 2, 3, 4, 5]
const sum = arr.reduce((pre, item) => {
    console.log(pre, item)
    return pre + item
})
console.log(sum) // 15
```



# 第八题

尝试推测它的输出：

```javascript
function getUserInfo(one, two, three) {
  console.log(one)
  console.log(two)
  console.log(three)
}

const superHero = '代码与野兽'
const age = 1000

getUserInfo`${superHero} 是 ${age} 岁`
getUserInfo`hello`
```

输出：

```latex
> [""," 是 "," 岁"]
> 代码与野兽
> 1000

> ["hello"]
> undefined
> undefined
```

解析：
我们使用模板字符串语法去调用函数时，第一个参数始终都是分割好的字符串数组。其余的参数是模板表达式的值。

# 第九题

尝试推测它的输出：

```javascript
(() => {
  let x, y;
  try {
    throw new Error()
  } catch (x) {
    (x = 1), (y = 2);
    console.log(x)
  }
  console.log(x)
  console.log(y)
})()
```

输出：

```latex
1
undefined
2
```

解析：
在 catch 中访问 x，访问的是参数，而不是外面的变量 x。




# 第十题

尝试推测它的输出：

```javascript
class Clazz {}
console.log(typeof Clazz)
```

输出：

```latex
"function"
```

解析：
在 JavaScript 中，Class 也是 function。

# 第十一题

尝试推测它的输出：

```javascript
const arr = [7, 1, 4, 3, 2];
for (const elem of arr) {
  setTimeout(() => console.log(elem), elem);
}
```

输出：

```latex
1
2
3
4
7
```

# 第十二题

尝试推测它的输出：

```javascript
const foo = { bar: 1 };
with(foo) {
  var bar = 2
};
console.log(foo.bar);

```

输出：

```latex
2

```

解析：
with 的对象会作为 global 对象。在 with 使用 var 等价于 window.[xxx]。而这时 foo 就是那个 window。


作者：代码与野兽
链接：https://juejin.cn/post/7133397098719870990
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。





# 第十三题

```js
// a
function Foo () {
 getName = function () {
   console.log(1);
 }
 return this;
}
// b
Foo.getName = function () {
 console.log(2);
}
// c
Foo.prototype.getName = function () {
 console.log(3);
}
// d
var getName = function () {
 console.log(4);
}
// e
function getName () {
 console.log(5);
}
```

# 第十四题

## 按顺序执行后分别输出什么？

1. `Foo.getName();`
2. `getName();`
3. `Foo().getName();`
4. `getName();`
5. `new Foo.getName();`
6. `new Foo().getName();`
7. `new new Foo().getName();`

## 答案

```js
Foo.getName();           // 2
getName();               // 4
Foo().getName();         // 1
getName();               // 1 
new Foo.getName();       // 2
new Foo().getName();     // 3
new new Foo().getName(); // 3
```

## 解析

### 1. Foo.getName()

这一问首先考察的是**函数的基本概念**：在 **JS** 中函数是**第一类对象**，也被称作"一等公民"，这是因为**函数拥有对象所拥有的全部功能**。所以这里的 `Foo.getName()` 可以看作是调用了 `Foo` 对象上的属性，在题目中的 **b** 处有其定义，故结果输出 2 。

### 2. getName()

这里调用的 `getName` 在上下文中被定义了两次，一次是通过变量声明，一次是函数声明，故这一问考察的是**变量声明提升与函数声明提升**，声明提前会让声明提升到代码的最上层，而函数再一次发挥了它"**一等公民**"的特权：**函数声明提升比变量更高**，所以这一问实际执行代码可看作：

```js
function getName() {
    console.log(5);
};

var getName;

getName = function () {
    console.log(4);
};
复制代码
```

两者声明共同提升之后，变量的赋值操作最后执行，所以调用 `getName()` 输出的结果是 4 。

### 3. Foo().getName()

和第一问相比看似只多了个括号，实际考察的内容完全不一样。

> 我们先复习一下 **JS** 中的**运算符优先级**，这是下来全部解题的基础，MDN 汇总表 -> [链接在这里](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FJavaScript%2FReference%2FOperators%2FOperator_Precedence%23%E6%B1%87%E6%80%BB%E8%A1%A8)。

首先成员访问运算从左到右执行，所以我们要先看 `Foo()` 函数做了什么，根据题目 **a** 处的定义：

```javascript
function Foo () {
 getName = function () {
   console.log(1);
 }
 return this;
}
复制代码
```

执行 `Foo()` 之后为 `getName` 赋值一个函数，注意这里的 `getName` 并没有 `var` 关键字，所以还考察了**作用域链**的知识点，**JS** 在遇到未声明的变量时会向上一级一层层查找，前面我们知道了**变量声明会提升**，在全局作用域下 `getName` 是已经被声明的了，所以执行 `Foo()` 的作用其实就是把全局的 `getName` 又赋值了新函数。

而 `Foo()` 本身返回了 `this`，所以这一问又变成了「`this.getName()` 输出什么？」。这里当然也就考察了 **this 关键字** 的知识点，只要记住：**this 谁最后调用它那它就指向谁**，这里的 `this` 没有改变过指向，所以是在全局下执行，也就是执行 `getName()`，执行结果是前面 `Foo()` 赋予的新函数，所以输出了 1 。

### 4. getName()

由于题目条件是顺序执行，所以这里经过了第三问之后全局 `getName` 已经被修改过了，在上一问已经解析完，这里毫无疑问执行输出是 1 。

### 5. new Foo.getName()

乍一看以为是要考察 **new 关键字** 了，其实并没有，它还是考察了上面提到的**运算符优先级**，根据优先级我们可以得出，`Foo.getName()` 是会先执行的，执行完只是输出了第一问的结果，再对其执行 `new` 没有意义，最后输出的还是 2 。

### 6. new Foo().getName()

这里开始考察 **new 关键字** 的概念，但我们还是要先说说这一问涉及的**运算符优先级**问题，可能你看过其它文章解析这一问的时候会说等价于 `(new Foo()).getName()`，可你知道为什么会是这样吗？为什么第 5 问是先执行 `Foo.getName()` 而这一问却是先执行 `new Foo()` 呢？

这是因为 `new` 运算在优先级上有两种形式，一种是带参数列表: `new … ( … )` 优先级 **18**，另一种是无参数列表: `new …` 优先级 **17**，如果优先级不同那么按**优先级最高的运算符先执行**，不用考虑结合性（比如 `1 + 1 * 2` 执行起来就是 `1 + (1 * 2)`），如果优先级相同则按结合性执行（比如赋值运算结合性是"从右到左"，所以 `a = b = 1` 实际为 `a = (b = 1)`），所以这就解释了为什么这一问会是 `new Foo()` 先执行，画个图就理解了：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5eb7ee318f0346a2838986f9076188a9~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

在上一问里成员访问优先级是18，`new`(无参列表)优先级是17，优先级不同，则高优先级先执行，所以上一问先执行 `Foo.getName()`；这一问里 `new`(带参列表)优先级与成员访问同属18，优先级相同，并行下看结合性，`new` 带参时结合性不相关，所以直接执行，成员访问结合性从左到右，所以先拿出 `Foo()` 执行，于是得出了上面等价于 `(new Foo()).getName()` 的结论。

接下来就是 **new** 的相关概念了，首先我们要知道 `new` 关键字做了什么：

> 1. 创建新对象并将 `.__proto__` 指向构造函数的 `.prototype`
> 2. 将 `this` 指向新创建的对象
> 3. 返回新对象

回到题目当中，`new Foo()` 以 `Foo` 为原型创建了一个新对象，这个实例本身并没有 `geiName` 这个方法，但是题目 **c** 处在 `Foo` 函数的原型上挂载过一个 `getName` 方法，最终实例会通过**原型链**访问到 `Foo.prototype.getName()` 这个方法，结果输出 3 。

> **原型链**知识点：每个函数实例对象都有一个 `__proto__` 属性，`__proto__` 指向了 `prototype`，当访问实例对象的属性或方法，会先从自身构造函数中查找，如果找不到就通过 `__proto__` 去原型中查找。

### 7. new new Foo().getName()

考察的上一问其实已经讲完了，还是一样画张图：

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1aa346d483b143aa9c6a8495d1c4a87a~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?)

所以得出实际执行的是：`new(new Foo().getName())`  

`new Foo().getName()` 在上一问可知实例最终访问 `Foo` 原型链上的方法，最终为创建 `new(Foo.prototype.getName())` 的实例返回，结果输出 3 。


作者：茶无味的一天
链接：https://juejin.cn/post/7140901067327275044
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 第十五题

## Instanceof能否判断基本数据类型？

能。比如下面这种方式: 

```javascript
class PrimitiveNumber {     
    static [Symbol.hasInstance](x) {         
        return typeof x === 'number'         
    }    
}     
console.log(111 instanceof PrimitiveNumber) // true
```

其实就是自定义instanceof行为的一种方式，这里将原有的instanceof方法重定义，换成了typeof，因此能够判断基本数据类型。



作者：马祎繁
链接：https://juejin.cn/post/7130161240181047309
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



## 第十六题 for in ;for of

**for in 遍历 key；for of 遍历value**



```js
let arr=[1,2,3,4]
for( var key in arr){
    console.log('key',key)
}
for( var value of arr){
    console.log('value',value)
}
```

![image-20221010225016021](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202210102250188.png)







