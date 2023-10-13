<script setup>
import { ref } from 'vue'
// 默认情况下，<script setup>语法糖下 组件内部的方法和属性不开放给父组件访问
// 可以通过编译宏函数defineExpose指定哪些属性和方法允许访问
const count = ref(100)
const setCount = () => {
  count.value++
}
defineExpose({
  count,
  setCount
})
</script>
<template>
  <div>
    <h2>子组件App - h2</h2>
  </div>
</template>
<style lang='less'></style>