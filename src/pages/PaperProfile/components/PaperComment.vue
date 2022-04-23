<template>

  <el-input
    v-model="textarea"
    type="textarea"
    placeholder="请输入内容"
    maxlength="100"
    show-word-limit
  />

</template>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    }
  }
}
</script>
