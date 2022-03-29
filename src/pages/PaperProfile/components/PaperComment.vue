<template>
    
<el-input
  type="textarea"
  placeholder="请输入内容"
  v-model="textarea"
  maxlength="100"
  show-word-limit
>
</el-input>

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
