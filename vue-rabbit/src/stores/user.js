// 管理用户数据
import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/user'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  return {
    userInfo,
    getUserInfo,
  }
})
