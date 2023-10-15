# vue-rabbit

项目主要来源于 黑马程序员：Vue3 小兔鲜电商项目实战

## 项目目录介绍

```
│  App.vue
│  main.js
│
├─apis      // API接口
│      layout.js
│
├─assets    // 静态资源
│  │
│  └─images
│          200.png
│          center-bg.png
│          load.gif
│          loading.gif
│          login-bg.png
│          logo.png
│          none.png
│          qrcode.jpg
│
├─components   // 公共组件
│
├─composables  // 组合函数
├─directives   // 全局自定义指令
├─router       // 路由
│      index.js
│
├─stores       // 状态管理pinia
│      counter.js
│
├─styles       // 全局样式文件
│  │  common.scss  // 公共样式
│  │  var.scss     // scss变量
│  │
│  └─element   // elementPlus主题色定制
│          index.scss
│
├─utils         // 工具函数
│      http.js  // 封装axios
│
└─views     // 项目页面
    ├─Category   // 分类
    │      index.vue
    │
    ├─Home  // 主页
    │      index.vue
    │
    ├─Layout  // 项目布局
    │  │  index.vue
    │  │
    │  └─components
    │          LayoutFooter.vue
    │          LayoutHeader.vue
    │          LayoutNav.vue
    │
    └─Login   // 登录页
            index.vue

```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
