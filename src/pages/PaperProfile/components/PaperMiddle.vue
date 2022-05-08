<template>
  <div>
    <div class="paperName">
      {{ paper.paperName }}
    </div>
    <br><br>
    <el-link><router-link class="paperWriter" :to="{ path: '/writerProfile', query: { id: paper.writerId }}">作者：{{ paper.writerName }}</router-link></el-link>
    <br><br>
    <div class="paperAbstract">摘要：{{ paper.summary }}</div>
    <br>

    <br>
    <div class="tag-group">
      <span class="paperKeyword">关键词：</span>
      <el-button v-for="(keyword,index) in paper.keywords" :key="index" :type="types[index%3]" round>{{ keyword }}</el-button>
      <br>
      <br>
    </div>
    <el-row>
      <el-col :offset="0" :span="2">
        <el-badge :value="paper.downloads" class="item">
          <el-button size="small" @click="download">下载</el-button>
        </el-badge>
      </el-col>

      <el-col :offset="3" :span="2">
        <el-badge :value="paper.like" class="item" type="danger">
          <el-button v-if="likeOrNot" size="small" type="danger" @click="like"> 已喜欢 </el-button>
          <el-button v-if="!likeOrNot" size="small" @click="like">喜欢</el-button>
        </el-badge>
      </el-col>

      <el-col :offset="3" :span="2">
        <el-badge :value="paper.star" class="item" type="primary">
          <el-button v-if="starOrNot" size="small" type="primary" @click="star"> 已收藏 </el-button>
          <el-button v-if="!starOrNot" size="small" @click="star">收藏</el-button>
        </el-badge>
      </el-col>
    </el-row>

  </div>
</template>

<style>
.paperName {
  font-size: larger;
}
.paperWriter {
  font-size: larger;
}
.paperAbstract {
  font-size:larger;
  line-height: 22px;
}
.paperYinyongliang {
  font-size: larger;
}
.paperKeyword{
  font-size: larger;
}
</style>

<script>
import store from '@/store'
export default {
  name: 'PaperMiddle',
  data() {
    return {
      id: this.$route.query.id,
      paper: '',
      types: ['primary', 'success', 'info', 'danger'],
      likeOrNot: false,
      starOrNot: false
    }
  },

  mounted() {
    this.getPaper()
    if (store.getters.token) {
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios.get('http://124.220.30.8:12000/paper/likePaperQuery?paperId=' + this.id)
        .then(response => {
          this.likeOrNot = response.data.data.result === 1
        })
        .catch(error => console.log(error))
      this.$axios.get('http://124.220.30.8:12000/paper/starPaperQuery?paperId=' + this.id)
        .then(response => {
          this.starOrNot = response.data.data.result === 1
        })
        .catch(error => console.log(error))
    }
  },
  methods: {
    getPaper() {
      this.$axios.get('http://124.220.30.8:12000/paper/getPaper?paperId=' + this.id)
        .then(response => {
          this.paper = response.data
          this.paper.keywords = (this.paper.keywords).split(';')
          if (this.paper.keywords.length === 1) { // 如果是中文引号则还需要额外处理
            this.paper.keywords = this.paper.keywords[0].split('；')
          }
        })
        .catch(error => console.log(error))
    },
    like() {
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios.get('http://124.220.30.8:12000/paper/like?paperId=' + this.id)
        .then(response => {
          if (response.data.code === 3001) {
            this.$message({
              message: '用户未登录',
              type: 'warning'
            })
          } else {
            if (response.data.message === '点赞成功') {
              this.paper.like++
            } else {
              this.paper.like--
            }
            this.$message({
              message: response.data.message,
              type: 'success'
            })
            this.likeOrNot = !this.likeOrNot
          }
        })
        .catch(error => console.log(error))
    },
    star() {
      console.log()
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios.get('http://124.220.30.8:12000/paper/star?paperId=' + this.id)
        .then(response => {
          if (response.data.code === 3001) {
            this.$message({
              message: '用户未登录',
              type: 'warning'
            })
          } else {
            if (response.data.message === '收藏成功') {
              this.paper.star++
            } else {
              this.paper.star--
            }
            this.$message({
              message: response.data.message,
              type: 'success'
            })
            this.starOrNot = !this.starOrNot
          }
        })
        .catch(error => console.log(error))
    },
    download() {
      this.$axios.get('http://124.220.30.8:12000/paper/download?paperId=' + this.id)
        .then(resp => {
          console.log(resp)
        })
        .catch(error => console.log(error))
    }
  }
}

</script>
