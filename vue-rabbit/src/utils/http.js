import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from '@/stores/user'
import router from '@/router'

// 创建axios实例
const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // header携带token
    const { userInfo } = useUserStore()
    const token = userInfo.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const { clearUserInfo } = useUserStore()
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.message,
    })

    // 401拦截处理
    if (e.response.status === 401) {
      // 清除过期的用户信息
      clearUserInfo()
      // 跳转到登录页面
      router.push('/login')
    }
    return Promise.reject(e)
  }
)

export default httpInstance
