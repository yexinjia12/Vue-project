import { getTopCategoryAPI } from '@/apis/category'
import { onMounted, ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

// 封装分类数据业务代码相关代码
export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getTopCategoryList = async (id = route.params.id) => {
    const res = await getTopCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getTopCategoryList())
  // 路由参数变化的时候，重新发送分类数据接口
  onBeforeRouteUpdate((to) => {
    getTopCategoryList(to.params.id)
  })
  return {
    categoryData,
  }
}
