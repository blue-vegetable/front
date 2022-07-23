<template>
  <div id="app">
    <PaperForm />
  </div>
</template>

<script>
import PaperForm from './components/PaperForm.vue'

export default {
  name: 'WriterProfile',
  components: {
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

