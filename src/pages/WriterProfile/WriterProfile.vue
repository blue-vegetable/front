<template>
  <div id="app">
    <NavBar />
    <br>
    <el-row>
      <!-- 这个el-row为了限制card的大小, 使其占中间位置 -->
      <el-col :offset="4" :span="16">
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
              <el-descriptions title="用户信息">
                <el-descriptions-item label="用户名">{{ user.name }}</el-descriptions-item>
                <el-descriptions-item label="手机号">{{ user.tele }}</el-descriptions-item>
                <el-descriptions-item label="居住地">{{ user.city }}</el-descriptions-item>
                <el-descriptions-item label="备注">
                  <el-tag size="small">{{ user.city }}</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="联系地址">{{ user.address }}</el-descriptions-item>
              </el-descriptions><UserInformation />
            </el-col>
          </el-row>
          <el-divider
            content-position="right"
          >该用户未填写个性签名</el-divider>
          <h4>个人简介</h4>
          <el-row>
            <el-col :span="23">
              <p>{{ user.introduction }}</p>
            </el-col>
          </el-row>
          <h4>学术论文</h4>
          <el-divider content-position="right">
            <el-link
              href="https://element.eleme.io"
              target="_blank"
            >更多论文</el-link></el-divider>
          <el-table
            :data="tableData"
            style="width: 100%"
          >
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="论文标题">
                    <span>{{ props.row.title }}</span>
                  </el-form-item>
                  <el-form-item label="论文作者">
                    <span>{{ props.row.writers }}</span>
                  </el-form-item>
                  <el-form-item label="论文下载量">
                    <span>{{ props.row.downloads }}</span>
                  </el-form-item>
                  <el-form-item label="上传时间">
                    <span>{{ props.row.uploadTime }}</span>
                  </el-form-item>
                  <el-form-item label="论文详情页">
                    <!-- <a  href={{props.row.detail}}>论文详情点击此</a>   -->
                    <el-link :src="props.row.detail">详情点击此</el-link>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <!--这里需要进行一个el-table-column的列的长度的分配 -->
            <el-table-column
              label="论文标题"
              prop="title"
              :min-width="60"
            />
            <el-table-column
              label="论文作者"
              prop="writers"
              :min-width="15"
            />
            <el-table-column
              label="被引量"
              prop="downloads"
              :min-width="15"
            />
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
  p {
  font-family: "Helvetica Neue";
  text-align: justify;
  color:rgb(94, 91, 91)
}
</style>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'WriterProfile',
  components: {
    NavBar
  },
  data() {
    return {
      user: {
        id: '123123',
        name: '12321',
        tele: '3123213',
        address: '12312',
        city: '123123',
        introduction: '何德彪，男，武汉大学国家网络安全学院教授、博士生导师；全球高被引科学家(2019,\
                2020);获得教育部自然科学奖一等奖;获得国际知名期刊IEEE Systems\
                Journal、IET Information Security\
                等最佳论文奖;担任湖北省商用密码协会会长、武汉大学密码学研究所所长、中国密码学会区块链专委会副主任、中国计算机学会区块链专业委员会常务委员等学术职务；担任Frontiers\
                of Computer Science、IET Wireless Sensor Systems 等5\
                个国知名期刊的编委;在IEEE TIFS,IEEE TDSC,USENIX Security\
                等国内外著名期刊/会议上发表学术论文100\
                余篇,论文谷歌学术引用次数超过8000\
                次。主持国家自然科学基金面上项目、自然科学基金重点项目课题、国家重点研发计划子课题等30\
                余项科研项目。'
      },
      tableData: [{
        title: 'An efficient identity-based conditional privacy-preserving authentication scheme for vehicular ad hoc networks',
        writers: 'Debiao He',
        downloads: '100',
        uploadTime: '2022-3-21',
        detail: 'http://www.baidu.com/'
      }, {
        title: 'A survey on privacy protection in blockchain system',
        writers: 'Debiao He',
        downloads: '100',
        uploadTime: '2022-3-21',
        detail: 'http://www.baidu.com/'
      }, {
        title: 'Robust biometrics-based authentication scheme for multiserver environment',
        writers: 'Debiao He',
        downloads: '100',
        uploadTime: '2022-3-21',
        detail: 'http://www.baidu.com/'
      }, {
        title: 'An analysis of RFID authentication schemes for internet of things in healthcare environment using elliptic curve cryptography',
        writers: 'Debiao He',
        downloads: '100',
        uploadTime: '2022-3-21',
        detail: 'http://www.baidu.com/'
      }, {
        title: 'An efficient identity-based conditional privacy-preserving authentication scheme for vehicular ad hoc networks',
        writers: 'Debiao He',
        downloads: '100',
        uploadTime: '2022-3-21',
        detail: 'http://www.baidu.com/'
      }, {
        title: 'An efficient identity-based conditional privacy-preserving authentication scheme for vehicular ad hoc networks',
        writers: 'Debiao He',
        downloads: '100',
        uploadTime: '2022-3-21',
        detail: 'http://www.baidu.com/'
      }, {
        title: 'An efficient identity-based conditional privacy-preserving authentication scheme for vehicular ad hoc networks',
        writers: 'Debiao He',
        downloads: '100',
        uploadTime: '2022-3-21',
        detail: 'http://www.baidu.com/'
      }]
    }
  }
}

</script>

