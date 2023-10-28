// createRouter 创建路由实例
// createWebHistory 默认创建history模式路由
import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/views/Layout/index.vue'
import Login from '@/views/Login/index.vue'

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
          component: () => import('@/views/Home/index.vue'),
        },
        {
          path: 'category/:id',
          name: 'category',
          component: () => import('@/views/Category/index.vue'),
        },
        {
          path: 'category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/SubCategory/index.vue'),
        },
        {
          path: 'detail/:id',
          name: 'detail',
          component: () => import('@/views/Detail/index.vue'),
        },
        {
          path: 'cartlist',
          name: 'cartlist',
          component: () => import('@/views/CartList/index.vue'),
        },
        {
          path: 'checkout',
          name: 'checkout',
          component: () => import('@/views/Checkout/index.vue'),
        },
        {
          path: 'pay',
          name: 'pay',
          component: () => import('@/views/Pay/index.vue'),
        },
        {
          path: 'paycallback',
          name: 'paycallback',
          component: () => import('@/views/Pay/PayCallback.vue'),
        },
        {
          path: 'member',
          name: 'member',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              path: 'user',
              name: 'user',
              component: () => import('@/views/Member/components/UserInfo.vue'),
            },
            {
              path: 'order',
              name: 'order',
              component: () =>
                import('@/views/Member/components/UserOrder.vue'),
            },
          ],
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
