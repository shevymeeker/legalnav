import { createRouter, createWebHistory } from 'vue-router';
import PhaseMap from '@/pages/PhaseMap.vue';
import PhaseDetail from '@/pages/PhaseDetail.vue';
import Resources from '@/pages/Resources.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: PhaseMap },
    { path: '/phase/:id', name: 'phase', component: PhaseDetail, props: true },
    { path: '/resources', name: 'resources', component: Resources }
  ]
});

export default router;
