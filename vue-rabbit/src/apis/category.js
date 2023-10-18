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
