<template>
<div class="center">
    <el-image fit="scale-down" :src="picture.src"></el-image>
    <p>{{picture.name}}</p>
</div>
</template>

<style>
.center{
    text-align: center
}
</style>

<script>
export default {
    props:{
        picture:Object
    }
}
</script>
