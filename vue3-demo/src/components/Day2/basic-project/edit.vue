<script setup>
import { ref } from 'vue'
import axios from 'axios'

const dialogFormVisible = ref(false)
const form = ref({
  id: '',
  date: '',
  name: '',
  city: ''
})
const formLabelWidth = '50px'
const emits = defineEmits(['on-update'])

// 打开弹窗并回显数据
const open = (row) => {
  dialogFormVisible.value = true;
  form.value = { ...row }
}

// 点击提交
const onUpdate = async () => {
  // TODO:修改的接口mock没实现
  await axios.post('/edit', {
    ...form
  })
  dialogFormVisible.value = false
  emits('on-update')
}

defineExpose({
  open
})
</script>
<template>
  <el-dialog v-model="dialogFormVisible" title="Shipping address">
    <el-form :model="form">
      <el-form-item label="Date" :label-width="formLabelWidth">
        <el-input v-model="form.date" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="City" :label-width="formLabelWidth">
        <el-input v-model="form.city" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onUpdate">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<style lang='less'></style>