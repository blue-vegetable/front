<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="评论HASH" width="210" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.commentHash }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审核日期" width="160" align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审核人" width="130" header-align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.userId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="论文id" width="200" header-align="center">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.paperId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="评论内容" width="400" header-align="left">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>{{ scope.row.comment }}</p>
            <div slot="reference" class="name-wrapper">
              {{ scope.row.comment.slice(0,25) }}
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            @click="checkVis = true;check(scope.row)"
          >审核</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog
        title="审核评论"
        :visible.sync="checkVis"
        width="50%"
        center
      >
        <el-descriptions title="评论详情" direction="vertical" border>
          <el-descriptions-item label="评论HASH">{{ checkData.commentHash }}</el-descriptions-item>
          <el-descriptions-item label="日期">{{ checkData.date }}</el-descriptions-item>
          <el-descriptions-item label="评论评分">{{ checkData.rate }}</el-descriptions-item>
          <el-descriptions-item label="评论内容" :span="2">{{ checkData.comment }}</el-descriptions-item>
          <el-descriptions-item label="评论人hash">{{ checkData.userId }}</el-descriptions-item>
          <el-descriptions-item label="论文hash">{{ checkData.paperId }}</el-descriptions-item>
        </el-descriptions>
        <br>
        <h3>请在下面输入您的审核结果</h3>
        <el-form>
          <div style="text-align:center">
            <el-rate
              v-model="rate"
              :texts="texts"
              show-text
            />
            <br>
            <el-input
              v-model="input"
              type="textarea"
              placeholder="如需要，您可以在此输入审核理由"
              maxlength="30"
              show-word-limit
            />
            <br>
            <br>
            <el-button type="primary" @click="submitCheckInfo">提交审核 </el-button>
          </div>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      input: '',
      rate: '',
      texts: ['肯定是水军', '几乎是水军', '可能是水军', '是真实评论', '必不是水军'],
      checkVis: false,
      tableData: [],
      checkData: {}
    }
  },
  mounted() {
    this.getCommentCheck()
  },
  methods: {
    submitCheckInfo() {
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios.post('http://106.52.79.36:12000/user/dealComment', { 'rate': this.rate, 'input': this.input, 'commentHash': this.checkData.commentHash })
        .then(
          res => { console.log(res); this.$router.go(0) }

        ).catch(
          error => console.log(error)
        )
    },
    check(res) {
      this.checkData = res
    },
    getCommentCheck() {
      this.$axios.defaults.headers.common['token'] = store.getters.token
      this.$axios.get('http://106.52.79.36:12000/user/allAssignedComment').then(response => {
        this.tableData = response.data
        console.log(response.data)
      }).catch(error => console.log(error))
    },
    handleEdit(index, row) {
    },
    handleDelete(index, row) {
    }
  }
}
</script>
