<template>
  <div>
    <el-row :gutter="70">
      <el-col :offset="1" :span="16">
        <br>
        <h3 style="text-align: center;">用户查询</h3>
        <br>

        <el-input
          v-model="input"
          placeholder="请输入作者名或作者ID"
          class="input-with-select"
        >
          <el-select slot="prepend" v-model="select" style="width:100px" placeholder="请选择">
            <el-option label="作者名" value="1" />
            <el-option label="作者ID" value="2" />
          </el-select>
          <el-button slot="append" style="background-color:0xffffff" icon="el-icon-search" @click="search(select,input)" />
        </el-input>
        <br>
        <br>
        <br>
        <el-table
          :data="tableData"
          stripe
          :header-cell-style="{'text-align':'center'}"
          :cell-style="{'text-align':'center'}"
          style="width: 100%;text-align:center"
        >
          <el-table-column
            prop="id"
            label="用户ID"
            width="80"
          />
          <el-table-column
            prop="name"
            label="用户名"
            width="80"
          />
          <el-table-column
            prop="time"
            label="注册时间"
            width="100"
          />
          <el-table-column
            prop="role"
            label="身份"
            width="60"
          />
          <el-table-column
            prop="upload"
            label="上传论文"
            width="80"
          />
          <el-table-column
            prop="feedback"
            label="举报论文"
            width="80"
          />
          <el-table-column
            prop="pay"
            label="购买论文"
            width="80"
          />
          <el-table-column
            label="操作"
          ><el-button type="primary">修改</el-button><el-button type="success">私信</el-button><el-button type="danger">封号</el-button></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="7">
        <el-card class="box-card" style="float:right">
          <el-image
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
          /><br><br>
          <div v-for="(infor,index) in information" :key="index" class="text item">
            {{ index }}{{ ' : ' + infor }}
            <br>
          </div>

          <el-tabs v-model="activeName" style="margin-top:15px;">
            <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key" />
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<style scoped>
 .text {
    font-size: 16px;
  }

  .item {
    margin-bottom: 20px;
  }
</style>

<script>
export default {
  data() {
    return {
      input: '',
      select: '1',
      tableData: [
        {
          id: '123',
          name: '刘文豪',
          time: '2020',
          role: 'user',
          upload: '3篇',
          feedback: '0篇',
          pay: '1篇'

        }
      ],
      information: {
        '电话': '123131232133',
        '现住址': '江西省上饶市玉山县横街镇',
        '备注': '学校',
        '其他信息': '草这个到时候中文肯定得炸'
      },
      tabMapOptions: [
        { label: '已赞', key: 'CN' },
        { label: '收藏', key: 'JP' },
        { label: '已购', key: 'US' }
      ],
      activeName: 'CN',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  methods: {
    search() {
      return 13
    }
  }
}
</script>
