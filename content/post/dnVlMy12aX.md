---
title: vue3+vite+ts配置eslint+husky
author: kif
tags:
  - 开发规范
categories:
  - 开发记录
abbrlink: c408
date: 2022-11-19 16:06:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/img/202211191608596.jpg
coverWidth: 1200
coverHeight: 750
---



# vue3+vite+ts配置[eslint](https://so.csdn.net/so/search?q=eslint&spm=1001.2101.3001.7020)+husky

创建项目命令

> [yarn](https://so.csdn.net/so/search?q=yarn&spm=1001.2101.3001.7020) create vite vue3-vite-ts --template vue-ts

## eslint代码风格检查，prettier进行格式化代码

1. **安装相关依赖** ；

```javascript
yarn add eslint eslint-plugin-vue eslint-define-config --dev # eslink
yarn add prettier eslint-plugin-prettier @vue/eslint-config-prettier --dev # prettire
yarn add @vue/eslint-config-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser --dev # 对ts的支持
```

1. **编写对应的配置文件 .eslintrc.js** ；

```javascript
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  root: true,
  /* 指定如何解析语法。*/
  parser: 'vue-eslint-parser',
  /* 优先级低于parse的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser',
    //模块化方案
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 解决 defineProps and defineEmits generate no-undef warnings
    'vue/setup-compiler-macros': true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue
    // 'plugin:vue/vue3-essential',
    // https://github.com/vuejs/eslint-config-standard
    // 'standard'
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // typescript-eslint推荐规则,
    'prettier',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json', // 这是unplugin-auto-import/vite相关配置，自动引入vue相关api
  ],
  // 解决 error  Component name "index" should always be multi-word  vue/multi-word-component-names
  overrides: [
    {
      files: ['src/views/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 0,
      },
    },
  ],
  rules: {
    // 禁止使用 var
    'no-var': 'error',
    semi: 'off',
    // 优先使用 interface 而不是 type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-explicit-any': 'off', // 可以使用 any 类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 解决使用 require() Require statement not part of import statement. 的问题
    '@typescript-eslint/no-var-requires': 0,
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/ban-types.md
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          // add a custom message to help explain why not to use it
          Foo: "Don't use Foo because it is unsafe",

          // add a custom message, AND tell the plugin how to fix it
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],
    // 禁止出现未使用的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'vue/html-indent': 'off',
    // 关闭此规则 使用 prettier 的格式化规则，
    'vue/max-attributes-per-line': ['off'],
    // 优先使用驼峰，element 组件除外
    // 'vue/component-name-in-template-casing': [
    //   'error',
    //   'PascalCase',
    //   {
    //     ignores: ['/^el-/', '/^router-/'],
    //     registeredComponentsOnly: false,
    //   },
    // ],
    // 强制使用驼峰
    // camelcase: ["error", { properties: "always" }],
    // 优先使用 const
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
  },
})

```

**.eslintignore**不会对以下文件进行代码风格检查

```javascript
build/*.js
src/assets
node_modules
public
dist
auto-import.d.ts
components.d.ts
```

**.prettierrc**具体规则官网自行查找，prettier主要是格式化代码

```javascript
{
    "semi": false,
    "singleQuote": true,
    "printWidth": 80,
    "trailingComma": "all",
    "arrowParens": "avoid",
    "endOfLine": "auto"
  }
```

**.prettierignore**对以下文件不会格式化

```javascript
build/*.js
src/assets
node_modules
public
dist
auto-import.d.ts
components.d.ts
```

## husky

`husky`是一个`Git Hook`，可以帮助我们对`commit`前，`push`前以及`commit`提交的信息进行验证，现在我们就来安装并配置一下这个工具，首先通过自动配置命令安装，命令如下:

```javascript
npx husky-init && npm install  # npm
npx husky-init && yarn         # Yarn 1
npx husky-init --yarn2 && yarn # Yarn 2+
```

执行完毕之后会在项目的根目录出现一个`.husky`的目录，目录下有一个`pre-commit`文件，我们将`npm test`修改为我们需要执行的命令，示例代码如下:

```javascript
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

yarn lint
```

最后我们配置一下`package.json`，示例代码如下：

```javascript
"scripts": {
  "lint": "eslint src --fix --ext .js,.ts,.jsx,.tsx,.vue && prettier --write --ignore-unknown""
},
```

- src：要验证的目标文件夹；
- –fix：自动修复命令；
- –ext：指定检测文件的后缀
  **现在我们进行`commit`之前会对代码进行检测并进行格式化**

## lint-staged

我们配置好了`husky`后，会出现一个问题，就是我们不管是改动一行还是两行都会对整个项目进行代码检查和格式化，我们可以通过`lint-staged`这个工具来实现只对`git`**暂存区**中的内容进行检查和格式化，配置步骤如下：
1.**安装lint-staged**

```javascript
yarn add lint-staged --dev
```

2.**配置package.json**

```javascript
{
  "scripts": {},
  // 新增
  "lint-staged": {
    "*.{vue,js,ts,tsx,jsx}": [
      "eslint --fix",
      "prettier --write --ignore-unknown"
    ]
  },
}
```

3.**修改.husky/pre-commit，修改内容如下：**

```javascript
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
```

这里就配置完成了，但是你修改文件后，`commit`时遇到`error`会出现这个问题，你所修改的文件都给你返回为原来的样子，并且报错如下：

```javascript
Reverting to original state because of errors...
```

4.**解决如下**
修改`.husky/pre-commit`，修改内容如下：

```javascript
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged --no-stash

```

end!!!



> 来源：https://blog.csdn.net/qq_41999617/article/details/124857725