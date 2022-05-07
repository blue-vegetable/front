<template>
  <div>
    <el-input
      v-model="input"
      placeholder="请输入内容"
      class="input-with-select"
    >
      <el-select slot="prepend" v-model="select">
        <el-option label="论文名" value="1" />
        <el-option label="作者名" value="2" />
        <el-option label="日期" value="3" />
      </el-select>
      <el-button
        slot="append"
        icon="el-icon-search"
        class="btn"
        @click="searchClick(select,input)"
      >搜索</el-button>
      <!-- <el-button  slot="append" icon="el-icon-search"></el-button> -->
    </el-input>
  </div>
</template>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: rgb(252, 252, 252);
}
.el-input-group__append {
  color: #fff;
  background-color: #409eff;
}
</style>
<script>
export default {
  name: 'SearchInput',
  data() {
    return {
      input: '',
      select: '1'
    }
  },
  methods: {
    searchClick(select, input) {
      this.$router.push({
        name: 'searchResult',
        query: {
          select: select,
          input: input
        }
      })
    }
  }
}
</script>
