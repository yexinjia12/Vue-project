// 我的订单封装

import httpInstance from '@/utils/http.js'
/*
params: {
	orderState:0,
  page:1,
  pageSize:2
}
*/

export const getUserOrderAPI = (params) => {
  return httpInstance({
    url: '/member/order',
    method: 'GET',
    params,
  })
}
