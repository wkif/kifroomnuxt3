---
title: lerna+yarn workspace+monorepo项目的最佳实践
author: kif
tags:
  - lerna
  - monorepo
categories:
  - 开发笔记
abbrlink: 9aee
cover: "https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261903204.png"
date: 2023-01-26 19:01:00


---

# 1.monorepo 管理

对于维护过多个[package](https://so.csdn.net/so/search?q=package&spm=1001.2101.3001.7020)(**功能相近**)的同学来说，都会遇到一个选择题，这些 package 是放在一个仓库里维护还是放在多个仓库里单独维护。Multirepo 是比较传统的做法，即每一个 package 都单独用一个仓库来进行管理。Monorepo 是管理项目代码的一个方式，指在一个项目仓库 (repo) 中管理多个模块/包 (package)，不同于常见的每个模块建一个 repo。

目前有不少大型开源项目采用了这种方式，如 `Babel`，`React`, `Meteor`, `Ember`, `Angular`,`Jest`, `Umijs`, `Vue`, 还有 `create-react-app`, `react-router` 等。几乎我们熟知的仓库，都无一例外的采用了 monorepo 的方式，可以看到这些项目的第一级目录的内容以脚手架为主，主要内容都在 packages 目录中、分多个 package 进行管理。

目录结构如下:

```shell
├── packages
|   ├── pkg1
|   |   ├── package.json
|   ├── pkg2
|   |   ├── package.json
├── package.json
123456
```

monorepo 最主要的好处是**统一的工作流**和**Code Sharing**。比如我想看一个 pacakge 的代码、了解某段逻辑，不需要找它的 repo，直接就在当前 repo；当某个需求要修改多个 pacakge 时，不需要分别到各自的 repo 进行修改、测试、发版或者 npm link，直接在当前 repo 修改，统一测试、统一发版。只要搭建一套脚手架，就能管理（构建、测试、发布）多个 package。

一图胜千言:

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS84LzE4LzE2Y2EyOThmNTYwZDgxZDg)
当然到底哪一种管理方式更好，仁者见仁，智者见智。前者允许多元化发展（各项目可以有自己的构建工具、依赖管理策略、单元测试方法），后者希望集中管理，减少项目间的差异带来的沟通成本。

虽然拆分子仓库、拆分子 npm 包是进行项目隔离的天然方案，但当仓库内容出现关联时，没有任何一种调试方式比源码放在一起更高效。

结合 shop-service 门户的实际场景和业务需要，天然的 MonoRepo ! 一个理想的开发环境可以抽象成这样：

> “只关心业务代码，可以直接跨业务复用而不关心复用方式，调试时所有代码都在源码中。”

在前端开发环境中，多 Git Repo，多 npm 则是这个理想的阻力，它们导致复用要关心版本号，调试需要 npm link。而这些是 MonoRepo 最大的优势。

上图中提到的利用相关工具就是今天的主角 Lerna ! Lerna 是业界知名度最高的 Monorepo 管理工具，功能完整。

# 2. Lerna

Lerna 是一个管理多个 npm 模块的工具，是 Babel 自己用来维护自己的 Monorepo 并开源出的一个项目。优化维护多包的工作流，解决多个包互相依赖，且发布需要手动维护多个包的问题。

## 2.1 安装

推荐全局安装，因为会经常用到 lerna 命令

```shell
npm i -g lerna
```

## 2.2 初始化项目

```shell
lerna init
```

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261904362.png)

其中 package.json & lerna.json 如下:

```
// package.json
{
  "name": "root",
  "private": true, // 私有的，不会被发布，是管理整个项目，与要发布到npm的解耦
  "devDependencies": {
    "lerna": "^3.15.0"
  }
}

// lerna.json
{
  "packages": [
    "packages/*"
  ],
  "version": "0.0.0"
}
12345678910111213141516
```

## 2.3 创建 npm 包

增加两个 packages

```shell
lerna create @mo-demo/cli
lerna create @mo-demo/cli-shared-utils
```

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261904303.png)

## 2.4 增加模块依赖

分别给相应的 package 增加依赖模块

```shell
lerna add chalk // 为所有 package 增加 chalk 模块
lerna add semver --scope @mo-demo/cli-shared-utils // 为 @mo-demo/cli-shared-utils 增加 semver 模块
lerna add @mo-demo/cli-shared-utils --scope @mo-demo/cli // 增加内部模块之间的依赖
```

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261904194.png)

## 2.5 发布

```
lerna publish
```

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261904515.png)

## 2.6 依赖包管理

