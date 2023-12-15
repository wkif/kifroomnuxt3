---
title: React系列：Rematch
author: kif
tags:
  - React
  - ''
categories:
  - 学习笔记
abbrlink: 8a59
date: 2023-08-05 11:31:00
---



> link: https://rematchjs.org/
>
> https://rematch.gitbook.io/handbook/

Rematch是没有boilerplate的Redux最佳实践。没有多余的action types，action creators，switch 语句或者thunks。

## 安装

```
yarn add @rematch/core
```



## 使用

为了规范管理，建议将Rematch相关文件放到同一目录下（eg: models）

### 新建 model.ts

> 此文件用来编写相同功能模块的state， reducers， async actions 和 action creators ，当模块过多，多个模块在同一个 models 文件时，不便于维护，所以此文件可以根据具体功能划分为多个models，例如：user.ts,book.ts等



```TS
import { createModel } from "@rematch/core";

export const count = createModel()({
  state: 0, // initial state
  reducers: {
    // handle state changes with pure functions
    increment(state, payload: number) {
      return state + payload;
    },
  },
  effects: (dispatch) => ({
    // handle state changes with impure functions.
    // use async/await for async actions
    async incrementAsync(payload: number, state) {
      console.log("This is current root state", state);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      dispatch.count.increment(payload);
    },
  }),
});
```

以上面这个官网的例子为例：每个Model 对象包含三个属性和方法：state，reducers，effects，其中 state 为初始state，reducers对象里面可以定义多个方法对state进行修改，对于需要异步修改state的情况，需要使用effects

如对于一个维护用户登录信息的Model，可以像下面定义  Login.ts：

```ts
import { createModel } from '@rematch/core'
import { loginApi } from "../utils/fetch/login"

export interface IAction {
  name: string,
  pass: string,
  callback?: Function
}
export const login = createModel()({
  name:'login',
  state: {
    userInfo: {
      name: 'kif'
    },
    isLogin: false,
    token: ''
  }, 
  reducers: {
    setUserInfo(state, payload: any) {
      return { ...state, userInfo: payload }
    },
    setlogin(state, playload: boolean) {
      return { ...state, isLogin: playload }
    },
    setToken(state, playload: string) {
      return { ...state, token: playload }
    }
  },
  effects: (dispatch) => ({
    async login(payload: IAction, rootState) {
      const res = await loginApi(payload)
      console.log('effects login!!',res)
      if(res.code===200){
        dispatch.login.setlogin(true)
        dispatch.login.setToken(res.token)
      }
    },
  }),
});
```

上面定义了 初始化state为一个对象：

```ts
 state: {
    userInfo: {
      name: 'kif'
    },
    isLogin: false,
    token: ''
  }, 
```

包含三个状态量，分别有三个修改方法：setUserInfo，setlogin，setToken;一个异步修改方法 login，其中异步修改方法调用了两个修改函数；



### 新建 models.ts

注意区分此文件和上面的文件！对于可能存在的多个model，我们在这个models文件里面统一暴露出去。

```ts
import { Models } from '@rematch/core'
import { login } from './login'
export interface RootModel extends Models<RootModel> {
  login: typeof login
}
export const models: RootModel = {
  login
}

```

文件引入上面的login.ts 等model，并封装一个 RootModel类型和名为models对象， 之后RootModel类型可以在每一个model创建的时候进行类型规范，即：

```ts
import { createModel } from '@rematch/core'
import { RootModel } from './modles'
export const login = createModel<RootModel>()({})
```

### 新建index.ts

对于上面封装好的models，在此文件初始化

```ts
import { init, RematchDispatch, RematchRootState } from '@rematch/core';
import type { RootModel } from './modles';
import { models } from './modles';

export const store = init({
  models,
})
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

```



至此Rematch相关初始化工作就完成了，下面需要在tsx中使用。



### View

在APP.tsx或者其他父级View上“注入”,例如下面APP.tsx

```ts
import React from 'react'
import { Provider } from 'react-redux';
import { store } from './src/models/store';

export default function App() {
  return (
      <Provider store={store}>
        <Navigator />
      </Provider>
  )
}
```

### 访问state

```
import { store } from './models/store'
const {isLogin} = store.getStore().login
```



### 触发effects事件

1. 依赖于useDispatch

```tsx
import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'

import {  Dispatch } from '../models/store'


export default function Login() {
  const dispatch = useDispatch<Dispatch>();
  const login = () => {
    dispatch.login.login({
      name: 'lkif',
      pass: '123123'
    })
  }
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>login</Text>
      <Button title="login" onPress={()=>{
        login()
      }} />
    </View>
  )
}

const styles = StyleSheet.create({})

```

通过 `const dispatch = useDispatch<Dispatch>();` 创建类型为Dispatch的对象，进而访问name为login的model的login异步事件；

