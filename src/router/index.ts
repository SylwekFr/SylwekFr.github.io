import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/Home.vue') },
  { path: '/books', component: () => import('@/views/Book.vue') },
  { path: '/tabletop-game', component: () => import('@/views/TabletopGame.vue') },
  { path: '/about-me', component: () => import('@/views/AboutMe.vue') },
  { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFound.vue') },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})