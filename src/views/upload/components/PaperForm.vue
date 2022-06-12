<template>
<div style="width:800px">
  <h3 style="text-align:center"> 论文举报 </h3>
  <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
    <el-form-item label="论文ID" prop="id">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
     <el-form-item label="论文名称" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
   
    <el-form-item label="举报理由" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="论文抄袭" name="type" />
        <el-checkbox label="论文盗用" name="type" />
        <el-checkbox label="劣质论文" name="type" />
        <el-checkbox label="其他" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="详细理由" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <div style="text-align: center;margin:auto">
    <paper-upload />
    </div>
    <el-form-item label="相关证据" prop="desc1">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    
    <br>
    <el-form-item>
      <div>
      <el-button type="primary" @click="submitForm('ruleForm')">提交举报</el-button>
      <el-button @click="resetForm('ruleForm')">取消</el-button>
      </div>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import PaperUpload from './PaperUpload.vue'
export default {
   components: {
    PaperUpload
  },
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
        id:{
          required:true,message:'请输入论文ID',trigger:"blur"},
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
