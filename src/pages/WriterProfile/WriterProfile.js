import Vue from 'vue'
import WriterProfile from './WriterProfile.vue'
import router from '../../router'
import store from '../../store'
import '../../plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(WriterProfile)
}).$mount('#app')