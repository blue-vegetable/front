<template>
  <div id="app">
    <el-row>
      <!-- 这个el-row为了限制card的大小, 使其占中间位置 -->
      <el-card class="box-card">
        <el-row>
          <el-col :span="24">
            <Buzhoutiao />
          </el-col>
        </el-row>
        <br />
      </el-card>
    </el-row>
  </div>
</template>


<script>
import Buzhoutiao from "./components/Buzhoutiao.vue";

export default {
  name: "Registration",
  components: {
    Buzhoutiao
  },
};
</script>

<style>
p {
  font-family: "Helvetica Neue";
  text-align: justify;
  color: rgb(94, 91, 91);
}
</style>

