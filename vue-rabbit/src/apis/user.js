import httpIntance from '@/utils/http'

// 登录接口
export const loginAPI = ({ account, password }) => {
  return httpIntance({
    url: '/login',
    method: 'post',
    data: {
      account,
      password,
    },
  })
}
