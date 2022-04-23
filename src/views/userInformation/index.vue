<template>
  <div id="app">
    <br>
    <el-row>
      <!-- 这个el-row为了限制card的大小, 使其占中间位置 -->
      <el-col :offset="2" :span="20">
        <el-card class="box-card">
          <el-row>
            <el-col :offset="1" :span="3">
              <div class="block">
                <el-image
                  src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
                />
              </div>
            </el-col>
            <el-col :offset="1" :span="19">
              <UserInformation />
            </el-col>
          </el-row>
          <el-divider
            content-position="right"
          >该用户未填写个性签名</el-divider>
          <h4>个人简介</h4>
          <el-row>
            <el-col :span="23">
              <p>
                何德彪，男，武汉大学国家网络安全学院教授、博士生导师；全球高被引科学家(2019,
                2020);获得教育部自然科学奖一等奖;获得国际知名期刊IEEE Systems
                Journal、IET Information Security
                等最佳论文奖;担任湖北省商用密码协会会长、武汉大学密码学研究所所长、中国密码学会区块链专委会副主任、中国计算机学会区块链专业委员会常务委员等学术职务；担任Frontiers
                of Computer Science、IET Wireless Sensor Systems 等5
                个国知名期刊的编委;在IEEE TIFS,IEEE TDSC,USENIX Security
                等国内外著名期刊/会议上发表学术论文100
                余篇,论文谷歌学术引用次数超过8000
                次。主持国家自然科学基金面上项目、自然科学基金重点项目课题、国家重点研发计划子课题等30
                余项科研项目。
              </p>
            </el-col>
          </el-row>
        </el-card>
        <br>
        <div style="text-align:center">
          <el-button type="primary">修改信息</el-button>
        </div>

      </el-col>
    </el-row>

  </div>
</template>

<script>
import UserInformation from './components/UserInformation.vue'

export default {
  name: 'WriterProfile',
  components: {
    UserInformation
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

