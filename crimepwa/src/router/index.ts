import { createRouter, createWebHistory } from 'vue-router';
import PhaseMap from '@/pages/PhaseMap.vue';
import PhaseDetail from '@/pages/PhaseDetail.vue';
import Resources from '@/pages/Resources.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: PhaseMap },
    { path: '/phase/:id', name: 'phase', component: PhaseDetail, props: true },
    { path: '/phase/:id/:subId', name: 'sub-phase', component: PhaseDetail, props: true },
    { path: '/resources', name: 'resources', component: Resources },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
});

export default router;
