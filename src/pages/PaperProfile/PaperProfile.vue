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
              <PaperMiddle />
            </el-col>
          </el-row>
          <br>
        </el-card>
        <PaperButton />
<<<<<<< HEAD
        <br />
  <br />
        <el-row>
          <el-col :offset="0" :span="4">
             <el-button type="primary" round>评论</el-button>
          </el-col>
          <el-col :offset="16" :span="4">
            <PaperComment />
=======
        <br>
        <PaperComment />
        <br>

        <CommentMiddle />

        <br>
        <el-row>
          <br>
          <el-col :offset="22" :span="1">
            <el-button type="success">评论</el-button>
>>>>>>> e4ea0b7c47c840dbe1b7434eee36f8463172e6d2
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <br />

        <CommentMiddle />
        <br />
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
<<<<<<< HEAD
  name: "PaperProfile",
=======
  name: 'PaperProfile',

>>>>>>> e4ea0b7c47c840dbe1b7434eee36f8463172e6d2
  components: {
    PaperTitle,
    PaperButton,
    PaperComment,
    ResultNavBar,
    CommentMiddle,
    PaperMiddle
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

