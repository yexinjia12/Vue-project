# vue3-demo

vue3-demo 这个文件下主要是熟悉 vue3 的一些基础语法

## 目录结构及其描述

```
│  App.vue
│  main.js
│
├─assets
│
├─components
│  ├─Day1
│  │      computed.vue      // 计算属性
│  │      life-cycle.vue    // 生命周期
│  │      responsive-fn.vue // 响应式函数 reactive、ref
│  │      setup.vue         // setup选项式写法 及 组合式写法
│  │      watch.vue         // 侦听函数
│  │
│  └─Day2
│  |    ├─basic-project  // 基础案例：对一个表格数据进行展示、删除、修改操作
│  |    │      edit.vue
│  |    │      table.vue
│  |    │
│  |    ├─child-to-parent  // 子组件向父组件传值
│  |    │      child-com.vue
│  |    │      parent-com.vue
│  |    │
│  |    ├─grand-to-child  // 跨组件传值
│  |    │      room-msg-comment.vue
│  |    │      room-msg-item.vue
│  |    │      room-page.vue
│  |    │
│  |    ├─parent-to-child  // 父组件向子组件传值
│  |    │      child-com.vue
│  |    │      parent-com.vue
│  |    │
│  |    └─template-reference  // 模板引用
│  |           child-com.vue
│  |            parent-com.vue
│  │
│  └─Day3 // pinia基础学习
│          counter.vue
│
├─mock   // 模拟接口数据
│      index.js
│
└─stores // 状态管理
        counter.js
```

---

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
