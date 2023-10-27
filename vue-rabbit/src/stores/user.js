// 管理用户数据
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'
import { useCartStore } from './cart'

export const useUserStore = defineStore(
  'user',
  () => {
    const userInfo = ref({})
    const cartStore = useCartStore()
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password })
      userInfo.value = res.result
    }
    // 退出登录时，清空用户数据
    const clearUserInfo = () => {
      userInfo.value = {}
      // 清除本地购物车缓存数据
      cartStore.clearCart()
    }
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    }
  },
  // 持久化配置
  // 在设置state的时候会自动把数据同步给localStorage，在获取state数据的时候会优先从localStorage中取
  {
    persist: true,
  }
)
