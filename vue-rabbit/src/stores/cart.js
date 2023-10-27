// 本地购物车操作：所有操作不走接口直接操作pinia中的本地购物车列表
// 采用pinia管理购物车列表数据并添加持久化缓存

import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useUserStore } from './user'
import { insertCartAPI, getNewCartListAPI, delCartAPI } from '@/apis/cart'

export const useCartStore = defineStore(
  'cart',
  () => {
    const cartList = ref([])

    const userStore = useUserStore()

    const isLogin = computed(() => userStore.userInfo.token)

    // 获取接口购物车
    const updateCart = async () => {
      const res = await getNewCartListAPI()
      // 用接口购物车覆盖本地购物车
      cartList.value = res.result
    }

    // 添加购物车
    const addCart = async (goods) => {
      // 接口购物车（所有操作走接口，操作完毕获取购物车列表更新本地购物车列表）
      if (isLogin.value) {
        await insertCartAPI({
          skuId: goods.skuId,
          count: goods.count,
        })
        updateCart()
      } else {
        // 本地购物车(所有操作不走接口，直接操作pinia的本地购物车列表)
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
    }

    // 删除购物车
    const delCart = async (skuId) => {
      // 接口购物车-删除
      if (isLogin.value) {
        await delCartAPI([skuId])
        updateCart()
      } else {
        // 本地购物车-删除
        const delIndex = cartList.value.findIndex(
          (item) => item.skuId === skuId
        )
        cartList.value.splice(delIndex, 1)
      }
    }

    // 清除购物车
    const clearCart = () => {
      cartList.value = []
    }

    // 商品总数
    const allCount = computed(() => {
      return cartList.value.reduce((pre, cur) => {
        return pre + cur.count
      }, 0)
    })

    // 商品总价格
    const allPrice = computed(() => {
      return cartList.value.reduce((pre, cur) => {
        return pre + cur.count * cur.price
      }, 0)
    })

    // 是否全选
    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected)
    })

    // 已选择数量
    const selectedCount = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((pre, cur) => {
          return pre + cur.count
        }, 0)
    })

    // 商品合计
    const selectedPrice = computed(() => {
      return cartList.value
        .filter((item) => item.selected)
        .reduce((pre, cur) => {
          return pre + cur.count * cur.price
        }, 0)
    })

    // 单选功能
    const singleCheck = (skuId, selected) => {
      const goodsItem = cartList.value.find((item) => item.skuId === skuId)
      goodsItem.selected = selected
    }

    // 全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }

    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      selectedCount,
      selectedPrice,
      clearCart,
      addCart,
      delCart,
      singleCheck,
      allCheck,
    }
  },
  {
    persist: true,
  }
)
