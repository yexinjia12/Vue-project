import httpIntance from '@/utils/http'

/**
 * 获取分类数据接口
 * @param {string} id 分类id
 * @returns
 */
export const getTopCategoryAPI = (id) => {
  return httpIntance({
    url: '/category',
    params: {
      id,
    },
  })
}

/**
 * 获取二级分类列表数据
 * @param {string} id 二级分类id
 * @returns
 */
export const getCategoryFilterAPI = (id) => {
  return httpIntance({
    url: '/category/sub/filter',
    params: {
      id,
    },
  })
}

/**
 * @description: 获取二级导航商品列表数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   }
 * @return {*}
 */
export const getSubCategoryAPI = (data) => {
  return httpIntance({
    url: '/category/goods/temporary',
    method: 'POST',
    data,
  })
}
