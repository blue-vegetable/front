<template>
  <el-menu
    :default-active="$route.path"
    mode="horizontal"
    router
    @select="handleSelect"
   
  >
   <!-- text-color=#ffffff
    background-color=#409eff
    active-text-color=#ffffff -->
    <el-menu-item index="/searchIndex"
      >网站首页</el-menu-item
    >
    <div style="display: flex; justify-content: flex-end">
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
  name: "NavBar",
  data() {
    return {
      // activeIndex: this.$route.path.replace("/", ""),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  }
};
</script>
