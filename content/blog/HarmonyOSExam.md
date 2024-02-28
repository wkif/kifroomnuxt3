---
date: 2024-02-17  16:34:27
url: 
aliases: 
tags: 
  - HarmonyOS 
  - 学习笔记 

title: HarmonyOS应用开发者基础认证
---

## 【习题】运行Hello World工程

### 判断题

1.DevEco Studio是开发HarmonyOS应用的一站式集成开发环境。 （正确）

2.main_pages.json存放页面page路径配置信息。（正确）

### 单选题

1.在stage模型中，下列[配置文件](https://so.csdn.net/so/search?q=配置文件&spm=1001.2101.3001.7020)属于AppScope文件夹的是？（C）

A. main_pages.json

B. module.json5

C. app.json5

D. package.json

### 多选题

1.如何在DevEco Studio中创建新项目？（B C）

A. 在计算机上创建一个新文件，并将其命名为“new harmonyOS项目”

B. 如果已打开项目，从DevEco Studio菜单选择’file>new>Create Project’

C. 如果第一次打开DevEco Studio，在欢迎页点击“Create new Project”

2.module.json5配置文件中，包含了以下哪些信息？（A B D）

A. ability的相关配置信息

B. 模块名

C. 应用的版本号

D. 模块类型

## 【习题】ArkTS基础知识

### 判断题

1.循环渲染ForEach可以从数据源中迭代获取数据，并为每个数组项创建相应的组件。（正确）

2.@Link变量不能在组件内部进行初始化。（正确）

### 单选题

1.用哪一种装饰器修饰的struct表示该结构体具有组件化能力？（A）

A. @Component

B. @Entry

C. @Builder

D. @Preview

2.用哪一种装饰器修饰的自定义组件可作为页面入口组件？（B）

A. @Component

B. @Entry

C. @Builder

D. @Preview

### 多选题

1.下面哪些函数是自定义组件的生命周期函数？（A B C D E）

A. aboutToAppear

B. aboutToDisappear

C. onPageShow

D. onPageHide

E. onBackPress

2.下面哪些装饰器可以用于管理自定义组件中变量的状态？（C D）

A. @Component

B. @Entry

C. @State

D. @Link

## 【习题】应用程序框架

### 判断题

1.一个应用只能有一个UIAbility。（错误）

2.创建的Empty Ability模板工程，初始会生成一个UIAbility文件。（正确）

3.每调用一次router.pushUrl()方法，页面路由栈数量均会加1。（错误）

### 单选题

1.API9及以上，router.pushUrl()方法，默认的跳转页面使用的模式是哪一种？（A）

A. standard

B. Single

C. Specified

2.UIAbility启动模式需要在module.json5文件中配置哪个字段？（C）

A. module

B. skills

C. launchType

D. abilities

### 多选题

1.API9及以上，router.pushUrl()方法的mode参数可以配置为以下哪几种跳转页面使用的模式？（A B）

A. Standard

B. Single

C. Specified

2.UIAbility的生命周期有哪几个状态？（A C D F）

A. Create

B. WindowStageCreate

C. Foreground

D. Background

E. WindowStageDestroy

F. Destroy

3.UIAbility有哪几种的启动模式？（A B C）

A. multiton

B. singleton

C. specified

## 【习题】构建漂亮的页面

### 判断题

1.在Column容器中的子组件默认是按照从上到下的垂直方向布局的，其主轴的方向是垂直方向，在Row容器中的组件默认是按照从左到右的水平方向布局的，其主轴的方向是水平方向。（正确）

2.List容器可以沿水平方向排列，也可以沿垂直方向排列。（正确）

3.当Tabs组件的参数barPosition为BarPosition.End时，页签位于页面底部。（错误）

4.Resource是资源引用类型，用于设置组件属性的值，可以定义组件的颜色、文本大小、组件大小等属性。（正确）

### 单选题

1.使用TextInput完成一个密码输入框，推荐设置type属性为下面哪个值？（B）

A. InputType.Normal

B. InputType.Password

C. InputType.Email

D. InputType.Number

2.使用Image加载网络图片，需要以下那种权限？（B）

A. ohos.permission.USE_BLUETOOTH

B. ohos.permission.INTERNET

C. ohos.permission.REQUIRE_FORM

D. ohos.permission.LOCATION

3.下面哪个组件层次结构是错误的？（C）

A. List>ListItem>Column

B. Column>List>ListItem

C. Grid>Row>GridItem

D. Grid>GridItem

### 多选题

1.Row容器的主轴是水平方向，交叉轴是垂直方向，其参数类型为VerticalAlign （垂直对齐），VerticalAlign 定义了以下几种类型？（A B E）

A. Top

B. Bottom

C. Start

D. End

E. Center

2.下面哪些组件是容器组件？（B C）

A. Button

B. Row

C. Column

D. Image

E. TextInput

3.关于Tabs组件页签的位置设置，下面描述正确的是？（A B C D）

A. 当barPosition为Start（默认值），vertical属性为false时（默认值），页签位于容器顶部。

B. 当barPosition为Start（默认值） ，vertical属性为true时，页签位于容器左侧。

C. 当barPosition为End ，vertical属性为false（默认值）时，页签位于容器底部。

D. 当barPosition为End ，vertical属性为true时，页签位于容器右侧。

## 【习题】构建更加丰富的页面

### 判断题

1.@State修饰的属性不允许在本地进行初始化。（错误）

2.@CustomDialog装饰器用于装饰自定义弹窗组件，使得弹窗可以自定义内容及样式。（正确）

3.将Video组件的controls属性设置为false时，不会显示控制视频播放的控制栏。（正确）

4.@Prop修饰的属性值发生变化时，此状态变化不会传递到其父组件。（正确）

### 单选题

1.使用Video组件播放网络视频时，需要以下哪种权限？（B）

A. ohos.permission.READ_MEDIA

B. ohos.permission.INTERNET

C. ohos.permission.WRITE_MEDIA

D. ohos.permission.LOCATION

2.下列哪种组合方式可以实现子组件从父子组件单向状态同步。（C）

A. @State和@Link

B. @Provide和@Consume

C. @State和@Prop

D. @Observed和@ObjectLink

### 多选题

1.下列哪些状态装饰器修饰的属性必须在本地进行初始化。（A D）

A. @State

B. @Prop

C. @Link

D. @Provide

E. @Consume

2.ArkUI提供了下面哪些弹窗功能。（A B C D E）

A. AlertDialog

B. TextPickerDialog

C. DatePickerDialog

D. @CustomDialog

E. TimePickerDialog

## 【习题】属性动画

### 判断题

1.属性动画中产生动画的属性可以在任意位置声明。（错误）

2.属性动画中改变属性时需触发UI状态更新。（正确）

### 单选题

1.属性animation可以在哪些组件中使用？（C）

A. 只能基础组件

B. 只能容器组件

C. 基础组件和容器组件

D. 以上都不对

2.属性动画中如何设置反向播放？（D）

A. PlayMode.Normal

B. PlayMode.Alternate

C. PlayMode.AlternateReverse

D. PlayMode.Reverse

3.下面哪种情况不会回调onFinish函数？（C）

A. delay设置为 0

B. tempo设置为 1

C. iterations设置为 -1

D. playMode设置为 PlayMode.Reverse

4.属性动画中关于animation参数说法错误的是？（B）

A. 参数tempo默认值为1.0

B. 参数delay不能大于duration

C. 参数curve可以不设置

D. 参数iterations可以不设置

### 多选题

1.属性动画支持哪些属性？（A B C D）

A. width

B. rotate

C. opacity

D. scale

2.属性动画中animation的参数有哪些？（A B C D）

A. playMode

B. curve

C. delay

D. onFinish

## 【习题】从网络获取数据

### 判断题

1.在http模块中，多个请求可以使用同一个httpRequest对象，httpRequest对象可以复用。（错误）

2.使用http模块发起网络请求后，可以使用destroy方法中断网络请求。（正确）

3.Web组件onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)事件，返回false时候触发网页默认弹窗。（正确）

### 单选题

1.使用http发起网络请求，需要以下哪种权限？（B）

A. ohos.permission.USE_BLUETOOTH

B. ohos.permission.INTERNET

C. ohos.permission.REQUIRE_FORM

D. ohos.permission.LOCATION

2.向服务器提交表单数据，以下哪种请求方式比较合适？（B）

A. RequestMethod.GET

B. RequestMethod.POST

C. RequestMethod.PUT

D. RequestMethod.DELETE

3.下列关于Web组件的属性，描述错误的是？（C）

A. 设置是否开启应用中文件系统的访问，默认启用。$rawfile(filepath/filename)中rawfile路径的文件不受该属性影响而限制访问。

B. imageAccess设置是否允许自动加载图片资源，默认允许。

C. javaScriptAccess设置是否允许执行JavaScript脚本，默认不允许执行。

D. zoomAccess设置是否支持手势缩放，默认允许执行缩放。

4.关于请求返回的响应码ResponseCode，下列描述错误的是？（D）

A. ResponseCode.OK的值为200，表示请求成功。一般用于GET与POST请求。

B. ResponseCode.NOT_FOUND的值为404，表示服务器无法根据客户端的请求找到资源（网页）。

C. ResponseCode.INTERNAL_ERROR的值为500，表示服务器内部错误，无法完成请求。

D. ResponseCode.GONE的值为404，表示客户端请求的资源已经不存在。

### 多选题

1.Web组件支持下列哪些属性或事件？（A B D）

A. fileAccess(fileAccess: boolean)

B. javaScriptAccess(javaScriptAccess: boolean)

C. on(type: ‘headerReceive’, callback: AsyncCallback): void

D. onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)

E. destroy(): void

2.关于http模块描述正确的是？（A B C D）

A. http请求支持get、post、put等常用的请求方式。

B. 可以使用on(‘headersReceive’)订阅请求响应头。

C. post请求的参数可以在extraData中指定。

D. 执行createHttp成功后，返回一个httpRequest对象，里面包括request、destroy、on和off方法。

3.关于Web组件描述正确的是？（A B C D）

A. Web组件是提供具有网页显示能力的一种组件。

B. Web组件传入的地址可以是本地资源也可以是网络资源。

C. WebController可以控制Web组件的各种行为，例如网页的前进、后退等功能。

D. 当访问在线网页时，需添加网络权限。

## 【习题】保存应用数据

### 判断题

1.首选项是关系型数据库。（错误）

2.应用中涉及到Student信息，如包含姓名，性别，年龄，身高等信息可以用首选项来存储。（错误）

3.同一应用或进程中每个文件仅存在一个Preferences实例。（正确）

### 单选题

1.使用首选项要导入的包是哪个？（B）

A. @ohos.data.rdb

B. @ohos.data.preferences

C. @ohos.router

D. @ohos.data.storage

2.首选项的数据持久化后是放在哪里？（C）

A. 内存中

B. 数据库表中

C. 文件中

D. 云端

3.下面哪个接口不是首选项提供的API接口？（B）

A. get()

B. update()

C. put()

D. flush()

### 多选题

1.HarmonyOS提供的数据管理的方式都有哪些？（A B C D）

A. 首选项

B. 分布式数据服务

C. 关系数据库

D. 分布式数据对象

2.下面说法正确的有？（B C D）

A. 首选项遵循ACID特性

B. 首选项以Key-Value形式存取数据

C. 首选项存储数据数量建议不超过1万条

D. 首选项的key为String类型

## 【习题】给应用添加通知和提醒

### 判断题

1.构造进度条模板通知，name字段当前需要固定配置为downloadTemplate。（正确）

2.给通知设置分发时间，需要设置showDeliveryTime为false。（错误）

3.OpenHarmony提供后台代理提醒功能，在应用退居后台或退出后，计时和提醒通知功能被系统后台代理接管。（正确）

### 单选题

1.将通道设置为下面哪个类型，可以显示横幅通知？（A）

A. SlotType.SOCIAL_COMMUNICATION

B. SlotType.SERVICE_INFORMATION

C. SlotType.CONTENT_INFORMATION

D. SlotType.OTHER_TYPES

2.下列哪个是从API 9 开始支持的后台代理提醒功能模块。（A）

A. @ohos.reminderAgentManager

B. @ohos.reminderManager

C. @ohos.reminderAgent

D. @ohos.notificationManager

### 多选题

1.下面哪些方法可以移除通知？（A B）

A. cancel

B. cancelAll

C. removeSlot

2.后台代理提醒业务分为哪几种类型。（A B C）

A. 倒计时类

B. 日历类

C. 闹钟类

D. 日程类

## 【习题】HarmonyOS应用/元服务上架

### 判断题

1.元服务发布的国家与地区仅限于“中国大陆” （正确）

2.编译打包的软件包存放在项目目录build > outputs > default下 （正确）

### 单选题

1.创建应用时，应用包名需要和app.json5或者config.json文件中哪个字段保持一致？ （C）

A. package

B. name

C. bundleName

2.发布应用时需要创建证书，证书类型选择什么类型？（B）

A. 调试证书

B. 发布证书

3.发布应用时需要创建Profile时，类型选择什么类型？ （B）

A. 调试

B. 发布

4.上传发布软件包时，软件包的格式是什么？（B）

A. .zip

B. .app

C. .apk

D. .hap

5.发布后的应用可以在哪里获取？（A）

A. 华为应用市场

B. 华为服务中心

C. 华为生态市场

## 【习题】使用DevEco Studio高效开发

### 单选题

1.用哪一种装饰器修饰的组件可作为页面入口组件？（B）

A. @Component

B. @Entry

C. @Preview

D. @Builder

2.ArkTS Stage模型支持API Version 9，关于其工程目录结构说法正确的是？（C）

A. oh-package.json5用于存放应用级配置信息，包括签名、产品配置等

B. build-profile.json5用于配置三方包声明文件的入口及包名

C. module.json5包含HAP的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息

D. app.json5用于编写应用级编译构建任务脚本

3.DevEco Studio提供模拟器供开发者运行和调试HarmonyOS应用/服务，以下说法错误的是？（A）

A. 本地模拟器是创建和运行在本地计算机上的，需要登录授权

B. 本地模拟器支持音量大小调节、电池电量调节、屏幕旋转等功能

C. 向本地模拟器安装应用/服务的时候，不需要给应用签名

D. DevEco Studio会启动应用/服务的编译构建，完成后应用/服务即可运行在本地模拟器上

### 多选题

