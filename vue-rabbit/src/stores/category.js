import { defineStore } from "pinia"
import { ref } from 'vue'
import { getCategoryAPI } from "@/apis/layout.js";

export const useCategoryStore = defineStore('category', () => {
  // 获取一级导航菜单数据
  // state 导航列表数据
  const categoryList = ref([])

  // actions 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result;
  }

  return {
    categoryList,
    getCategory
  }
})