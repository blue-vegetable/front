<template>
  <div>
    <div v-for="(paper, index) in papers" :id="'paper' + index" :key="index">
      <el-link type="primary"><router-link class="paperName" :to="{ path: '/paperProfile', query: { id: paper.id }}">
        <div v-html="paper.paperName.replace(input,`<span style='color:#eb4335'>`+input+`</span>`)"></div>
      </router-link></el-link>
      <br><br>
      <el-link><router-link class="paperWriter" :to="{ path: '/writerProfile', query: { id: paper.writerId }}">{{ paper.writerName }}</router-link></el-link>
      <br>
      <div class="paperAbstract">{{ paper.summary }}</div>
      <br>
      <div class="paperRate">
        用户评分：{{ paper.star }} <br> 上传时间 : {{ paper.time.replace('T',' ').slice(0,19) }}
      </div>
      <br>
      <el-row>
        <el-button type="primary" icon="el-icon-edit" size="mini" circle />
        <el-button type="success" icon="el-icon-check" size="mini" circle />
        <el-button type="info" icon="el-icon-message" size="mini" circle />
      </el-row>
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
  line-height: 22px;
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
      keyword: '',
      field: '',
      papers: '',
      input: this.$route.query.input,
      select: this.$route.query.select,
      year: ''
    }
  },
  watch: {
    $route(to, from) {
      this.input = this.$route.query.input
      this.select = this.$route.query.select
    },
    year: function() {
      this.getPaper()
    },
    input: function() {
      this.getPaper()
    },
    select: function() {
      this.getPaper()
    }
  },
  mounted() {
    this.getPaper()
  },
  methods: {
    getPaper() {
      let writerName = ''; let paperName = ''
      if (this.select === '2') {
        writerName = this.input
      } else if (this.select === '1') {
        paperName = this.input
      }
      this.$axios.get('http://106.52.79.36:12000/paper/searchPaper?writerName=' + writerName + '&paperName=' + paperName + '&keywords=' + this.keyword + '&time=' + this.year)
        .then(response => (this.papers = response.data))
        .catch(error => console.log(error))
    }
  }

}
</script>
