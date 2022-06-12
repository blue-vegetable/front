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
        <el-menu-item index="dashboard">
          <el-badge v-if="logOrNot" :value="1" class="item">
            <el-dropdown @command="handleDropdown">
            <i style="margin-top:-15px" class="el-icon-message" />
            <el-dropdown-menu slot="dropdown">
              <!-- <el-dropdown-item> 有用户下载了您的论文 <span style="color:blue">《钙钛矿太阳能电池电子传输层的研究进展》</span> <span style="color:red">35</span> 代币已转入您的账户 <el-link type="primary">点击查看详细信息</el-link></el-dropdown-item>
               <el-dropdown-item> 有用户下载了您的论文 <span style="color:blue">《钙钛矿太阳能电池电子传输层的研究进展》</span> <span style="color:red">35</span> 代币已转入您的账户 <el-link type="primary">点击查看详细信息</el-link></el-dropdown-item>
               <el-dropdown-item> 有用户下载了您的论文 <span style="color:blue">《复合相变材料的制备及其电子器件热控应用研究》</span> <span style="color:red">20</span> 代币已转入您的账户 <el-link type="primary">点击查看详细信息</el-link></el-dropdown-item> -->
            <el-dropdown-item> 您提交的对论文<span style="color:blue"> 《机械设计制造的数字化与智能化发展研究》</span>的 <el-tag>论文抄袭</el-tag> 举报未通过, 管理员驳回了您的举报请求。<br> 点击查看详情</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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
    <!-- <el-dialog
      title="通知详情"
      :visible.sync="centerDialogVisible"
      width="70%"
      center
    >
     <el-descriptions direction="vertical" :column="4" border>
  <el-descriptions-item label="论文名" :span=2>钙钛矿太阳能电池电子传输层的研究进展</el-descriptions-item>
  <el-descriptions-item label="下载人">李丽</el-descriptions-item>
  <el-descriptions-item label="下载时间" >2022-06-04 23:56</el-descriptions-item>
  <el-descriptions-item label="本次收益">35 代币</el-descriptions-item>
  <el-descriptions-item label="当前代币余额">
    <el-tag size="small">105 代币</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="当前点赞数">2</el-descriptions-item>
  <el-descriptions-item label="当前下载量">3</el-descriptions-item>
  <el-descriptions-item label="当前评论得分">7.9分</el-descriptions-item>
  
