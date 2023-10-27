import httpIntance from '@/utils/http'
/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = () => {
  return httpIntance({
    url: '/member/order/pre',
  })
}
