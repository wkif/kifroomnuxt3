---
title: javascript系列学习笔记-this
author: kif
tags:
  - this
  - javascript
categories:
  - 学习笔记
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/img/202211081854956.png'
coverWidth: 1200
coverHeight: 750
abbrlink: '4016'
date: 2022-10-14 14:32:00
---

#  javascript系列学习笔记-this

> 笔记内容来自 《你不知道的Javascript》 (上)

##   为什么要用this

```js
function getName() {
    console.log('this.name', this.name)
}
let a = {
    name: 'kif1'
}
let b = {
    name: 'kif2'
}
getName.call(b)
```

上面代码可以在不同对象上下文（a,b）上使用 getName这个方法，不用针对每个对象编写不同版本的函数；

如果不用this，就需要给getName方法显示的传入一个上下文对象：

```js
let a = {
    name: 'kif1'
}
let b = {
    name: 'kif2'
}
function getName(context) {
    console.log('context.name', context.name)
}
getName(a)
```

**this提供了一种更优雅的方式来隐式“传递”对象引用，可以让API设计得更加简洁和易于复用**



##   绑定规则

### 默认绑定

最常用的调用规则：独立函数调用

```js
function foo(){
	console.log(this.a)
}
var a=2
foo() //2

```

上面代码中console.log(this.a) 会输出2，因为函数调用时应用了默认绑定，this指向了全局对象

> 如果开启严格模式，就无法使用默认绑定
>
> ![image-20221014174535684](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202210141745904.png)



### 隐式绑定

另一条需要注意的是调用位置是否否上下文对象，或者被对象包含或拥有

```js
function foo() {
    console.log(this.a)
}
let obj = {
    a:12,
    foo:foo
}
//调用位置
obj.foo() //12
```

调用位置会使用obj上下文来引用foo，有上下文时隐式绑定规则会将this绑定到这个上下文对象，

**对象属性引用链只有最顶层或者说最后一层会影响调用位置，因此：**

```js
function foo() {
    console.log(this.a)
}
let obj = {
    a:12,
    foo:foo
}
let obj2={
    a:111,
    obj:obj
}
obj2.obj.foo() //12
```

#### 隐式丢失

常见的this绑定问题就是隐式丢失而应用了默认绑定，eg：

```js
function foo() {
    console.log(this.a)
}
let obj = {
    a:12,
    foo:foo
}
let fun = obj.foo

let a = 333

console.log(this.a)  //333
```

### 显示绑定

**call，apply，bind**

上面隐式绑定需要在对象上包含一个指向函数的属性，并通过属性间接引用函数，，如果不想再对象属性里间接引用函数，而是在某个对象上强制调用某个函数，则需要 **显示绑定**

```js
function foo(){
    console.log(this.a)
}
let obj = {
    a:123
}
foo.call(obj) //123
```

>  call和apply区别在于参数，第一个参数是原始值（字符串，数字，布尔）时，原始值会被转为对象形式，也就是 new String(),new Boolean,new Number(),这被成为 **装箱**

显示绑定无法解决上面的绑定丢失问题，但可以使用其变形：**硬绑定**

#### 硬绑定

```js
function foo(){
    console.log(this.a)
}
let obj = {
    a:123
}
let func = function(){
    foo.call(obj)
}

func() //123
```

> 硬绑定后不能再修改！



##### 典型应用：

包裹函数：

```js
function foo(value){
    console.log('value',value)
    return  this.a+value
}
let obj = {
    a:123
}
let func = function(){
   return foo.call(obj,...arguments)
}

let res = func(222)
console.log(res) //345（123+222）
```



硬绑定很常用，所以ES5中内置了**Function.prototype.bind**：

```js
function foo(){
    console.log(this.a)
}
let obj = {
    a:123
}
let func = foo.bind(obj)

func() //123
```



### new 绑定



```js
function foo(a){
    this.a=a
}
let bar = new foo(12)
console.log(bar.a)
```



## 优先级

**显示绑定>new绑定>隐式绑定>默认绑定**

## 判断this

1. 是否是**new**绑定？是的话this指向新创建的对象

   var bar = new foo()

2. 是否通过call，apply（显示绑定）或者硬绑定（bind）？是的话this绑定的是指定对象

   var bar = foo.call(obj)

3. 函数是否在某个上下文对象中调用（隐式绑定）？是的话this绑定这个上下文对象

   var bar = obj.foo()

4. 都不是的话默认绑定，严格模式下绑定到undefined，否则绑定到全局对象

   var = foo()

## 规则例外

### 被忽略的this

将null或者undefined作为参数传到call，apply,bind时，会被忽略而应用默认规则

```

```







## 手写call:

1. 将函数设置为传入对象的属性；
2. 执行该函数；
3. 删除该属性； 



```js
Function.prototype.call1 = function () {
    // 初始化，获取传入的this对象和后续所有参数
    const [context, ...args] = [...arguments];
    // 在传入的对象上设置属性为待执行函数
    context.fn = this;
    // 执行函数
    const res = context.fn(args);
    // 删除属性
    delete context.fn;

    // 返回执行结果
    return res;
  };
```

