1.DevEco Studio支持使用多种语言进行应用/服务的开发，包括ArkTS、JS和C/C++。在编写应用/服务阶段，可以通过以下哪些方法提升编码效率？（A B C D）

A. 提供代码的智能补齐能力，编辑器工具会分析上下文并理解项目内容，并根据输入的内容，提示可补齐的类、方法、字段和关键字的名称等

B. 在编辑器中调用ArkTS API接口或ArkTS/JS组件时，支持在编辑器中快速、精准调取出对应的参考文档

C. 代码格式化功能可以帮助您快速的调整和规范代码格式，提升代码的美观度和可读性

D. 如果输入的语法不符合编码规范，或者出现语义语法错误，编辑器会显示错误或警告

2.关于预览器的使用，以下哪些说法是正确的？（A B C D）

A. 在开发界面UI代码过程中，如果添加或删除了UI组件，您只需Ctrl+S进行保存，然后预览器就会立即刷新预览结果

B. 在预览器界面，可以在预览器中操作应用/服务的界面交互动作，如单击、跳转、滑动等，与应用/服务运行在真机设备上的界面交互体验一致

C. 组件预览通过在组件前添加注解@Preview实现

D. 页面预览通过在工程的ets文件头部添加注解@Entry实现

## 【习题】三方库

### 判断题

1.三方组件是开发者在系统能力的基础上进行了一层具体功能的封装，对其能力进行拓展的工具 。（正确）

2.可以通过ohpm uninstall 指令下载指定的三方库（错误）

3.lottie使用loadAnimation方法加载动画。（正确）

### 单选题

1.通过ohpm安装lottie后，在哪个文件中会生成相关的配置信息？（B）

A. module.json5

B. oh-package.json5

C. app.json5

D. main_page.json

2.lottie订阅事件的API为？（C）

A. lottie.setSpeed()

B. lottie.setDirection()

C. animationItem.addEventListener()

D. animationItem.removeEventListener()

### 多选题

1.下列属于lottie提供的动画控制API的是？（A B C D）

A. lottie.play()

B. lottie.pause()

C. lottie.stop()

D. lottie.goToAndPlay()

## 【习题】HarmonyOS云开发

### 判断题

1.HarmonyOS云开发可以在一个项目中同时实现端侧和云侧功能的开发。（正确）

2.进行端云一体开发时，开发者需要精通前端、后端不同的开发语言。（错误）

### 单选题

1.开发者在DevEco Studio中，可以通过什么形式进行HarmonyOS云开发？（B）

A. IDE插件

B. 工程模板

C. 命令行工具

D. 可视化工具

2.HarmonyOS云开发当前支持最低API版本是多少？（D）

A. API 6

B. API 7

C. API 8

D. API 9

### 多选题

1.HarmonyOS云开发工程结构分哪些部分？（A B C）

A. 端开发工程（Application）

B. 云开发工程（CloudProgram）

C. 端侧公共库（External Libraries）

D. 公共资源库（Resource）

2.HarmonyOS云开发工程创建后，会自动开通哪些服务？（A B C D）

A. 云函数

B. 云数据库

C. 云存储

D. 认证服务











## 其余题目（一）

### 🚀一、判断题（13题）

1、云函数打包完成后，需要到AppGallery Connect创建对应函数的触发器才可以在端侧中调用（错误）

2、每一个自定义组件都有自己的生命周期（正确）

3、基于端云一体化开发，开发者需要精通前端、后端不同的开发语言（错误）

4、首选项preferences是以Key-Value形式存储数据，其中Key是可以重复（错误）

5、HarmonyoS应用可以兼容OpenHarmony生态（正确）

6、每调用一次router,pushur1()方法，默认情况下，页面找数量会加1，页面找支持的最人页面数量为32（正确）

7、只要使用端云一体化的云端资源就需要支付费用（错误）

8、首选项是非关系数据库，遵循ACID特性（错误）

9、 在Column和Row容器组件中，alignItems用于设置子组件在主轴方向上的对齐格式，justifyContent用于设置了组件在交又轴方向上的对齐格式（错误）

10、所有使用@Component修饰的自定义组件都支持onPageShow，onBackPress和onPageHide生命周期函数（错误）

11、使用端云一体化开发，无需自己搭建服务器，并进行运维了（正确）

12、ArkUI 是声明式开发范式（正确）

13、Worker线程不支持UI操作（正确）

### 🚀二、单选题（30题）

1、发布应用时需要创建Profile时，类型选择什么类型

B. 发布

2、发布开放式测试版本后，还需要人工审核吗

B. 不需要

3、开发者在DevEco studio中，可以通过什么方式使用端云一体化

B.工程模板

4、添加用户信息时，如果帐号使用手机号码，以下哪种输入格式正确

A.86-189****1234

5、应用包名不能包含一些保留字段，以下哪个字段符合规范

A. .test.

6、认证服务支持下列哪种帐号认证

C.华为帐号

7、跨端迁移和协同是哪个鸿蒙特征的能力

C.统一生态

8、发布后的鸿蒙应用可以在哪里获取

A.华为应用市场

9、下面哪个方法，可以跳转到一个新页面，并销毁当前页面

B. router.replaceUrl()

10、关于UIAbility的启动模式，下列说法错误的是

C. muliton为多实例模式，每次startAbility都会启动一个新的实例，系统默认为muliton为模式

11、引用ohpm三方库的包依赖是在哪个配置文件中

C.oh-package.json5

12、元服务包名必须以哪个字段结尾

A. .hmservice

13、Row组件中有两个Text组件，如果使用justifyContent对齐方式，下面哪个属性可以实现左右两端对齐

D. FlexAlign.SpaceBetween

14、自定义组件的aboutToAppear()在什么时机执行

B.build函数之前

15、关于Tabs组件页签的位置设置，下面描述错误的是

D.当barPosition为End ，vertical属性为true时，页签位于容器底部。

16、在下面哪个文件中可以设置页面的路径配置信息

A. main_pages,json

17、元服务创建测试用户时，用户列表存储位置需要选择

B.中国

18、开放式测试版本发布后，受邀测试用户如何体验

B.进入服务中心，打开“开发者测试”开关，在最下方的“服务测试”找到待体验的元服务

19、Webview在Harmonyos中的入口是通过什么组件体现的

C.Web组件

20、关于容器组件Row和Column，下面说法错误的是

D.Row的子组件在交叉轴方向上的对齐方式使用alignltems属性来设置，其参数类型为HorizontalAlign。

21、端云一体化当前支持最低的鸿蒙API版本是

A. API 9

22、() 模央提供了全双工通信协议

B. WebSocket
23、创建应用时，应用包名需要和config.json文件中哪个字段保持一致

C. bundleName

24、发布开放式测试版本后，怎么追加测试用户

B.需要重新发布新的测试版本追加用户
25、@state修饰的状态数据被修改时会触发组件的 () 方法进行UI界面更新

A.build方法
26、下面哪个组件不能包含子组件

D. LoadingProgress
27、发布应用时要创建证书，证书类型选择什么类型

B.发布证书
28、元服务包由一个或多个HAP包组成，每个HAP包不得超过() ，以提供秒开体验

B.10MB
29、HUKS中文全称是什么

B.通用密钥库系统

30、worker线程最大同时激活数

C.8

### 🚀三、多选题（8题）

1、下面哪些是Ability的生命周期回调函数

A. onCreate
B. onDestroy
E. onForeground
F.onBackground

2、UIAbility的启动模式有哪些

A. singleton
B. specified
C. multition

3、以下关于ArkTS声明式开发范式的基本组成说明正确的是

A. 装饰器: 用来装饰类、结构体、方法以及变量，赋予其特殊的含义，例如@Entry表示这是个入口组件
B.自定义组件: 可复用的 UI 单元，可组合其它组件。
C.UI描述: 声明式的方法来描述UI的结构，例如build0方法中的代码块。
D.内置组件: ArkTS中默认内置的基本组件和布局组件，开发者可以直接调用，如ColumnText、Divider、 Button等。
E.属性方法: 用于组件属性的配置，统一通过属性方法进行设置，如 fontSize0、width0、height0、color0 等。
F.事件方法: 用于添加组件对事件的响应逻辑，统一通过事件方法进行设置，如跟随在Button后面的onClick0。

4、UIAbility的生命周期包括哪些函数

A. onCreate
B. onForeground
C.onBackground
D. onDestroy

5、下面哪些组件层次结构是正确的

A. Text>Span
B. Button>Column>mage
E. Column>Row>Button

6、公共事件服务为应用程序提供哪些能力

B.订阅公共事件
C.发布公共事件
D.取消订阅公共事件

7、鸿蒙特征包含哪些场景化能力

A.一次开发、多端部署
B.可分可合、自由流转
C.统一生态、原生智能

8、鸿蒙应用/元服务上架过程上传软件包常见的问题有哪些

A.软件包中的发布Profile文件和当前上传软件包的应用不匹配
B.软件包中的发布证书与发布Profile文件中的发布证书不匹配
C.软件包未签名导制提示非法软件包
D.软件包中使用证书已经失效过者过期

### 🚀四、补充题

#### ------------------------多选------------------------

1、公共事件服务为应用程序提供哪些能力
B. 订阅公共事件

C. 发布公共事件

D. 取消订阅公共事件

2、端云一体化工程目录结构分为哪些部分
A. 端开发工程（Application）

B. 云开发工程（CloudProgram）

C. 端侧公共库（External Libraries）

3、UIAbility的生命周期包括哪些函数？
A. onCreate

B. onForeground

C. onBackground

D. onDestroy

4、自定义组件的组件化特点有哪些
A. 可组合

B. 可重用

C. 配置化生命周期

D. 数据驱动更新

5、端云一体化中的云函数支持哪些操作
A. 编写函数

B. 测试函数

C. 打包函数

D. 部署函数

6、一次开发多端部署的三个层次有哪些？
A. 界面级一多

B. 功能级一多

C. 工程级一多

7、鸿蒙特征包含哪些场景化能力
A. 一次开发、多端部署

B. 可分可合、自由流转

C. 统一生态、原生智能

8、UIAbility的启动模式有哪些
A. singleton

B. specified

C. multition

#### ------------------------单选------------------------

1、发布应用时需要创建Profile时，类型选择什么类型？（发布）
2、下列哪种组合方式不能实现子组件从父子组件之间双向数据同步。（ @State和@Prop）
3、认证服务支持下列哪种帐号认证?（ 华为帐号）
4、添加用户信息时，如果帐号使用手机号码，以下哪种输入格式正确？（ 86-189****1234）
5、发布应用时要创建证书，证书类型选择什么类型？（发布证书）
6、元服务创建测试用户时，用户列表存储位置需要选择？（中国）
7、下面哪个组件不能包含子组件：（LoadingProgress）
8、开发者在DevEco Studio中，可以通过什么方式使用端云一体化？ （工程模板）
9、发布开放式测试版本后，还需要人工审核吗？ （不需要）
10、自定义组件的aboutToAppear()在什么时机执行？（build函数之前）
11、HUKS中文全称是什么？（通用密钥库系统）
12、元服务包名必须以哪个字段结尾?（hmservice）
13、下面哪个方法，可以跳转到一个新页面，并销毁当前页面。（router.replaceUrl()）
14、Row组件中有两个Text组件，如果使用justifyContent对齐方式，下面哪个属性可以实现左右两端对齐：（ FlexAlign.SpaceBetween）
15、@State修饰的状态数据被修改时会触发组件的（）方法进行UI界面更新？（build方法）
16、关于Tabs组件页签的位置设置，下面描述错误的是？（当barPosition为End ，vertical属性为true时，页签位于容器底部。）
17、开放式测试版本发布后，受邀测试用户如何体验？（进入服务中心，打开“开发者测试”开关，在最下方的“服务测试”找到待体验的元服务）
18、HarmonyOS提供的Webview能力是否支持与H5双向通信？（支持）
19、应用包名不能包含一些保留字段，以下哪个字段符合规范?（ .test.）
20、关于UIAbility的启动模式，下列说法错误的是：（muliton为多实例模式，每次startAbility都会启动一个新的实例，系统默认为muliton为模式。）
21、Webview在HarmonyOS中的入口是通过什么组件体现的？（ Web组件）
22、发布开放式测试版本后，怎么追加测试用户？ （需要重新发布新的测试版本追加用户）
23、（）模块提供了全双工通信协议 ？（ WebSocket）
24、发布后的鸿蒙应用可以在哪里获取？ （华为应用市场）
25、元服务包由一个或多个HAP包组成，每个HAP包不得超过（），以提供秒开体验。（10mb）
26、关于Video组件的回调事件，下列说法错误的是：（onStart视频播放时触发该事件，可以在这里获取视频时长。）

27、首选项key的最大长度限制大小为（）字节？（80）
28、下面哪个组件不能包含子组件：（LoadingProgress）
29、下面哪一个事件方法可以获取到List滑动的偏移量？（onScroll）
30、Row组件中有两个Text组件，如果使用justifyContent对齐方式，下面哪个属性可以实现左右两端对齐：（ FlexAlign.SpaceBetween）
31、关于Video组件的回调事件，下列说法错误的是：（ onStart视频播放时触发该事件，可以在这里获取视频时长。）
32、下面哪个方法，可以跳转到一个新页面，并销毁当前页面。（ router.replaceUrl()）
33、关于Web组件，下面描述错误的是：（使用Web组件访问在线和离线网页都需要添加ohos.permission.INTERNET权限。）
34、关于容器组件Row和Column，下面说法错误的是：（Row的子组件在交叉轴方向上的对齐方式使用alignItems属性来设置，其参数类型为HorizontalAlign。）
35、关于@State状态数据特征，下列描述错误的是：（@State变量可以不用给定初始值。）
36、关于Tabs组件页签的位置设置，下面描述错误的是？（ 当barPosition为End ，vertical属性为true时，页签位于容器底部。）
37、关于Button组件，下面哪个样式是胶囊型按钮：（ButtonType.Capsule）
38、在下面哪个文件中可以设置页面的路径配置信息？（main_pages.json）
39、首选项preferences值的存储支持哪些数据类型？（数字型、字符型、布尔型以及这3种类型的数组类型。）
40、页面路由需要导入以下哪个模块？（import router from ‘@ohos.router’）
41、关于UIAbility的启动模式，下列说法错误的是：（standard为标准模式，每次startAbility都会启动一个新的实例，系统默认为standard模式。）
42、关于Resource是资源引用类型描述错误的是：（Resource支持所有的数据类型。）
43、例如现在要实现一个广告弹窗，包含图片和文本等信息，使用下面那种弹窗可以实现？（@CustomDialog）
44、发起网络数据请求需要导入以下哪个模块？（import http from ‘@ohos.net.http’）
45、使用Image组件加载网络图片需要如下哪种权限？（ohos.permission.INTERNET）
46、下列哪种组合方式不能实现子组件从父子组件之间双向数据同步。（@State和@Prop）

