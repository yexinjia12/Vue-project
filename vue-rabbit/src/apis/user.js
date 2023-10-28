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

// 封装猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpIntance({
    url: '/goods/relevant',
    params: {
      limit,
    },
  })
}
