<template>
<<<<<<< HEAD
  <div>
    <!--点后弹出弹窗-->
    <el-form :inline="true">
      <el-form-item>
        <el-button @click="showConfirmCodeDialog">发表您的评论</el-button>
      </el-form-item>
    </el-form>
    <!--弹出的弹窗内容-->
    <el-dialog title="提示" :visible.sync="dialogVisible" center width="20%">
      <div style="display: flex;flex-direction: column;align-items: center;justify-content: center;">
        <el-form :inline="true">
          <el-form-item>
            <el-input v-model="secureCode" placeholder="请输入评论" clearable></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="block">
  <span class="demonstration">请选择评分</span>
  <el-rate
    v-model="value2"
    :colors="colors">
  </el-rate>
</div>
=======

  <el-input
    v-model="textarea"
    type="textarea"
    placeholder="请输入内容"
    maxlength="100"
    show-word-limit
  />
>>>>>>> e4ea0b7c47c840dbe1b7434eee36f8463172e6d2

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="open">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //弹出输入框
        dialogVisible: false,
        secureCode: "",
        value2:null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']

      }
    },
    methods: {
      //弹窗输入对话框
      showConfirmCodeDialog() {
        this.dialogVisible = true;//显示弹窗
      },
      open() {
        this.dialogVisible = false;
        this.$message({
            type: "success",
            message: "你的评论是: "+this.secureCode+"  你的评分是: "+this.value2,
          });
      },

    }
  }
</script>