#### ------------------------多选------------------------

下面哪些组件层次结构是正确的。
A. Text>Span
B. Button>Column>Image
E. Column>Row>Button

关于ForEach(arr, itemGenerator, index)组件的描述正确的是：
B. 第一个参数必须是数组，提供循环渲染的数据源。
C. 第二个参数生成子组件的lambda函数，为数据源中的每个数组项生成子组件。
D. 第三个参数为匿名函数，用于给定数组项生成唯一且稳定的键值。

entry下的module.json5中包含以下哪些信息：
B. Ability的配置信息
C. 设备类型信息
D. 应用权限申请列表

针对包含文本元素的组件，例如Text、Button、TextInput等，可以使用下列哪些属性：
A. fontColor
B. fontSize
C. fontStyle
D. fontWeight
E. fontFamily

#### ------------------------------------------------

(单选)在 HarmonyOS 中，以下哪项分布式技术是其他分布式特性的基础?
A、分布式软总线

(单选)在直播场景中，主播用运动相机采集视频作为直播镜头，这里相机的分布式使用主要体现了 HarmonyOS的哪项分布式特性?
B、分布式设备虚拟化

(单选)当 Harmony0S 的 Page 执行 onForeground(回调后，Page 会首先回到以下哪个状态?
B、INACTIVE

(单选)在 HarmonyOS 的数据管理中，以下哪个服务采用了 KV 的数据模型?
A、分布式数据服务

(单选)某开发者在使用 TaskDispatcher 框架进行任务派发时，以下哪一项派发方法使用不当会导致死锁?
C、syncDispatch()

(多选)同一 page 页面内导航可以通过以下哪些方法进行处理?
A、present(0)
B、presentForResult()

开发者在使用 Harmony0s 的位置能力时，需要申请 LOCATION 权限，该权限属于非敏感权限，需要在 config.json 中声明。
错误

(单选)某开发者开发了一款新闻浏览应用，打开应用时默认显示新闻列表页面，该开发者是通过以下哪一项方法实现该功能的?
B、setMainRoute()

(多选)HarmonyOs的Ability 分为Feature Ability和Particle Ability 两种类型，其中Particle Ability 包含以下哪几种 Ability?
A、Service Ability
B、Data Ability

(判断)Java UI框架中的 DependentLayout 支持水平或者垂直方向排布。
错误

(判断)在 HarmonyS 中，默认情况下 UI 界面的显示和更新操作，都是在主线程中进行的
对

(单选)如果 Service 需要与 Page Ability 或其他应用的 Service Ability 进行交互，则应创建用于连接的 Connection。Service 支持其他 Ability 通过以下哪一项方法与其进行连接?A、connectAbility()

顿率是以帧为单位的位图图像连续出现在显示器上的频率(速率、以赫效为单位。
对

(判断)某开发者在开发社交应用时，需要开发生成联系人二维码的插件。此场景下，该开发者可以使用 HarmonyoS 提供的码生成AI能力，该能力能够根据给定的字符串信息，返回相应的二维码图片字节流。
A.对

(多选)Harmony0S 网络管理模块主要提供以下哪几项功能?
A、数据连接管理
B、数据网络管理
C、流量统计
D、创建本地套接字

1、某开发者启动远程设备上的音乐播放器，可以不填写远程设备的 DeviceId。
正确答案::错

2、在JavaScript UI 框架中，实现页面之间的跳转，需要在页面路由 router 中指定uri 来找到目标页面。
正确答案::对
3、当应用调用某个服务时，服务会对应用进行权限检查，如果没有对应权限则无法使用该服to
正确答案::对
4、Harmonyos 的 Data Ability 用于对外提供操作数据的接口，但不能提供文件相关的操作。
正确答案::错
5、Java UI框架中的DependentLayout 支持水平或者垂直方向排布。
正确答案::错
6、Intent 是对象之间传递信息的载体。
正确答案::对

7/在 Harmony0S 中，默认情况下UI 界面的显示和更新操作，都是在主线程中进行的。
正确答案::对
8、UI 界面的显示和更新等操作，是在主线程上进行的，所以主线程又称为UI 线程。
正确答案::对
9、对象关系映射数据库主要提供轻量级 Key-Value 操作，支持本地应用存储少量数据，数据存储在本地文件中，同时也加载在内存中的，所以访问速度更快，效率更高。
正确答案::错
10开发者在使用 Harmonyos 的位置能力时，需要申请 LOCATION 权限，该权限属于非敏感权限，需要在 config.json 中声明。
正确答案::错
11、在 Harmony0S 中，关系型数据库和对象关系映射数据库都可以使用 SQL 语句操作数据库。
正确答案::错
12、Harmony0S 是分布式操作系统，既可以在手机上部署，也可以在嵌入式设备上部署。
正确答案::对
13、在[HarmonyOS系统](https://so.csdn.net/so/search?q=HarmonyOS系统&spm=1001.2101.3001.7020)架构中，分布式数据管理模块属于框架层
正确答案::错
14、帧率是以帧为单位的位图图像连续出现在显示器上的频率(速率)，以赫兹(HZ)为单位
正确答案::对
15、HarmonyOS 在 Java U框架中提供了两种编写布局的方式代码创建布局和 XML声明布局但在XML中声明的布局，不能代码中对该布局进行修改。
正确答案::错

16、某开发者在 XML中创建了一个Button 组件，width 为150vp，height 为 50vp，并将该组件的 background_element 使用如下代码进行设置，那么该 Button 被设置成了那种样式?
B.椭圆按钮

17、某开发者使用 Text 组件进行开发，想将 Txt 组件的大小与内容占据的大小范围相适应在横线处填写正确的是哪一项?

```
<Text
ohos:id=“$+id:text"ohos:width:“ohos:height:ohos:text=“Text”
ohos:text_size=“28fp”
ohos:text_color=”#0000FF”/>
```

A. match content,match content
B. match content,match parent
c.match parent，match parent
D. match parent，match content
正确答案::A

18、在 Java UI 框架中，开发者可以使用以下哪个参数设置 Image 组件中图片的缩放方式?
A. sacle_mode

20、某开发者在开发一款在线教育应用时，为了提高用户体验，在用户答对题目的时候，在窗口上方弹出“恭喜你”的对话框，请问以下哪个组件可以帮助开发者完成该功能?
A. ToastDialog

21、应用在使用对应服务的能力或者数据时，需要申请对应的权限，其中非敏感权限需要在config.json 的哪个字段中声明?
A.regPermissions

25、用户从音乐列表页面点击歌曲，跳转到该歌曲的播放界面，原理是页面路由Foute 根据以下哪一项周到目标页面?
C.uri

26、Harmonyos 使用虚拟像素作为定义应用内参数尺寸的度量单位，以下哪个是虚拟像素的单
位?
A. vp

27、如果 Service 需要与 Page Ability 或其他应用的 Service Ability 进行交互，则应创建用于连接的 Connection。Service 支持其他Ability 通过以下哪一项方法与其进行连接?
A. connectAbility()

28、在直播场景中，主播用运动相机采集视频作为直播镜头，这里相机的分布式使用主要体现了HarmonyOS的哪项分布式特性?
B分布式设备虚拟化

29、某开发者开发了一款新闻浏览应用，打开应用时默认显示新闻列表页面，该开发者是通过以下哪一项方法实现该功能的?
B.setMainRoute()

30、以下场景中，能够正确解释 HarmonyOS 剪贴板的是哪一项描述?
8可以在应用A 中复制粘贴到应用B

31、某开发者在使用 TaskDispatcher 框架进行任务派发时，以下哪一项派发方法会导致死锁?
C.syncDispatch(

33、某开发者点击应用的退出按钮进行资源释放，将会触发 Page Ability 生命周期中的哪个回调函数?
D. onStop0

34、在Harmonyos 应用中，用户看到的界面元素实际都是由以下哪一项和 ComponentContainer对象构成的?
c.Component

35、在VI 线程上运行的任务默认是以以下哪一项优先级运行?
B. DEFAULT

37、在 Harmony0S 的 Page Ability 生命周期中，当系统首次创建一个Page实时，会首先
发以下哪一项回调方法?
A. onStart0

38、当Harmony0S 的 Page 执行 onForeground(回调后，Page 会首先回到以下哪个状态?
B.INACTIVE

39、在 Harmony0S 中，以下哪项分布式技术是其他分布式特性的基础?
A.分布式软总线

40、某开发者想要在 Service 中停止本 Service，需要调用以下哪个接口?
terminateAbility()

多选题
41、Harmony0S 网络管理模块主要提供以下哪几项功能?
A.数据连接管理
B.数据网络管理
C流量统计
D.创建本地套接字
正确答案::ABCD

42、Harmony0S的Java UI 为开发者提供了以下哪几种布局容器?
A. DirectionLayout
B. DependentLayout
C StackLayout
D.TableLayout
正确答案::ABCD
43、Harmony0S 为开发者提供了以下哪几种任务分发器?
NGA.全局并发任务分发器
B.并发任务分发器
c串行任务分发器
D.专有任务分发器
正确答案::ABCD



1.DevEco Studio是开发HarmonyOS应用的一站式集成开发环境。 （正确）
2.main_pages.json存放页面page路径配置信息。（正确）
HarmonyOS应用可以兼容OpenHarmony生态 t
云计算的演进依次经历了虚拟机、容器化、Serverless等阶段。（对）
自己构建的账号系统可以加入到认证服务中。（对）
创建函数完成后，版本默认是1。（错）
认证服务登录微信微博QQ等三方账号后可以获取三方账号绑定的手机号码等信息。（错）
Serverless解决方案可以提供智能弹性、更低成本、简化开发的价值。（对）
云函数开发既可通过在线编辑代码，也可通过上传.zip格式代码文件。（对）
在Cloud Function中，监听事件源上的指定类型事件，当事件发生时自动调用函数并将事件数据提交给函数处理的组件被称为触发器。（对）
Cloud Functions是一项Serverless计算服务，能通过引入多种中间件技术，提供FaaS（Function as Service）能力。（错）
发布版本后，版本的代码仍可变更。（错）
索引的优点是大大加快数据的检索速度，缺点是需要占物理空间，当对表中的数据进行增加、删除和修改的时候，索引也要动态的维护，降低了数据的维护速度。（对）
云函数部署，上传的函数包中（ZIP），只需要传单个代码文件，依赖会有云函数去下载。（错）
如果您的应用短期内迎来了爆发式的用户增长，您可以联系技术工程师为您进行在线迁移。（对）
云数据库当Cloud DB zone为关闭状态时，可以进行删除对象操作。（错）
Cloud DB的数据同步模式包括缓存模式和本地模式。应用可以仅使用缓存模式或者本地模式，也可以同时使用缓存模式和本地模式。（对）
云数据库可以通过executeDelete()删除单个对象或者一组对象，删除一组对象时，删除操作是原子的，即对象列表中的对象要么全部删除成功，要么全部删除失败。（对）
云数据库提供的能力中，通过executeUpsert()将一个或者一组对象写入到当前Cloud DB zone中。在写入对象时，如果在Cloud DB zone已经存在主键相同的对象，则更新已有的对象。（对）
云存储实例名称可以是IP地址（错）
云存储开通成功后，AGC不会创建默认的存储实例，需要用户自行创建。（错）
鸿蒙应用可以使用Arkts开发（对）
DevEco中云开发能力和原有端开发能力深度融合（对）
Serverless模板面向开发者提供：（易用高价值微解决方案）
以下哪个是认证服务可以看到的统计数据（ 发送短信验证码次数）
认证服务在国内支持多少种认证方式（ 11）
以下哪个选项不是传统Web应用构建的痛点（ 强依赖第三方服务，无法针对用户定制化、个性化）
云函数如何解决资源使用量问题：（按函数大小和使用时间进行分阶段收费）
以下哪些不是使用Cloud Function需要做的事：（选择合适规格的服务器）
下面那个是云函数应用场景（以上全部是）
下面那些不是Serverless的优势 （安全性更强）
新创建完一个函数，此时函数版本为$latest，此时连续发布2个版本后，再发布一个新的版本，此时版本号为： （3）
关于函数开发以下说法正确的是（不同语言函数通过zip包上传的函数部署包有不同的文件目录结构。）
在Android SDK中， setEncryptedKey方法设置和修改端侧cloud DB zone数据加密存储的秘钥时，秘钥长度的值可以为多少？（1~128个字符）
如果您的项目未升级到付费档套餐，服务允许项目内app的最大并发连接数是（），每秒最多可操作数为（），免费存储空间为（）。（150 10 1GB）
Cloud DB作为AppGallery Connect解决方案的一部分，为AppGallery Connect平台构建了（）能力。从而让应用开发者聚焦于应用本身的业务，极大的提升开发者的生产效率。（MBaaS（移动后端即服务））
云数据库为您定制了运维可视化报表，目前您可在（ ）界面查看到项目内App的日活跃度和月活跃度等视图信息。（ 云监控）
一个对象类型中，最多支持创建多少个索引？（16）
下面对Cloud DB的描述错误的是：（Cloud DB world角色有upsert权限，认证用户角色没有upsert权限，认证后能插入数据并同步到Cloud DB）
云存储函数触发器是（存储实例级）
开通云存储后，若需要通过AGC控制台创建更多新的存储实例，用户需要（升级为按量付费套餐）
如何快速部署完整的云侧代码？（ 选择整个云工程右键选择部署）
以下关于端云一体化的说法正确的是（端云一体化工程目录结构中不仅包含了端侧代码，也包含了云侧代码）

华为Serverless的优势包括那些方面？ A．零运维成本 B．零资源浪费 D．安全可靠 E．更快上线 F．深度支撑应用构建
2.短信模板支持以下哪几种场景 验证手机号码 重置登录密码 更改手机号码
传统Web应用构建的痛点有：开发难度高，版本周期长 运维工作专业性强 资源使用成本高
云函数触发器的核心是() A．定义事件源2 B．定义事件类型
使用Cloud function完成业务开发并上线，需要以下哪些步骤？1|A．开发业务函数2 3B．根据业务场景，可选择的使用sdk调用云存储或云数据库4 5c．根据事件源配置函数的触发器
如下描述正确的是？1|A．使用executeUpsert()接口写入一组对象时，该组中的对象必须属于同一个对象类型。2 3 B．每次的查询操作仅支持查询一个对象类型下的数据。4 5D．事务中的查询操作必须在写入操作之前。
当开发者实现一个云数据库应用前，需要完成哪些实现流程 1 A．启用服务:云数据库服务默认不开通，需要手动在AGC控制台上启用云数据库服务。2 3B．创建对象类型和存储区:如果需要使用云数据库相关功能，则必须在AGC控制台上创建对象类型和4 7D．添加对象类型文件:在使用云数据库功能时，需添加对象类型文件 5c．集成SDK:在使用云数据库功能时，需配置开发环境并集成云数据库的SDK6
关于云存储的安全规则，以下哪些说法是正确的？A．安全规则中的match规则，用于识别存储实例下的文件路径。 B．安全规则中的allow规则，用于在满足指定的条件下用户拥有对该文件路径的read和write权限。 C．某个文件与一个match内多个allow匹配，如果有多个allow表达式与某个请求匹配，则只要任何
登录并关联云开发资源需要以下哪些步骤 A.登录华为账号 B.选择归属团队 C．关联AGC项目信息

1.在stage模型中，下列配置文件属于AppScope文件夹的是？ C. app.json5
1.如何在DevEco Studio中创建新项目？ B. 如果已打开项目，从DevEco Studio菜单选择’file>new>Create Project’ C. 如果第一次打开DevEco Studio，在欢迎页点击“Create new Project”
2.module.json5配置文件中，包含了以下哪些信息？ A. ability的相关配置信息 B. 模块名 D. 模块类型
1.循环渲染ForEach可以从数据源中迭代获取数据，并为每个数组项创建相应的组件。（正确）
2.@Link变量不能在组件内部进行初始化。（正确）
1.用哪一种装饰器修饰的struct表示该结构体具有组件化能力？ A. @Component
2.用哪一种装饰器修饰的自定义组件可作为页面入口组件？B. @Entry
1.下面哪些函数是自定义组件的生命周期函数？A. aboutToAppearB. aboutToDisappearC. onPageShowD. onPageHideE. onBackPress
2.下面哪些装饰器可以用于管理自定义组件中变量的状态？C. @StateD. @Link
1.一个应用只能有一个UIAbility。（错误）
2.创建的Empty Ability模板工程，初始会生成一个UIAbility文件。（正确）
3.每调用一次router.pushUrl()方法，页面路由栈数量均会加1。（错误）
1.API9及以上，router.pushUrl()方法，默认的跳转页面使用的模式是哪一种？（A） A. standard
2.UIAbility启动模式需要在module.json5文件中配置哪个字段？（C） C. launchType
1.API9及以上，router.pushUrl()方法的mode参数可以配置为以下哪几种跳转页面使用的模式？A. StandardB. Single
2.UIAbility的生命周期有哪几个状态？ A. Create C. Foreground D. Background F. Destroy
3.UIAbility有哪几种的启动模式？A. multitonB. singletonC. specified
1.在Column容器中的子组件默认是按照从上到下的垂直方向布局的，其主轴的方向是垂直方向，在Row容器中的组件默认是按照从左到右的水平方向布局的，其主轴的方向是水平方向。（正确）

2.List容器可以沿水平方向排列，也可以沿垂直方向排列。（正确）

3.当Tabs组件的参数barPosition为BarPosition.End时，页签位于页面底部。（错误）

4.Resource是资源引用类型，用于设置组件属性的值，可以定义组件的颜色、文本大小、组件大小等属性。（正确）

1.使用TextInput完成一个密码输入框，推荐设置type属性为下面哪个值？（B）B. InputType.Password
2.使用Image加载网络图片，需要以下那种权限？（B）B. ohos.permission.INTERNET
3.下面哪个组件层次结构是错误的？（C）C. Grid>Row>GridItem
1.Row容器的主轴是水平方向，交叉轴是垂直方向，其参数类型为VerticalAlign （垂直对齐），VerticalAlign 定义了以下几种类型？A. TopB. BottomE. Center
2.下面哪些组件是容器组件？B. RowC. Column
3.关于Tabs组件页签的位置设置，下面描述正确的是？A. 当barPosition为Start（默认值），vertical属性为false时（默认值），页签位于容器顶部。B. 当barPosition为Start（默认值） ，vertical属性为true时，页签位于容器左侧。C. 当barPosition为End ，vertical属性为false（默认值）时，页签位于容器底部。D. 当barPosition为End ，vertical属性为true时，页签位于容器右侧。
1.@State修饰的属性不允许在本地进行初始化。（错误）

2.@CustomDialog装饰器用于装饰自定义弹窗组件，使得弹窗可以自定义内容及样式。（正确）

3.将Video组件的controls属性设置为false时，不会显示控制视频播放的控制栏。（正确）

4.@Prop修饰的属性值发生变化时，此状态变化不会传递到其父组件。（正确）
1.使用Video组件播放网络视频时，需要以下哪种权限？B. ohos.permission.INTERNET
2.下列哪种组合方式可以实现子组件从父子组件单向状态同步。C. @State和@Prop
1.下列哪些状态装饰器修饰的属性必须在本地进行初始化。A. @StateD. @Provide
2.ArkUI提供了下面哪些弹窗功能。A. AlertDialogB. TextPickerDialogC. DatePickerDialogD. @CustomDialogE. TimePickerDialog
1.属性动画中产生动画的属性可以在任意位置声明。（错误）

2.属性动画中改变属性时需触发UI状态更新。（正确）
1.属性animation可以在哪些组件中使用？C. 基础组件和容器组件
2.属性动画中如何设置反向播放？D. PlayMode.Reverse
3.下面哪种情况不会回调onFinish函数？C. iterations设置为 -1
4.属性动画中关于animation参数说法错误的是？B. 参数delay不能大于duration
1.属性动画支持哪些属性？A. widthB. rotateC. opacityD. scale
2.属性动画中animation的参数有哪些？A. playModeB. curveC. delayD. onFinish
1.在http模块中，多个请求可以使用同一个httpRequest对象，httpRequest对象可以复用。（错误）

2.使用http模块发起网络请求后，可以使用destroy方法中断网络请求。（正确）

3.Web组件onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)事件，返回false时候触发网页默认弹窗。（正确）
1.使用http发起网络请求，需要以下哪种权限？B. ohos.permission.INTERNET
2.向服务器提交表单数据，以下哪种请求方式比较合适？B. RequestMethod.POST
3.下列关于Web组件的属性，描述错误的是？C. javaScriptAccess设置是否允许执行JavaScript脚本，默认不允许执行。
4.关于请求返回的响应码ResponseCode，下列描述错误的是？D. ResponseCode.GONE的值为404，表示客户端请求的资源已经不存在。
1.Web组件支持下列哪些属性或事件？A. fileAccess(fileAccess: boolean)B. javaScriptAccess(javaScriptAccess: boolean)D. onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)
2.关于http模块描述正确的是？A. http请求支持get、post、put等常用的请求方式。B. 可以使用on(‘headersReceive’)订阅请求响应头。C. post请求的参数可以在extraData中指定。D. 执行createHttp成功后，返回一个httpRequest对象，里面包括request、destroy、on和off方法。
3.关于Web组件描述正确的是？A. Web组件是提供具有网页显示能力的一种组件。B. Web组件传入的地址可以是本地资源也可以是网络资源。C. WebController可以控制Web组件的各种行为，例如网页的前进、后退等功能。D. 当访问在线网页时，需添加网络权限。
1.首选项是关系型数据库。（错误）

2.应用中涉及到Student信息，如包含姓名，性别，年龄，身高等信息可以用首选项来存储。（错误）

3.同一应用或进程中每个文件仅存在一个Preferences实例。（正确）
1.使用首选项要导入的包是哪个？B. @ohos.data.preferences
2.首选项的数据持久化后是放在哪里？C. 文件中
3.下面哪个接口不是首选项提供的API接口？B. update()
1.HarmonyOS提供的数据管理的方式都有哪些？A. 首选项B. 分布式数据服务C. 关系数据库D. 分布式数据对象
2.下面说法正确的有？B. 首选项以Key-Value形式存取数据C. 首选项存储数据数量建议不超过1万条D. 首选项的key为String类型
1.构造进度条模板通知，name字段当前需要固定配置为downloadTemplate。（正确）

2.给通知设置分发时间，需要设置showDeliveryTime为false。（错误）

3.OpenHarmony提供后台代理提醒功能，在应用退居后台或退出后，计时和提醒通知功能被系统后台代理接管。（正确）
1.将通道设置为下面哪个类型，可以显示横幅通知？A. SlotType.SOCIAL_COMMUNICATION
2.下列哪个是从API 9 开始支持的后台代理提醒功能模块。A. @ohos.reminderAgentManager
1.下面哪些方法可以移除通知？A. cancelB. cancelAll
2.后台代理提醒业务分为哪几种类型。A. 倒计时类B. 日历类C. 闹钟类
1.元服务发布的国家与地区仅限于“中国大陆” （正确）

2.编译打包的软件包存放在项目目录build > outputs > default下 （正确）
1.创建应用时，应用包名需要和app.json5或者config.json文件中哪个字段保持一致？C. bundleName
2.发布应用时需要创建证书，证书类型选择什么类型？B. 发布证书
3.发布应用时需要创建Profile时，类型选择什么类型？B. 发布
4.上传发布软件包时，软件包的格式是什么？B. .app
5.发布后的应用可以在哪里获取？A. 华为应用市场
1.用哪一种装饰器修饰的组件可作为页面入口组件？B. @Entry
2.ArkTS Stage模型支持API Version 9，关于其工程目录结构说法正确的是？C. module.json5包含HAP的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息
3.DevEco Studio提供模拟器供开发者运行和调试HarmonyOS应用/服务，以下说法错误的是？A. 本地模拟器是创建和运行在本地计算机上的，需要登录授权
1.DevEco Studio支持使用多种语言进行应用/服务的开发，包括ArkTS、JS和C/C++。在编写应用/服务阶段，可以通过以下哪些方法提升编码效率？A. 提供代码的智能补齐能力，编辑器工具会分析上下文并理解项目内容，并根据输入的内容，提示可补齐的类、方法、字段和关键字的名称等B. 在编辑器中调用ArkTS API接口或ArkTS/JS组件时，支持在编辑器中快速、精准调取出对应的参考文档C. 代码格式化功能可以帮助您快速的调整和规范代码格式，提升代码的美观度和可读性D. 如果输入的语法不符合编码规范，或者出现语义语法错误，编辑器会显示错误或警告
2.关于预览器的使用，以下哪些说法是正确的？A. 在开发界面UI代码过程中，如果添加或删除了UI组件，您只需Ctrl+S进行保存，然后预览器就会立即刷新预览结果B. 在预览器界面，可以在预览器中操作应用/服务的界面交互动作，如单击、跳转、滑动等，与应用/服务运行在真机设备上的界面交互体验一致C. 组件预览通过在组件前添加注解@Preview实现D. 页面预览通过在工程的ets文件头部添加注解@Entry实现
1.三方组件是开发者在系统能力的基础上进行了一层具体功能的封装，对其能力进行拓展的工具 。（正确）

2.可以通过ohpm uninstall 指令下载指定的三方库（错误）

3.lottie使用loadAnimation方法加载动画。（正确）
1.通过ohpm安装lottie后，在哪个文件中会生成相关的配置信息？B. oh-package.json5
2.lottie订阅事件的API为？C. animationItem.addEventListener()
1.下列属于lottie提供的动画控制API的是？A. lottie.play()B. lottie.pause()C. lottie.stop()D. lottie.goToAndPlay()
1.HarmonyOS云开发可以在一个项目中同时实现端侧和云侧功能的开发。（正确）

2.进行端云一体开发时，开发者需要精通前端、后端不同的开发语言。（错误）
1.开发者在DevEco Studio中，可以通过什么形式进行HarmonyOS云开发？B. 工程模板
2.HarmonyOS云开发当前支持最低API版本是多少？D. API 9
1.HarmonyOS云开发工程结构分哪些部分？A. 端开发工程（Application）B. 云开发工程（CloudProgram）C. 端侧公共库（External Libraries）
2.HarmonyOS云开发工程创建后，会自动开通哪些服务？A. 云函数B. 云数据库C. 云存储D. 认证服务

1.在Column和Row容器组件中,justiyContent用于设置子组件在主轴方向上的对齐格式，alignltems用于设置子组件在交又轴方向上的对产格式。(正确)
2.所有使用@Component修饰的自定义组件Q都支持onPageShow，onBackPress和onPageHide生命周期函数。(错误)
3.使用htp模块发起网络请求时，必须要使用on(headersReceive”) 订阅请求头，请求才会成功。(错误
\4. Video组件可以支持本地视频路径和网络路径播放。播放网络视频时，需要申请权ohos.permission.INTERNET。 (正确
5.Ability是系统调度应用的最小单元，是能够完成一个独立功能的组件。一个应用可以包含一个或多Ability。(正确
6.Tabs组件仅可包含子组件TabsContent，每一个页签对应一个内容视图即TabContet组件。(正确）
7.@CustomDialog装饰器用于装饰自定义弹窗组件，使得弹窗可以动态设置内容及样式。 (正确)
8.每调用一次router.pushUr()方法，默认情况下，页面栈数量会加1，页面栈支持的最大页面数量为32。(正确)
9.首选项preferences是以Key-Value形式存储数据，其中Key是可以重复。(错误)
10.Web组件对于所有的网页都可以使用zoom(factor: number)方法进行缩放。（错误
11.每一个自定义组件都有自己的生命周期。(正确

单选
12.下面哪一个事件方法可以获取到List滑动的偏移量 (A)
A. onScroll

13.发起网络数据请求需要导入以下哪个模块 (A)
A. import http from '@ohos.net.http

Row组件中有两个Text组件，如果使用justiyContent对齐方式，下面哪个属性可以实现左右两端对齐(D
D.FlexAlign.SpaceBetween
15.下面哪个方法，可以跳转到一个新页面，并销毁当前页面 (B
B. router.replaceUrl()

16.例如现在要实现一个广告弹窗，包含图片和文本等信息，使用下面那种弹窗可以实现B
B.@CustomDialog

17.使用mage组件加载网络图片需要如下哪种权限(B
B. ohos.permission.INTERNET

18.在下面哪个文件中可以设置页面的路径配置信息 (A)
A. main_pagesjson

19.首选项key的最大长度限制大小为 () 字节 (C
C.80

20.关于Button组件，下面哪个样式是胶囊型按钮 (A)
A. ButtonType.Capsule

21.下列哪种组合方式不能实现了组件从父了组件之间双向数据同步 (D
D.@State和@Prop

22.关于Resource是资源引用类型描述错误的是 ©
C.Resource支持所有的数据类型

23.首选项preferences值的存储支持哪些数据类型
D.数字型、字符型、布尔型以及这3种类型的数组类型

24.下面哪个组件不能包含子组件
D.LoadingProgress

25.用哪一种装饰器修饰的组件可作为页面入口组件
B. @Entry

26.关于Video组件的回调事件，下列说法错误的是 (A)
A.onStart视频播放时触发该事件，可以在这里获取视频时长。

27.关于@State状态数据特征，下列描述错误的是 (C
C.@State变量可以不用给定初始值

28.关于Tabs组件页签的位置设置，下面描述错误的是 (D)
D.当barPosition为Endvertical属性为true时，页签位于容器底部。

29.关于UIAbility的启动模式，下列说法错误的是 ©
c.standard为标准模式，每次startAbility都会启动一个新的实例，系统默认为standard模式。

30.关于Web组件，下面描述错误的是 (D)
D.使用Web组件访问在线和离线网页都需要添加ohos.permission.INTERNET权限。

31.关于容器组件Row和Column，下面说法错误的是 (D)
D.Row的子组件在交叉轴方向上的对文方式使用alignltems属性来设置，其参数类型为HorizontalAlign.

32.页面路由需要导入以下哪个模块 (B
B. import router from '@ohos.router

多选
34.下面哪些是Ability的生命周期回调函数 (ABEF)
A. onCreate
B. onDestroy
E. onForeground
F. onBackground

35.entry下的module.json5中包含以下哪些信息 (BCD)
B.Ability的配置信息
C.设备类型信息
D.应用权限申请列表

36.以下关于ArkTS声明式开发范式的基本组成说明正确的是 (ABCDEF)
A. 装饰器: 用来装饰类、结构体、方法以及变量，赋予其特殊的含义，例如@Entry表示这是个入口组件。
B.自定义组件: 可复用的 UI 单元，可组合其它组件。
C.UI描述: 声明式的方法来描述UI的结构，例如build0)方法中的代码块。
D.内置组件: ArkTS中默认内置的基本组件和布局组件，开发者可以直接调用，如Column、Text Divider、Button等
E.属性方法: 用于组件属性的配置，统一通过属性方法进行设置，如fontSize()、width()、 height()、color( 等。
F.事件方法:用于添加组件对事件的响应逻辑，统一通过事件方法进行设置，如跟随在Buton后面的onClick()

37.关于Tabs组件和TabContent组件，下列描述正确的是 (ABCD)
A.TabContent组件不支持设置通用宽度属性，其宽度等于Tabs组件的barWidth属性
B.TabContent组件不支持设置通用高度属性，其高度由父组件Tabs高度与TabBar组件高度决定c.TabsController用于控制Tabs组件进行页签切换，不支持一个TabsController控制多个Tabs组件.
D.TabContent组件的tabBar属性支持使用@Builder构造器生成的组件。

38.关于ForEach(arr, itemGenerator, index)组件的描述正确的是 (BCD)
B.第一个参数必须是数组，提供循环渲染的数据源
C.第二个参数生成子组件的lambda函数，为数据源中的每个数组项生成子组件。
D.第三个参数为匿名函数，用于给定数组项生成唯一且稳定的键值。

39.针对包含文本元素的组件，例如Text、Button、Textlnput等，可以使用下列哪些属性 (ABCDE
A. fontColor
B. fontSize
C. fontStyle
D. fontWeight
E. fontFamily

40.下面哪些组件层次结构是正确的 (ABE)
A. Text>Span
B.Button>Column>lmage
E.Column>Row>Button

1.三方组件是开发者在系统能力的基础上进行了一层具体功能的封装，对其能力进行拓展的工具。
正确(True)
2可以通过ohpmuninstal1 指令下载指定的三方库
错误
3.1ottie使用loadAnimation方法加载动画。
正确(True)
2.应用中涉及到Student信息，如包含姓名，性别，年龄，身高等信息可以用首选项来存储。
False)
3.同一应用或进程中每个文件仅存在一个Preferences实例。
正确

单选
2.首选项的数据持久化后是放在哪里?
C.文件中

1.使用首选项要导入的包是哪个? B
B.@ohos.data preferences

3.下面哪个接口不是前选项提供的API口?
update（）

1.通过ohpm安装1ottie后，在哪个文件中会生成相关的配置信息?
B.oh-packagejson5

2.lottie订阅事件的API为?
C.animationltem.addEventListener0{}

多选题

1.Harmonyos提供的数据管理的方式都有哪些? ABCD
a首选项
b分布式数据服务
c关系数据库
D分布式数据对象

1.下列属于1ottie提供的动画控制API的是? ABCD
A lottie.play0
B.lottiepause0
Clottie.stop0
D.lottie.goToAndPlay0

1.Ability是系统调度应用的最小单元，是能够完成一个独立功能的组件。一个应用可以包含一个或多个Ability。(正确)
2.Tabs组件仅可包含子组件TabsContent，每一个页签对应一个内容视图即TabContet组件。( E确)
3.使用http模块发起网络请求时，必须要使用on(headersReceive” 订阅请求头，请求才会成功。(错误)
4.Web组件对于所有的网页都可以使用zoom(factor: number)方法进行缩放。( 错误)
5.首选项 preferencesQ是以Key-Value形式存储数据，其中Key是可以重复。( 错误)
6.每一个自定义组件Q 都有自己的生命周期。( 正确 )
7.在Column和Row容器组件中,justifyContent用于设置子组件在主轴方向上的对齐格式，alignltems用于设置子组件在交叉轴方向上的对产格式。( 正确 )
8.@CustomDialog装饰器用于装饰自定义弹窗组件，使得弹窗可以动态设置内容及样式。( 正确)
9,所有使用@Component修饰的自定义组件都支持onPageShow，onBackPress和onPageHide生命周期函数。(错误)
10.Video组件可以支持本地视频路径和网络路径播放。播放网络视频时，需要申请权限ohos,permission.NTERNET。( 正确)
11.每调用一次router.pushUrl(方法，默认情况下，页面栈数量会加1，页面栈支持的最大页面数量为32。( 正确)

使用Image组件加载网络图片需要如下哪种权限？(B)

B. ohos.permission.INTERNET

下面哪个方法，可以跳转到一个新页面，并销毁当前页面。(B)

B. router.replaceUrl()

用哪一种装饰器修饰的组件可作为页面入口组件？(B)

B. @Entry

下列哪种组合方式不能实现子组件从父子组件之间双向数据同步。(D)

D. @State和@Prop

关于容器组件Row和Column，下面说法错误的是：(D)

D. Row的子组件在交叉轴方向上的对齐方式使用alignItems属性来设置，其参数类型为HorizontalAlign。

首选项preferences值的存储支持哪些数据类型？(D)

D. 数字型、字符型、布尔型以及这3种类型的数组类型

下面哪个组件不能包含子组件：(D)

D. LoadingProgress

关于@State状态数据特征，下列描述错误的是：©

C. @State变量可以不用给定初始值。

关于Resource是资源引用类型描述错误的是：©

C. Resource支持所有的数据类型。

页面路由需要导入以下哪个模块？(B)

B. import router from ‘@ohos.router’

Row组件中有两个Text组件，如果使用justifyContent对齐方式，下面哪个属性可以实现左右两端对齐：(D)

D. FlexAlign.SpaceBetween

关于Web组件，下面描述错误的是：(D)

D. 使用Web组件访问在线和离线网页都需要添加ohos.permission.INTERNET权限。

下面哪一个事件方法可以获取到List滑动的偏移量(A)

A. onScroll

关于UIAbility的启动模式，下列说法错误的是：©

C. standard为标准模式，每次startAbility都会启动一个新的实例，系统默认为standard模式。

首选项key的最大长度限制大小为（）字节？©

C. 80

发起网络数据请求需要导入以下哪个模块？(A)

A. import http from ‘@ohos.net.http’

关于Video组件的回调事件，下列说法错误的是：(A)

A. onStart视频播放时触发该事件，可以在这里获取视频时长。

关于Tabs组件页签的位置设置，下面描述错误的是(D)

D. 当barPosition为End ，vertical属性为true时，页签位于容器底部。

例如现在要实现一个广告弹窗，包含图片和文本等信息，使用下面那种弹窗可以实现(B)

B. @CustomDialog

关于Button组件，下面哪个样式是胶囊型按钮：(A)

A. ButtonType.Capsule

在下面哪个文件中可以设置页面的路径配置信息？(A)

A. main_pages.json

33.下面哪些容器组件是可以滚动的(A,B,C)

A. Scroll

B. List

C. Row

针对包含文本元素的组件，例如Text、Button、TextInput等，可以使用下列哪些属性：(A,B,C,D,E)

A. fontColor

B. fontSize

C. fontStyle

D. fontWeight

E. fontFamily

以下关于ArkTS声明式开发范式的基本组成说明正确的是(A,B,C,D,E,F)

A. 装饰器：用来装饰类、结构体、方法以及变量，赋予其特殊的含义，例如@Entry表示这是个入口组件。

B. 自定义组件：可复用的 UI 单元，可组合其它组件。

C. UI描述：声明式的方法来描述UI的结构，例如build()方法中的代码块。

D. 内置组件：ArkTS中默认内置的基本组件和布局组件，开发者可以直接调用，如Column、Text、Divider、Button等。

E. 属性方法：用于组件属性的配置，统一通过属性方法进行设置，如fontSize()、width()、height()、color() 等。

F. 事件方法：用于添加组件对事件的响应逻辑，统一通过事件方法进行设置，如跟随在Button后面的onClick()。

下面哪些组件层次结构是正确的。(A,B,E)

A. Text>Span

B. Button>Column>Image

E. Column>Row>Button

.entry下的module.json5中包含以下哪些信息：(B,C,D)

B. Ability的配置信息

C. 设备类型信息

D. 应用权限申请列表

关于Tabs组件和TabContent组件，下列描述正确的是(A,B,C,D)

A. TabContent组件不支持设置通用宽度属性，其宽度等于Tabs组件的barWidth属性。

B. TabContent组件不支持设置通用高度属性，其高度由父组件Tabs高度与TabBar组件高度决定。

C. TabsController用于控制Tabs组件进行页签切换，不支持一个TabsController控制多个Tabs组件。

D. TabContent组件的tabBar属性支持使用@Builder构造器生成的组件。

下面哪些是Ability的生命周期回调函数？(A,B,E,F)

A. onCreate

B. onDestroy

E. onForeground

F. onBackground

关于ForEach(arr, itemGenerator, index)组件的描述正确的是：(B,C,D)

B. 第一个参数必须是数组，提供循环渲染的数据源。

C. 第二个参数生成子组件的lambda函数，为数据源中的每个数组项生成子组件。

D. 第三个参数为匿名函数，用于给定数组项生成唯一且稳定的键值。

云函数Q打包完成后，需要到AppGallery Connect创建对应函数的触发器才可以在端侧中调用 错

在column和Row容器组件中，aliantems用于设置子组件在主轴方向上的对文格式，ustivcontent用于设置子组件在交又轴方向上的对齐格式 错

首选项preferences是以Key-Value形式存储数据，其中Key是可以重复 错

首选项是非关系数据库，遵循ACID特性 错

每调用一次routerpushur10)万法，默认情况下，页面栈数量会加1，页面栈支持的最大页面数量为32 对

所有使用@Component修饰的自定义组件都支持onPageShow，onBackPress和onPageHide生命周期函数 错

使用端云一体化开发，无需自己搭建服务器，并进行运维了
个自定义组件都有自己的生命周期 对

Harmonyos应用可以兼容OpenHarmony生态 对

worker线程不支持UI操作 对

基于端云一体化开发，开发者需要精通前端、后端不同的开发语言 错

只要使用端云一-体化的云端资源就需要支付费用 错

ArkUI 是声明式开发范式 对

HUKS中文全称是什么
B.通用密钥库系统

元服务包名必须以哪个字段结尾?
A. .hmservice

引用ohpm.三方库的包依赖是在哪个配置文件中C.oh-package.json5
发布后的鸿蒙应用可以在哪里获取?
A.华为应用市场

开发者在DevEco studio中，可以通过什么方式使用端云一-体化?
B.工程模板

Row组件中有两个Text组件，如果使用justifycontent对齐方式，下面哪个属性可以实现左右两端对产D.FlexAlignSpaceBetween

发布应用时需要创建Profile时，类型选择什么类型?
B.发布

Harmonyos提供的webview能力是否支持与H5双向通信
A.支持

关于容器组件Row和Column，下面说法错误的是
D.Row的子组件在交又轴方向上的对齐方式使用alignltems属性来设置，其参数类型为HorizontalAlign.

发布开放式测试版本后，怎么追加测试用户?
B.需要重新发布新的测试版本追加用户

下面哪个组件不能包含子组件
D.LoadingProgress

添加用户信息时，如果帐号使用手机号码，以下哪种输入格式正确?
A86-189****1234

开放式测试版本发布后，受邀测试用户如何体验?
B.进入服务中心，打开“开发者测试”开关，在最下方的“服务测试”找到待体验的元服务

端云一体化当前支持最低的鸿蒙API版本是
D.9

认证服务支持下列哪种帐号认证
C.华为帐号

元服务包由一个或多个HAP包组成，每个HAP包不得超过()，以提供秒开体验
B.10MB

@state修饰的状态数据被修改时会触发组件的(》方法进行UI界面更新
A build方法

下列哪种组合方式不能实现子组件从父子组件之间双向数据同步
D.@State和@Prop

关于UIAbility的启动模式，下列说法错误的是
C.muliton为多实例模式，每次startAbility都会启动一个新的实例，系统默认为muliton为模式

发布应用时要创建证书，证书类型选择什么类型?
B发布证书

关于Tabs组件页签的位置设置，下面描述错误的是
D当barPosition为End，vertical属性为true时，页签位于容器底部

自定义组件的aboutToAppear()在什么时机执行
B.build函数之前

上传鸿蒙应用或元服务软件包时，软件包的格式是什么?
B.app

创建应用时，应用包名需要和config.json文件中哪个字段保持一致?
C.bundleName

模块提供了全双工通信协议
B.WebSocket

关于@state状态数据特征，下列描述错误的是
c.@State查量可以不用给定初始值

关于video组件的回调事件，下列说法错误的是
A.onstart视频播放时触发该事件，可以在这里获取视频时长

worker线程最大同时激活数
C.8

下面哪个方法，可以跳转到一个新页面，并销毁当前页面
B. router.replaceUrl()

在下面哪个文件中可以设置页面的路径配置信息?
A. main pagesjson

引用ohpm三方库的包依赖是在哪个配置文件中
C.oh-packagejson5

发布开放式测试版本后，还需要人工审核吗?
B.不需要

元服务创建测试用户时，用户列表存储位置需要选择
B.中国

应用包名不能包合一些保留字段，以下哪个字段符合规范?
A. .test.

跨端迁移和协同是哪个鸿蒙特征的能力
C.统一生态

一次开发多端部署的三个层次有哪些?
A.界面级一多
B.功能级一多
C.工程级一多

自定义组件的组件化特点有哪些
A.可组合
B.可重用
C.配置化生命周期
D.数据驱动更新

鸿蒙应用/元服务上架过程上传软件包常见的问题有哪些
A.软件包中的发布Profile文件和当前上传软件包的应用不匹配
B.软件包中的发布证书与发布Profile文件中的发布证书不匹配
C.软件包未签名导制提示非法软件包
D.软件包中使用证书已经失效过者过期

公共事件服务为应用程序提供哪些能力
B.订阅公共事件
C.发布公共事件
D.取消订阅公共事件

以下关于ArkTS声明式开发范式的基本组成说明正确的是
A.装饰器:用来装饰类.结构体、方法以及变量，赋予其特殊的含义，例如@Entry表示这是个入口组件。
B.自定义组件:可复用的UI单元，可组合其它组件。
C.UI描述:声明式的方法来描述U的结构,例如build0方法中的代码块。
D.内置组件: ArkTS中默认内置的基本组件和布局组件,开发者可以直接调用，如Coumn.Text,Divider.Button等E.属性方法:用于组件属性的配置,统–通过属性方法进行设置,如fontSize0. widtho. height)、 color(等F.事件方法:用于添加组件对事件的响应逻辑，统-通过事件方法进行设置，如跟随在Button后面的onClick)。*

鸿蒙特征包含哪些场景化能力
A.一次开发、多端部警
B.可分可合、自由流转
C.统一生态、原生智能

端云一体化已经集成以下哪些服务SDK
B.云数据库
C.云存储
D.云托管

端云一体化中的云函数支持哪些操作
A编写函数
B测试函数
C打包函数
D部署函数

下面哪些组件层次结构是正确的
A. Text>Span
B. Button>Column>lmage
E.Column>Row>Button

UIAbility的生命周期包括哪些函数?
A. onCreate
B. onForeground
C. onBackground
D. onDestroy

下面哪些容器组件是可以滚动的
A. Scroll
B. List
D. Grid

entry下的modulejson5中包含以下哪些信息
BAbility的配置信息
C.设备类型信息
D应用权限申请列表

端云一体化工程目录结构分为哪些部分
A端开发工程(Application)
B云开发工程(CloudProgram)
C端侧公共库(External Libraries)

UIAbility的启动模式有哪些
A. singleton
B.specified
C.multition

判断题

1.DevEco Studio是开发HarmonyOS应用的一站式集成开发环境。 （正确）

2.main_pages.json存放页面page路径配置信息。（正确）

单选题

1.在stage模型中，下列配置文件属于AppScope文件夹的是？（C）

A. main_pages.json

B. module.json5

C. app.json5

D. package.json

多选题

1.如何在DevEco Studio中创建新项目？（B C）

A. 在计算机上创建一个新文件，并将其命名为“new harmonyOS项目”

B. 如果已打开项目，从DevEco Studio菜单选择’file>new>Create Project’

C. 如果第一次打开DevEco Studio，在欢迎页点击“Create new Project”

2.module.json5配置文件中，包含了以下哪些信息？（A B D）

A. ability的相关配置信息

B. 模块名

C. 应用的版本号

D. 模块类型
【习题】ArkTS基础知识

判断题

1.循环渲染ForEach可以从数据源中迭代获取数据，并为每个数组项创建相应的组件。（正确）

2.@Link变量不能在组件内部进行初始化。（正确）

单选题

1.用哪一种装饰器修饰的struct表示该结构体具有组件化能力？（A）

A. @Component

B. @Entry

C. @Builder

D. @Preview

2.用哪一种装饰器修饰的自定义组件可作为页面入口组件？（B）

A. @Component

B. @Entry

C. @Builder

D. @Preview

多选题

1.下面哪些函数是自定义组件的生命周期函数？（A B C D E）

A. aboutToAppear

B. aboutToDisappear

C. onPageShow

D. onPageHide

E. onBackPress

2.下面哪些装饰器可以用于管理自定义组件中变量的状态？（C D）

A. @Component

B. @Entry

C. @State

D. @Link
【习题】应用程序框架

判断题

1.一个应用只能有一个UIAbility。（错误）

2.创建的Empty Ability模板工程，初始会生成一个UIAbility文件。（正确）

3.每调用一次router.pushUrl()方法，页面路由栈数量均会加1。（错误）

单选题

1.API9及以上，router.pushUrl()方法，默认的跳转页面使用的模式是哪一种？（A）

A. standard

B. Single

C. Specified

2.UIAbility启动模式需要在module.json5文件中配置哪个字段？（C）

A. module

B. skills

C. launchType

D. abilities

多选题

1.API9及以上，router.pushUrl()方法的mode参数可以配置为以下哪几种跳转页面使用的模式？（A B）

A. Standard

B. Single

C. Specified

2.UIAbility的生命周期有哪几个状态？（A C D F）

A. Create

B. WindowStageCreate

C. Foreground

D. Background

E. WindowStageDestroy

F. Destroy

3.UIAbility有哪几种的启动模式？（A B C）

A. multiton

B. singleton

C. specified
【习题】构建漂亮的页面

判断题

1.在Column容器中的子组件默认是按照从上到下的垂直方向布局的，其主轴的方向是垂直方向，在Row容器中的组件默认是按照从左到右的水平方向布局的，其主轴的方向是水平方向。（正确）

2.List容器可以沿水平方向排列，也可以沿垂直方向排列。（正确）

3.当Tabs组件的参数barPosition为BarPosition.End时，页签位于页面底部。（错误）

4.Resource是资源引用类型，用于设置组件属性的值，可以定义组件的颜色、文本大小、组件大小等属性。（正确）

单选题

1.使用TextInput完成一个密码输入框，推荐设置type属性为下面哪个值？（B）

A. InputType.Normal

B. InputType.Password

C. InputType.Email

D. InputType.Number

2.使用Image加载网络图片，需要以下那种权限？（B）

A. ohos.permission.USE_BLUETOOTH

B. ohos.permission.INTERNET

C. ohos.permission.REQUIRE_FORM

D. ohos.permission.LOCATION

3.下面哪个组件层次结构是错误的？（C）

A. List>ListItem>Column

B. Column>List>ListItem

C. Grid>Row>GridItem

D. Grid>GridItem

多选题

1.Row容器的主轴是水平方向，交叉轴是垂直方向，其参数类型为VerticalAlign （垂直对齐），VerticalAlign 定义了以下几种类型？（A B E）

A. Top

B. Bottom

C. Start

D. End

E. Center

2.下面哪些组件是容器组件？（B C）

A. Button

B. Row

C. Column

D. Image

E. TextInput

3.关于Tabs组件页签的位置设置，下面描述正确的是？（A B C D）

A. 当barPosition为Start（默认值），vertical属性为false时（默认值），页签位于容器顶部。

B. 当barPosition为Start（默认值） ，vertical属性为true时，页签位于容器左侧。

C. 当barPosition为End ，vertical属性为false（默认值）时，页签位于容器底部。

D. 当barPosition为End ，vertical属性为true时，页签位于容器右侧。
【习题】构建更加丰富的页面

判断题

1.@State修饰的属性不允许在本地进行初始化。（错误）

2.@CustomDialog装饰器用于装饰自定义弹窗组件，使得弹窗可以自定义内容及样式。（正确）

3.将Video组件的controls属性设置为false时，不会显示控制视频播放的控制栏。（正确）

4.@Prop修饰的属性值发生变化时，此状态变化不会传递到其父组件。（正确）

单选题

1.使用Video组件播放网络视频时，需要以下哪种权限？（B）

A. ohos.permission.READ_MEDIA

B. ohos.permission.INTERNET

C. ohos.permission.WRITE_MEDIA

D. ohos.permission.LOCATION

2.下列哪种组合方式可以实现子组件从父子组件单向状态同步。（C）

A. @State和@Link

B. @Provide和@Consume

C. @State和@Prop

D. @Observed和@ObjectLink

多选题

1.下列哪些状态装饰器修饰的属性必须在本地进行初始化。（A D）

A. @State

B. @Prop

C. @Link

D. @Provide

E. @Consume

2.ArkUI提供了下面哪些弹窗功能。（A B C D E）

A. AlertDialog

B. TextPickerDialog

C. DatePickerDialog

D. @CustomDialog

E. TimePickerDialog
【习题】属性动画

判断题

1.属性动画中产生动画的属性可以在任意位置声明。（错误）

2.属性动画中改变属性时需触发UI状态更新。（正确）

单选题

1.属性animation可以在哪些组件中使用？（C）

A. 只能基础组件

B. 只能容器组件

C. 基础组件和容器组件

D. 以上都不对

2.属性动画中如何设置反向播放？（D）

A. PlayMode.Normal

B. PlayMode.Alternate

C. PlayMode.AlternateReverse

D. PlayMode.Reverse

3.下面哪种情况不会回调onFinish函数？（C）

A. delay设置为 0

B. tempo设置为 1

C. iterations设置为 -1

D. playMode设置为 PlayMode.Reverse

4.属性动画中关于animation参数说法错误的是？（B）

A. 参数tempo默认值为1.0

B. 参数delay不能大于duration

C. 参数curve可以不设置

D. 参数iterations可以不设置

多选题

1.属性动画支持哪些属性？（A B C D）

A. width

B. rotate

C. opacity

D. scale

2.属性动画中animation的参数有哪些？（A B C D）

A. playMode

B. curve

C. delay

D. onFinish
【习题】从网络获取数据

判断题

1.在http模块中，多个请求可以使用同一个httpRequest对象，httpRequest对象可以复用。（错误）

2.使用http模块发起网络请求后，可以使用destroy方法中断网络请求。（正确）

3.Web组件onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)事件，返回false时候触发网页默认弹窗。（正确）

单选题

1.使用http发起网络请求，需要以下哪种权限？（B）

A. ohos.permission.USE_BLUETOOTH

B. ohos.permission.INTERNET

C. ohos.permission.REQUIRE_FORM

D. ohos.permission.LOCATION

2.向服务器提交表单数据，以下哪种请求方式比较合适？（B）

A. RequestMethod.GET

B. RequestMethod.POST

C. RequestMethod.PUT

D. RequestMethod.DELETE

3.下列关于Web组件的属性，描述错误的是？（C）

A. 设置是否开启应用中文件系统的访问，默认启用。$rawfile(filepath/filename)中rawfile路径的文件不受该属性影响而限制访问。

B. imageAccess设置是否允许自动加载图片资源，默认允许。

C. javaScriptAccess设置是否允许执行JavaScript脚本，默认不允许执行。

D. zoomAccess设置是否支持手势缩放，默认允许执行缩放。

4.关于请求返回的响应码ResponseCode，下列描述错误的是？（D）

A. ResponseCode.OK的值为200，表示请求成功。一般用于GET与POST请求。

B. ResponseCode.NOT_FOUND的值为404，表示服务器无法根据客户端的请求找到资源（网页）。

C. ResponseCode.INTERNAL_ERROR的值为500，表示服务器内部错误，无法完成请求。

D. ResponseCode.GONE的值为404，表示客户端请求的资源已经不存在。

多选题

1.Web组件支持下列哪些属性或事件？（A B D）

A. fileAccess(fileAccess: boolean)

B. javaScriptAccess(javaScriptAccess: boolean)

C. on(type: ‘headerReceive’, callback: AsyncCallback): void

D. onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)

E. destroy(): void

2.关于http模块描述正确的是？（A B C D）

A. http请求支持get、post、put等常用的请求方式。

B. 可以使用on(‘headersReceive’)订阅请求响应头。

C. post请求的参数可以在extraData中指定。

D. 执行createHttp成功后，返回一个httpRequest对象，里面包括request、destroy、on和off方法。

3.关于Web组件描述正确的是？（A B C D）

A. Web组件是提供具有网页显示能力的一种组件。

B. Web组件传入的地址可以是本地资源也可以是网络资源。

C. WebController可以控制Web组件的各种行为，例如网页的前进、后退等功能。

D. 当访问在线网页时，需添加网络权限。
【习题】保存应用数据

判断题

1.首选项是关系型数据库。（错误）

2.应用中涉及到Student信息，如包含姓名，性别，年龄，身高等信息可以用首选项来存储。（错误）

3.同一应用或进程中每个文件仅存在一个Preferences实例。（正确）

单选题

1.使用首选项要导入的包是哪个？（B）

A. @ohos.data.rdb

B. @ohos.data.preferences

C. @ohos.router

D. @ohos.data.storage

2.首选项的数据持久化后是放在哪里？（C）

A. 内存中

B. 数据库表中

C. 文件中

D. 云端

3.下面哪个接口不是首选项提供的API接口？（B）

A. get()

B. update()

C. put()

D. flush()

多选题

1.HarmonyOS提供的数据管理的方式都有哪些？（A B C D）

A. 首选项

B. 分布式数据服务

C. 关系数据库

D. 分布式数据对象

2.下面说法正确的有？（B C D）

A. 首选项遵循ACID特性

B. 首选项以Key-Value形式存取数据

C. 首选项存储数据数量建议不超过1万条

D. 首选项的key为String类型
【习题】给应用添加通知和提醒

判断题

1.构造进度条模板通知，name字段当前需要固定配置为downloadTemplate。（正确）

2.给通知设置分发时间，需要设置showDeliveryTime为false。（错误）

3.OpenHarmony提供后台代理提醒功能，在应用退居后台或退出后，计时和提醒通知功能被系统后台代理接管。（正确）

单选题

1.将通道设置为下面哪个类型，可以显示横幅通知？（A）

A. SlotType.SOCIAL_COMMUNICATION

B. SlotType.SERVICE_INFORMATION

C. SlotType.CONTENT_INFORMATION

D. SlotType.OTHER_TYPES

2.下列哪个是从API 9 开始支持的后台代理提醒功能模块。（A）

A. @ohos.reminderAgentManager

B. @ohos.reminderManager

C. @ohos.reminderAgent

D. @ohos.notificationManager

多选题

1.下面哪些方法可以移除通知？（A B）

A. cancel

B. cancelAll

C. removeSlot

2.后台代理提醒业务分为哪几种类型。（A B C）

A. 倒计时类

B. 日历类

C. 闹钟类

D. 日程类
【习题】HarmonyOS应用/元服务上架

判断题

1.元服务发布的国家与地区仅限于“中国大陆” （正确）

2.编译打包的软件包存放在项目目录build > outputs > default下 （正确）

单选题

1.创建应用时，应用包名需要和app.json5或者config.json文件中哪个字段保持一致？ （C）

A. package

B. name

C. bundleName

2.发布应用时需要创建证书，证书类型选择什么类型？（B）

A. 调试证书

B. 发布证书

3.发布应用时需要创建Profile时，类型选择什么类型？ （B）

A. 调试

B. 发布

4.上传发布软件包时，软件包的格式是什么？（B）

A. .zip

B. .app

C. .apk

D. .hap

5.发布后的应用可以在哪里获取？（A）

A. 华为应用市场

B. 华为服务中心

C. 华为生态市场
【习题】使用DevEco Studio高效开发

单选题

1.用哪一种装饰器修饰的组件可作为页面入口组件？（B）

A. @Component

B. @Entry

C. @Preview

D. @Builder

2.ArkTS Stage模型支持API Version 9，关于其工程目录结构说法正确的是？（C）

A. oh-package.json5用于存放应用级配置信息，包括签名、产品配置等

B. build-profile.json5用于配置三方包声明文件的入口及包名

C. module.json5包含HAP的配置信息、应用在具体设备上的配置信息以及应用的全局配置信息

D. app.json5用于编写应用级编译构建任务脚本

3.DevEco Studio提供模拟器供开发者运行和调试HarmonyOS应用/服务，以下说法错误的是？（A）

A. 本地模拟器是创建和运行在本地计算机上的，需要登录授权

B. 本地模拟器支持音量大小调节、电池电量调节、屏幕旋转等功能

C. 向本地模拟器安装应用/服务的时候，不需要给应用签名

D. DevEco Studio会启动应用/服务的编译构建，完成后应用/服务即可运行在本地模拟器上

多选题

1.DevEco Studio支持使用多种语言进行应用/服务的开发，包括ArkTS、JS和C/C++。在编写应用/服务阶段，可以通过以下哪些方法提升编码效率？（A B C D）

A. 提供代码的智能补齐能力，编辑器工具会分析上下文并理解项目内容，并根据输入的内容，提示可补齐的类、方法、字段和关键字的名称等

B. 在编辑器中调用ArkTS API接口或ArkTS/JS组件时，支持在编辑器中快速、精准调取出对应的参考文档

C. 代码格式化功能可以帮助您快速的调整和规范代码格式，提升代码的美观度和可读性

D. 如果输入的语法不符合编码规范，或者出现语义语法错误，编辑器会显示错误或警告

2.关于预览器的使用，以下哪些说法是正确的？（A B C D）

A. 在开发界面UI代码过程中，如果添加或删除了UI组件，您只需Ctrl+S进行保存，然后预览器就会立即刷新预览结果

B. 在预览器界面，可以在预览器中操作应用/服务的界面交互动作，如单击、跳转、滑动等，与应用/服务运行在真机设备上的界面交互体验一致

C. 组件预览通过在组件前添加注解@Preview实现

D. 页面预览通过在工程的ets文件头部添加注解@Entry实现
【习题】三方库

判断题

1.三方组件是开发者在系统能力的基础上进行了一层具体功能的封装，对其能力进行拓展的工具 。（正确）

2.可以通过ohpm uninstall 指令下载指定的三方库（错误）

3.lottie使用loadAnimation方法加载动画。（正确）

单选题

1.通过ohpm安装lottie后，在哪个文件中会生成相关的配置信息？（B）

A. module.json5

B. oh-package.json5

C. app.json5

D. main_page.json

2.lottie订阅事件的API为？（C）

A. lottie.setSpeed()

B. lottie.setDirection()

C. animationItem.addEventListener()

D. animationItem.removeEventListener()

多选题

1.下列属于lottie提供的动画控制API的是？（A B C D）

A. lottie.play()

B. lottie.pause()

C. lottie.stop()

D. lottie.goToAndPlay()
【习题】HarmonyOS云开发

判断题

1.HarmonyOS云开发可以在一个项目中同时实现端侧和云侧功能的开发。（正确）

2.进行端云一体开发时，开发者需要精通前端、后端不同的开发语言。（错误）

单选题

1.开发者在DevEco Studio中，可以通过什么形式进行HarmonyOS云开发？（B）

A. IDE插件

B. 工程模板

C. 命令行工具

D. 可视化工具

2.HarmonyOS云开发当前支持最低API版本是多少？（D）

A. API 6

B. API 7

C. API 8

D. API 9

多选题

1.HarmonyOS云开发工程结构分哪些部分？（A B C）

A. 端开发工程（Application）

B. 云开发工程（CloudProgram）

C. 端侧公共库（External Libraries）

D. 公共资源库（Resource）

2.HarmonyOS云开发工程创建后，会自动开通哪些服务？（A B C D）

A. 云函数

B. 云数据库

C. 云存储

D. 认证服务
————————————————

一、判断

判断:首选项preferences是以Key-Value形式存储数据，其中Key是可以重复。（错）
判断:使用http模块发起网络请求时，必须要使用on(‘headersReceive’）订阅请求头，请求才会成功。（错）
判断:所有使用@Component修饰的自定义组件都支持onPageShow，onBackPress和onPageHide生命周期函数。（错）
判断:在Column和Row容器组件中，justifyContent用于设置子组件在主轴方向上的对齐格式，alignItems用于设置子组件在交叉轴方向上的对齐格式。（对）
判断:Video组件可以支持本地视频路径和网络路径播放。播放网络视频时，需要申请权限ohos.permission.INTERNET。（对）
判断:Ability是系统调度应用的最小单元，是能够完成一个独立功能的组件。一个应用可以包含一个或多个Ability。（对）
判断:每调用一次router.pushUrl()方法，默认情况下，页面栈数量会加1，页面栈支持的最大页面数量为32。（对）
判断: @CustomDialog装饰器用于装饰自定义弹窗组件，使得弹窗可以动态设置内容及样式。（对）
判断:每一个自定义组件都有自己的生命周期（对）
判断:Tabs组件仅可包含子组件TabsContent，每一个页签对应一个内容视图即TabContet组件。（对）
判断:Web组件对于所有的网页都可以使用zoom(factor: number)方法进行缩放。（错）
1
2
3
4
5
6
7
8
9
10
11
二、单选

单选：首选项key的最大长度限制大小为（）字节？（80）
单选：下面哪个组件不能包含子组件：（LoadingProgress）
单选：下面哪一个事件方法可以获取到List滑动的偏移量？（onScroll）
单选：Row组件中有两个Text组件，如果使用justifyContent对齐方式，下面哪个属性可以实现左右两端对齐：（ FlexAlign.SpaceBetween）
单选：关于Video组件的回调事件，下列说法错误的是：（ onStart视频播放时触发该事件，可以在这里获取视频时长。）
单选：下面哪个方法，可以跳转到一个新页面，并销毁当前页面。（ router.replaceUrl()）
单选：关于Web组件，下面描述错误的是：（使用Web组件访问在线和离线网页都需要添加ohos.permission.INTERNET权限。）
单选：关于容器组件Row和Column，下面说法错误的是：（Row的子组件在交叉轴方向上的对齐方式使用alignItems属性来设置，其参数类型为HorizontalAlign。）
单选：关于@State状态数据特征，下列描述错误的是：（@State变量可以不用给定初始值。）
单选：关于Tabs组件页签的位置设置，下面描述错误的是？（ 当barPosition为End ，vertical属性为true时，页签位于容器底部。）
单选：关于Button组件，下面哪个样式是胶囊型按钮：（ButtonType.Capsule）
单选：在下面哪个文件中可以设置页面的路径配置信息？（main_pages.json）
单选：首选项preferences值的存储支持哪些数据类型？（数字型、字符型、布尔型以及这3种类型的数组类型。）
单选：页面路由需要导入以下哪个模块？（import router from ‘@ohos.router’）
单选：关于UIAbility的启动模式，下列说法错误的是：（standard为标准模式，每次startAbility都会启动一个新的实例，系统默认为standard模式。）
单选：关于Resource是资源引用类型描述错误的是：（Resource支持所有的数据类型。）
单选：例如现在要实现一个广告弹窗，包含图片和文本等信息，使用下面那种弹窗可以实现？（@CustomDialog）
单选：发起网络数据请求需要导入以下哪个模块？（import http from ‘@ohos.net.http’）
单选：使用Image组件加载网络图片需要如下哪种权限？（ohos.permission.INTERNET）
单选：下列哪种组合方式不能实现子组件从父子组件之间双向数据同步。（@State和@Prop）
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
多选题 ：1、以下关于ArkTS声明式开发范式的基本组成说明正确的是
A. 装饰器：用来装饰类、结构体、方法以及变量，赋予其特殊的含义，例如@Entry表示这是个入口组件。

B. 自定义组件：可复用的 UI 单元，可组合其它组件。

C. UI描述：声明式的方法来描述UI的结构，例如build()方法中的代码块。

D. 内置组件：ArkTS中默认内置的基本组件和布局组件，开发者可以直接调用，如Column、Text、Divider、Button等。

E. 属性方法：用于组件属性的配置，统一通过属性方法进行设置，如fontSize()、width()、height()、color() 等。

F. 事件方法：用于添加组件对事件的响应逻辑，统一通过事件方法进行设置，如跟随在Button后面的onClick()。

多选题：下面哪些是Ability的生命周期回调函数？
A. onCreate
B. onDestroy
E. onForeground
F. onBackground

多选题：关于Tabs组件和TabContent组件，下列描述正确的是
. TabContent组件不支持设置通用宽度属性，其宽度等于Tabs组件的barWidth属性。

B. TabContent组件不支持设置通用高度属性，其高度由父组件Tabs高度与TabBar组件高度决定。

C. TabsController用于控制Tabs组件进行页签切换，不支持一个TabsController控制多个Tabs组件。

D. TabContent组件的tabBar属性支持使用@Builder构造器生成的组件。

多选题：下面哪些组件层次结构是正确的

A. Text>Span
B. Button>Column>Image
E. Column>Row>Button

多选题：entry下的module.json5中包含以下哪些信息
B. Ability的配置信息

C. 设备类型信息

D. 应用权限申请列表

多选题：关于ForEach(arr, itemGenerator, index)组件的描述正确的是：
B. 第一个参数必须是数组，提供循环渲染的数据源。

C. 第二个参数生成子组件的lambda函数，为数据源中的每个数组项生成子组件。

D. 第三个参数为匿名函数，用于给定数组项生成唯一且稳定的键值。

多选题：针对包含文本元素的组件，例如Text、Button、TextInput等，可以使用下列哪些属性：
A. fontColor

B. fontSize

C. fontStyle

D. fontWeight

E. fontFamily

云函数打包完成后，需要到AppGallery Connect创建对应函数的触发器才可以在端侧中调用
错

在column和Row容器组件中，aligntems用于设置子组件在主轴方向上的对齐格式，justifycontent用于设置子组件在交叉轴方向上的对齐格式
错

首选项preferences是以Key-Value形式存储数据，其中Key是可以重复
错

首选项是非关系数据库，遵循ACID特性
错

每调用一次routerpushur1()万法，默认情况下，页面栈数量会加1，页面栈支持的最大页面数量为32
对

所有使用@Component修饰的自定义组件都支持onPageShow，onBackPress和onPageHide生命周期函数
错

使用端云一体化开发，无需自己搭建服务器，并进行运维了
对

每一个自定义组件都有自己的生命周期
对

Harmonyos应用可以兼容OpenHarmony生态
对

worker线程不支持UI操作
对

基于端云一体化开发，开发者需要精通前端、后端不同的开发语言
错

只要使用端云一-体化的云端资源就需要支付费用
错

ArkUI 是声明式开发范式
对

HUKS中文全称是什么
B.通用密钥库系统

元服务包名必须以哪个字段结尾?
A. .hmservice

引用ohpm.三方库的包依赖是在哪个配置文件中
C. oh-package.json5

发布后的鸿蒙应用可以在哪里获取?
A.华为应用市场

开发者在DevEco studio中，可以通过什么方式使用端云一-体化?
B.工程模板

Row组件中有两个Text组件，如果使用justifycontent对齐方式，下面哪个属性可以实现左右两端对齐:
D.FlexAlignSpaceBetween

发布应用时需要创建Profile时，类型选择什么类型?
B.发布

Harmonyos提供的webview能力是否支持与H5双向通信
A.支持

关于容器组件Row和Column，下面说法错误的是:
D.Row的子组件在交又轴方向上的对齐方式使用alignltems属性来设置，其参数类型为HorizontalAlign.

发布开放式测试版本后，怎么追加测试用户?
B.需要重新发布新的测试版本追加用户

下面哪个组件不能包含子组件
D.LoadingProgress

添加用户信息时，如果帐号使用手机号码，以下哪种输入格式正确?
A.86-189****1234

开放式测试版本发布后，受邀测试用户如何体验?
B.进入服务中心，打开“开发者测试”开关，在最下方的“服务测试”找到待体验的元服务

端云一体化当前支持最低的鸿蒙API版本是
D.9

认证服务支持下列哪种帐号认证
C.华为帐号

元服务包由一个或多个HAP包组成，每个HAP包不得超过()，以提供秒开体验。
B.10MB

@state修饰的状态数据被修改时会触发组件的(》方法进行UI界面更新
A build方法

下列哪种组合方式不能实现子组件从父子组件之间双向数据同步
D.@State和@Prop

关于UIAbility的启动模式，下列说法错误的是
Cmuliton为多实例模式，每次startAbility都会启动一个新的实例，系统默认为muliton为模式。

发布应用时要创建证书，证书类型选择什么类型?
B发布证书

关于Tabs组件页签的位置设置，下面描述错误的是
D当barPosition为End，vertical属性为true时，页签位于容器底部

自定义组件的aboutToAppear()在什么时机执行
B.build函数之前

上传鸿蒙应用或元服务软件包时，软件包的格式是什么?
B.app

创建应用时，应用包名需要和config.json文件中哪个字段保持一致?
C. bundleName

模块提供了全双工通信协议
B. WebSocket

关于@state状态数据特征，下列描述错误的是:
C.@State查量可以不用给定初始值

关于video组件的回调事件，下列说法错误的是
A.onStart视频播放时触发该事件，可以在这里获取视频时长

worker线程最大同时激活数
C.8

下面哪个方法，可以跳转到一个新页面，并销毁当前页面
B. router.replaceUrl()

在下面哪个文件中可以设置页面的路径配置信息?
A. main pagesjson

引用ohpm三方库的包依赖是在哪个配置文件中
C. oh-package.json5

发布开放式测试版本后，还需要人工审核吗?
B.不需要

元服务创建测试用户时，用户列表存储位置需要选择
B.中国

应用包名不能包合一些保留字段，以下哪个字段符合规范?
A. .test.

跨端迁移和协同是哪个鸿蒙特征的能力
C.统一生态

一次开发多端部署的三个层次有哪些？
A. 界面级一多
B. 功能级一多
C. 工程级一多

自定义组件的组件化特点有哪些
A. 可组合
B. 可重用
C. 配置化生命周期
D. 数据驱动更新

鸿蒙应用/元服务上架过程上传软件包常见的问题有哪些
A. 软件包中的发布Profile文件和当前上传软件包的应用不匹配
B. 软件包中的发布证书与发布Profile文件中的发布证书不匹配
C. 软件包未签名导制提示非法软件包
D. 软件包中使用证书已经失效过者过期

公共事件服务为应用程序提供哪些能力
B. 订阅公共事件
C. 发布公共事件
D. 取消订阅公共事件

以下关于ArkTS声明式开发范式的基本组成说明正确的是
A.装饰器:用来装饰类.结构体、方法以及变量，赋予其特殊的含义，例如@Entry表示这是个入口组件。
B.自定义组件:可复用的UI单元，可组合其它组件。
C. UI描述:声明式的方法来描述U的结构,例如build0方法中的代码块。
D. 内置组件: ArkTS中默认内置的基本组件和布局组件,开发者可以直接调用，如Column. Text, Divider. Button等。
E.属性方法:用于组件属性的配置,统- -通过属性方法进行设置,如fontSize0. width0. height)、 color( 等。
F. 事件方法:用于添加组件对事件的响应逻辑，统-通过事件方法进行设置，如跟随在Button后面的onClick)。**

鸿蒙特征包含哪些场景化能力
A.一次开发、多端部警
B.可分可合、自由流转
C.统一生态、原生智能

端云一体化已经集成以下哪些服务SDK
B.云数据库
C.云存储
D.云托管

端云一体化中的云函数支持哪些操作
A编写函数
B测试函数
C打包函数
D部署函数

下面哪些组件层次结构是正确的
A. Text>Span
B. Button>Column>lmage
E.Column>Row>Button

UIAbility的生命周期包括哪些函数?
A. onCreate
B. onForeground
C. onBackground
D. onDestroy

下面哪些容器组件是可以滚动的
A. Scroll
B. List
D. Grid

entry下的modulejson5中包含以下哪些信息
BAbility的配置信息
C.设备类型信息
D应用权限申请列表

端云一体化工程目录结构分为哪些部分
A端开发工程(Application)
B云开发工程(CloudProgram)
C端侧公共库(External Libraries)

UIAbility的启动模式有哪些
A. singleton
B.specified
C.multition

判断题

1.@State修饰的属性不允许在本地进行初始化。(错误)

2.@CustomDialog装饰器用于装饰自定义弹窗组件，使得弹窗可以自定义内容及样式。(正确)

3.将Video组件的controls属性设置为false时，不会显示控制视频播放的控制栏。(正确)

4.@Prop修饰的属性值发生变化时，此状态变化不会传递到其父组件。(正确)
单选题

1.使用Video组件播放网络视频时，需要以下哪种权限？(B)

A. ohos.permission.READ_MEDIA

B. ohos.permission.INTERNET

C. ohos.permission.WRITE_MEDIA

D. ohos.permission.LOCATION

2.下列哪种组合方式可以实现子组件从父子组件单向状态同步。©

A. @State和@Link

B. @Provide和@Consume

C. @State和@Prop

D. @Observed和@ObjectLink
多选题

1.下列哪些状态装饰器修饰的属性必须在本地进行初始化。( A，D)

A. @State

B. @Prop

C. @Link

D. @Provide

E. @Consume

2.ArkUI提供了下面哪些弹窗功能。(A，B，C，D，E)

A. AlertDialog

B. TextPickerDialog

C. DatePickerDialog

D. @CustomDialog

E. TimePickerDialog
二、属性动画
判断题

1.属性动画中产生动画的属性可以在任意位置声明。(错误)

2.属性动画中改变属性时需触发UI状态更新。(正确)
单选题

1.属性animation可以在哪些组件中使用？©

A. 只能基础组件

B. 只能容器组件

C. 基础组件和容器组件

D. 以上都不对

2.属性动画中如何设置反向播放？(D)

A. PlayMode.Normal

B. PlayMode.Alternate

C. PlayMode.AlternateReverse

D. PlayMode.Reverse

3.下面哪种情况不会回调onFinish函数？©

A. delay设置为 0

B. tempo设置为 1

C. iterations设置为 -1

D. playMode设置为 PlayMode.Reverse

4.属性动画中关于animation参数说法错误的是？(B)

A. 参数tempo默认值为1.0

B. 参数delay不能大于duration

C. 参数curve可以不设置

D. 参数iterations可以不设置
多选题

1.属性动画支持哪些属性？(A、B、C、D)

A. width

B. rotate

C. opacity

D. scale

2.属性动画中animation的参数有哪些？(A、B、C、D)

A. playMode

B. curve

C. delay

D. onFinish
三、从网络获取数据
判断题

1.在http模块中，多个请求可以使用同一个httpRequest对象，httpRequest对象可以复用。(错误)

2.使用http模块发起网络请求后，可以使用destroy方法中断网络请求。(正确)

3.Web组件onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)事件，返回false时候触发网页默认弹窗。(正确)
单选题

1.使用http发起网络请求，需要以下哪种权限？(B)

A. ohos.permission.USE_BLUETOOTH

B. ohos.permission.INTERNET

C. ohos.permission.REQUIRE_FORM

D. ohos.permission.LOCATION

2.向服务器提交表单数据，以下哪种请求方式比较合适？(B)

A. RequestMethod.GET

B. RequestMethod.POST

C. RequestMethod.PUT

D. RequestMethod.DELETE

3.下列关于Web组件的属性，描述错误的是？©

A. fileAccess 设置是否开启通过$rawfile(filepath/filename)访问应用中rawfile路径的文件， 默认启用。

B. imageAccess设置是否允许自动加载图片资源，默认允许。

C. javaScriptAccess设置是否允许执行JavaScript脚本，默认不允许执行。

D. zoomAccess设置是否支持手势缩放，默认允许执行缩放。

4.关于请求返回的响应码ResponseCode，下列描述错误的是？(D)

A. ResponseCode.OK的值为200，表示请求成功。一般用于GET与POST请求。

B. ResponseCode.NOT_FOUND的值为404，表示服务器无法根据客户端的请求找到资源（网页）。

C. ResponseCode.INTERNAL_ERROR的值为500，表示服务器内部错误，无法完成请求。

D. ResponseCode.GONE的值为404，表示客户端请求的资源已经不存在。
多选题

1.Web组件支持下列哪些属性或事件？(A，B，D)

A. fileAccess(fileAccess: boolean)

B. javaScriptAccess(javaScriptAccess: boolean)

C. on(type: ‘headerReceive’, callback: AsyncCallback): void

D. onConfirm(callback: (event?: { url: string; message: string; result: JsResult }) => boolean)

E. destroy(): void

2.关于http模块描述正确的是？( A，B，C，D)

A. http请求支持get、post、put等常用的请求方式。

B. 可以使用on(‘headersReceive’)订阅请求响应头。

C. post请求的参数可以在extraData中指定。

D. 执行createHttp成功后，返回一个httpRequest对象，里面包括request、destroy、on和off方法。

3.关于Web组件描述正确的是？(A，B，C，D)

A. Web组件是提供具有网页显示能力的一种组件。

B. Web组件传入的地址可以是本地资源也可以是网络资源。

C. WebController可以控制Web组件的各种行为，例如网页的前进、后退等功能。

D. 当访问在线网页时，需添加网络权限。
四、保存应用数据
判断题

1.首选项是关系型数据库。(错误)

2.应用中涉及到Student信息，如包含姓名，性别，年龄，身高等信息可以用首选项来存储。(错误)

3.同一应用或进程中每个文件仅存在一个Preferences实例。(正确)
单选题

1.使用首选项要导入的包是哪个？(B)

A. @ohos.data.rdb

B. @ohos.data.preferences

C. @ohos.router

D. @ohos.data.storage

2.首选项的数据持久化后是放在哪里？©

A. 内存中

B. 数据库表中

C. 文件中

D. 云端

3.下面哪个接口不是首选项提供的API接口？(B)

A. get()

B. update()

C. put()

D. flush()
多选题

1.HarmonyOS提供的数据管理的方式都有哪些？(A，B，C，D)

A. 首选项

B. 分布式数据服务

C. 关系数据库

D. 分布式数据对象

2.下面说法正确的有？(B，C，D)

A. 首选项遵循ACID特性

B. 首选项以Key-Value形式存取数据

C. 首选项存储数据数量建议不超过1万条

D. 首选项的key为String类型
五、三方库
判断题

1.三方组件是开发者在系统能力的基础上进行了一层具体功能的封装，对其能力进行拓展的工具 。(正确)

2.可以通过ohpm uninstall 指令下载指定的三方库(错误)

3.lottie使用loadAnimation方法加载动画。(正确)
单选题

1.通过ohpm安装lottie后，在哪个文件中会生成相关的配置信息？(B)

A. module.json5

B. oh-package.json5

C. app.json5

D. main_page.json

2.lottie订阅事件的API为？©

A. lottie.setSpeed()

B. lottie.setDirection()

C. animationItem.addEventListener()

D. animationItem.removeEventListener()
多选题

1.下列属于lottie提供的动画控制API的是？(A,B,C,D)

A. lottie.play()

B. lottie.pause()

C. lottie.stop()

D. lottie.goToAndPlay()

判断题：云函数打包完成后，需要到AppGallery Connect创建对应函数的触发器才可以在端侧中调用-错误
判断题：每一个自定义组件都有自己的生命周期-正确
判断题：基于端云一体化开发，开发者需要精通前端、后端不同的开发语言。-错误
判断题：首选项preferences是以Key-Value形式存储数据，其中Key是可以重复。-错误
判断题：HarmonyoS应用可以兼容OpenHarmony生态-正确
判断题：每调用一次router.pushUrl()方法，默认情况下，页面栈数量会加1，页面栈支持的最大页面数量为32。——正确

判断题：只要使用端云一体化的云端资源就需要支付费用-错误
判断题：首选项是非关系数据库，遵循ACID特性 ——错误
判断题：在Column和Row容器组件中，alignItems用于设置子组件在主轴方向上的对齐格式，justifycontent用于设置子组件在交叉轴方向上的对齐格式——错误
判断题：所有使用@Component修饰的自定义组件都支持onPageShow，onBackPress和onPageHide生命周期函数。——错误
单选题：发布应用时需要创建Profile时，类型选择什么类型?——发布
单选题：发布开放式测试版本后，还需要人工审核吗?——不需要
单选题：开发者在DevEco Studio中，可以通过什么方式使用端云一体化?——工程模板
单选题：添加用户信息时，如果帐号使用手机号码，以下哪种输入格式正确?——A.86-189****1234
单选题：应用包名不能包含一些保留字段，以下哪个字段符合规范?——test
单选题：认证服务支持下列哪种帐号认证——华为账号
单选题：跨端迁移和协同是哪个鸿蒙特征的能力——统一生态
单选题：发布后的鸿蒙应用可以在哪里获取?——华为应用市场
单选题：下面哪个方法，可以跳转到一个新页面，并销毁当前页面。——router.replaceUrl()
单选题：关于UIAbility的启动模式，下列说法错误的是:
—— muliton为多实例模式，每次startAbility都会启动一个新的实例，系统默认为muliton为模式。
单选题：引用ohpm三方库的包依赖是在哪个配置文件中——C.oh-package.json5
单选题：元服务包名必须以哪个字段结尾?——A…hmservice
单选题：Row组件中有两个Text组件，如果使用justifyContent对齐方式，下面哪个属性可以实现左右两端对齐:
——D. FlexAlign.SpaceBetween
单选题：自定义组件的aboutToAppear()在什么时机执行——B.build函数之前
单选题：关于Tabs组件页签的位置设置，下面描述错误的是——
_——当barPosition为End , vertical属性为true时，页签位于容器底部。
单选题：在下面哪个文件中可以设置页面的路径配置信息?——A. main_pages.json
单选题：元服务创建测试用户时，用户列表存储位置需要选择——中国
单选题：开放式测试版本发布后，受邀测试用户如何体验?——B.进入服务中心，打开“开发者测试”开关，在最下方 的“服务测试”找到待体验的元服务
