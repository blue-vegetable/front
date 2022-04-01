<template>
  <div id="app">
    <PaperTitle />
    <el-row>
      <!-- 这个el-row为了限制card的大小, 使其占中间位置 -->
      <el-col :offset="4" :span="16">
        <el-card class="box-card">

          <el-link
            href="https://element.eleme.io"
            target="_blank"
          ><h1>无证书签密机制的安全性分析</h1></el-link>

          <el-row>
            <el-col :span="32">
              <p>
                作者：何德彪
              </p>
              <p>
                摘要：为了避免复杂的双线性对运算和提高签密机制的性能,Liu等人提出了一种不使用双线性对的无证书签密机制.同时,随机谕示模型下证明了机制是可证安全.通过给出具体的攻击算法,证明了Liu等人所提出的机制不能抵抗类型1敌手的攻击.为了抵抗这种攻击,给出了一种有效的方法.
              </p>
              <p>
                引用量：37
              </p>
            </el-col>
          </el-row>
          <PaperTag />

          <br>
          <el-row>

            <el-col :offset="0" :span="2">
              <el-badge :value="12" class="item">
                <el-button size="small">评论</el-button>
              </el-badge>
            </el-col>

            <el-col :offset="1" :span="2">
              <el-badge :value="1" class="item" type="primary">
                <el-button size="small">喜欢</el-button>
              </el-badge>
            </el-col>

            <el-col :offset="1" :span="2">
              <el-badge :value="2" class="item" type="warning">
                <el-button size="small">收藏</el-button>
              </el-badge>
            </el-col>

          </el-row>

        </el-card>
        <PaperButton />
        <br>
        <PaperComment />
        <br>
        <el-row>
          <br>
          <el-col :offset="22" :span="1">
            <el-button type="success">评论</el-button>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PaperTitle from './components/PaperTitle.vue'
import PaperTag from './components/PaperTag.vue'
import PaperButton from './components/PaperButton.vue'

import PaperComment from './components/PaperComment.vue'

export default {
  name: 'PaperProfile',
  components: {
    PaperTitle,
    PaperTag,
    PaperButton,

    PaperComment
  }
}
</script>

<style>
p {
  font-family: "Helvetica Neue";
  text-align: justify;
  color:rgb(94, 91, 91)
}
</style>

