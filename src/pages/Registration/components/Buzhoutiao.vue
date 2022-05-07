<template>
  <el-row>
    <el-col :offset="6" :span="16">
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
                ></el-step>
              </el-steps>
            </el-col>
            <br />
            <br />
               <br />
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
            <br>
              <div v-show="stepIndex == 1">
                <el-form-item label="账号名" prop="name">
                  <el-input required="required" v-model="ruleForm.name"  prefix-icon="el-icon-user-solid"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pwd1">
                  <el-input type="password" v-model="ruleForm.pwd1" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="pwd2">
                  <el-input type="password" v-model="ruleForm.pwd2" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="ruleForm.email" prefix-icon="el-icon-message"></el-input>
                </el-form-item>
                <el-form-item label="电话号码" prop="telephone">
                  <el-input v-model="ruleForm.telephone" prefix-icon="el-icon-mobile-phone"></el-input>
                </el-form-item>
              </div>
              <div v-show="stepIndex == 2">
                <br>
                <h>请选择您擅长的领域:</h>
                <br />
                <br />
                <el-row>
                  <el-checkbox-group v-model="checkList">
                    <el-col :offset="0" :span="2">
                      <el-button type="primary">文</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="文学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="艺术"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="哲学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="历史"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="管理"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="教育"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br />
                <el-row>
                   <el-checkbox-group v-model="checkList">
                    <el-col :offset="0" :span="2">
                      <el-button>法</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="习惯法"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="自然法"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法律思想"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法经济学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法社会学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="法哲学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br />
                <el-row>
                  <el-checkbox-group v-model="checkList">
                    <el-col :offset="0" :span="2">
                      <el-button type="success">理</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="生物"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="化学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="物理"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="数学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="天文"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="地球科学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br />
                <el-row>
                   <el-checkbox-group v-model="checkList">
                    <el-col :offset="0" :span="2">
                      <el-button type="info">工</el-button>
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="计算机"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="电子"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="机械"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="3">
                      <el-checkbox-button
                        label="材料科学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="水利"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="建筑"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                  </el-checkbox-group>
                </el-row>
                <br />
                <el-row>
                    <el-checkbox-group v-model="checkList">
                    <el-col :offset="0" :span="2">
                      <el-button type="warning">农</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="农业经济"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="农业工程"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="园艺"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="畜牧"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="农业基础科学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>

                  </el-checkbox-group>
                </el-row>
                <br />
                <el-row>
                  <el-checkbox-group v-model="checkList">
                    <el-col :offset="0" :span="2">
                      <el-button type="danger">医</el-button>
                    </el-col>
                    <el-col :offset="1" :span="2">
                      <el-checkbox-button
                        label="中医学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="临床医学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="基础医学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>
                    <el-col :offset="2" :span="2">
                      <el-checkbox-button
                        label="口腔医学"
                        size="small"
                      ></el-checkbox-button>
                    </el-col>

                  </el-checkbox-group>
                </el-row>
                <br />
                <br />
              </div>
              <div v-show="stepIndex == 3">
                <h>恭喜您注册成功！</h>

              </div>
            </el-form>
          </div>
             <br>
                <br>
          <div>
            <el-button @click="skipTo('pre')" v-if="stepIndex > 1"
              >上一步</el-button
            >
            <el-button @click="skipTo('next')" v-if="stepIndex < 3"
              >下一步</el-button
            >
            <el-button v-if="stepIndex > 2">完成</el-button>
          </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "",
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
      checkList: [ ],
      stepData: [{ title: "步骤一" }, { title: "步骤二" }, { title: "完成" }],
      stepIndex: 1,
      ruleForm: {
        name: "",
        pwd1: "",
        pwd2: "",
        email: "",
        telephone: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        pwd1: [{ required: true, message: "请输入密码", trigger: "blur" }],
        pwd2: [{ required: true,validator: validatePwd2, message: "两次输入密码不一致", trigger: "blur" }],
        email: [{ required: false, message: "请输入邮箱", trigger: "blur" }],
        telephone: [
          { required: false, message: "请输入电话", trigger: "blur" },
        ],
      },
    };
  },

  methods: {
    skipTo(type) {
      if (type == "pre") {
        if (this.stepIndex == 1) return;
        this.stepIndex--;
      } else if (type == "next") {
        this.stepIndex++;
      }
    },
  },
  mounted() {
    this.test();
    var a = [
      { id: "1", item: "苹果" },
      { id: "1", item: "苹果" },
      { id: "1", item: "果" },
      { id: "1", item: "1" },
    ];
    if (!this.isSomeEqual(a, "item")) {
      console.log("重复");
    }
  },
};
</script>



