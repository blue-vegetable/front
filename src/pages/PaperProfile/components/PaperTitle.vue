<template>
  <el-page-header @back="goBack" content="详情页面">
  </el-page-header>
</template>

<script>
  export default {
    name:"PaperTitle",
    methods:{
      goBack(){
        this.$router.push('/searchResult')
      }
    }
  }

</script>