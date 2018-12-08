import Vue from 'vue'
import Router from 'vue-router'
import Episodes from '@/views/Episodes.vue'
import Episode from '@/views/Episode.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'episodes',
      component: Episodes
    },
    {
      path: '/episode/:id',
      name: 'episode',
      component: Episode,
      props: true
    },
  ]
})
