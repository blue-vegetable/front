<template>
  <el-collapse v-model="activeNames" @change="handleChange">
    <el-collapse-item title="时间" name="1">
      <div v-for="(year,index) in years" :key="index">
        <el-button size="mini" round @click="timeClick(year)">{{ year }}</el-button>
        <br>
      </div>
    </el-collapse-item>
    <el-collapse-item title="领域" name="2">
      <div v-for="(field,index) in fields" :key="index">
        <el-button size="mini" round @click="timeClick">{{ field }}</el-button>
        <br>
      </div>
    </el-collapse-item>
    <el-collapse-item title="关键词" name="3">
      <div v-for="(keyword,index) in keywords" :key="index">
        <el-button size="mini" round @click="timeClick">{{ keyword }}</el-button>
        <br>
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
  name: 'ResultSideBar',
  data() {
    return {
      years: ['2022', '2021', '2020', '更早'],
      activeNames: ['1', '2', '3'],
      value: null,
      fields: ['农业', '建筑学', '计算机', '社会科学'],
      keywords: ['区块链', '系统安全', '可信计算', '大数据', '云计算']
    }
  },
  methods: {
    handleChange(val) {
      console.log(val)
    },
    timeClick(year) {
      this.$emit('timeBySideBar', year)
    }
  }
}
</script>
