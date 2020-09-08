// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import App from './App'
import router from './router'
import '@/assets/css/main.css'
import store from './store'
import $api from './api/index'

Vue.prototype.$api = $api;
Vue.config.productionTip = false

Vue.directive('document-click', {
  bind(el, binding) {
    document.addEventListener('click', binding.value, false)
  },
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
})
