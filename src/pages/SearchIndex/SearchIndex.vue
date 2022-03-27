<template>
  <div id="app">
    <NavBar />
    <br />
    <LogoImage />
    <el-row>
      <el-col :span="12" :offset="6">
        <SearchInput />
      </el-col>
    </el-row>
    <br />
    <br />
    <br />
    <el-row :gutter="10">
      <el-col :span="13" :offset="2">
        <el-card>
          <PaperTable />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-row>
            <el-col :span="7">
              <el-card>技术1</el-card>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-card>技术2</el-card>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-card>技术3</el-card>
            </el-col>
          </el-row>
          <br />
          <el-row>
            <el-col :span="7">
              <el-card>技术1</el-card>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-card>技术2</el-card>
            </el-col>
            <el-col :span="7" :offset="1">
              <el-card>技术3</el-card>
            </el-col>
          </el-row>
        </el-card>
        <br />
        <IndexCarousel />
        <br />
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>最新论文</span>
            <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
          </div>
          <div v-for="(item,index) in latestPapers" :key="index">
           <el-link :href="item.url" target="_blank">{{index+1 }}    {{ item.paperName }}</el-link>
            <br>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import SearchInput from "./components/SearchInput.vue";
import LogoImage from "./components/LogoImage.vue";
import PaperTable from "@/components/PaperTable.vue";
import IndexCarousel from "./components/IndexCarousel.vue";

export default {
  name: "SeachIndex",
  components: {
    NavBar,
    SearchInput,
    LogoImage,
    PaperTable,
    IndexCarousel,
  },
  data() {
    return {
      latestPapers: [
        {
          paperName: "这是一篇论文",
          url: "http://www.baidu.com",
        },
        {
          paperName: "这是一篇论文",
          url: "http://www.baidu.com",
        },
        {
          paperName: "这是一篇论文",
          url: "http://www.baidu.com",
        },
        {
          paperName: "这是一篇论文",
          url: "http://www.baidu.com",
        },
        {
          paperName: "这是一篇论文",
          url: "http://www.baidu.com",
        },
      ],
    };
  },
};
</script>
