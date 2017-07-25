import Vue from 'vue'
import App from './components/App/App.vue'
import router from '@/router/router'

import Validator from 'vue-validator'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
 