import Vue from 'vue'
import axios from 'axios'
// ajax请求过期时间，最长五秒，超时不候
axios.defaults.timeout = 5000

// 将axios 放入到Vue的原型链中，所有的组件都可以使用
Vue.prototype.axios = axios
