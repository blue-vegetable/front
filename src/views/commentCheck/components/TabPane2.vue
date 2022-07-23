<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="评论HASH" width="210" align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.hash }}</span>
      </template>
    </el-table-column>
    <el-table-column label="评论日期" width="160" align="center">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="评论人" width="130" align="center">
       <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="论文名" width="200" align="center">
       <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.paper }}</span>
      </template>
    </el-table-column>
    <el-table-column label="评论内容" width="400" header-align="center">
       <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>{{scope.row.content}}</p>
          <div slot="reference" class="name-wrapper">
            {{ scope.row.content }}
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" type="primary"
          >审核</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          hash: "1b67b73f6045e94a51ab5",
          date: "2022-06-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          content: "这篇论文对于区块链在存证电子数据方面的说的很明白，有兴趣了解这块论文的朋友可以从这篇论文入手，里面关于当前区块链和司法的结合的论述也可以借鉴的。",
          paper:"论区块链存证电子数据的优势及司法审查路径"
        },
        {
          hash: "6bb22f1a9be94d9291364",
          date: "2022-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          content: "我正好在写一篇区块链和司法审查结合的论文，这篇论文给了我一些提示，建议想了解目前电子数据伪造问题和相应司法实践的朋友可以下载来看一下。",
           paper:"论区块链存证电子数据的优势及司法审查路径"
        },
        {
          hash: "08b3fada1cc835c79d468",
          date: "2022-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          paper:"论区块链存证电子数据的优势及司法审查路径",
          content: "深度好文，推荐阅读",
        },
        {
          hash: "af43dd83c77630dbad657",
          date: "2022-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          paper:"论区块链存证电子数据的优势及司法审查路径",
          content:"是一篇对区块链的应用于司法相结合的文章，里面涉及了区块链的原理和司法审查步骤等基础知识，并且对区块链的优点等内容说明较详细，有相关工作的朋友们可以看看"
        },
      ],
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>