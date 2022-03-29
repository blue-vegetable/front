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
        <!-- 这一块是论文-->
        <el-card>
          <PaperTable />
        </el-card>
      </el-col>

      <el-col :span="6">
        <!-- 这一块是技术栈-->
        <el-card>
          <div slot="header" class="clearfix">
            <span>技术栈</span>
          </div>
          <el-row :gutter="70">
            <el-col v-for="(picobj, index) in tech" :key="index" :span="8">
              <IndexRightTechStack :picture="picobj"></IndexRightTechStack>
              <div v-if="index == 2"><br /></div>
            </el-col>
          </el-row>
        </el-card>

        <br />
        <!-- 这一块是跑马灯-->
        <IndexCarousel />
        <br />

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>最新论文</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >更多</el-button
            >
          </div>
          <div v-for="(item, index) in latestPapers" :key="index">
            <span style="color: grey">{{ index + 1 }}</span>
            <el-link :href="item.url" target="_blank">{{
              item.paperName
            }}</el-link>
            <br />
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
import IndexRightTechStack from "./components/IndexRightTechStack.vue";

export default {
  name: "SeachIndex",
  components: {
    NavBar,
    SearchInput,
    LogoImage,
    PaperTable,
    IndexCarousel,
    IndexRightTechStack,
  },
  watch: {
    
  },
  data() {
    return {
      tech: [
        {
          name: "FABRIC",
          src: require("@/assets/tech-stack/hyperledger.png"),
        },
        {
          name: "IPFS",
          src: require("@/assets/tech-stack/ipfs.png"),
        },

        {
          name: "NLP",
          src: require("@/assets/tech-stack/nlp.jpg"),
        },
        {
          name: "SPRING",
          src: require("@/assets/tech-stack/spring.png"),
        },
        {
          name: "MONGODB",
          src: require("@/assets/tech-stack/mongodb.png"),
        },
        {
          name: "VUE2",
          src: require("@/assets/tech-stack/vue.png"),
        },
      ],
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
