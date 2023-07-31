import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/result',
      name: 'result',
      component: () => import(/* Result */ '../views/ResultView.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* Details */ '../views/DetailsView.vue')
    },
    {
      path: '/my-movies',
      name: 'myMovies',
      component: () => import(/* My movies */ '../views/MyMovies.vue')
    }
  ]
})

export default router
