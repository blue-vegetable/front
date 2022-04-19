<template>
  <div>
    <div v-for="(comment, index) in comments" :id="'comment' + index" :key="index">
      <el-link><router-link class="commentWriter" :to="{ path: '/writerProfile', query: { id: comment.writer }}">{{ comment.writer }}</router-link></el-link>
      <br>
      <div class="commentContent">{{ comment.content }}</div>
      <br>
      <div class="commentRate">
        评分：{{ comment.rate }} <br> 评论时间 : {{ comment.time }}
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
    this.$axios.get('http://localhost:12000/feedback/comment')
      .then(response => (this.comments = response.data))
      .catch(error => console.log(error))
        console.log('here',this.comments,'123')
        this.getcomment()
  },
  methods: {
    getcomment() {
      this.$axios.get('http://localhost:12000/feedback/comment')
        .then(response => (this.comments = response.data))
        .catch(error => console.log(error))
    }
  }

}
</script>
