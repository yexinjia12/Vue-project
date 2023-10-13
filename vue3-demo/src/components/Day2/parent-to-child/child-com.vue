<script setup>
// 使用 编译器宏函数defineProps 接收父组件传递的数据
const props = defineProps({
  message: String,
  count: Number
})
console.log('子组件script中调用父组件传入的值', props);
</script>
<template>
  <div>
    <h2>子组件App</h2>
    <div>父组件传入的参数 - {{ message }} - {{ count }}</div>
  </div>
</template>
<style lang='less'></style>