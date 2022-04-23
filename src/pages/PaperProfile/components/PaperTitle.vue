<template>
  <el-page-header content="详情页面" @back="goBack" />
</template>

<script>
export default {
  name: 'PaperTitle',
  methods: {
    goBack() {
      this.$router.push('/searchResult')
    }
  }
}

</script>
