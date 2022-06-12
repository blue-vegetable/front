<template>
  <div id="app">
    <!-- <br>
    <div style="text-align:center">
      <PaperUpload />
    </div> -->
    <br>
    <PaperForm />
  </div>
</template>

<script>
import PaperUpload from './components/PaperUpload.vue'
import PaperForm from './components/PaperForm.vue'

export default {
  name: 'WriterProfile',
  components: {
    PaperUpload,
    PaperForm
  }
}
</script>

<style>
p {
  font-family: "Helvetica Neue";
  text-align: justify;
  color:rgb(94, 91, 91)
}
</style>

