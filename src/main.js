import Vue from 'vue'
import App from '@/App'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import router from '@/router'
import store from '@/store'
import service from '@/serivce'

Vue.use(service)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
