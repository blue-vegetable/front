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
          <el-dropdown @command="handleDropdown">
            <span style="height:100%">
              个人中心
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item v-if="!logOrNot" command="1" icon="el-icon-user"><el-button type="text" @click="centerDialogVisible = true">登录</el-button></el-dropdown-item>
              <el-dropdown-item v-if="!logOrNot" command="2" icon="el-icon-s-order"><el-button type="text" @click="SignUpDialogVisible = true">注册</el-button></el-dropdown-item>
              <el-dropdown-item v-if="logOrNot" command="3" icon="el-icon-s-fold">我的论文</el-dropdown-item>
              <el-dropdown-item v-if="logOrNot" command="4" icon="el-icon-message">我的消息</el-dropdown-item>
              <el-dropdown-item v-if="logOrNot" command="5" icon="el-icon-cpu">控制台</el-dropdown-item>
              <el-dropdown-item v-if="logOrNot" command="6" icon="el-icon-s-promotion">退出登录</el-dropdown-item>
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
          <el-input v-model="userid_login" type="text" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password_login" type="password" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleLogin">登 录</el-button>
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
          <el-input v-model="userid_signup" type="text" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="password_signup" type="password" />
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="password_again" type="password" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="SignUpDialogVisible= false">取 消</el-button>
        <el-button type="primary" @click="handleRegister">注 册</el-button>
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
import md5 from 'js-md5'
import store from '@/store'

export default {
  name: 'NavBar',
  data() {
    return {
      userid_login: '',
      userid_signup: '',
      password_login: '',
      password_signup: '',
      password_again: '',
      password_md5: '',
      logOrNot: false,
      centerDialogVisible: false,
      SignUpDialogVisible: false
    }
  },
  mounted() { // 在mount时判断用户是否登录
    if (store.getters.role) {
      console.log()
      this.logOrNot = true
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    },
    handleDropdown(type) {
      if (type === '3') { // 我的论文
        this.$router.push('/papers')
      }
      if (type === '4') { // 我的消息
        this.$router.push('/message')
      }
      if (type === '5') { // 控制台
        this.$router.push('/userCenter')
      }
      if (type === '6') { // 退出登录
        store.dispatch('user/logout')
        this.logOrNot = false
        this.$message({
          type: 'success',
          message: `注销成功`
        })
      }
    },
    handleLogin() {
      this.password_md5 = md5(this.password_login)
      this.$store.dispatch('user/login', { 'username': this.userid_login, 'password': this.password_md5 })
      // this.$axios.post('/vue-admin-template/user/login', {
      //   username: this.userid_login,
      //   password: this.password_md5
      // })
        .then(() => {
          this.logOrNot = true
          this.centerDialogVisible = false
          this.$message({
            type: 'success',
            message: `登录成功`
          })
          this.logOrNot = true
        })
        .catch((error) => {
          this.logOrNot = false
          console.log(error)
        })
    },
    handleRegister() {
      this.password_md5 = md5(this.password_signup)
      this.$axios.post('http://localhost:12000/user/register', {
        username: this.userid_signup,
        password: this.password_md5
      })
        .then(function(resp) {
          console.log(resp.data)
        })
        .catch(function(error) {
          console.log(error)
        })
      this.SignUpDialogVisible = false
    } // 至于是否需要完成注册后立刻自动登录，以后再说
  }
}
</script>
