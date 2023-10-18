import httpIntance from '@/utils/http'

//
/**
 * 获取轮播图数据接口
 * @param {Object} params 广告区域展示位置（1为首页，2为分类商品），默认为1
 * @returns
 */
export const getBannerAPI = (params = {}) => {
  const { distributionSite = '1' } = params
  return httpIntance({
    url: 'home/banner',
    params: {
      distributionSite,
    },
  })
}

// 获取新鲜好物接口
export const getNewAPI = () => {
  return httpIntance({
    url: '/home/new',
  })
}

// 获取人气推荐接口
export const getHotAPI = () => {
  return httpIntance({
    url: 'home/hot',
  })
}

// 获取产品列表接口
export const getProductAPI = () => {
  return httpIntance({
    url: 'home/goods',
  })
}
