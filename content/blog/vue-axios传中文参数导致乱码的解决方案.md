---
title: vue axios传中文参数导致乱码的解决方案
author: kif
tags:
  - Vue.js
  - Axios
categories: []
abbrlink: 33d0
date: 2020-12-25 17:59:00
---

## 问题描述

```
 var that = this;
          var name = that.signform.signname;
          var username = that.signform.signusername;
          var password = that.signform.signpassword;
          var user_type = that.sign_user_type;
          var email = that.signform.mailAddress;
          var studentid = that.signform.studentid;
          this.$axios({
            method: "post",
            url:
              this.$api +
              `/Register/?name=${name}&username=${username}&password=${password}&user_type=${user_type}&email=${email}&studentid=${studentid}`, //利用了字符串模板来携带id
          })
            .then((res) => {
              console.log(res);
              this.changeCode();
            })
            .catch((req) => {
              // console.log(req);
            });
```

在vue axios post 请求注册用户时，刚开始通过如上字符拼接形式调用api时，在服务器后端出现了utf-8汉语乱码：

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201225180537.png)



图中name字段本是中文，服务器后端出现了utf-8汉语乱码，

查询bing后有如下几种解决办法：

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201225180735.png)



其中有添加

1. headers: {
2. ​			"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
3. ​									},



但个人实验了一下没有解决问题，

之后又试了下js函数把字符转换，没有解决问题。

## 方法：

使用vue axios推荐的vue-axios的使用及其get与post网络请求

即：

get请求时用如下方式代替字符拼接方式

```

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

post请求时一样：

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```



所以项目中最终采取的代码：

```

          let data = new FormData();
          data.append("name", this.signform.signname);
          data.append("username", this.signform.signusername);
          data.append("password", this.signform.signpassword);
          data.append("user_type", this.sign_user_type);
          data.append("email", this.signform.mailAddress);
          data.append("studentid", this.signform.studentid);
          console.log(data);
          var that = this;
          axios
            .post(this.$api + "/Register/", data) //以slash结尾
            .then(function (response) {
              console.log(response.data);
            })
            .catch((err) => {});
```

![](https://gitee.com/wkkif/PicGoimg/raw/master/img/20201225181426.png)

注意的时此时后台时没有显示字段的，但是数据库里已经加入了（注册功能哈）。