上述 1-5 步已经包含了 Lerna 整个生命周期的过程了，但当我们维护这个项目时，新拉下来仓库的代码后，需要为各个 package 安装依赖包。

我们在第 4 步 lerna add 时也发现了，为某个 package 安装的包被放到了这个 package 目录下的 `node_modules` 目录下。这样对于多个 package 都依赖的包，会被多个 package 安装多次，并且每个 package 下都维护 `node_modules` ，也不清爽。于是我们使用 --hoist 来把每个 package 下的依赖包都提升到工程根目录，来降低安装以及管理的成本。

```
lerna bootstrap --hoist
```

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261904358.png)
为了省去每次都输入 --hoist 参数的麻烦，可以在 lerna.json 配置：

```
{
  "packages": [
    "packages/*"
  ],
  "command": {
    "bootstrap": {
      "hoist": true
    }
  },
  "version": "0.0.1-alpha.0"
}
```

配置好后，对于之前依赖包已经被安装到各个 package 下的情况，我们只需要清理一下安装的依赖即可：

```
lerna clean
```

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261904400.png)
然后执行 lerna bootstrap 即可看到 package 的依赖都被安装到根目录下的 `node_modules` 中了。

# 3. Lerna + Monorepo 最佳实践

> lerna 不负责构建，测试等任务，它提出了一种集中管理 package 的目录模式，提供了一套自动化管理程序，让开发者不必再深耕到具体的组件里维护内容，在项目根目录就可以全局掌控，基于 npm scripts，使用者可以很好地完成组件构建，代码格式化等操作。接下来我们就来看看，如果基于 Lerna，并结合其它工具来搭建 Monorepo 项目的最佳实践。

目前最常见的 monorepo 解决方案是 Lerna 和 [yarn](https://so.csdn.net/so/search?q=yarn&spm=1001.2101.3001.7020) 的 workspaces 特性，基于 lerna 和 yarn workspace 的 monorepo 工作流。由于 yarn 和 lerna 在功能上有较多的重叠,我们采用 yarn 官方推荐的做法,用 yarn 来处理依赖问题，用 lerna 来处理发布问题。能用 yarn 做的就用 yarn 做吧

## 3.1 yarn workspace

### 3.1.1 搭建环境

- 普通项目：clone 下来后通过 yarn install,即可搭建完项目，有时需要配合 postinstall hooks,来进行自动编译，或者其他设置。
- monorepo: 各个库之间存在依赖，如 A 依赖于 B，因此我们通常需要将 B link 到 A 的 node_module 里，一旦仓库很多的话，手动的管理这些 link 操作负担很大，因此需要自动化的 link 操作，按照拓扑排序将各个依赖进行 link

解决方式：通过使用 workspace，yarn install 会自动的帮忙解决安装和 link 问题

```
yarn install # 等价于 lerna bootstrap --npm-client yarn --use-workspaces
```

### 3.1.2 清理环境

在依赖乱掉或者工程混乱的情况下，清理依赖

- 普通项目： 直接删除 node_modules 以及编译后的产物。
- monorepo： 不仅需要删除 root 的 node_modules 的编译产物还需要删除各个 package 里的 node_modules 以及编译产物

解决方式：使用 lerna clean 来删除所有的 node_modules，使用 yarn workspaces run clean 来执行所有 package 的清理工作

```
lerna clean # 清理所有的node_modules
yarn workspaces run clean # 执行所有package的clean操作
```

### 3.1.3 安装|删除依赖

- 普通项目： 通过 yarn add 和 yarn remove 即可简单姐解决依赖库的安装和删除问题
- monorepo: 一般分为三种场景
  - 给某个 package 安装依赖：yarn workspace packageB add packageA 将 packageA 作为 packageB 的依赖进行安装
  - 给所有的 package 安装依赖: 使用 yarn workspaces add lodash 给所有的 package 安装依赖
  - 给 root 安装依赖：一般的公用的开发工具都是安装在 root 里，如 typescript,我们使用 yarn add -W -D typescript 来给 root 安装依赖

对应的三种场景删除依赖如下

```
yarn workspace packageB remove packageA
yarn workspaces remove lodash
yarn remove -W -D typescript
```

### 3.1.4 项目构建

- 普通项目：建立一个 build 的 npm script，使用 yarn build 即可完成项目构建
- monorepo:区别于普通项目之处在于各个 package 之间存在相互依赖，如 packageB 只有在 packageA 构建完之后才能进行构建，否则就会出错，这实际上要求我们以一种拓扑排序的规则进行构建。

我们可以自己构建拓扑排序规则，很不幸的是 yarn 的 workspace 暂时并未支持按照拓扑排序规则执行命令,虽然该 rfc 已经被 accepted，但是尚未实现, 幸运的是 lerna 支持按照拓扑排序规则执行命令, --sort 参数可以控制以拓扑排序规则执行命令

```
lerna run --stream --sort build
```

### 3.1.5 版本升级及发包

项目测试完成后，就涉及到版本发布，版本发布一般涉及到如下一些步骤

- **条件验证**: 如验证测试是否通过，是否存在未提交的代码，是否在主分支上进行版本发布操作
- **version_bump**:发版的时候需要更新版本号，这时候如何更新版本号就是个问题，一般大家都会遵循 semVer 语义，
- **生成 changelog**: 为了方便查看每个 package 每个版本解决了哪些功能，我们需要给每个 package 都生成一份 changelog 方便用户查看各个版本的功能变化。
- **生成 git tag**：为了方便后续回滚问题及问题排查通常需要给每个版本创建一个 git tag
- **git 发布版本**：每次发版我们都需要单独生成一个 commit 记录来标记 milestone
- **发布 npm 包**：发布完 git 后我们还需要将更新的版本发布到 npm 上，以便外部用户使用

我们发现手动的执行这些操作是很麻烦的且及其容易出错，幸运的是 lerna 可以帮助我们解决这些问题

yarn 官方并不打算支持发布流程，只是想做好包管理工具，因此这部分还是需要通过 lerna 支持

lerna 提供了 publish 和 version 来支持版本的升级和发布, publish 的功能可以即包含 version 的工作，也可以单纯的只做发布操作。

## 3.2 优雅的提交

### 3.2.1 commitizen && cz-lerna-changelog

`commitizen` 是用来格式化 git commit message 的工具，它提供了一种问询式的方式去获取所需的提交信息。

`cz-lerna-changelog` 是专门为 Lerna 项目量身定制的提交规范，在问询的过程，会有类似影响哪些 package 的选择。如下：

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261904381.png)
我们使用 `commitizen` 和 `cz-lerna-changelog` 来规范提交，为后面自动生成日志作好准备。

