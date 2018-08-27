// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 请求 组件
import axios from 'axios'
import VueAxios from 'vue-axios'
// 引入 图表 组件
import echarts from 'echarts'
// 使用
Vue.use(VueAxios, axios)
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
