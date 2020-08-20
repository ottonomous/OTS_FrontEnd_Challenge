import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Instructions',
    component: () =>
      import(/* webpackChunkName: "instructions" */ '@/views/Instructions.vue')
  },
  {
    path: '/exercise-1',
    name: 'Exercise 1',
    component: () =>
      import(/* webpackChunkName: "exercise-1" */ '@/views/Exercise-1.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
