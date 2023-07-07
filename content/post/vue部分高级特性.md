title: vue部分知识点
author: kif
tags:
  - Vue.js
categories:
  - 学习笔记
abbrlink: 4e3b
date: 2021-07-16 13:22:00
---
### vue是什么

用于构建用户界面的渐进式开源JS框架，是创建单页应用的Web框架

核心特征：

1. 数据驱动mvvm
2. 组件化
3. 指令系统

### SPA与MPA

#### SPA

单页应用：

动态重写当前页面数据用以用户交互

#### MPA：

多页应用，每一个页面都是主页面

#### SPA首加载慢：

原因：网络延时，资源体积太大

解决办法：减小入口文件体积，Gzip压缩，静态资源缓存

### v-if和v-show

作用：都是控制元素显示与否

不同点：

作用机理，v-if控制的是元素是否渲染，而v-show控制css的display属性，故频繁改变现隐状态使用v-show可以减少消耗

### Vue实例挂载过程

1. 调用_init方法(其中定义set、get、delete、destory方法；定义on,off,emit事件；定义update,forceupdate,destoryed生命周期)
2. 调用$mount挂载实例对象
3. 挂载是执行mountcomponent方法
4. 调用render函数创建虚拟dom
5. 调用updatemount将虚拟DOM挂载到真实DOM，并渲染到页面中

### v-if和v-for

不建议同时作用于同一元素，v-for优先级高于v-if，故每次都会现循环渲染，在逻辑判断

### 路由懒加载

整个网页默认是刚打开就去加载所有页面，路由懒加载就是只加载你当前点击的那个模块。

按需去加载路由对应的资源，提高首屏加载速度（tip:首页不用设置懒加载，而且一个页面加载过后再次访问不会重复加载）。

实现原理：将路由相关的组件，不再直接导入了，而是改写成异步组件的写法，只有当函数被调用的时候，才去加载对应的组件内容。

未启用：

```js
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
   routes: [
       {
          path: '/',
          name: 'HelloWorld',
          component:HelloWorld
        }
   ]
})
```

ES 提出的import方法启用：

```js
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const HelloWorld =()=>import("@/components/HelloWorld")
export default new Router({
   routes: [
       {
          path: '/',
          name: 'HelloWorld',
          component:HelloWorld
        }
   ]
})
```

简化：

```js
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
//const HelloWorld =()=>inport("@/components/HelloWorld")
export default new Router({
   routes: [
       {
          path: '/',
          name: 'HelloWorld',
          component:()=>import("@/components/HelloWorld")
        }
   ]
})
```



### 为什么data是函数不是对象

- 根实例对象`data`可以是对象也可以是函数（根实例是单例），不会产生数据污染情况
- 组件实例对象`data`必须为函数，目的是为了防止多个组件实例对象之间共用一个`data`，产生数据污染。采用函数的形式，`initData`时会将其作为工厂函数都会返回全新`data`对象





### vue2和vue3双向绑定

#### vue2：

通过 object.defineProperty 实现，这种方法不会监听到属性变化和数组变化，会造成

##### 问题：**动态给vue的data添加一个新的属性时页面不会刷新**

Object.defineProperty原理：

```js
let obj={}
Object.defineProperty(obk,'foo',{
    get(){
        return val
    },
    set(newVal){
        if(newVal!=val){
           val = newVal
        }
    }
})
```

​	所以set只能对初始化是已经存在的属性进行赋值，无法拦截到新增属性；

##### 解决方法

1. Vue.set()
2. object.assign()
3. forceUpdate()强制刷新



#### vue3

针对vue2中的问题，Vue3 使用了ES6新增的Proxy代理来拦截变化，可以监听到属性以及数组变化





### Vue中组件和插件

#### 组件

定义：每一个.vue文件都可以视作一个组件，方便调试， 利于维护等；

##### 编写模式：

每一个vue文件模板：

```vue
<template></template>
<script>
exprot default{
    
    }
</script>
<style></style>
```

我们还可以通过`template`属性来编写一个组件，如果组件内容多，我们可以在外部定义`template`组件内容，如果组件内容并不多，我们可直接写在`template`属性上

```js
<template id="testComponent">     // 组件显示的内容
    <div>component!</div>   
</template>

Vue.component('componentA',{ 
    template: '#testComponent'  
    template: `<div>component</div>`  // 组件内容少可以通过这种形式
})
```

##### 注册形式：







### Vue组件之间的通信方式

