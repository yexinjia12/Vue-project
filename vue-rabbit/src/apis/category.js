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
