// 导入defineStore
import axios from 'axios'
import { defineStore} from 'pinia'
import { ref, computed } from 'vue'

// 命名规则：以use开头
export const useCounterStore = defineStore('counter', () => {
  // 定义数据（state）
  const count = ref(0)

  // 定义修改数据的方法（actions 同步 + 异步）
  const increment = () => {
    count.value++
  }

  // getters
  const doubleCount = computed(() => count.value * 2)

  // 异步actions
  const list = ref([])
  const getList = async () => {
    const res = await axios.get('/getDate')
    list.value = res.data
  }
  // 导出
  return {
    count,
    doubleCount,
    increment,
    list,
    getList
  }
})