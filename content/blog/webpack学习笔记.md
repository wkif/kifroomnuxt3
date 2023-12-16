---
title: webpack学习笔记
author: kif
tags:
  - webpack
categories:
  - 学习笔记
  - 前端
cover: 'https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241829561.jpg'
coverWidth: 1200
coverHeight: 750
abbrlink: '5883'
date: 2022-04-02 15:36:00
---
学习中。。。

# webpack

## 为什么需要Webpack

原始开发模式各种js文件引入，顺序不能乱，引入的数据太大，各种js之间有关联，可以考虑所有文件复制到一个js文件里，但又有**作用域问题、文件太大、可维护性差**

作用域问题：grunt和gulp两个工具来解决

方法：立即执行函数

```js
; (function () {
    let myName = 'kif'
})()
console.log(myName)//ReferenceError: myName is not defined
let res = (function () {
    let myName = 'kif'
    return myName
})()
console.log(res)//kif
```

文件太大：对于可以js库，只使用其中一个方法而把所有的js文件加载下来不适合

方法：代码差分 commonJs



### CommonJS 模块规范

代表：Node.js

每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。

#### 暴露方法：

**module.exports**

math.js:

```js
const add = function (x, y) {
    return x + y
}
const sub = function (x, y) {
    return x - y
}
module.exports = {
    add,
    sub
}
```

#### 引用方法:

**require**

```js
const math = require('./math.js')
console.log(math.add(4, 5))
```

##### 但只能在Nodejs环境下运行，对于浏览器环境不支持

### requirejs

#### 暴露方法：

define([],function(){})

参数1：[]，内容是需要的模块

参数2：function:回调函数，return 暴露的方法

eg:

add.js

```js
const add=(x,y)=>{
    return x+y
}
define([],function(){
    return add
})
```

#### 引用方法：

require([],function(){})

参数1：引入模块文件

参数2：回调函数，参数是方法，内容直接使用方法

eg:

server.js

```js
require(['./add.js'], function (add) {
    console.log(add(4, 5))
})
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/require.js/2.3.6/require.js"
    data-main="../server.js"></script>
</head>
<body>
    
</body>
</html>
```

![image-20220424144528014](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241445166.png)

### ECMAScript

#### 暴露方法

export default

eg:

add.js

```js
const add = function(x,y){
	return x+y
}
export default add
```



#### 引用方法

import from

eg:

```js
import add from './add.js'
add(1,2)
```

注：script标签需要指定*type*="module",否则：

![image-20220424145025498](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241450543.png)

问题：部分浏览器不支持



### **webpack就可以支持connonjs和使得ECMAScript良好兼容浏览器**



## webpack和同类工具比较

### parcel

"零配置"，少量的库

### rollup

只用来打包js

### webpack

拆分代码、继承大量库、静态文件，支持Commonjs,ESMAScript

### Vite

Vue官方,基于esmodule





## webpack使用

前提：nodejs

![image-20220424150531073](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241505147.png)

安装：

```
npm install webpack webpack-cli --g
```

全局安装

![image-20220424150845797](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241508845.png)



当前工作区安装

```
 npm init -y
 npm install webpack webpack-cli --save-dev
```

![image-20220424151100121](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241511213.png)

将hello.js 和main.js打包

hello.js

```js
function hello(){
    console.log('hello world')
}

export default hello
```

main.js

```js
import hello from './hello.js'
hello()
```

可以注意到使用的的是ESmodule方法

打包：webpack

![image-20220424151534956](https://kifimg.oss-cn-beijing.aliyuncs.com/project/202204241515998.png)

生成dist/bundle.js

```js
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function hello(){
    console.log('hello world')
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hello);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

(0,_hello_js__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
```





## Resource资源模块

```js
module:{
    rules:[
        {
        test: /\.png/, //匹配资源名称，这里是png图片
        type: "asset/resource", //asset/resource 将资源分割为单独的文件，并导出url，就是之前的 file-loader的功能.
        generator: {
          filename: "images/[hash][ext][query]",
        }, //输出文件位置与名称
      },
    ]
}
```

