import { createRouter, createWebHistory } from 'vue-router'
import identification from "../views/identification.vue"

const routes = [
  {
    path: '/',
  
    component: identification
  },

  {
    path: '/home',
    
    component: identification
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
