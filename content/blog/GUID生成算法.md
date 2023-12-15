---
title: GUID生成算法
author: kif
tags: []
categories:
  - 学习笔记
abbrlink: 20a
date: 2020-11-27 09:20:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/imgforhexo/20201202142640.jpg
coverWidth: 1200
coverHeight: 750
---
随机数不管是前端还是后端都会用到的一个地方，不管是从验证码还是各种生成的状态码，基本都是随机生成的，还有就是一些抽奖的算法，也是用随机数来处理的，生成随机数的方法目前是很多的，但是其实很多是重复性很大的，今天简单的讲一下怎么生成随机数重复性很低的一种办法GUID（Globally Unique Identifier）一种由算法生成的二进制长度为128位的数字标识符

不重复的原理：GUID 的总数达到了2^128（3.4×10^38）个，所以随机生成两个相同GUID的可能性非常小，但并不为0。用于生成GUID的算法通常都加入了非随机的参数（如时间），以保证这种重复的情况不会发生。

不BB上代码：

GUID的 js：

```
function GUID() {

    this.date = new Date();

    /* 判断是否初始化过，如果初始化过以下代码，则以下代码将不再执行，实际中只执行一次 */

    if (typeof this.newGUID != 'function') {



        /* 生成GUID码 */

        GUID.prototype.newGUID = function() {

            this.date = new Date();

            var guidStr = '';

                sexadecimalDate = this.hexadecimal(this.getGUIDDate(), 16);

                sexadecimalTime = this.hexadecimal(this.getGUIDTime(), 16);

            for (var i = 0; i < 9; i++) {

                guidStr += Math.floor(Math.random()*16).toString(16);

            }

            guidStr += sexadecimalDate;

            guidStr += sexadecimalTime;

            while(guidStr.length < 32) {

                guidStr += Math.floor(Math.random()*16).toString(16);

            }

            return this.formatGUID(guidStr);

        }

        /*

   * 功能：获取当前日期的GUID格式，即8位数的日期：19700101

     值：返回GUID日期格式的字条串

        */

        GUID.prototype.getGUIDDate = function() {

            return this.date.getFullYear() + this.addZero(this.date.getMonth() + 1) + this.addZero(this.date.getDay());

        }

        /*

   * 功能：获取当前时间的GUID格式，即8位数的时间，包括毫秒，毫秒为2位数：12300933

     值：返回GUID日期格式的字条串

        */

        GUID.prototype.getGUIDTime = function() {

            return this.addZero(this.date.getHours()) + this.addZero(this.date.getMinutes()) + this.addZero(this.date.getSeconds()) + this.addZero( parseInt(this.date.getMilliseconds() / 10 ));

        }

        /*

   * 功能: 为一位数的正整数前面添加0，如果是可以转成非NaN数字的字符串也可以实现

     : 参数表示准备再前面添加0的数字或可以转换成数字的字符串

        * 返回值: 如果符合条件，返回添加0后的字条串类型，否则返回自身的字符串

        */

        GUID.prototype.addZero = function(num) {

            if (Number(num).toString() != 'NaN' && num >= 0 && num < 10) {

                return '0' + Math.floor(num);

            } else {

                return num.toString();

            }

        }

        /*

   * 功能：将y进制的数值，转换为x进制的数值

     ：第1个参数表示欲转换的数值；第2个参数表示欲转换的进制；第3个参数可选，表示当前的进制数，如不写则为10

        * 返回值：返回转换后的字符串

        */

        GUID.prototype.hexadecimal = function(num, x, y) {

            if (y != undefined) {

                return parseInt(num.toString(), y).toString(x);

            } else {

                return parseInt(num.toString()).toString(x);

            }

        }

        /*

   * 功能：格式化32位的字符串为GUID模式的字符串

     ：第1个参数表示32位的字符串

        * 返回值：标准GUID格式的字符串

        */

        GUID.prototype.formatGUID = function(guidStr) {

            var str1 = guidStr.slice(0, 8) + '-',

                str2 = guidStr.slice(8, 12) + '-',

                str3 =  guidStr.slice(12, 16) + '-',

                str4 = guidStr.slice(16, 20) + '-',

                str5 = guidStr.slice(20);

            return str1 + str2 + str3 + str4 + str5;

        }

    }

}
```

HTML代码：

<!DOCTYPE html>
```
<html>

<head>


<meta charset="UTF-8">


<title></title>

<script src="../js/guid.js" type="text/javascript" charset="utf-8"></script>

</head>

<body>



</body>

<script type="text/javascript">


var guid = new GUID();

var radom = guid.newGUID();

/*正则处理一下，将中间的-去掉*/

var str = radom.replace(/-/g, "");

alert(radom);

alert(str);

</script>

</html>
```



---------------------

作者：何处锦绣不灰堆

来源：CSDN

原文：https://blog.csdn.net/qq_41485414/article/details/80106955

