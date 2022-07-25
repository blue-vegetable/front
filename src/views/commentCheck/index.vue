<template>
<!--  <div class="tab-container">-->
<!--    <el-tabs v-model="activeName" style="margin-top:15px;" type="border-card">-->
<!--      <el-tab-pane v-for="item in tabMapOptions" :key="item.key" :label="item.label" :name="item.key">-->
<!--        <keep-alive>-->
<!--          <tab-pane v-if="activeName==item.key" :type="item.key" />-->
<!--          <tab-pane2 v-if="activeName==item.key" :type="item.key"/>-->
<!--        </keep-alive>-->
<!--      </el-tab-pane>-->
<!--    </el-tabs>-->
<!--  </div>-->
  <el-tabs style="margin:20px 20px" type="border-card">
    <el-tab-pane label="未审核"><tab-pane></tab-pane></el-tab-pane>
    <el-tab-pane label="已审核"><tab-pane2></tab-pane2></el-tab-pane>
  </el-tabs>
</template>

<script>
import TabPane from './components/TabPane'
import TabPane2 from '@/views/commentCheck/components/TabPane2'

export default {
  name: 'Tab',
  components: { TabPane, TabPane2 },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
  .tab-container {
    margin: 30px;
  }
</style>
