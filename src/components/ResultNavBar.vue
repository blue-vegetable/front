<template>
  <el-menu
    mode="horizontal"
    router
    text-color="#ffffff"
    background-color="#409eff"
    active-text-color="#ffffff"
  >
    <el-menu-item index="/searchIndex" style="font-weight:bolder">网站首页</el-menu-item>
    <div style="display: flex; justify-content: flex-end">
      <el-menu-item>
        <div>
          <el-input
            v-model="input"
            placeholder="请输入内容"
            class="input-with-select"
          >
            <el-select slot="prepend" v-model="select" style="width:100px" placeholder="请选择">
              <el-option label="论文名" value="1" />
              <el-option label="作者名" value="2" />
              <el-option label="时间" value="3" />
            </el-select>
            <el-button slot="append" style="background-color:0xffffff" icon="el-icon-search" @click="search(select,input)" />
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
  name: 'ResultNavBar',
  data() {
    return {
      select: '1',
      input: ''
    }
  },
  watch: {
    '$route'(to, from) {
      if (to.path !== from.path && from.path !== '/') {
        this.$router.go()
      }
      // console.log(to.path)
      // console.log(from.path)
    }
  },
  methods: {
    search(select, input) {
      this.$emit('navSearch', { 'select': select, 'input': input })
    }
  }
}
</script>
