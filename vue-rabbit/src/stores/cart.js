// 本地购物车操作：所有操作不走接口直接操作pinia中的本地购物车列表
// 采用pinia管理购物车列表数据并添加持久化缓存

import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])
    // 添加购物车
    const addCart = (goods) => {
      const goodsItem = cartList.value.find(
        (item) => item.skuId === goods.skuId
      )
      if (goodsItem) {
        // 添加过，数量增加
        goodsItem.count += goods.count
      } else {
        cartList.value.push(goods) // 没添加过，直接push
      }
    }
    // 删除购物车
    const delCart = (skuId) => {
      const delIndex = cartList.value.findIndex((item) => item.skuId === skuId)
      cartList.value.splice(delIndex, 1)
    }
    return {
      cartList,
      addCart,
      delCart,
    }
  },
  {
    persist: true,
  }
)
