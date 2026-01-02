import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import ModuleDetail from '@/pages/ModuleDetail.vue';
import DataManager from '@/pages/DataManager.vue';
import Graph from '@/pages/Graph.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/m/:id', name: 'module', component: ModuleDetail, props: true },
    { path: '/data', name: 'data', component: DataManager },
    { path: '/graph', name: 'graph', component: Graph }
  ]
});

export default router;
