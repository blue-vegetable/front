<template>
  <div>
    <el-input v-model="input" placeholder="期待您的精彩评论" type="textarea" :rows="4" />
    <br>
    <br>
    <el-rate
      v-model="value"
      :colors="colors"
    />
    <div style="text-align: right;">
      <el-button @click="submit">发表您的评论</el-button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  data() {
    return {
      // 弹出输入框
      input: '',
      id: this.$route.query.id,
      value: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900']
    }
  },
  methods: {
    submit() {
      if (store.getters.token) {
        this.$axios.defaults.headers.common['token'] = store.getters.token
        this.$axios.post('http://106.52.79.36:12000/paper/addComment', { comment: this.input, paperId: this.id, rate: this.value })
        this.$message({
          type: 'success',
          message: '评论成功'
        })
        setTimeout(() => { this.$router.go(0) }, 1000)
      } else {
        this.$message({
          type: 'warning',
          message: '用户未登录'
        })
      }
    }
  }
}
</script>
