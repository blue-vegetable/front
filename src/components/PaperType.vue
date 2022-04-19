<template>
  <div id="app">
    <el-row :gutter="20">
      <div v-for="(item,index) in detailTypes" :key="index" :types="types" :span="8">
        <el-card shadow="hover" style="margin-bottom:10px;text-align:right">
          <div style="text-align:right;font-size:32px;position:relative;top:-15px;left:-16px">{{ types[index] }}</div>
          <el-link v-for="(littleType,index2) in item" :key="index2" style="margin-bottom:20px;margin-right:20px">{{ littleType }}</el-link>
        </el-card>
      </div>
    </el-row>
  </div>
</template>

<style>

</style>

<script>
export default {
  name: 'PaperType',
  data() {
    return {
      types: ['文', '法', '理', '工', '农', '医'],
      detailTypes: [['文学', '艺术', '历史', '哲学', '管理', '教育'],
        ['习惯法', '自然法', '法律思想', '法经济学', '法社会学', '法哲学'],
        ['生物', '化学', '物理', '数学', '天文', '地球科学'],
        ['计算机', '电子', '机械', '材料科学', '水利', '建筑'],
        ['农业经济', '农业工程', '园艺', '畜牧', '农业基础科学'],
        ['中医学', '临床医学', '基础医学', '口腔医学']]
    }
  },
  methods: {

  }
}
</script>
