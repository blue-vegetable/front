<template>
  <el-menu
    mode="horizontal"
    router
    @select="handleSelect"
    text-color="#ffffff"
    background-color="#409eff"
    active-text-color="#ffffff"
  >
    <el-menu-item index="/searchIndex" style="font-weight:bolder">网站首页</el-menu-item>
    <div style="display: flex; justify-content: flex-end">
      <el-menu-item>
        <div>
          <el-input
            placeholder="请输入内容"
            v-model="input3"
            class="input-with-select"
          >
            <el-select v-model="select" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-menu-item>
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
  name: "ResultNavBar",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
