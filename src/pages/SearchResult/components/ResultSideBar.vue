<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="时间" name="1">
      2022年<br />
      2021年<br />
      2020年<br />
      2019年<br />
      更早以前<br />
    </el-collapse-item>
    <el-collapse-item title="领域" name="2">
      <div v-for="field in fields" :key="field">
        {{ field }}
      </div>
      更多<br />
    </el-collapse-item>
    <el-collapse-item title="关键词" name="3">
      <div v-for="keyword in keywords" :key="keyword">
        {{ keyword }}
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<style>
.block {
  width: 200px;
}
</style>


<script>
export default {
  name: "ResultSideBar",
  data() {
    return {
      activeNames: ["1", "2", "3"],
      value: null,
      fields: ["农业", "建筑学", "计算机", "社会科学"],
      keywords: ["区块链", "系统安全", "可信计算", "大数据", "云计算"],
    };
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>