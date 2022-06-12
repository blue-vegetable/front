<template>
  <el-card style="width:70%;text-align:center;margin:auto;margin-top:50px">
      <p> 尊敬的用户，自注册以来，您一共上传论文共6篇<br>
           总下载量共
      </p>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="论文HASH">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="论文名">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="下载量">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="点赞量">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="引用量">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="收益">
              <span>{{ props.row.address }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="论文名称" prop="id"> </el-table-column>
      <el-table-column label="下载量" prop="name"> </el-table-column>
      <el-table-column label="引用量" prop="reference"> </el-table-column>
      <el-table-column label="总收益" prop="desc"> </el-table-column>
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
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987125",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987126",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
    };
  },
};
</script>