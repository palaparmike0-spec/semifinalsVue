import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/events',
    component: Events
  },
  {
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router