<template>
  <div>
    <el-card>
      <div v-for="(comment, index) in comments" :id="'comment' + index" :key="index">
        <el-card class="box-card" shadow="always" style="background-color:#ffffff">
          <el-link><router-link class="commentWriter" :to="{ path: '/writerProfile', query: { id: comment.writer }}"><div style="color:black">评论人id : {{ comment.userId }}</div></router-link></el-link>
          <br><br>
          <div class="commentContent">内容 : {{ comment.comment }}</div>
          <br><br>
          <div class="commentRate">
            评分 :  {{ comment.rate }} <br> 评论时间 : {{ comment.date }}
          </div>
          <br>
          <el-divider />
        </el-card>
      </div>
    </el-card></div>
</template>

<style>

.commentWriter {
  font-size: middle;
}
.commentContent {
  font-size: middle;
  line-height: 22px;
}
.commentRate {
  font-size: middle;
}
</style>

<script>
export default {
  name: 'CommentMiddle',
  data() {
    return {
      comments: [
        {
          hash: '1b67b73f6045e94a51ab5',
          date: '2022-06-02',
          name: '李小',
          address: '上海市普陀区金沙江路 1518 弄',
          content: '这篇论文对于区块链在存证电子数据方面的说的很明白，有兴趣了解这块论文的朋友可以从这篇论文入手，里面关于当前区块链和司法的结合的论述也可以借鉴的。',
          paper: '论区块链存证电子数据的优势及司法审查路径',
          rate: '9'
        },
        {
          hash: '6bb22f1a9be94d9291364',
          date: '2022-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          content: '我正好在写一篇区块链和司法审查结合的论文，这篇论文给了我一些提示，建议想了解目前电子数据伪造问题和相应司法实践的朋友可以下载来看一下。',
          paper: '论区块链存证电子数据的优势及司法审查路径',
          rate: '9'
        },
        {
          hash: '08b3fada1cc835c79d468',
          date: '2022-05-03',
          name: '王虎',
          address: '上海市普陀区金沙江路 1519 弄',
          paper: '论区块链存证电子数据的优势及司法审查路径',
          content: '深度好文，推荐阅读',
          rate: '10'
        },
        {
          hash: 'af43dd83c77630dbad657',
          date: '2022-05-01',
          name: '谷爱',
          address: '上海市普陀区金沙江路 1516 弄',
          paper: '论区块链存证电子数据的优势及司法审查路径',
          content: '是一篇对区块链的应用于司法相结合的文章，里面涉及了区块链的原理和司法审查步骤等基础知识，并且对区块链的优点等内容说明较详细，有相关工作的朋友们可以看看',
          rate: '8'
        }
      ]
    }
  },

  mounted() {
    this.getcomment()
  },
  methods: {
    getcomment() {
      console.log('fetch comment')
      this.$axios.get('http://106.52.79.36:12000/paper/allComment?paperId=' + this.$route.query.id)
        .then(response => (this.comments = response.data))
        .catch(error => console.log(error))
    }
  }

}
</script>
