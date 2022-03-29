<template>
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
</template>

<style>
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
</style>

<script>
export default {
  name: 'PaperTable',
  methods:{
    
  },
  data() {
    return {
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
