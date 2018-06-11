import Vue from 'vue'
import Vuex from 'vuex'
import article from './modules/article'
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    article
  }
})

export default store
