// 封装购物车相关接口
import httpIntance from '@/utils/http'

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpIntance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count,
    },
  })
}

// 获取购物车列表
export const getNewCartListAPI = () => {
  return httpIntance({
    url: 'member/cart',
  })
}
