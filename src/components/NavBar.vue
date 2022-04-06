<template>
  <div>
    <el-menu
      :default-active="$route.path"
      mode="horizontal"
      router
      @select="handleSelect"
    >
      <!-- text-color=#ffffff
    background-color=#409eff
    active-text-color=#ffffff -->
      <el-menu-item
        index="/searchIndex"
      >网站首页</el-menu-item>

      <div style="display: flex; justify-content: flex-end">
        <el-menu-item index="4">
          <el-badge :value="12" class="item">
            <a style="margin-top:-15px" class="el-icon-message" href="http://www.baidu.com" />
          </el-badge>
        </el-menu-item>
        <el-menu-item index="5">
          <el-dropdown>
            <span style="height:100%">
              个人中心
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="!logOrNot" icon="el-icon-user"><el-button type="text" @click="centerDialogVisible = true">登录</el-button></el-dropdown-item>
              <el-dropdown-item v-if="!logOrNot" icon="el-icon-s-order"><el-button type="text" @click="SignUpDialogVisible = true">注册</el-button></el-dropdown-item>
              <el-dropdown-item v-if="logOrNot" icon="el-icon-s-fold">我的论文</el-dropdown-item>
              <el-dropdown-item v-if="logOrNot" icon="el-icon-message">我的消息</el-dropdown-item>
              <el-dropdown-item v-if="logOrNot" icon="el-icon-cpu">控制台</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-menu-item>
      </div>
    </el-menu>
    <!-- 下面是登录弹窗，为减少组件传参故直接放于此NavBar中 -->
    <el-dialog
      title="登录"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <el-form label-position="right" label-width="60px">
        <el-form-item label="帐号">
          <el-input v-model="userId" type="text" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" type="password" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">登 录</el-button>
      </span>
    </el-dialog>
     <!-- 下面是注册弹窗，为减少组件传参故直接放于此NavBar中 -->
    <el-dialog
      title="注册"
      :visible.sync="SignUpDialogVisible"
      width="30%"
      center
    >
      <el-form label-position="right" label-width="70px">
        <el-form-item label="帐号">
          <el-input v-model="userId" type="text" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password" type="password" />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="password" type="password" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="SignUpDialogVisible= false">取 消</el-button>
        <el-button type="primary" @click="SignUpDialogVisible = false">登 录</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<style>
.item {
  margin-top: 10px;
}
</style>>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      userId: '',
      password: '',
      logOrNot: true,
      centerDialogVisible: false,
      SignUpDialogVisible: false
      // activeIndex: this.$route.path.replace("/", ""),
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
