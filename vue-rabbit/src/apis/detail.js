import httpIntance from '@/utils/http'

// 获取商品详情列表
export const getDetailAPI = (id) => {
  return httpIntance({
    url: '/goods',
    params: {
      id,
    },
  })
}
