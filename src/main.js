// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import filters from './filters'
import store from './store'
import 'github-markdown-css/github-markdown.css'
import 'nprogress/nprogress.css'

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
Vue.config.productionTip = false
window.store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

store.dispatch('getCategories')
store.dispatch('getClassifications')
