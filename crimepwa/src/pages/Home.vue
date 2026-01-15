<template>
  <div class="mt-3">
    <div class="card-soft p-3">
      <div class="fw-bold">Ask in plain English</div>
      <div class="muted small">Type what's happening or what you're wondering about. No legal jargon needed.</div>

      <div class="mt-3 d-flex gap-2 flex-wrap">
        <input v-model="q" class="form-control tap-target" style="flex:1; min-width: 240px;"
               placeholder="I missed court / Can they search my car? / What's a bond?" />

        <select v-model="phase" class="form-select tap-target" style="max-width: 260px;">
          <option value="">Category: all</option>
          <option v-for="p in phases" :key="p" :value="p">{{ p }}</option>
        </select>

        <select v-model="actor" class="form-select tap-target" style="max-width: 260px;">
          <option value="">Who: any</option>
          <option v-for="a in actors" :key="a" :value="a">{{ a }}</option>
        </select>
      </div>

      <div class="mt-3 d-flex gap-2 flex-wrap">
        <button class="btn btn-primary tap-target-lg" @click="runSearch">Search</button>
        <button class="btn btn-outline-secondary tap-target-lg" @click="reset">Reset</button>
        <div class="muted small align-self-center">Showing {{ results.length }} modules</div>
      </div>
    </div>

    <div class="mt-3 d-grid gap-2">
      <ModuleCard v-for="m in results" :key="m.id" :m="m" />
    </div>

    <div v-if="!results.length && store.loaded" class="mt-3 muted">
      No matches found. Try shorter terms or ask a different way. Example: "bond" instead of "how do I get released."
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useAppStore } from '@/stores/app';
import ModuleCard from '@/components/ModuleCard.vue';

const store = useAppStore();

const q = ref('');
const phase = ref('');
const actor = ref('');
const results = ref<any[]>([]);

const phases = computed(() => store.variables.phases || []);
const actors = computed(() => store.variables.actors || []);

async function runSearch() {
  results.value = await store.searchModules(q.value, phase.value || undefined, actor.value || undefined);
}

function reset() {
  q.value = '';
  phase.value = '';
  actor.value = '';
  runSearch();
}

onMounted(async () => {
  await store.ensureSeeded(false);
  await runSearch();
});
</script>
