<template>
  <div class="mt-3">
    <div class="card-soft p-3">
      <div class="fw-bold">Offline Resources Library</div>
      <div class="muted small">
        These reference PDFs are bundled with the app so they work fully offline once the app is installed.
      </div>

      <div class="mt-3 d-flex gap-2 flex-wrap">
        <input
          v-model="q"
          class="form-control tap-target"
          style="flex:1; min-width: 240px;"
          placeholder="Search resources (e.g., Miranda, appeals, school search)"
        />
        <button class="btn btn-primary tap-target-lg" @click="runSearch">Search</button>
        <button class="btn btn-outline-secondary tap-target-lg" @click="reset">Reset</button>
        <div class="muted small align-self-center">Showing {{ results.length }} resources</div>
      </div>
    </div>

    <div class="mt-3 d-grid gap-2">
      <div v-for="r in results" :key="r.id" class="card-soft p-3">
        <div class="fw-semibold">{{ r.title }}</div>
        <div class="muted mt-1">{{ r.summary }}</div>
        <div v-if="r.tags?.length" class="mt-2 d-flex flex-wrap gap-2">
          <span v-for="tag in r.tags" :key="tag" class="badge text-bg-light border">{{ tag }}</span>
        </div>
        <div class="mt-3 d-flex gap-2 flex-wrap">
          <a
            class="btn btn-outline-primary btn-sm"
            :href="resourceHref(r.file)"
            target="_blank"
            rel="noreferrer"
          >
            Open PDF
          </a>
          <a class="btn btn-outline-secondary btn-sm" :href="resourceHref(r.file)" download>
            Download
          </a>
        </div>
      </div>
    </div>

    <div v-if="!results.length && store.loaded" class="mt-3 muted">
      No matching resources found. Try a shorter search term.
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useAppStore } from '@/stores/app';
import { getResourceAsset } from '@/content/resourceAssets';

const store = useAppStore();

const q = ref('');
const results = ref<any[]>([]);

async function runSearch() {
  results.value = await store.searchResources(q.value);
}

function reset() {
  q.value = '';
  runSearch();
}

function resourceHref(file: string) {
  return getResourceAsset(file);
}

onMounted(async () => {
  await store.ensureSeeded(false);
  await runSearch();
});
</script>
