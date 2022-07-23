<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column label="举报ID" width="100px" >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.hash }}</span>
      </template>
    </el-table-column>
    <el-table-column label="举报日期" width="110" >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="举报人" width="100" >
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="论文名" width="200">
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.paper.slice(0,10) }}...</span>
      </template>
    </el-table-column>
     <el-table-column label="举报理由" width="200" >  
       <template slot-scope="scope">
        
        <el-popover trigger="hover" placement="top">
          <span style="margin-left: 10px">{{ scope.row.reason}}</span>
          <div slot="reference" class="name-wrapper">
            {{ scope.row.reason.slice(0,10) }}...
          </div>
        </el-popover>
      </template>
    </el-table-column>
     <el-table-column label="附件下载" width="100" >
       <template slot-scope="scope">
        <div v-if="scope.row.attachment==0"> 没有附件</div>
        <div v-if="scope.row.attachment!=0"> <a> {{scope.row.attachment}}个附件</a></div>
      </template>
    </el-table-column>
    <el-table-column label="重复性检测" width="100" >
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.dup }}</span>
      </template>
    </el-table-column>
    <el-table-column label="数字水印" width="50" >
       <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.watermark }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="200" align="center">
      <template slot-scope="scope">
        <el-button type="danger">驳回</el-button>
        <el-button type="primary">通过</el-button>

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
          hash: "1",
          date: "2022-06-04",
          name: "杨研就",
          address: "上海市普陀区金沙江路 1518 弄",
          content: "这篇论文对于区块链在存证电子数据方面的说的很明白，有兴趣了解这块论文的朋友可以从这篇论文入手，里面关于当前区块链和司法的结合的论述也可以借鉴的。",
          paper:"机械设计制造的数字化与智能化发展研究",
          rate:'9.3',
          reason:"该论文与论文机械设计的数字化新发展有较多重复",
          attachment:"2",
          dup:"通过",
          watermark:'无'
        },
        {
          hash: "2",
          date: "2022-06-04",
          name: "刘花火",
          address: "上海市普陀区金沙江路 1517 弄",
          content: "我正好在写一篇区块链和司法审查结合的论文，这篇论文给了我一些提示，建议想了解目前电子数据伪造问题和相应司法实践的朋友可以下载来看一下。",
           paper:"论区块链存证电子数据的优势及司法审查路径",
           rate:'9.8',
           reason:"该论文质量较低，专业性弱",
           attachment:"0",
           dup:"/",
           watermark:"无"
        },
        {
          hash: "3",
          date: "2022-06-04",
          name: "廖角好",
          address: "上海市普陀区金沙江路 1519 弄",
          paper:"钙钛矿太阳能电池电子传输层的研究进展",
          content: "深度好文，推荐阅读",
          rate:'4.9',
          reason:"该上传者并非该论文的原作者，涉嫌论文盗用",
          attachment:"1",
          dup:"未通过",
            watermark:"无"
        },
        {
          hash: "4",
          date: "2022-06-04",
          name: "李既",
          address: "上海市普陀区金沙江路 1516 弄",
          paper:"复合相变材料的制备及其电子器件热控应用研究",
          content:"是一篇对区块链的应用于司法相结合的文章，里面涉及了区块链的原理和司法审查步骤等基础知识，并且对区块链的优点等内容说明较详细，有相关工作的朋友们可以看看",
          rate:'9.5',
          reason:"该论文质量较低",
          attachment:"0",
          dup:"/",
            watermark:"无"
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