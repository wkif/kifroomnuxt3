---
date: 2024-07-09  10:03:16
url: 
aliases: 
tags: 

title: el-table固定列在部分分辨率下出现上下细微错位问题
---



## 问题原因：

class为el-table__fixed-body-wrapper的fixed层元设置了内敛样式top来避开class为el-table__fixed-header-wrapper的表头（如图中top:48px，对应header元素高度47.8），查看实现源码：

[packages\table\src\table.vue 167-169：](https://github1s.com/ElemeFE/element/blob/dev/packages/table/src/table.vue#L167-L169)



```
:style="[{
  top: layout.headerHeight + 'px'
 },
```



headerHeight 来源：

[packages\table\src\table-layout.js 103:106](https://github1s.com/ElemeFE/element/blob/dev/packages/table/src/table-layout.js#L103)

```
 const headerHeight = this.headerHeight = !this.showHeader ? 0 : headerWrapper.offsetHeight;
```

可以看到使用 headerWrapper.offsetHeight 来获取高度，但offsetHeight 取值会四舍五入（https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight ：备注： 这个属性值会被四舍五入为整数值，如果你需要一个浮点数值，请用 [`element.getBoundingClientRect()`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect).）

故错位程度来源于此处四舍五入程度。



![image2024-7-9_9-33-48](https://kiftravel.oss-cn-beijing.aliyuncs.com/img/202407091007160.png)





## 解决办法：

组件库实现逻辑缺陷，代码洁癖选手修复办法就是给组件库打补丁，参见 [patch-package打补丁](https://www.bing.com/search?q=patch-package打补丁&PC=U316&FORM=CHROMN)
