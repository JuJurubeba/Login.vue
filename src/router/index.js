import { createRouter, createWebHashHistory } from 'vue-router'
import LoginJu from '../views/LoginJu.vue'



const routes = [
  {
    path: '/',
    name: 'LoginJu',
    component: LoginJu
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
