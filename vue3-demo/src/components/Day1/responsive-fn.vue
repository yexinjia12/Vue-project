<!-- 
  reactive：
  传入参数：对象类型
 -->
<!-- <script setup>
import { reactive } from 'vue'
const state = reactive({
  count: 0
})
const setCount = () => {
  state.count++;
}
</script>
<template>
  <div>
    // 必须使用 state.属性
    <button @click="setCount">{{ state.count }}</button>
  </div>
</template> -->


<!-- 
  ref:
  传入参数：简单类型 | 对象类型
 -->
<script setup>
import { ref } from 'vue';
const count = ref(0);
const setCount = () => {
  // 脚本区域修改ref产生的响应式对象数据，必须通过.value属性
  count.value++;
}
</script>
<template>
  <div>
    <button @click="setCount">{{ count }}</button>
  </div>
</template>
<style lang='less'></style>
