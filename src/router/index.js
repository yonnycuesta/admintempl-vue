import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/posts',
    name: 'Post',
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue')
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Category.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
