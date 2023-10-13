<script setup>
// 组件不再需要components注册了，可以直接使用
import ChildCom from './child-com.vue'
import { onMounted, ref } from 'vue'
const h2Ref = ref(null)
const childRef = ref(null)

// 组件挂载完毕才能获取到模板引用
onMounted(() => {
  console.log('h2', h2Ref.value);
  console.log('child-com', childRef.value.count);
})
</script>
<template>
  <div>
    <h2 ref="h2Ref">父组件App - h2</h2>
    <!-- 接收子组件数据跟vue2语法一样 -->
    <ChildCom ref="childRef" />
  </div>
</template>
<style lang='less'></style>