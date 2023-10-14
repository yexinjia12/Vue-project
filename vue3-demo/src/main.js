import './assets/main.css'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入pinia
import { createPinia } from 'pinia'

import { createApp } from 'vue' // new Vue()
import App from './App.vue'
// 1. 以App作为参数生成一个应用实例对象
// 2. 挂载到id为app的节点上
const app = createApp(App)

// 创建pinia实例
const pinia = createPinia();

// 注册element-plus
app.use(ElementPlus)
// 注册pinia
app.use(pinia)

app.mount('#app')
