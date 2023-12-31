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

// 删除购物车
export const delCartAPI = (ids) => {
  return httpIntance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids,
    },
  })
}

// 合并本地购物车
export const mergeCartAPI = (data) => {
  return httpIntance({
    url: '/member/cart/merge',
    method: 'POST',
    data,
  })
}
