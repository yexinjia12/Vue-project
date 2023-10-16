import httpIntance from '@/utils/http'

// 获取轮播图数据接口
export const getBannerAPI = () => {
  return httpIntance({
    url: 'home/banner'
  })
}

// 获取新鲜好物接口
export const getNewAPI = () => {
  return httpIntance({
    url: '/home/new'
  })
}