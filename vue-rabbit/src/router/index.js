// createRouter 创建路由实例
// createWebHistory 默认创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import subCategory from '@/views/SubCategory/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '', // 默认渲染home页面，如果不想使用redirect，可以path配置为空
          name: 'home',
          component: Home,
        },
        {
          path: '/category/:id',
          name: 'category',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: subCategory,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
  scrollBehavior() {
    return {
      top: 0,
    }
  },
})

export default router
