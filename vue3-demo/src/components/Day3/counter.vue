<script setup>
import { useCounterStore } from '@/stores/counter';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia'
// useCountStore是个方法，需要执行该方法获取里面的属性和方法
const counterStore = useCounterStore()

// 如果使用解构赋值获取store中的state、getters需要storeToRefs
const { count, doubleCount } = storeToRefs(counterStore)

// store中的方法，直接从原来的counterStore解构赋值
const { increment, getList } = counterStore

// 执行store中的actions
onMounted(() => {
  // counterStore.getList()
  getList()
})
</script>
<template>
  <button @click="increment">{{ count }}</button>
  <div>{{ doubleCount }}</div>
  <ul>
    <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
  </ul>
</template>
<style lang='less'></style>