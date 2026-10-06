import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'), // Hero, Highlighting Solusi, Featured Products, CTA
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import('../views/SolutionsView.vue'), // Web Dev, Mobile App, IoT & Cloud Integration
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue'), // Produk Digital & Template/SaaS buatan agency
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../views/PortfolioView.vue'), // Case Studies & Proyek Klien
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'), // Profil Tim & Visi Misi
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue'), // Form Konsultasi Proyek
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('../views/TermsView.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/PrivacyView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router