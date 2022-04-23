<template>
  <div>
    <div v-for="(paper, index) in papers" :id="'paper' + index" :key="index">
      <el-link type="primary"><router-link class="paperName" :to="{ path: '/paperProfile', query: { id: paper.id }}">{{ paper.paperName }}</router-link></el-link>
      <br><br>
      <el-link><router-link class="paperWriter" :to="{ path: '/writerProfile', query: { id: paper.writerId }}">{{ paper.writerName }}</router-link></el-link>
      <br>
      <div class="paperAbstract">{{ paper.summary }}</div>
      <br>
      <div class="paperRate">
        用户评分：{{ paper.star }} <br> 上传时间 : {{ paper.time }}
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
  props: ['input', 'select', 'year'],
  data() {
    return {
      keyword: '',
      field: '',
      papers: ''
    }
  },
  watch: {
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
      this.$axios.get('http://localhost:12000/paper/all')
        .then(response => (this.papers = response.data))
        .catch(error => console.log(error))
    }
  }

}
</script>
