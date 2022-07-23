<template>
  <el-card style="width:90%;text-align:center;margin:auto;margin-top:50px">
    <el-table
      :data="tableData"
      border
      show-summary
      style="width: 100%"
    >
      <el-table-column
        prop="id"
        label="论文HASH"
      />
      <el-table-column
        prop="name"
        label="论文名"
        width="100px"
      />
      <el-table-column
        prop="download"
        sortable
        label="下载量"
      />
      <el-table-column
        prop="like"
        sortable
        label="点赞量"
      />
      <el-table-column
        prop="star"
        sortable
        label="引用量"
      /> <el-table-column
        prop="comment"
        sortable
        label="评论数"
      /><el-table-column
        prop="rate"
        sortable
        label="评论得分"
      />
      <el-table-column
        prop="profit"
        sortable
        label="收益"
      />
    </el-table>

  </el-card>
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
  width: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: '6273ab25932f68759cd78197124256',
          name: '论文名古希腊医学与先秦两汉时期中医学的洗浴疗法比较',
          download: '12',
          like: '7',
          star: '1',
          comment: '5',
          rate: '9',
          profit: '127'
        }, {
          id: '129871226273ab4d932f68759cd78198',
          name: '论文名从现代医学与中医学角度认知医护协作的价值',
          download: '7',
          like: '3',
          star: '0',
          comment: '4',
          rate: '8',
          profit: '123'
        }, {
          id: '6273ac33932f68759cd7819912987122',
          name: 'The Current Situation of the App_..._ing Traditional Chinese Medicine',
          download: '9',
          like: '3',
          star: '0',
          comment: '0',
          rate: '8',
          profit: '123'
        }, {
          id: '6273ac64932f68759cd7819a12987122',
          name: '论文名Research on the Teaching Reform _..._ of Traditional Chinese Medicine',
          download: '15',
          like: '7',
          star: '2',
          comment: '3',
          rate: '9',
          profit: '123'
        }
      ]
    }
  }
}
</script>
