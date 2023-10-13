<script setup>
// 使用 编译器宏函数defineEmits 向父组件传值
const emits = defineEmits(['get-message'])
const setMessage = () => {
  emits('get-message', 'this is child message')
}
</script>
<template>
  <div>
    <h2>子组件App</h2>
    <button @click="setMessage">点击子组件向父组件传值</button>
  </div>
</template>
<style lang='less'></style>