<!-- watch侦听单个数据 -->
<!-- <script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}

// TODO:watch侦听单个数据
// watch的第一个参数 ref对象不需要加.value
watch(count, (newVal, oldVal) => {
  console.log('count变化了', newVal, oldVal);
})
</script>
<template>
  <div>
    <button @click="setCount">{{ count }}</button>
  </div>
</template> -->


<!-- watch侦听多个数据源 -->
<!-- <script setup>
import { ref, watch } from 'vue';
const count = ref(0)
const changeCount = () => {
  count.value++;
}

const name = ref('pc');
const changeName = () => {
  name.value = 'cp'
}

// TODO: watch侦听多个数据源
watch(
  [count, name],
  ([newCount, newName], [oldCount, oldName]) => {
    console.log('count或name变化了', [newCount, newName], [oldCount, oldName]);
  }
)
</script>
<template>
  <div>
    <button @click="changeCount">{{ count }}</button>
  </div>
  <div>
    <button @click="changeName">{{ name }}</button>
  </div>
</template> -->


<!-- watch立即执行 -->
<!-- <script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}
watch(count, () => {
  console.log('count变化了');
}, {
  immediate: true
})
</script>
<template>
  <div>
    <button @click="setCount">{{ count }}</button>
  </div>
</template> -->


<!-- watch深度侦听 -->
<!-- <script setup>
import { ref, watch } from 'vue'
const state = ref({ count: 0 })
const setCount = () => {
  state.value.count++
}
watch(state, () => {
  console.log('count变化了');
}, {
  deep: true
})
</script>
<template>
  <div>
    <button @click="setCount">{{ state.count }}</button>
  </div>
</template> -->


<!-- watch精确侦听对象的某个属性 -->
<script setup>
import { ref, watch } from 'vue'
const state = ref({
  name: 'xiaoming',
  age: 20,
  sex: '男'
})
const changeName = () => {
  state.value.name = 'lisi'
}
const changeAge = () => {
  state.value.age++
}
const changeSex = () => {
  state.value.sex = '女'
}
watch(
  () => [state.value.age, state.value.sex],
  ([newAge, newSex], [oldAge, oldSex]) => {
    console.log('age或sex变化了', [newAge, newSex], [oldAge, oldSex]);
  }
)
</script>
<template>
  <div>
    name
    <button @click="changeName">{{ state.name }}</button>
  </div>
  <div>
    age
    <button @click="changeAge">{{ state.age }}</button>
  </div>
  <div>
    sex
    <button @click="changeSex">{{ state.sex }}</button>
  </div>
</template>
<style lang='less'></style>