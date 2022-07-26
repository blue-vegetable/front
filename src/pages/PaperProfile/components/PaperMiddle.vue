<template>
  <div>
    <span class="paperName">
      {{ paper.paperName }} <el-button type="warning" size="mini" plain @click="reportVisible=true">点击举报</el-button>
    </span>
    <br>
    <el-dialog
      title="举报论文"
      :visible.sync="reportVisible"
      width="50%"
      center
    >

      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="论文名">
          <el-input disabled :value="this.paper.paperName" />
        </el-form-item>
        <el-form-item label="论文hash">
          <el-input disabled :value="id" />
        </el-form-item>

        <el-form-item label="举报理由">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="论文抄袭" name="1" />
            <el-checkbox label="论文盗用" name="2" />
            <el-checkbox label="劣质论文" name="3" />
            <el-checkbox label="其他" name="4" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="详细理由">
          <el-input v-model="form.reason" />
        </el-form-item>
        <el-form-item>
          <el-upload
            style="text-align: left"
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
          </el-upload>
        </el-form-item>
        <el-form-item label="其他证据">
          <el-input v-model="form.proof" placeholder="可在此处输入其他证据" />
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="reportVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleReport">提 交</el-button>
      </span>
    </el-dialog>

    <br><br>
    <el-link><router-link class="paperWriter" :to="{ path: '/writerProfile', query: { id: paper.writerId }}">作者：{{ paper.writerName }}</router-link></el-link>
    <br><br>
    <div class="paperAbstract">摘要：{{ paper.summary }}</div>
    <br>

    <br>
    <div class="tag-group">
      <span class="paperKeyword">关键词：</span>
      <el-button v-for="(keyword,index) in paper.keywords" :key="index" :type="types[index%3]" round>{{ keyword }}</el-button>
      <br>
      <br>
    </div>
    <el-row>
      <el-col :offset="0" :span="2">
        <el-badge :value="paper.downloads" class="item">
          <el-button size="small" @click="download">购买</el-button>
        </el-badge>
      </el-col>

      <el-col :offset="3" :span="2">
        <el-badge :value="paper.like" class="item" type="danger">
          <el-button v-if="likeOrNot" size="small" type="danger" @click="like"> 已喜欢 </el-button>
          <el-button v-if="!likeOrNot" size="small" @click="like">喜欢</el-button>
        </el-badge>
      </el-col>

      <el-col :offset="3" :span="2">
        <el-badge :value="paper.star" class="item" type="primary">
          <el-button v-if="starOrNot" size="small" type="primary" @click="star"> 已收藏 </el-button>
          <el-button v-if="!starOrNot" size="small" @click="star">收藏</el-button>
        </el-badge>
      </el-col>
    </el-row>
  </div>
</template>

<style>
.paperName {
  font-size: larger;
}
.paperWriter {
  font-size: larger;
}
.paperAbstract {
  font-size:larger;
  line-height: 22px;
}
.paper{
  font-size: larger;
}
.paperKeyword{
  font-size: larger;
}
</style>

<script>
import store from '@/store'
export default {
  name: 'PaperMiddle',
  data() {
    return {
      form: {
        type: [],
        reason: '',
        proof: ''
      },
      file: '',
      reportVisible: false,
      id: this.$route.query.id,
      paper: '',
      types: ['primary', 'success', 'info', 'danger'],
      likeOrNot: false,
      starOrNot: false
    }
  },
  watch: {
  },

  mounted() {
    this.getPaper()
    if (store.getters.token) {
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios(
        {
          methods: 'GET',
          url: 'http://106.52.79.36:12000/paper/likePaperQuery?paperId=' + this.id,
          timeout: 4000
        })
        .then(response => {
          this.likeOrNot = response.data.data.result === 1
        })
        .catch(error => console.log(error))
      this.$axios.get('http://106.52.79.36:12000/paper/starPaperQuery?paperId=' + this.id)
        .then(response => {
          this.starOrNot = response.data.data.result === 1
        })
        .catch(error => console.log(error))
    }
  },
  methods: {
    handlePreview(file) {
      console.log(file)
      this.file = file
    },
    handleReport() {
      this.submitForm()
    },
    submitForm() {
      const fileController = 'http://106.52.79.36:12000/feedback/add'
      const form = new FormData()
      var a = this.form.type.join(' ')
      form.append('paperId', this.id)
      form.append('writerId', this.paper.writerId)
      form.append('type', a)
      form.append('reason', this.form.reason)
      form.append('evidence', this.file.raw)
      form.append('description', this.form.proof)
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.response.status === '0') {
            this.message({
              type: 'success',
              message: '上传成功'
            })
          }
        }
      }
      xhr.open('post', fileController, true)
      xhr.setRequestHeader('token', store.getters.token)
      xhr.send(form)
    },
    getPaper() {
      this.$axios.get('http://106.52.79.36:12000/paper/getPaper?paperId=' + this.id)
        .then(response => {
          this.paper = response.data
          this.paper.keywords = (this.paper.keywords).split(';')
          if (this.paper.keywords.length === 1) { // 如果是中文引号则还需要额外处理
            this.paper.keywords = this.paper.keywords[0].split('；')
          }
        })
        .catch(error => console.log(error))
    },
    like() {
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios.get('http://106.52.79.36:12000/paper/like?paperId=' + this.id)
        .then(response => {
          if (response.data.code === 3001) {
            this.$message({
              message: '用户未登录',
              type: 'warning'
            })
          } else {
            if (response.data.message === '点赞成功') {
              this.paper.like++
            } else {
              this.paper.like--
            }
            this.$message({
              message: response.data.message,
              type: 'success'
            })
            this.likeOrNot = !this.likeOrNot
          }
        })
        .catch(error => console.log(error))
    },
    star() {
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios.get('http://106.52.79.36:12000/paper/star?paperId=' + this.id)
        .then(response => {
          if (response.data.code === 3001) {
            this.$message({
              message: '用户未登录',
              type: 'warning'
            })
          } else {
            if (response.data.message === '收藏成功') {
              this.paper.star++
            } else {
              this.paper.star--
            }
            this.$message({
              message: response.data.message,
              type: 'success'
            })
            this.starOrNot = !this.starOrNot
          }
        })
        .catch(error => console.log(error))
    },
    download() {
      // this.$axios.defaults.headers.common['token'] = store.getters.token
      if (!store.getters.token) {
        this.$message({
          type: 'warning',
          message: '用户未登录'
        })
        return
      }
      this.$axios({
        methods: 'get',
        url: 'http://106.52.79.36:12000/paper/download?paperId=' + this.id,
        responseType: 'blob',
        // timeout: 4000,
        headers: { token: store.getters.token }
      })
        .then(res => {
          // console.log(res.data)
          var FILE = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }))
          var docUrl = document.createElement('a')
          docUrl.href = FILE
          docUrl.download = this.paper.paperName
          // document.body.appendChild(docUrl)
          docUrl.click()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>
