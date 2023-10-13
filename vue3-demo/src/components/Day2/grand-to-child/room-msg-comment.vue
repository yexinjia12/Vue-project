<script setup>
import { inject } from 'vue'
// 接收顶层组件数据
const roomDate = inject('data-key')

// 接收顶层组件响应式数据
const roomCount = inject('count-key')

// 接收顶层组件方法
const setRoomCount = inject('set-count')
</script>
<template>
  <div>
    <h3>底层组件 - [room-msg-comment]</h3>
    <div>来自顶层组件的数据 - {{ roomDate }}</div>
    <div>来自顶层组件的响应式数据 - {{ roomCount }}</div>
    <button @click="setRoomCount">修改顶层组件数据</button>
  </div>
</template>
<style lang='less'></style>