</el-descriptions>
    </el-dialog> -->
    <!-- 下面是注册弹窗，为减少组件传参故直接放于此NavBar中 -->
    <el-dialog
      title="注册"
      :visible.sync="SignUpDialogVisible"
      width="70%"
      center
    >
      <el-row>
        <el-col :offset="4" :span="16">
          <div class="stepContent">
            <el-col :offset="0" :span="24">
              <el-steps
                :active="stepIndex - 1"
                finish-status="success"
                align-center="true"
                style="width: 100%"
              >
                <el-step
                  v-for="item in stepData"
                  :key="item.title"
                  :title="item.title"
                />
              </el-steps>
            </el-col>
            <br>
            <br>
            <br>
            <el-form
              ref="ruleForm"
              :model="ruleForm"
              :rules="rules"
              label-width="100px"
              class="demo-ruleForm"
            >
              <br>
              <div v-show="stepIndex == 1">
                <el-form-item label="账号名" prop="name">
                  <el-input v-model="ruleForm.name" required="required" prefix-icon="el-icon-user-solid" />
                </el-form-item>
                <el-form-item label="密码" prop="pwd1">
                  <el-input v-model="ruleForm.pwd1" type="password" prefix-icon="el-icon-lock" />
                </el-form-item>
                <el-form-item label="确认密码" prop="pwd2">
                  <el-input v-model="ruleForm.pwd2" type="password" prefix-icon="el-icon-lock" />
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="ruleForm.email" prefix-icon="el-icon-message" />
                </el-form-item>
                <el-form-item label="电话号码" prop="telephone">
                  <el-input v-model="ruleForm.telephone" prefix-icon="el-icon-mobile-phone" />
                </el-form-item>
              </div>
              <div v-show="stepIndex == 2">
                <br>
                <h>请选择您擅长的领域:</h>
                <br>
                <br>
                <el-row>
                  <el-checkbox-group v-model="checkList1">
                    <el-col :offset="0" :span="2">
                      <el-button type="primary">文</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="文学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="艺术"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="哲学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="历史"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="管理"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="教育"
                        size="small"
                      />
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br>
                <el-row>
                  <el-checkbox-group v-model="checkList2">
                    <el-col :offset="0" :span="2">
                      <el-button>法</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="习惯法"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="自然法"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法律思想"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法经济学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法社会学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法哲学"
                        size="small"
                      />
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br>
                <el-row>
                  <el-checkbox-group v-model="checkList3">
                    <el-col :offset="0" :span="2">
                      <el-button type="success">理</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="生物"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="化学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="物理"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="数学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="天文"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="地球科学"
                        size="small"
                      />
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br>
                <el-row>
                  <el-checkbox-group v-model="checkList4">
                    <el-col :offset="0" :span="2">
                      <el-button type="info">工</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="计算机"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="电子"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="机械"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="材料科学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="水利"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="建筑"
                        size="small"
                      />
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br>
                <el-row>
                  <el-checkbox-group v-model="checkList5">
                    <el-col :offset="0" :span="2">
                      <el-button type="warning">农</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="农业经济"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="农业工程"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="园艺"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="畜牧"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="农业基础科学"
                        size="small"
                      />
                    </el-col>

                  </el-checkbox-group>
                </el-row>
                <br>
                <el-row>
                  <el-checkbox-group v-model="checkList6">
                    <el-col :offset="0" :span="2">
                      <el-button type="danger">医</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="中医学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="临床医学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="基础医学"
                        size="small"
                      />
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="口腔医学"
                        size="small"
                      />
                    </el-col>

                  </el-checkbox-group>
                </el-row>
                <br>
                <br>
              </div>
              <div v-show="stepIndex == 3">
                <h>恭喜您注册成功！</h>

              </div>
            </el-form>
          </div>
          <br>
          <br>
          <div>
            <el-button
              v-if="stepIndex > 1"
              @click="skipTo('pre')"
            >上一步</el-button>
            <el-button
              v-if="stepIndex < 3"
              @click="skipTo('next')"
            >下一步</el-button>
            <el-button v-if="stepIndex > 2" @click="handleRegister">完成</el-button>
          </div>
        </el-col>
      </el-row>
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
    var validatePwd2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pwd1) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      checkList1: [],
      checkList2: [],
      checkList3: [],
      checkList4: [],
      checkList5: [],
      checkList6: [],

      stepData: [{ title: '步骤一' }, { title: '步骤二' }, { title: '完成' }],
      stepIndex: 1,
      ruleForm: {
        name: '',
        pwd1: '',
        pwd2: '',
        email: '',
        telephone: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pwd1: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        pwd2: [{ required: true, validator: validatePwd2, message: '两次输入密码不一致', trigger: 'blur' }],
        email: [{ required: false, message: '请输入邮箱', trigger: 'blur' }],
        telephone: [
          { required: false, message: '请输入电话', trigger: 'blur' }
        ]
      },
      userid_login: '',
      password_login: '',
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
        .then((res) => {
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
      console.log('register here')
      this.password_md5 = md5(this.ruleForm.pwd1)
      this.$axios.post('http://124.220.30.8:12000/user/register', {
        username: this.ruleForm.name,
        password: this.ruleForm.pwd1,
        classification: [this.checkList1.join(' '), this.checkList2.join(), this.checkList3.join(' '), this.checkList4.join(' '), this.checkList5.join(' '), this.checkList6.join(' ')]
      })
        .then((response) => {
          this.$message({
            type: 'success',
            message: '注册成功'
          })
          this.SignUpDialogVisible = false
        })
        .catch((error) => {
          this.logOrNot = false
          console.log(error)
        })
    }, // 至于是否需要完成注册后立刻自动登录，以后再说
    skipTo(type) {
      if (type === 'pre') {
        if (this.stepIndex === 1) return
        this.stepIndex--
      } else if (type === 'next') {
        this.stepIndex++
      }
    }
  }
}
</script>