因为这是整个工程的开发依赖，所以在根目录安装：

```
yarn add  -D commitizen
yarn add  -D cz-lerna-changelog
```

安装完成后，在 `package.json` 中增加 config 字段，把 `cz-lerna-changelog` 配置给 `commitizen`。同时因为`commitizen`不是全局安全的，所以需要添加 scripts 脚本来执行 git-cz

```
{
  "name": "root",
  "private": true,
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
  "devDependencies": {
    "commitizen": "^3.1.1",
    "cz-lerna-changelog": "^2.0.2",
    "lerna": "^3.15.0"
  }
}
```

之后在常规的开发中就可以使用 `yarn run commit` 来根据提示一步一步输入，来完成代码的提交。

### 3.2.2 commitlint && husky

上面我们使用了 commitizen 来规范提交，但这个要靠开发自觉使用`yarn run commit` 。万一忘记了，或者直接使用 git commit 提交怎么办？答案就是在提交时对提交信息进行校验，如果不符合要求就不让提交，并提示。校验的工作由 commitlint 来完成，校验的时机则由 husky 来指定。husky 继承了 Git 下所有的钩子，在触发钩子的时候，husky 可以阻止不合法的 commit,push 等等。

安装 commitlint 以及要遵守的规范

```
yarn add -D @commitlint/cli @commitlint/config-conventional
```

在工程根目录为 commitlint 增加配置文件 `commitlint.config.js` 为`commitlint` 指定相应的规范

```
module.exports = {
	extends: ['@commitlint/config-conventional']
}
```

安装 `husky`

```
yarn add -D husky
```

在 `package.json` 中增加如下配置

```
 "husky": {
 		"hooks": {
    		"commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
     }
 }
```

"commit-msg"是 git 提交时校验提交信息的钩子，当触发时便会使用 commitlit 来校验。安装配置完成后，想通过 git commit 或者其它第三方工具提交时，只要提交信息不符合规范就无法提交。从而约束开发者使用 yarn run commit 来提交。

### 3.2.3 eslint && lint-staged

除了规范提交信息，代码本身肯定也少了靠规范来统一风格。

安装

```shell
yarn add  -D standard lint-staged
```

eslint 就是整的一套 JavaScript（typescript） 代码规范，自带 linter & 代码自动修正。自动格式化代码并修正，提前发现风格以及程序问题, 同时也支持 typescript 的代码规范校验，`eslintrc.json`配置：

