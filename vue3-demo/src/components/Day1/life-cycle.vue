<script setup>
import { onMounted } from 'vue'

// 同一个生命周期可以写多次，执行顺序是从上到下
onMounted(() => {
  console.log('组件挂载完毕 1');
})
onMounted(() => {
  console.log('组件挂载完毕 2');
})
</script>
<template>
  <div></div>
</template>
<style lang='less'></style>