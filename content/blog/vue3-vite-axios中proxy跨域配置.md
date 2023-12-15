---
title: vue3+vite+axios中proxy跨域配置
author: kif
tags:
  - vue3
  - vite
  - Axios
categories:
  - 学习笔记
abbrlink: '4955'
date: 2022-06-26 11:08:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/project/202206261120941.png
coverWidth: 1200
coverHeight: 750
---
## axios引入

安装：

```
npm install axios -S    
```

src目录下创建api目录，下新建axios.js

axios.js

```js
import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
	baseURL: '/api', // 所有的请求地址前缀部分
	timeout: 60000, // 请求超时时间毫秒
	withCredentials: true, // 异步请求携带cookie
	headers: {
		// 设置后端需要的传参类型
		'Content-Type': 'application/json',
		'token': 'your token',
		'X-Requested-With': 'XMLHttpRequest',
	},
})

// 添加请求拦截器
service.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		return config
	},
	function (error) {
		// 对请求错误做些什么
		console.log(error)
		return Promise.reject(error)
	}
)

// 添加响应拦截器
service.interceptors.response.use(
	function (response) {
		// console.log(response)
		// 2xx 范围内的状态码都会触发该函数。
		// 对响应数据做点什么
		// dataAxios 是 axios 返回数据中的 data
		const dataAxios = response.data
		// 这个状态码是和后端约定的
		const code = dataAxios.reset
		return dataAxios
	},
	function (error) {
		// 超出 2xx 范围的状态码都会触发该函数。
		// 对响应错误做点什么
		console.log(error)
		return Promise.reject(error)
	}
)

export default service

```



调用：

```ts
import service from '../axios'


export function getTest() {
    return service({
        url: '/pyq/index.php',//Api就是proxy中的target地址
        method: "get"
    })
}

export function apiGetUserInfo() {
    return service({
        method: 'get',
        url: '/api/topbaidu/index.php',//Api就是proxy中的target地址
    })
}
```



```ts
<script setup>
import { onBeforeMount } from 'vue'

import { getTest, apiGetUserInfo } from '../api/demo/test'
onBeforeMount(() => {
    apiGetUserInfo().then(res => {
        console.log(res)
    })  // 这里的res是一个promise对象

})


</script>
```



### 代理设置

根目录下新建 vite.config.js

```js
 
module.exports = {
    proxy:{
        '/api':{
            target:' https://v.api.aa1.cn',
            changeOrigin:true,  // 允许跨域
            rewrite:path => path.replace(/^\/api/,'')
        }
    }
 
}
```

