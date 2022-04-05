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
  data() {
    return {
      papers: [
        {
          id: '1',
          name: '一个瞎鸡儿写的论文标题，测试中文',
          writer: 'A Kosba,A Miller,E Shi,Z Wen,C Papamanthou',
          rate: '3',
          abstract:
            '一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点',
          time: '2020-2-22',
          keywords: ['计算机', '计算机', '计算机', '计算机', '计算机', '计算机', '计算机', '计算机', '计算机']
        },
        {
          id: '1',
          name: 'Hawk: The Blockchain Model of Cryptography and Privacy-Preserving Smart Contracts',
          writer: 'A Kosba,A Miller,E Shi,Z Wen,C Papamanthou',
          rate: '3',
          abstract:
            '一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点',
          time: '2020-2-22'
        },
        {
          id: '1',
          name: 'Hawk: The Blockchain Model of Cryptography and Privacy-Preserving Smart Contracts',
          writer: 'A Kosba,A Miller,E Shi,Z Wen,C Papamanthou',
          rate: '3',
          abstract:
            '一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点',
          time: '2020-2-22'
        },
        {
          id: '1',
          name: 'Hawk: The Blockchain Model of Cryptography and Privacy-Preserving Smart Contracts',
          writer: 'A Kosba,A Miller,E Shi,Z Wen,C Papamanthou',
          rate: '3',
          abstract:
            '一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点,一个非常非常少的字数的摘要，但是要假装写的长一点',
          time: '2020-2-22'
        }
      ]
    }
  }
}
</script>
