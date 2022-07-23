<template>
  <div id="app">
    <ResultNavBar />
    <br>
    <PaperTitle />
    <el-row>
      <!-- 这个el-row为了限制card的大小, 使其占中间位置 -->
      <el-col :offset="4" :span="16">
        <el-card class="box-card">
          <el-row>
            <el-col :span="24">
              <PaperMiddle :id="id" />
            </el-col>
          </el-row>
          <br>
        </el-card>
<!--        <PaperButton />-->
        <br>
        <br>
        <el-row>
          <PaperComment />
        </el-row>
        <el-divider />
        <br>

        <CommentMiddle />
        <br>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PaperTitle from './components/PaperTitle.vue'
import PaperButton from './components/PaperButton.vue'
import PaperMiddle from './components/PaperMiddle.vue'
import PaperComment from './components/PaperComment.vue'
import CommentMiddle from './components/CommentMiddle.vue'
import ResultNavBar from '@/components/ResultNavBar.vue'

export default {
  name: 'PaperProfile',

  components: {
    PaperTitle,
    PaperButton,
    PaperComment,
    ResultNavBar,
    CommentMiddle,
    PaperMiddle
  },
  data() {
    return {
      id: this.$route.query.id
    }
  },
  mounted() {
    console.log(this.$route.query.id)
  }
}
</script>

<style>
p {
  font-family: "PingFang SC";
  text-align: justify;
  color: rgb(94, 91, 91);
}
</style>

