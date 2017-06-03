// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mint from '@/lib/mint'
import store from '@/store/index'
import axios from '@/lib/axios'

Vue.config.productionTip = false

import APIJS from './assets/js/api.js'

Vue.prototype.api = APIJS

import UtilJS from './assets/js/util.js'

Vue.prototype.util = UtilJS
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  mint,
  store,
  axios,
  // sortable,
  template: '<App/>',
  components: {
    App
  }
})
