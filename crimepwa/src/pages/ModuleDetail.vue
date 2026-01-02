<template>
  <div v-if="m" class="mt-3">
    <div class="card-soft p-3">
      <div class="d-flex justify-content-between gap-3">
        <div style="min-width: 0;">
          <div class="fw-bold fs-5">{{ m.title }}</div>
          <div class="muted">{{ m.one_line_purpose }}</div>
        </div>
        <div class="text-end">
          <div class="badge text-bg-light border">{{ m.time_sensitivity || 'NONE' }}</div>
          <div class="mt-2 muted small mono">{{ m.id }}</div>
        </div>
      </div>

      <div class="mt-2">
        <span v-for="p in m.phase_tags || []" :key="p" class="pill"><span class="mono">{{ p }}</span></span>
        <span v-for="a in m.actor_tags || []" :key="a" class="pill"><span class="mono">{{ a }}</span></span>
      </div>

      <hr />

      <div>
        <div class="fw-bold">Summary</div>
        <div class="mt-1">{{ m.summary }}</div>
      </div>

      <div class="mt-3">
        <div class="fw-bold">What to do now</div>
        <ul class="mt-1">
          <li v-for="(x,i) in (m.what_to_do_now || [])" :key="i">{{ x }}</li>
        </ul>
      </div>

      <div v-if="(m.deadlines||[]).length" class="mt-3">
        <div class="fw-bold">Deadlines & time sensitivity</div>
        <div class="mt-2 d-grid gap-2">
          <div v-for="(d,i) in m.deadlines" :key="i" class="card-soft p-2">
            <div class="fw-semibold">{{ d.label }}</div>
            <div class="muted small">Trigger: <span class="mono">{{ d.trigger }}</span> • Clock: <span class="mono">{{ d.clock }}</span> • Urgency: <span class="mono">{{ d.urgency }}</span></div>
          </div>
        </div>
      </div>

      <div v-if="(m.what_if_branches||[]).length" class="mt-3">
        <div class="fw-bold">What if?</div>
        <div class="mt-2 d-grid gap-2">
          <div v-for="(b,i) in m.what_if_branches" :key="i" class="card-soft p-2">
            <div class="fw-semibold">{{ b.if }}</div>
            <div class="mt-2 d-flex flex-wrap gap-2">
              <RouterLink v-for="mid in b.then_modules" :key="mid" class="btn btn-sm btn-outline-primary tap-target" :to="`/m/${mid}`">
                {{ mid }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div v-if="(m.authority_refs||[]).length" class="mt-3">
        <div class="fw-bold">Authority refs (needs review)</div>
        <ul class="mt-1">
          <li v-for="(r,i) in m.authority_refs" :key="i">
            <span class="mono">{{ r.type }}</span> • {{ r.citation }} • <span class="muted">{{ r.verification_status }}</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-3 card-soft p-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="fw-bold">Connections</div>
        <button class="btn btn-outline-secondary btn-sm tap-target" @click="loadNeighbors">Refresh</button>
      </div>
      <div v-if="neighbors.length" class="mt-2 d-grid gap-2">
        <div v-for="(e,i) in neighbors" :key="i" class="card-soft p-2">
          <div class="muted small">
            <span class="badge text-bg-light border">{{ e.type }}</span>
            <span class="mono ms-2">{{ e.dir === 'out' ? '→' : '←' }}</span>
          </div>
          <div class="mt-1 fw-semibold">
            <RouterLink v-if="e.other" :to="`/m/${e.other.id}`">{{ e.other.title }}</RouterLink>
            <span v-else class="mono">{{ e.dir === 'out' ? e.to : e.from }}</span>
          </div>
        </div>
      </div>
      <div v-else class="muted mt-2">No edges found.</div>
    </div>
  </div>

  <div v-else class="mt-3 muted">Loading…</div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const route = useRoute();

const m = ref<any | null>(null);
const neighbors = ref<any[]>([]);

async function load() {
  await store.ensureSeeded(false);
  m.value = await store.getModule(String(route.params.id));
  await loadNeighbors();
}

async function loadNeighbors() {
  neighbors.value = await store.neighbors(String(route.params.id));
}

onMounted(load);
watch(() => route.params.id, load);
</script>
