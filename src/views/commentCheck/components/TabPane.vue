<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="评论HASH" width="210" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.commentHash }}</span>
      </template>
    </el-table-column>
    <el-table-column label="审核日期" width="160" align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="审核人" width="130" header-align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.userid}}</span>
      </template>
    </el-table-column>
    <el-table-column label="论文id" width="200" header-align="center">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.paperId}}</span>
      </template>
    </el-table-column>
    <el-table-column label="评论内容" width="400" header-align="center">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>{{ scope.row.comment}}</p>
          <div slot="reference" class="name-wrapper">
            {{ scope.row.comment.slice(0,25) }}...
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="最终审核结果">
      <template slot-scope="scope">
        <i class="el-icon-time" />
        <span style="margin-left: 10px">{{ scope.row.rate }}分</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import store from '@/store'

export default {
  data() {
    return {
      tableData: [
      //   {
      //     hash: '1b67b73f6045e94a51ab5',
      //     date: '2022-06-04',
      //     name: '李小龙，胡陈丽...',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     content: '这篇论文对于区块链在存证电子数据方面的说的很明白，有兴趣了解这块论文的朋友可以从这篇论文入手，里面关于当前区块链和司法的结合的论述也可以借鉴的。',
      //     paper: '论区块链存证电子数据的优势及司法审查路径',
      //     rate: '9.6'
      //   },
      //   {
      //     hash: '6bb22f1a9be94d9291364',
      //     date: '2022-06-04',
      //     name: '李龙龙，胡陈...',
      //     address: '上海市普陀区金沙江路 1517 弄',
      //     content: '我正好在写一篇区块链和司法审查结合的论文，这篇论文给了我一些提示，建议想了解目前电子数据伪造问题和相应司法实践的朋友可以下载来看一下。',
      //     paper: '论区块链存证电子数据的优势及司法审查路径',
      //     rate: '9.8'
      //   },
      //   {
      //     hash: '08b3fada1cc835c79d468',
      //     date: '2022-06-04',
      //     name: '陈法国，胡陈丽...',
      //     address: '上海市普陀区金沙江路 1519 弄',
      //     paper: '论区块链存证电子数据的优势及司法审查路径',
      //     content: '深度好文，推荐阅读',
      //     rate: '2.2'
      //   },
      //   {
      //     hash: 'af43dd83c77630dbad657',
      //     date: '2022-06-04',
      //     name: '李小龙，刘丽华...',
      //     address: '上海市普陀区金沙江路 1516 弄',
      //     paper: '论区块链存证电子数据的优势及司法审查路径',
      //     content: '是一篇对区块链的应用于司法相结合的文章，里面涉及了区块链的原理和司法审查步骤等基础知识，并且对区块链的优点等内容说明较详细，有相关工作的朋友们可以看看',
      //     rate: '9.4'
      //   }
      ]
    }
  },
  mounted() {
    this.getCommentCheck()
  },
  methods: {
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
