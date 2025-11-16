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
    name: 'UpcomingMeetings',
    component: () => import('../views/UpcomingMeetings.vue')
  },
  {
    path: '/past-meetings',
    name: 'PastMeetings',
    component: () => import('../views/PastMeetings.vue')
  },
  {
    path: '/meeting-insite',
    name: 'MeetingInsite',
    component: () => import('../views/MeetingInsite.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
];

const router = createRouter({
  history: createWebHistory(),
  mode: 'hash',
  routes
});

export default router;
