<template>
  <div class="demo-image">
    <div v-for="fit in fits" :key="fit" class="block">
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :fit="fit"
      ></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fits: ["contain"],
      url: '@/assets/logo.png',
    };
  },
};
</script>

<style>
.demo-image {
    text-align: center;
}
</style>
