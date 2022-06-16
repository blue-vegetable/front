<template>
  <div>
    <div v-for="(comment, index) in comments" :id="'comment' + index" :key="index">
      <el-link><router-link class="commentWriter" :to="{ path: '/writerProfile', query: { id: comment.writer }}">作者 : {{ comment.writer }}</router-link></el-link>
      <br>
      <div class="commentContent">内容 : {{ comment.content }}</div>
      <br>
      <div class="commentRate">
        评分 :  {{ comment.rate }} <br> 评论时间 : {{ comment.time }}
      </div>
      <br>
      <el-divider />
    </div>
  </div>
</template>

<style>

.commentWriter {
  font-size: small;
}
.commentContent {
  font-size: small;
  line-height: 22px;
}
.commentRate {
  font-size: small;
}
</style>

<script>
export default {
  name: 'CommentMiddle',
  data() {
    return {
      comments: ''
    }
  },

  mounted() {
    this.$axios.get('http://124.220.30.8:12000/feedback/comment')
      .then(response => {
        this.comments = response.data
        console.log(this.comments)
      }
      )
      .catch(error => console.log(error))
    this.getcomment()
  },
  methods: {
    getcomment() {
      this.$axios.get('http://124.220.30.8:12000/feedback/comment')
        .then(response => (this.comments = response.data))
        .catch(error => console.log(error))
    }
  }

}
</script>
