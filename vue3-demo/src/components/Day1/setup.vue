<!-- 原始写法 -->
<!-- 
  可以在setup函数内定义变量 + 函数
  然后以对象方式return
 -->
<!-- <script>
export default {
  setup() {
    console.log('setup');
    const message = 'this is message';
    const logMessage = () => {
      // 不再推荐this编写，打印this为undefined
      console.log(message);
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate() {
    console.log('beforeCreate');
  }
}
</script> -->


<!-- 语法糖 -->
<script setup>
const message = 'this is message';
const logMessage = () => {
  // 不再推荐this编写，打印this为undefined
  console.log(message);
}
</script>

<template>
  {{ message }}
  <button @click="logMessage">log</button>
</template>

<style></style>