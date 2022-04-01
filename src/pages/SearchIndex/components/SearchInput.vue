<template>
  <div>
    <el-input
      placeholder="请输入内容"
      v-model="input"
      class="input-with-select"
    >
      <el-select v-model="select" slot="prepend">
        <el-option label="论文名" value="1"></el-option>
        <el-option label="作者名" value="2"></el-option>
        <el-option label="日期" value="3"></el-option>
      </el-select>
      <el-button
        @click="searchClick(select,input)"
        slot="append"
        icon="el-icon-search"
        class="btn"
        >搜索</el-button
      >
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
  name: "SearchInput",
  methods: {
    searchClick(select,input) {
      this.$router.push({
        name :"searchResult",
        params:{
          type: select,
          input:input,
          id:1
        }
      })
      console.log(this.$route.params.id)
      
      if(this.$route.path != '/searchIndex'){
        // console.log("here into it ")
        // this.$router.go(0)
      }
    },
  },
  data() {
    return {
      input: "",
      select: "1",
    };
  },
};
</script>