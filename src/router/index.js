import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
//import McdoView from '@/views/McdoView.vue'
//import KfcView from '@/views/KfcView.vue'
//import BurgerkingView from '@/views/BurgerkingView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  /*{
    path: '/menu-mc-burger',
    name: 'mcdo',
    component: ()=> import ('@/views/McdoView.vue')
  },
  {
    path: '/menu-kfc-burger',
    name: 'kfc',
    component: ()=> import ('@/views/KfcView.vue')
  },
  {
    path: '/menu-bk-burger',
    name: 'bking',
    component: ()=> import ('@/views/BurgerkingView.vue')
  },*/
  {
    path: '/menu/:id/:slug',
    name: 'menu.show',
    component: () => import('@/views/MenuView.vue'),
    props: (route) => ({id: parseInt(route.params.id)}),
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //linkActiveClass: "lien-actif",
})

export default router
