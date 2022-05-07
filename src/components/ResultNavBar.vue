<template>
  <div>
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
          <a class="el-icon-message" />
        </el-menu-item>
        <el-menu-item index="5">
          <el-dropdown @command="handleDropdown">
            <span style="height:100%; color:white;font-weight: bold">
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

<script>
import store from '@/store'
import md5 from 'js-md5'
export default {
  name: 'ResultNavBar',
  data() {
    return {
      select: '1',
      input: '',
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
  watch: {
    // '$route'(to, from) {
    //   if (to.path !== from.path && from.path !== '/') {
    //     this.$router.go()
    //   }
    // console.log(to.path)
    // console.log(from.path)
    // }
  },
  mounted() { // 在mount时判断用户是否登录
    if (store.getters.role) {
      console.log()
      this.logOrNot = true
    }
  },
  methods: {
    search(select, input) {
      console.log(select, input)
      this.$emit('navSearch', { 'select': select, 'input': input })
    },
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
        this.$router.push('/')
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
