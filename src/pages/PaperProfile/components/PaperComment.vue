<template>
  <div>
    <el-input placeholder="期待您的精彩评论" type="textarea" :rows="4"> </el-input>
    <br>
    <br>
    <div style="text-align:right"> <el-button>发表您的评论</el-button></div>
      <!-- <br> -->

  </div>
</template>   

<script>
export default {
  data() {
    return {
      // 弹出输入框
      dialogVisible: false,
      secureCode: "",
      value2: null,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
    };
  },
  methods: {
    // 弹窗输入对话框
    showConfirmCodeDialog() {
      this.dialogVisible = true; // 显示弹窗
    },
    open() {
      this.dialogVisible = false;
      this.$message({
        type: "success",
        message:
          "你的评论是: " + this.secureCode + "  你的评分是: " + this.value2,
      });
    },
  },
};
</script>
