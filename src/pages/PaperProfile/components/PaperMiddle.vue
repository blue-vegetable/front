<template>
  <div>
      <div class="paperName">
        {{paper.name}}
      </div>
      <br><br>
      <el-link><router-link class="paperWriter" :to="{ path: '/writerProfile', query: { id: paper.writer }}">作者：{{ paper.writer }}</router-link></el-link>
      <br><br>
      <div class="paperAbstract">摘要：{{ paper.abstract }}</div>
      <br>
      <div class="paperYinyongliang">
        引用量：{{ paper.yinyongliang }}
      </div>
      <br>
    <div class="tag-group">
  <span class="paperKeyword">关键词：</span>
  <el-button type="success" plain>{{paper.keywords[0]}}</el-button>
   <el-button type="info" plain>{{paper.keywords[1]}}</el-button>
    <el-button type="warning" plain>{{paper.keywords[2]}}</el-button>

  <br>
  <br>
</div>
      <el-row>
     <el-col :offset="0" :span="2">
              <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
              </el-badge>
            </el-col>

            <el-col :offset="3" :span="2">
              <el-badge :value="paper.likenum" class="item" type="primary">
                <el-button size="small" @click="like">喜欢</el-button>
              </el-badge>
            </el-col>

            <el-col :offset="3" :span="2">
              <el-badge :value="2" class="item" type="warning">
                <el-button size="small">收藏</el-button>
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
export default {
  name: 'PaperMiddle',

  data() {
    return {
        paper: '',
     
    }
  },
  
  mounted() {
    this.$axios.get('http://localhost:12000/feedback/paper')
      .then(response => (this.paper = response.data))
      .catch(error => console.log(error))
    console.log('here',this.paper,'123')
  },

  methods: {
    getPaper() {
      this.$axios.get('http://localhost:12000/feedback/paper')
        .then(response => (this.paper = response.data))
        .catch(error => console.log(error))
    },
    like() {
       paper.likenum++
    }
  }

}
</script>
