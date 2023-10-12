import './assets/main.css'

import { createApp } from 'vue' // new Vue()
import App from './App.vue'

// 1. 以App作为参数生成一个应用实例对象
// 2. 挂载到id为app的节点上
createApp(App).mount('#app')
