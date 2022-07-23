<template>
  <div>
    <div v-for="(paper, index) in papers" :id="'paper' + index" :key="index">
      <el-link type="primary"><router-link class="paperName" :to="{ path: '/paperProfile', query: { id: paper.id }}">{{ paper.paperName }}</router-link></el-link>
      <br><br>
      <el-link><router-link class="paperWriter" :to="{ path: '/writerProfile', query: { id: paper.writerId }}">{{ paper.writerName }}</router-link></el-link>
      <br>
      <div
        style="font-size: small;
            line-height: 22px;"
      >{{ paper.summary }}</div>
      <br>
      <div class="paperRate">
        用户评分：{{ paper.star }} <br> 上传时间 : {{ paper.time }}
      </div>
      <el-divider />
    </div>
  </div>
</template>

<style>
.paperName {
  font-size: larger;
}
.paperWriter {
  font-size: small;
}
.paperAbstract {
 font-size: small;
  line-height: 22px;
}
.paperRate {
  font-size: small;
}
</style>

<script>
export default {
  name: 'ResultMiddle',
  data() {
    return {
      papers: ''
    }
  },
  mounted() {
    this.getPaper()
  },
  methods: {
    getPaper() {
      this.$axios.get('http://106.52.79.36:12000/paper/getLatest')
        .then(response => (this.papers = response.data))
        .catch(error => console.log(error))
    }
  }

}
</script>
