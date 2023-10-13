<script setup>
// 组件不再需要components注册了，可以直接使用
import ChildCom from './child-com.vue'
import { ref } from 'vue'
const count = ref(100)
setTimeout(() => {
  count.value = 222
}, 3000)
</script>
<template>
  <div>
    <h2>父组件App</h2>
    <!-- 传值方式和Vue2一样 -->
    <ChildCom :count="count" message="this is parent message" />
  </div>
</template>
<style lang='less'></style>