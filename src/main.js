import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import infiniteScroll from 'vue-infinite-scroll'
import VueContentPlaceholders from 'vue-content-placeholders'

Vue.config.productionTip = false

Vue.use(infiniteScroll)
Vue.use(VueContentPlaceholders)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
