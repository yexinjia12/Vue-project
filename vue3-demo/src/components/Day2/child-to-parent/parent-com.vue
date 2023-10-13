<script setup>
// 组件不再需要components注册了，可以直接使用
import ChildCom from './child-com.vue'
const getMessage = (msg) => {
  console.log(msg);
}
</script>
<template>
  <div>
    <h2>父组件App</h2>
    <!-- 接收子组件数据跟vue2语法一样 -->
    <ChildCom @get-message="getMessage" />
  </div>
</template>
<style lang='less'></style>