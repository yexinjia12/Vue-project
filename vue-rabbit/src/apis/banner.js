import httpIntance from '@/utils/http'

// 获取轮播图数据接口
export const getBannerApI = () => {
  return httpIntance({
    url: 'home/banner'
  })
}