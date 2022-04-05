<template>
  <div id="app">
    <ResultNavBar />
    <br>
    <el-row :gutter="10">
      <el-col :offset="2" :span="3">
        <el-card class="box-card"><ResultSideBar @timeBySideBar="searchLimitTime" /></el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card"><ResultMiddle :year="year" /></el-card>
      </el-col>
      <el-col :span="5">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>推荐论文</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
            >更多</el-button>
          </div>
          <ResultRight /></el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import ResultNavBar from './components/ResultNavBar.vue'
import ResultSideBar from './components/ResultSideBar.vue'
import ResultMiddle from './components/ResultMiddle.vue'
import ResultRight from './components/ResultRight.vue'

export default {
  name: 'SearchResult',
  components: {
    ResultNavBar,
    ResultSideBar,
    ResultMiddle,
    ResultRight
  },
  props: ['select', 'input', 'id'],
  data() {
    return {
      year: ''
    }
  },
  mounted() {
    this.getParams()
  },
  methods: {
    getParams() {
      // var input = this.$route.params.input
      // var select = this.$route.params.select
      console.log(this.$route.params.id)
    },
    searchLimitTime(year) {
      this.year = year
      console.log(this.year)
    }
  }
}
</script>