```
{
    "extends": [
        "yayajing",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "typescript-eslint-parser",
    "plugins": ["@typescript-eslint"],
    "rules": {
        "eqeqeq":"off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "no-template-curly-in-string": "off"
    }
  }
```

`lint-staged staged` 是 Git 里的概念，表示暂存区，`lint-staged` 表示只检查并矫正暂存区中的文件。一来提高校验效率，二来可以为老的项目带去巨大的方便。

package.json 配置

```
// package.json
{
  "name": "root",
  "private": true,
  "scripts": {
    "c": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-lerna-changelog"
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.ts": [
      "eslint --fix",
      "git add"
    ]
  },
  "devDependencies": {
    "@commitlint/cli": "^8.1.0",
    "@commitlint/config-conventional": "^8.1.0",
    "commitizen": "^3.1.1",
    "cz-lerna-changelog": "^2.0.2",
    "husky": "^3.0.0",
    "lerna": "^3.15.0",
    "lint-staged": "^9.2.0"
  }
}
```

安装完成后，在 `package.json` 增加 lint-staged 配置，如上所示表示对暂存区中的 js 文件执行 `eslint --fix` 校验并自动修复。那什么时候去校验呢，就又用到了上面安装的 husky ，husky 的配置中增加`pre-commit`的钩子用来执行 lint-staged 的校验操作。

此时提交 ts 文件时，便会自动修正并校验错误。即保证了代码风格统一，又能提高代码质量。

## 3.3 发布自动生成日志

有了之前的规范提交，自动生成日志便水到渠成了。再详细看下 `lerna publish` 时做了哪些事情：

### 3.3.1 lerna version 更新版本

- 找出从上一个版本发布以来有过变更的 package
- 提示开发者确定要发布的版本号
- 将所有更新过的的 package 中的 package.json 的 version 字段更新
- 将依赖更新过的 package 的 包中的依赖版本号更新
- 更新 lerna.json 中的 version 字段
- 提交上述修改，并打一个 tag
- 推送到 git 仓库

![img](https://kifimg.oss-cn-beijing.aliyuncs.com/img/202301261905340.png)

### 3.3.2 使用 npm publish 将新版本推送到 npm

`CHANGELOG` 很明显是和 version 一一对应的，所以需要在 lerna version 中想办法，查看 lerna version 命令的详细说明后，会看到一个配置参数 `--conventional-commits`。没错，只要我们按规范提交后，在 lerna version 的过程中会便会自动生成当前这个版本的 CHANGELOG。为了方便，不用每次输入参数，可以配置在 `lerna.json`中，如下：

```json
{
  "packages": [
    "packages/*"
  ],
  "command": {
    "bootstrap": {
      "hoist": true
    },
    "version": {
      "conventionalCommits": true
    }
  },
  "ignoreChanges": [
    "**/*.md"
  ],
  "version": "0.0.1-alpha.1"
}
```

`lerna version` 会检测从上一个版本发布以来的变动，但有一些文件的提交，我们不希望触发版本的变动，譬如 .md 文件的修改，并没有实际引起 package 逻辑的变化，不应该触发版本的变更。可以通过 `ignoreChanges` 配置排除。如上。

![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS84LzE4LzE2Y2EyYTM3NTQwN2Y0MzY)
实际 `lerna version`很少直接使用，因为它包含在 `lerna publish` 中了，直接使用 `lerna publish`就好了。

## 3.4 完善的测试用例

monorepo 项目：测试有两种方式

- 使用统一的 jest 测试配置这样方便全局的跑 jest 即可，好处是可以方便统计所有代码的测试覆盖率，坏处是如果 package 比较异构（如小程序，前端，node 服务端等），统一的测试配置不太好编写
- 每个 package 单独支持 test 命令，使用 yarn workspace run test，坏处是不好统一收集所有代码的测试覆盖率

如果采用 jest 编写测试用例，支持 typescript 的话，需要初始化配置 jest.config.js：

```js
module.exports = {
  preset: "ts-jest",
  moduleFileExtensions: ["ts"],
  testEnvironment: "node",
};
```

# 4 实践总结

到这里，基本上已经构建了基于`lerna`和`yarn workspace`的 monorepo 项目的最佳实践了，该有的功能都有：

- 完善的工作流
- typescript 支持
- 风格统一的编码
- 完整的单元测试
- 一键式的发布机制
- 完美的更新日志

……

**当然，构建一套完善的仓库管理机制，可能它的收益不是一些量化的指标可以衡量出来的，也没有直接的价值输出，但它能在日常的工作中极大的提高工作效率，解放生产力，节省大量的人力成本。**





转载自：https://juejin.cn/post/6844903918279852046
