<script setup>
import { ref, provide } from 'vue'
import roomMsgItem from './room-msg-item.vue';

// 向底层组件传递数据
provide('data-key', 'this is room-page message')

// 向底层组件传递响应式数据
const count = ref(0)
provide('count-key', count)
setTimeout(() => {
  count.value = 200
}, 2000)

// 向底层组件传递方法（谁的数据谁修改）
const setCount = () => {
  count.value++
}
provide('set-count', setCount)

</script>
<template>
  <div>
    <h1>顶层组件 - [room-page]</h1>
    <roomMsgItem />
  </div>
</template>
<style lang='less'></style>