<template>
  <el-menu :default-active="activeIndex" mode="horizontal" router @select="handleSelect">
    <el-menu-item index="searchIndex"><router-link to="/searchIndex">网站首页</router-link></el-menu-item>
    <el-menu-item index="writerProfile"><router-link to="/writerProfile">个人中心</router-link></el-menu-item>
    <!-- <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu> -->
    <div style=" display: flex; justify-content: flex-end; ">
      <el-menu-item index="4">
        <a class="el-icon-message" href="http://www.baidu.com" />
      </el-menu-item>
      <el-menu-item index="5">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      activeIndex: this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
