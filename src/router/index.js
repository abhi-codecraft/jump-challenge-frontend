// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { layout: "login" }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'hash',
  routes
});

export default router;
