<template>


<div class="tag-group">
  <span class="tag-group__title">关键词：</span>
  <el-tag
    v-for="item in items"
    :key="item.label"
    :type="item.type"
    effect="plain">
    {{ item.label }}
  </el-tag>
</div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { type: '', label: '签密' },
          { type: 'success', label: '无证书' },
          { type: 'info', label: ' 随机谕示模型 ' },
          { type: 'danger', label: '椭圆曲线' },
          { type: 'warning', label: '安全' }
        ]
      }
    }
  }
</script>