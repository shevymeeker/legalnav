<template>
  <div class="mt-3">
    <div class="card-soft p-3">
      <div class="fw-bold">Cross-reference links</div>
      <div class="muted small">This is a starter view. It shows edges and lets you jump to connected modules.</div>

      <div class="mt-3 d-flex gap-2 flex-wrap">
        <input v-model="q" class="form-control tap-target" style="flex:1; min-width: 240px;" placeholder="Filter by module id or edge type…" />
        <select v-model="etype" class="form-select tap-target" style="max-width: 260px;">
          <option value="">Edge type: any</option>
          <option v-for="t in edgeTypes" :key="t" :value="t">{{ t }}</option>
        </select>
        <button class="btn btn-outline-secondary tap-target" @click="load">Refresh</button>
      </div>
    </div>

    <div class="mt-3 d-grid gap-2">
      <div v-for="(e,i) in filtered" :key="i" class="card-soft p-3">
        <div class="d-flex justify-content-between align-items-center">
          <span class="badge text-bg-light border">{{ e.type }}</span>
          <span class="muted small">{{ e.from }} → {{ e.to }}</span>
        </div>
        <div class="mt-2 d-flex flex-wrap gap-2">
          <RouterLink class="btn btn-sm btn-outline-primary tap-target" :to="`/m/${e.from}`">Open from</RouterLink>
          <RouterLink class="btn btn-sm btn-outline-primary tap-target" :to="`/m/${e.to}`">Open to</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { db } from '@/db';
import { useAppStore } from '@/stores/app';

const store = useAppStore();

const edges = ref<any[]>([]);
const q = ref('');
const etype = ref('');

const edgeTypes = computed(() => store.variables.edge_types || []);

async function load() {
  await store.ensureSeeded(false);
  edges.value = await db.edges.toArray();
}

const filtered = computed(() => {
  const nq = (q.value || '').toLowerCase().trim();
  return edges.value.filter(e => {
    const okT = !etype.value || e.type === etype.value;
    const hay = `${e.from} ${e.to} ${e.type}`.toLowerCase();
    const okQ = !nq || hay.includes(nq);
    return okT && okQ;
  });
});

onMounted(load);
</script>
