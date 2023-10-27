import httpInstance from '@/utils/http.js'

// 获取支付页面信息
export const getOrderAPI = (id) => {
  return httpInstance({
    url: `/member/order/${id}`,
  })
}
