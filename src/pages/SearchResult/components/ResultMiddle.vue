<template>
  <div>
    <div v-for="(paper, index) in papers" :id="'paper' + index" :key="index">
      <el-link class="paperName" type="primary" href="/paperProfile">{{ paper.name }}</el-link>
      <br><br>
      <div class="paperWriter">{{ paper.writer }}</div>
      <br>
      <div class="paperAbstract">{{ paper.abstract }}</div>
      <br>
      <div class="paperRate">
        用户评分：{{ paper.rate }} <br> 上传时间:{{ paper.time }}
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
  props: ['year'],
  data() {
    return {
      papers: ''
    }
  },
  watch: {
    year: function() {
      this.getPaper()
    }
  },
  mounted() {
    this.$axios.get('http://localhost:12000/feedback/all')
      .then(response => (this.papers = response.data))
      .catch(error => console.log(error))
  },
  methods: {
    getPaper() {
      this.$axios.get('http://localhost:12000/feedback/all')
        .then(response => (this.papers = response.data))
        .catch(error => console.log(error))
    }
  }

}
</script>
