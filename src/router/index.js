import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
//import McdoView from '@/views/McdoView.vue'
//import KfcView from '@/views/KfcView.vue'
//import BurgerkingView from '@/views/BurgerkingView.vue'
import NotFound from '@/views/NotFound.vue'
import menuData from '@/data.json'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {transition: 'bounce'},
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
    meta: {transition: 'bounce'},
    beforeEnter (to, from) {
      const urlExist = menuData.menus.find(menu => menu.id === parseInt(to.params.id))
      if(!urlExist) return{ redirect: {name: 'home'}}
    }
  },
  {
    path: '/ingredient/:id/:slug',
    name: 'ingredient.show',
    component: () => import('@/views/IngredientView.vue'),
    props: (route) => ({id: parseInt(route.params.id), slug: route.params.slug}),
    meta: {transition: 'bounce'},
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,

  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //linkActiveClass: "lien-actif",
})

export default router