- 父子关系的组件数据传递选择 `props` 与 `$emit`进行传递，也可选择`ref`
- 兄弟关系的组件数据传递可选择`$bus`，其次可以选择`$parent`进行传递
- 祖先与后代组件数据传递可选择`attrs`与`listeners`或者 `Provide`与 `Inject`
- 复杂关系的组件数据传递可以通过`vuex`存放共享的变量



### vue的mixin

`mixin`（混入），提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能。

本质其实就是一个`js`对象，它可以包含我们组件中任意功能选项，如`data`、`components`、`methods`、`created`、`computed`等等

我们只要将共用的功能以对象的方式传入 `mixins`选项中，当组件使用 `mixins`对象时所有`mixins`对象的选项都将被混入该组件本身的选项中来

在`Vue`中我们可以**局部混入**跟**全局混入**

### vue中key的原理

1. 当我们在使用`v-for`时，需要给单元加上`key`
2. 用`+new Date()`生成的时间戳作为`key`，手动强制触发重新渲染

### keep-alive

某些情况下不需要对组件重新加载，使用 kepp-alive使得组件可以缓存起来

使用方法：

路由中设置是否缓存

```js
{
	path:'list',
	name:'itemList',
	component:()=>import('@/conponents/list'),
	meta:{
		keepalive:true,
		title:'标题页'
	}
}
```

```vue
<div>
    <keep-alive>
        <router-view v-if='$route.meta.keepalive'></router-view>
    </keep-alive>
</div>
```

### Vue常用的修饰符

`vue`中修饰符分为以下五种：

- 表单修饰符
- 事件修饰符
- 鼠标按键修饰符
- 键值修饰符
- v-bind修饰符

#### 表单修饰符

###### lazy

在我们填完信息，光标离开标签的时候，才会将值赋予给`value`，也就是在`change`事件之后再进行信息同步

```vue
<input type='text' v-model.lazy="message">
```

###### trim

自动过滤用户输入的首空格字符，而中间的空格不会过滤

```vue
<input type='text' v-model.trim="value">
```

######  number

自动将输入的值转为number

```vue
<input type="number" v-model.number="value">
```

#### 事件修饰符

######  stop

阻止冒泡事件，相当与调用event.stopPropagation()

```vue
<button @click.stop="on">
    点击
</button>
```

###### prevent

阻止默认事件

```vue
<button @click.prevent="on">
    dian
</button>
```

###### once

只触发一次

```vue
<button @click.once="shout(1)">ok</button>
```

####  鼠标按钮修饰符

鼠标按钮修饰符针对的就是左键、右键、中键点击，有如下：

- left 左键点击
- right 右键点击
- middle 中键点击

```vue
<button @click.left="shout(1)">ok</button>
<button @click.right="shout(1)">ok</button>
<button @click.middle="shout(1)">ok</button>
```

#### v-bind修饰符

###### async

能对`props`进行一个双向绑定

```vue

//父组件
<comp :myMessage.sync="bar"></comp> 
//子组件
this.$emit('update:myMessage',params);
```

### 自定义指令

#### 实现

自定义指令有全局注册与局部注册

###### 全局注册

`Vue.directive`第一个参数是指令的名字（不需要写上`v-`前缀），第二个参数可以是对象数据，也可以是一个指令函数

###### 局部注册

局部注册通过在组件`options`选项中设置`directive`属性



使用自定义指令可以满足我们日常一些场景，这里给出几个自定义指令的案例：

- 防抖
- 图片懒加载
- 一键 Copy的功能



### diff算法

作用：同级树节点的高效比较算法

特点：同级比较，循环从两边向中间

新旧`VNode`节点如下图所示：

