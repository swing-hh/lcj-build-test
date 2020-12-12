// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/common.css'//全局引入css公共样式
import http from './core/http'//全局使用封装好的请求
import myComponents from '@/core/components'//全局公共组件
import * as myDirectives from '@/core/directive'//自定义指令

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(myComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  myDirectives,
  components: { App },
  template: '<App/>'
})
