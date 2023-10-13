<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import Edit from './edit.vue'

// 渲染列表数据
const list = ref([])
const getList = async () => {
  const res = await axios.get('/getDate')
  list.value = res.data;
}
onMounted(() => {
  getList()
})

// 删除功能
const onDelete = async (id) => {
  await axios.delete(`/del?${id}`)
  getList()
}

// 编辑功能
const editRef = ref(null)
const onEdit = (row) => {
  editRef.value.open(row)
}

</script>

<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column type="index" width="50" />
    <el-table-column prop="date" label="Date" width="150" />
    <el-table-column prop="name" label="Name" width="120" />
    <el-table-column prop="city" label="City" width="120" />
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="onDelete(row.id)">Delete</el-button>
        <el-button link type="primary" size="small" @click="onEdit(row)">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <Edit ref="editRef" @on-update="getList" />
</template>
<style lang='less'></style>