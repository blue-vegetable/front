<template>
  <div>
    <div v-for="(paper, index) in papers" :key="index" class="paperRight">
      <el-link style="margin-bottom:10px"> <router-link to="/paperProfile">{{ index + 1 }} {{ paper.paperName }}</router-link></el-link>
      <el-row :gutter="10">
        <el-col :span="14"> <el-tag>{{ paper.time.replace('T','').slice(0,10)+'上传' }}</el-tag> </el-col>
        <el-col :span="6"><el-tag type="success">多星好评</el-tag></el-col>  <!--这里多设置几个类型，以后再说-->
      </el-row>
      <br>
    </div>
  </div>
</template>

<style scoped>
.paperRight {
  color: #5d6566;
  font-size: 14px;
  width: 90%;   /*一定要设置宽度，或者元素内含的百分比*/
  overflow: hidden; /*溢出的部分隐藏*/
  white-space: nowrap; /*文本不换行*/
  text-overflow: ellipsis; /*ellipsis:文本溢出显示省略号（...）；clip：不显示省略标记（...），而是简单的裁切*/
}
</style>

<script>
export default {
  name: 'ResultMiddle',
  mounted(){
    this.getLastestPaper()
  },
  data() {
    return {
      papers: [
      ]
    }
  },
  methods: {
    getLastestPaper() {
      this.$axios.get('http://124.220.30.8:12000/paper/getLatest')
        .then(response => {
          this.papers = response.data
        })
        .catch(error => console.log(error))
    }
  }
}
</script>
