<template>
  <div>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
      <el-form-item>
        <div style="text-align: center">
          <el-upload
            class="upload-demo"
            drag
            action="#"
            multiple
            :http-request="submitForm"
            :on-change="handlePreview"
            :auto-upload="false"
          >
            <i class="el-icon-upload" />
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div slot="tip" class="el-upload__tip">只能上传pdf/docx文件，且不超过10M</div>
          </el-upload>
        </div></el-form-item>
      <el-form-item label="论文名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="论文类别" prop="region">
        <el-cascader v-model="ruleForm.region" :options="options" :show-all-levels="false" placeholder="请选择论文类别" />
      </el-form-item>
      <el-form-item label="发表时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker v-model="ruleForm.date1" type="date" placeholder="选择日期" style="width: 100%;" />
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
      <el-form-item label="免费开放" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="是" />
          <el-radio label="否" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="作者" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item label="摘要" prop="desc1">
        <el-input v-model="ruleForm.summary" type="textarea" />
      </el-form-item>
      <el-form-item label="关键词" prop="desc2">
        <el-input v-model="ruleForm.keyword" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      file: '',
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
        desc2: '',
        summary: '',
        keyword: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入论文名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 0 到 20 个字符', trigger: 'blur' }
        ],
        region: [
          { required: false, message: '请选择领域', trigger: 'blur' }
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
          { required: false, message: '请填写摘要', trigger: 'blur' }
        ],
        desc2: [
          { required: false, message: '请填写关键词', trigger: 'blur' }
        ]
      },
      options: [{
        value: '文',
        label: '文',
        children: [{
          value: '文学',
          label: '文学'
        }, {
          value: '艺术',
          label: '艺术'
        }, {
          value: '历史',
          label: '历史'
        }, {
          value: '哲学',
          label: '哲学'
        }, {
          value: '管理',
          label: '管理'
        }, {
          value: '教育',
          label: '教育'
        }]
      }, {
        value: '法',
        label: '法',
        children: [{
          value: '习惯法',
          label: '习惯法'
        }, {
          value: '自然法',
          label: '自然法'
        }, {
          value: '法律思想',
          label: '法律思想'
        }, {
          value: '法经济学',
          label: '法经济学'
        }, {
          value: '法社会学',
          label: '法社会学'
        }, {
          value: '法哲学',
          label: '法哲学'
        }]
      }, {
        value: '理',
        label: '理',
        children: [{
          value: '生物',
          label: '生物'
        }, {
          value: '化学',
          label: '化学'
        }, {
          value: '物理',
          label: '物理'
        }, {
          value: '数学',
          label: '数学'
        }, {
          value: '天文',
          label: '天文'
        }, {
          value: '地球科学',
          label: '地球科学'
        }]
      }, {
        value: '工',
        label: '工',
        children: [{
          value: '计算机',
          label: '计算机'
        }, {
          value: '电子',
          label: '电子'
        }, {
          value: '机械',
          label: '机械'
        }, {
          value: '材料科学',
          label: '材料科学'
        }, {
          value: '水利',
          label: '水利'
        }, {
          value: '建筑',
          label: '建筑'
        }]
      }, {
        value: '农',
        label: '农',
        children: [{
          value: '农业经济',
          label: '农业经济'
        }, {
          value: '农业工程',
          label: '农业工程'
        }, {
          value: '园艺',
          label: '园艺'
        }, {
          value: '畜牧',
          label: '畜牧'
        }, {
          value: '农业基础科学',
          label: '农业基础科学'
        }]
      }, {
        value: '医',
        label: '医',
        children: [{
          value: '中医学',
          label: '中医学'
        }, {
          value: '临床医学',
          label: '临床医学'
        }, {
          value: '基础医学',
          label: '基础医学'
        }, {
          value: '口腔医学',
          label: '口腔医学'
        }]
      }]
    }
  },
  methods: {
    handlePreview(file) {
      this.file = file
    },
    submitForm() {
      // const FileController = 'http://106.52.79.36:12000/paper/upload'
      const FileController = 'http://106.52.79.36:12000/paper/upload'
      const form = new FormData()
      form.append('paperfile', this.file.raw)
      form.append('paperName', this.ruleForm.name)
      form.append('writerName', this.ruleForm.desc)
      form.append('keywords', this.ruleForm.keyword)
      form.append('summary', this.ruleForm.summary)
      form.append('free', this.ruleForm.resource === '是')
      form.append('category', this.ruleForm.region[0])
      form.append('classification', this.ruleForm.region[1])
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.response.status === '0') {
            this.$message({
              type: 'error',
              message: '上传失败'
            })
          } else if (xhr.response.status === '1') {
            this.$message({
              type: 'success',
              message: '上传成功'
            })
          }
        }
      }
      xhr.open('post', FileController, true)
      xhr.setRequestHeader('token', store.getters.token)
      xhr.send(form)

      // this.$refs['ruleForm'].validate((valid) => {
      //   if (valid) {
      //     this.$axios.defaults.headers.common['token'] = store.getters.token
      //     this.$axios.post('http://106.52.79.36:12000/paper/upload', {
      //       paperName: this.ruleForm.name,
      //       writerName: this.ruleForm.desc,
      //       keywords: this.ruleForm.keyword,
      //       summary: this.ruleForm.summary,
      //       free: this.ruleForm.resource === '是',
      //       category: this.ruleForm.region[0],
      //       classification: this.ruleForm.region[1],
      //       paperfile: this.file.raw
      //     })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
