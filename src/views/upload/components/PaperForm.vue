<template>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
    <el-form-item label="论文名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="论文类别" prop="region">
      <el-cascader :options="options" :show-all-levels="false" :v-model="ruleForm.region" :placeholder="请选择活动区域" />
    </el-form-item>
    <el-form-item label="发表时间" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-form-item>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker v-model="ruleForm.date2" placeholder="选择时间" style="width: 100%;" />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="论文来源" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="期刊" name="type" />
        <el-checkbox label="会议" name="type" />
        <el-checkbox label="杂志" name="type" />
        <el-checkbox label="学位论文" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="作者类别" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="单作者" />
        <el-radio label="多作者" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="作者" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="摘要" prop="desc1">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item label="关键词" prop="desc2">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        desc1: '',
        desc2: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入论文名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 0 到 20 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请选择论文来源', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择作者类别', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写作者', trigger: 'blur' }
        ],
        desc1: [
          { required: true, message: '请填写摘要', trigger: 'blur' }
        ],
        desc2: [
          { required: true, message: '请填写关键词', trigger: 'blur' }
        ]
      },
      options: [{
        value: 'wen',
        label: '文',
        children: [{
          value: 'wenxue',
          label: '文学'
        }, {
          value: 'yishu',
          label: '艺术'
        }, {
          value: 'lishi',
          label: '历史'
        }, {
          value: 'zhexue',
          label: '哲学'
        }, {
          value: 'guanli',
          label: '管理'
        }, {
          value: 'jiaoyu',
          label: '教育'
        }]
      }, {
        value: 'fa',
        label: '法',
        children: [{
          value: 'xgf',
          label: '习惯法'
        }, {
          value: 'zgf',
          label: '自然法'
        }, {
          value: 'flsx',
          label: '法律思想'
        }, {
          value: 'fjjx',
          label: '法经济学'
        }, {
          value: 'fshx',
          label: '法社会学'
        }, {
          value: 'fzx',
          label: '法哲学'
        }]
      }, {
        value: 'li',
        label: '理',
        children: [{
          value: 'sw',
          label: '生物'
        }, {
          value: 'hx',
          label: '化学'
        }, {
          value: 'wl',
          label: '物理'
        }, {
          value: 'sx',
          label: '数学'
        }, {
          value: 'tw',
          label: '天文'
        }, {
          value: 'dqkx',
          label: '地球科学'
        }]
      }, {
        value: 'gong',
        label: '工',
        children: [{
          value: 'jxj',
          label: '计算机'
        }, {
          value: 'dz',
          label: '电子'
        }, {
          value: 'jx',
          label: '机械'
        }, {
          value: 'clkx',
          label: '材料科学'
        }, {
          value: 'sl',
          label: '水利'
        }, {
          value: 'jz',
          label: '建筑'
        }]
      }, {
        value: 'nong',
        label: '农',
        children: [{
          value: 'nyjj',
          label: '农业经济'
        }, {
          value: 'nygc',
          label: '农业工程'
        }, {
          value: 'yy',
          label: '园艺'
        }, {
          value: 'xm',
          label: '畜牧'
        }, {
          value: 'nyjckx',
          label: '农业基础科学'
        }]
      }, {
        value: 'yi',
        label: '医',
        children: [{
          value: 'zyx',
          label: '中医学'
        }, {
          value: 'lcyx',
          label: '临床医学'
        }, {
          value: 'jcyx',
          label: '基础医学'
        }, {
          value: 'kqyx',
          label: '口腔医学'
        }]
      }]
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