![img](https://static001.infoq.cn/resource/image/80/6d/80dc339f73b186479e6d1fc18bfbf66d.png)

第一次循环后，发现旧节点D与新节点D相同，直接复用旧节点D作为`diff`后的第一个真实节点，同时旧节点`endIndex`移动到C，新节点的 `startIndex` 移动到了 C

![img](https://static001.infoq.cn/resource/image/76/54/76032c78c8ef74047efd42c070e48854.png)

第二次循环后，同样是旧节点的末尾和新节点的开头(都是 C)相同，同理，`diff` 后创建了 C 的真实节点插入到第一次创建的 B 节点后面。同时旧节点的 `endIndex` 移动到了 B，新节点的 `startIndex` 移动到了 E

![img](https://static001.infoq.cn/resource/image/1c/d7/1c76e7489660188d35f0a38ea8c8ecd7.png)

第三次循环中，发现E没有找到，这时候只能直接创建新的真实节点 E，插入到第二次创建的 C 节点之后。同时新节点的 `startIndex` 移动到了 A。旧节点的 `startIndex` 和 `endIndex` 都保持不动

![img](https://static001.infoq.cn/resource/image/4b/08/4b622c0d61673ec5474465d82305d308.png)



第四次循环中，发现了新旧节点的开头(都是 A)相同，于是 `diff` 后创建了 A 的真实节点，插入到前一次创建的 E 节点后面。同时旧节点的 `startIndex` 移动到了 B，新节点的`startIndex` 移动到了 B

![img](https://static001.infoq.cn/resource/image/59/b4/5982417c3e0b2fa9ae940354a0e67ab4.png)

第五次循环中，情形同第四次循环一样，因此 `diff` 后创建了 B 真实节点 插入到前一次创建的 A 节点后面。同时旧节点的 `startIndex`移动到了 C，新节点的 startIndex 移动到了 F

![img](https://static001.infoq.cn/resource/image/16/86/16cf0ef90f6e19d26c0ddffeca067e86.png)

新节点的 `startIndex` 已经大于 `endIndex` 了，需要创建 `newStartIdx` 和 `newEndIdx` 之间的所有节点，也就是节点F，直接创建 F 节点对应的真实节点放到 B 节点后面

![img](https://static001.infoq.cn/resource/image/dc/ad/dc215b45682cf6c9cc4700a5425673ad.png)

### Axios

定义：是轻量级的Http库，基于XMLHttpRequest,支持promise

#### 封装

项目中对于请求的header，超时时间，不同环境的不同api地址等问题，统一管理便于代码维护

##### 设置请求前缀

```js
if(a){
    axios.defaults.baseURL='a'
}else{
    axios.defaults.baseURL='b'
}
```



##### 封装请求

```js
//get
export function httpGet({
    url,
    params = {}
}) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params
        }).then(res => resolve(res)).catch(err => reject(err))
    })
}
//post

export function httpPost({
    url,
    params = {},
    data = {}
}) {
    return new Promise((resolve, reject) => {
        axios({
            url,
            method: 'POST',
            data: data,
            params
        }).then((res) => {
            resilve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
```

#### 拦截器interceptors

##### 请求拦截器

如有token时header加入token

```js
axios.intercepter.request.use(config => {
    let token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
    }
    return config
})
```



##### 响应拦截器

```js
axios.intercepter.response.use(response=>{
    if(response.status==400){
        return Promise.reject(response)
    }else{
       // ...
    }
})
```



### SSR解决了什么问题？有做过SSR吗？你是怎么做的

SSR主要解决了以下两种问题：

- seo：搜索引擎优先爬取页面`HTML`结构，使用`ssr`时，服务端已经生成了和业务想关联的`HTML`，有利于`seo`
- 首屏呈现渲染：用户无需等待页面所有`js`加载完成就可以看到页面视图（压力来到了服务器，所以需要权衡哪些用服务端渲染，哪些交给客户端）



### vue要做权限管理该怎么做？如果控制到按钮级别的权限怎么做？

#### 接口权限

后端JWT，登录完拿到`token`，将`token`存起来，通过`axios`请求拦截器进行拦截，每次请求的时候头部携带`token`

##### 路由权限控制



### Vue项目中你是如何解决跨域

跨域本质是浏览器基于**同源策略**的一种安全手段

同源策略：

1. 协议
2. 主机
3. 端口



解决跨域的方法有很多，下面列举了三种：

- JSONP
- CORS
- PROXY

#### cors

后端方案

django模块：django-cors-headers

```
pip install django-cors-headers
```



#### Proxy

1. webpack可以设置
2. 服务端设置
3. nginx设置反向代理




特性以及部分原理
自定义指令（directive）
除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令。有时候我们想对dom进行操作的时候，就可以使用自定义指令，比如设置标题样式并且让标题一直固定在页面上方，可以使用全局注册或者局部注册。然后你可以在模板中任何元素上使用新的 v-title property。

```
//全局注册
<div id="app">
    <div v-title>hello world</div>
</div>
<script>
    Vue.directive('title', {
        inserted: function (el) {
            console.log(el)
            el.style.position = 'fixed' 
            el.style.top = '50px' 
            el.style.left = '48%' 
            el.style.color = '#409EFF' 
        }
    })

    new Vue({
        el: '#app',
        data: {
            message: 'hello!'
        }
    })
</script>
<style>
   #app{
       height: 1000px
   } 
</style>
//局部注册
  new Vue({
    el: '#app',
    directives: {
        title: {
            inserted: function (el) {
                console.log(el)
                el.style.position = 'fixed'
                el.style.top = '50px'
                el.style.left = '48%'
                el.style.color = '#409EFF'
            }
        }
    }
  })

```

![image-20210716132337860](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210716132337.png)

#### irective钩子函数参数

指令钩子函数会被传入以下参数：

- el：指令所绑定的元素，可以用来直接操作 DOM。
- binding：一个对象，包含以下 property：

1. name：指令名，不包括 v- 前缀。
2. value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
3. oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
4. expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
5. arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
6. modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。

- vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。
- oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。

我们打印下函数传入的参数，其实简单来说就是el就是绑定dom元素，binging指令：后所携带的具体内容，VNode就当还未生成的节点好了。

```
<div v-title:arr="message">hello world</div>
Vue.directive('title', {
        inserted: function (el, binding, vnode) {
            console.log(el, binding, vnode)
            el.style.position = 'fixed' 
            el.style.top = '50px' 
            el.style.left = '48%' 
            el.style.color = '#409EFF' 
        }
    })
复制代码
```

![image-20210716132408088](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210716132408.png)




#### 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
- componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用
- unbind：只调用一次，指令与元素解绑时调用。

我们可以测试下钩子函数的调用时机：

```
<div id="app">
    <div id="txt" v-title:data="sum">value: {{sum}}</div>
</div>
<script>
    new Vue({
        el: '#app',
        data: {
            sum: 0
        },
        directives: {
            title: {
                bind: (el, bind) => { console.log(bind.value, 'a') },// 第一次绑定元素时调用
                inserted: (el, bind) => { console.log(bind.value, 'b') },// 当被绑定的元素插入到 DOM 中时……
                update: (el, bind) => { console.log(bind.value, 'c') },// 所在组件VNode发生更新时调用
                componentUpdated: (el, bind) => { console.log(bind.value, 'd') }, // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
                unbind: (el, bind) => { console.log(bind.value, 'e') }    // 只调用一次，指令与元素解绑时调用
            }
        },
        mounted() {
            console.log(this.sum, '???')
            let timer = setInterval(() => {
                this.sum++
            }, 200)
            setTimeout(() => {
                clearInterval(timer)
            }, 3000)
        }
    })
</script>
```

![image-20210716132434649](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210716132434.png)





#### 指令大致原理

在页面渲染的过程中，分别有创建(create)、激活(avtivate)、更新(update)、移除(remove)、销毁(destroy)，在这些过程中，框架在每个时段都会调用相应的钩子函数，这些hooks中一部分的函数就包含了我们的指令。源码部分我了解的不多，给大家推荐一篇vue指令原理相关博文[www.cnblogs.com/gerry2019/p…](https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fgerry2019%2Fp%2F14940770.html%E3%80%82)

### 混入

官方是这样定义的：混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。其实就是vue实例的一个复用。实用场景：公共组件或者功能，例如获取用户白名单、菜单返回、公共基础table。 值得注意的点：

1. 当组件和混入对象含有同名选项时，这些选项将以恰当的方式混合。比如，数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先。
2. 同名钩子函数将混合为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
3. 值为对象的选项，例如 methods, components 和 directives，将被混合为同一个对象。两个对象键名冲突时，取组件对象的键值对。

```
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
复制代码
```

### 高阶组件

一个函数接受一个组件为参数，返回一个包装后的组件。其实在vue中，组件可以当做一个函数，那从本质上来说，高阶组件就是高阶函数（JavaScript的函数其实都指向某个变量。既然变量可以指向函数，函数的参数能接收变量，那么一个函数就可以接收另一个函数作为参数，这种函数就称之为高阶函数）

#### 高阶函数

举例一个最简单的高阶函数计算次方

```
 function pow(x, y, f){
    return f(x, y);
  }
  pow(3, 3, Math.pow)
复制代码
```

在es6中也有很多高阶函数，如map、reduce、filter。

#### 高阶组件的例子

```
<div id="app">
    <hoc></hoc>
</div>
<script>
    const view = {
        template: `<span>
                    <span>test hoc ...</span>
                    </span>`,
        props: ["result", "loading"],
    };
    const test = (wrapped, txt = 'hello') => {
        return {
            render(h) {
                const args = {
                    props: {
                        result: this.result,
                        loading: this.loading,
                    },
                };
                const wrapper = h("div", [
                    h(wrapped, args),
                    'loading'
                ]);
                return wrapper
            }
        }
    }
    const hoc = test(view, 'hui')
    console.log(hoc);

    new Vue({
        el: '#app',
        components: {
            hoc
        },
        data: {
            sum: 0
        }
    })
</script>
复制代码
```

![image-20210716132510491](https://gitee.com/wkkif/PicGoimg/raw/master/img/20210716132510.png)



#### 值得注意的点

1. 高阶组件(HOC)应该是无副作用的纯函数，且不应该修改原组件,就是组件是一个新的组件，不会对原组件做修改。
2. 高阶组件(HOC)不关心你传递的数据(props)是什么，并且被包装组件(WrappedComponent)不关心数据来源
3. 高阶组件(HOC)接收到的 props 应该透传给被包装组件(WrappedComponent)
4. 在高阶组件中渲染函数向子组件中传递作用域插槽时候要注意上下文

### 动态组件 异步组件 递归组件

#### 动态组件

可以在同组件之间进行动态切换， 动态切换可以通过 Vue 的  元素加一个特殊的 is attribute 来实现：

```
<!-- 组件会在 `currentTabComponent` 改变时改变 -->
<!DOCTYPE html>
<html>
  <head>
    <title>Dynamic Components Example</title>
    <script src="https://unpkg.com/vue"></script>
    <style>
      .tab-button {
        padding: 6px 10px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
      }
      .tab-button:hover {
        background: #e0e0e0;
      }
      .tab-button.active {
        background: #e0e0e0;
      }
      .tab {
        border: 1px solid #ccc;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div id="dynamic-component-demo" class="demo">
      <button
        v-for="tab in tabs"
        v-bind:key="tab"
        v-bind:class="['tab-button', { active: currentTab === tab }]"
        v-on:click="currentTab = tab"
      >
        {{ tab }}
      </button>

      <component v-bind:is="currentTabComponent" class="tab"></component>
    </div>

    <script>
      Vue.component("tab-home", {
        template: "<div>Home component</div>"
      });
      Vue.component("tab-posts", {
        template: "<div>Posts component</div>"
      });
      Vue.component("tab-archive", {
        template: "<div>Archive component</div>"
      });

      new Vue({
        el: "#dynamic-component-demo",
        data: {
          currentTab: "Home",
          tabs: ["Home", "Posts", "Archive"]
        },
        computed: {
          currentTabComponent: function() {
            return "tab-" + this.currentTab.toLowerCase();
          }
        }
      });
    </script>
  </body>
</html>
复制代码
```

#### 异步组件

在大型应用中，我们可能需要将应用分割成小一些的代码块，并且只在需要的时候才从服务器加载一个模块。为了简化，Vue 允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue 只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。

```
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // 向 `resolve` 回调传递组件定义
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
复制代码
```

在vue-cli中在使用异步组件

```
const first =()=>import(/* webpackChunkName: "group-foo" */ "../components/first.vue");
复制代码
```

### vue中部分钩子函数(@hook)

Vue 实例同时在其事件接口中提供了其它的方法。我们可以：

> 通过 $on(eventName, eventHandler) 侦听一个事件

> 通过 $once(eventName, eventHandler) 一次性侦听一个事件

> 通过 $off(eventName, eventHandler) 停止侦听一个事件

你通常不会用到这些，但是当你需要在一个组件实例上手动侦听事件时，它们是派得上用场的。它们也可以用于代码组织工具。例如，你可能经常看到这种集成一个第三方库的模式。官网提供一个案例：在不使用beforeDestroy钩子清picker

```
//案例一
mounted: function () {
  var picker = new Pikaday({
    field: this.$refs.input,
    format: 'YYYY-MM-DD'
  })

  this.$once('hook:beforeDestroy', function () {
    picker.destroy()
  })
}
//案例二
//在父组件在子组件渲染阶段做一些操作
<child
  @hook:mounted="handle"
  @hook:beforeUpdated="xxx"
  @hook:updated="xxx"
/>
method () {
  handle() {
  // do something...
  }
},
复制代码
```

在vue生命周期中周期都有对应的钩子函数

### 插件

插件通常用来为 Vue 添加全局功能。插件的功能范围没有严格的限制——一般有下面几种：

- 添加全局方法或者 property。如：vue-custom-element
- 添加全局资源：指令/过滤器/过渡等。如 vue-touch
- 通过全局混入来添加一些组件选项。如 vue-router
- 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 vue-router

自定义插件

```
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
复制代码
```

部分参考：
作者：仅九
链接：https://juejin.cn/post/6985035199432097823