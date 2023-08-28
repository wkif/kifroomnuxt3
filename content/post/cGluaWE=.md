---
title: pinia
author: kif
tags:
  - pinia
categories:
  - 学习笔记
abbrlink: 32d2
date: 2022-06-26 11:09:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/project/202206261119013.png
coverWidth: 1200
coverHeight: 750
---
# Pinia

## 介绍：

状态管理工具，代替Vuex

## 安装：

```
npm install pinia
```

## 配置：

main.ts：

```ts
import {createPinia} from 'pinia'//导入

const state = createPinia()//
app.use(state)//
```

## 初始化仓库

src/store/index.ts

```ts
import { defineStore } from 'pinia'
import { names } from './store_name'
export const userTestStore = defineStore(names.name, {
    state: () => {
        return {
            name: 'kif',
            age: 18
        }
    },
    getters: {},
    // 
    actions: {}
})
```

store_name.ts

```ts
export const names = {
    name: 'kif'
}
```

## 使用：

### 获取

```vue
<script setup lang="ts">

import { userTestStore } from '../store';

let test = userTestStore()


</script>

<template>
    store:{{ test.name }}
</template>
<style scoped>
</style>
```

### 修改

#### 直接修改

```vue
<script setup lang="ts">

import { userTestStore } from '../store';

let test = userTestStore()
const change = () => {
    test.name = 'kif2'
    test.age++
}

</script>

<template>
    store:{{ test.name }}--{{ test.age }}
    <br />
    <button @click="change">直接修改</button>
</template>
<style scoped>
</style>
```

#### $patch

批量修改

```ts
const change2 = () => {
    test.$patch({
        name: 'kif3',
        age: 3

    })
}
```

#### $patch 工厂函数

优势是可以逻辑判断

```ts
const change3 = () => {
    test.$patch((state) => {
        if (state.age < 20) {
            state.age++
        }
    })
}
```

####  $state

缺点，一次必须修改全部

```ts
const change4 = ()=>{
    test.$state={
        name : 'kif2',
        age:67
    }
}
```



#### action

```ts
  actions: {
        updateData(num:number){
            this.name = 'kifN'
            this.age+=num
        }
    }
```





```ts
const change5=(num:number)=>{
    test.updateData(num)
}
```



> 解构出来的store数据不具有响应式，可以使用storetoref解决



### actions

支持同步和异步操作

异步：

```ts
import { defineStore } from 'pinia'
import { names } from './store_name'
type data = {
    name: string,
    age: number
}
const login = (): Promise<data> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'kifNew',
                age: 189
            })
        }, 2000)
    })
}

export const userTestStore = defineStore(names.name, {
    state: () => {
        return {
            name: 'kif',
            age: 18
        }
    },
    getters: {},
    // 
    actions: {
        async Login() {

            let res = await login()
            this.name = res.name
            this.age = res.age
        }
    }
})
```

```ts
const change6 = () => {
    test.Login()
}
```

