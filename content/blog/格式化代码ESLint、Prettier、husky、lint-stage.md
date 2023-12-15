---
title: 小程序开发格式化代码ESLint、Prettier、husky、lint-stage
author: kif
tags:
  - 开发规范
categories:
  - 开发记录
abbrlink: 12d6
date: 2022-11-19 15:56:00
cover: https://kifimg.oss-cn-beijing.aliyuncs.com/img/202211191605164.jpg
coverWidth: 1200
coverHeight: 750

---



## **依赖**

```
yarn init
yarn add --dev babel-eslint@10.0.3
yarn add --dev eslint@6.7.1
yarn add --dev eslint-config-alloy@3.7.1
yarn add --dev eslint-config-prettier@6.10.0
yarn add --dev eslint-plugin-prettier@3.1.4
yarn add --dev prettier@2.0.5
yarn add --dev prettier-eslint-cli@5.0.0
yarn add --dev npm-run-all@4.1.5
yarn add --dev husky@4.3.0
yarn add --dev lint-staged@10.3.0
```

## **package.json**

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "eslint": "eslint . --ext .js,.wxs,.sjs",
    "eslint:fix": "eslint --fix . --ext .js,.wxs,.sjs",
    "prettier:fix": "prettier --config .prettierrc.js --write './**/*.{js,sjs,wxs,css,wxss,acss,wxml,axml,less,scss,json}'",
    "format:all": "npm-run-all -s prettier:fix eslint:fix"
  },
  "devDependencies": {
    "babel-eslint": "10.0.3",
    "eslint": "6.7.1",
    "eslint-config-alloy": "3.7.1",
    "eslint-config-prettier": "6.10.0",
    "eslint-plugin-prettier": "3.1.4",
    "husky": "4.3.0",
    "lint-staged": "10.3.0",
    "npm-run-all": "4.1.5",
    "prettier": "2.0.5",
    "prettier-eslint-cli": "5.0.0"
  },
//下面两个在提交代码前的格式校验
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,wxs,sjs}": [
      "prettier --config .prettierrc.js --write",
      "eslint --fix --ext .js"
    ],
    "*.{json,wxml,axml,css,wxss,acss,wxml,axml,less,scss}": "prettier --config .prettierrc.js --write"
  }
```

## **vscode设置**

路径是：`your_project/.vscode/settings.json`

```json
{
    "files.associations": {
      "*.wxss": "css",
      "*.wxs": "javascript",
      "*.acss": "css",
      "*.axml": "html",
      "*.wxml": "html",
      "*.swan": "html"
    },
    "files.trimTrailingWhitespace": true,
    "eslint.workingDirectories": [{ "mode": "auto" }],
    "eslint.enable": true, // 是否开启 vscode 的 eslint
    "eslint.options": {
      // 指定 vscode 的 eslint 所处理的文件的后缀
      "extensions": [".js", ".ts", ".tsx"]
    },
    "eslint.validate": ["javascript"],
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "git.ignoreLimitWarning": true
  }
```



## **格式配置文件 .eslintrc.js 和 .prettierrc.js**

```json
// .eslintrc.js
module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: ['alloy'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    my: true,
    swan: true,
    getApp: true,
    getCurrentPages: true
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-debugger': 2,
    'no-unused-vars': 1,
    'no-var': 0,
    'no-param-reassign': 0,
    'no-irregular-whitespace': 0,
    'no-useless-catch': 1,
    'max-params': ['error', 3],
    'array-callback-return': 1,
    eqeqeq: 0,
    indent: ['error', 2, { SwitchCase: 1 }]
  }
}
```



```json
// .prettierrc.js
module.exports = {
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    semi: false,
    singleQuote: true,
 
    // 对象的 key 仅在必要时用引号
    quoteProps: 'as-needed',
 
    // jsx 不使用单引号，而使用双引号
    jsxSingleQuote: false,
 
    // 末尾不需要逗号
    trailingComma: 'none',
 
    // 大括号内的首尾需要空格
    bracketSpacing: true,
 
    // jsx 标签的反尖括号需要换行
    jsxBracketSameLine: false,
 
    // 箭头函数，只有一个参数的时候，无需括号
    arrowParens: 'avoid',
 
    // 每个文件格式化的范围是文件的全部内容
    rangeStart: 0,
 
    rangeEnd: Infinity,
 
    // 不需要写文件开头的 @prettier
    requirePragma: false,
 
    // 不需要自动在文件开头插入 @prettier
    insertPragma: false,
 
    // 使用默认的折行标准
    proseWrap: 'preserve',
 
    // 根据显示样式决定 html 要不要折行
    htmlWhitespaceSensitivity: 'css',
 
    // 换行符使用 lf
    endOfLine: 'lf',
    // Prettier 支持对某些文件扩展名，文件夹和特定文件进行不同的配置
    overrides: [
        {
          files: ['*.wxss', '*.acss'],
          options: {
            parser: 'css'
          }
        },
        {
          files: ['*.wxml', '*.axml'],
          options: {
            parser: 'html'
          }
        },
        {
          files: ['*.wxs', '*.sjs'],
          options: {
            parser: 'babel'
          }
        }
      ]
  }
```



## **配置忽略文件 .eslintignore 和 .prettierignore**

```
# .eslintignore
 
*.min.js
typings
node_modules
```



```
# .prettierignore
 
*.min.js
/node_modules
/dist
# OS
.DS_Store
.idea
.editorconfig
.npmrc
package-lock.json
# Ignored suffix
*.log
*.md
*.svg
*.png
*ignore
## Built-files
.cache
dist
```

## **`.editorconfig` 配置文件**

> 抹平不同编辑器之间的差异

```
# .editorconfig
# http://editorconfig.org
# https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties
 
 
# 根目录的配置文件，编辑器会由当前目录向上查找，如果找到 `roor = true` 的文件，则不再查找
root = true
 
# 匹配所有的文件
[*]
# 缩进风格：space
indent_style = space
# 缩进大小 2
indent_size = 2
# 换行符 lf
end_of_line = lf
# 字符集 utf-8
charset = utf-8
# 不保留行末的空格
trim_trailing_whitespace = true
# 文件末尾添加一个空行
insert_final_newline = true
# 运算符两遍都有空格
spaces_around_operators = true
 
# 对所有的 js 文件生效
[*.js]
# 字符串使用单引号
quote_type = single
 
[*.md]
trim_trailing_whitespace = false
```



## **微信小程序的打包配置**

```json
// project.config.json 仅微信小程序
 
"packOptions": {
    "ignore": [
      {
        "type": "regexp",
        "value": "\\.md$"
      },
      {
        "type": "folder",
        "value": "node_modules"
      }
    ]
  }
```







> 來源：https://blog.csdn.net/shengxianghui/article/details/117463206