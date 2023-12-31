import { createRouter, createWebHistory } from 'vue-router'
import ContactsView from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContactsView,
    },
    {
      // path: '/about',
      // name: 'about',
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
