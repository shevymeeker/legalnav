<template>
  <div v-if="m" class="mt-3">
    <div class="mb-3">
      <button @click="goBack" class="btn btn-outline-secondary btn-sm tap-target">
        ← Back
      </button>
    </div>
    <div class="card-soft p-3">
      <div class="d-flex justify-content-between gap-3">
        <div style="min-width: 0;">
          <div class="fw-bold fs-5">{{ m.title }}</div>
          <div class="muted">{{ m.one_line_purpose }}</div>
        </div>
        <div class="text-end">
          <div class="badge text-bg-light border">{{ m.category || m.charge_family || 'General' }}</div>
          <div v-if="m.severity" class="mt-2 muted small">{{ severityLabel(m.severity) }}</div>
        </div>
      </div>

      <hr />

      <div v-if="m.what_is_this" class="mt-3">
        <div class="fw-bold">Here's what you need to know</div>
        <div class="mt-1" style="white-space: pre-wrap; line-height: 1.6;">{{ m.what_is_this }}</div>
      </div>

      <div v-if="m.why_it_matters" class="mt-3">
        <div class="fw-bold">Why it matters</div>
        <div class="mt-1" style="white-space: pre-wrap; line-height: 1.6;">{{ m.why_it_matters }}</div>
      </div>

      <div v-if="m.the_process" class="mt-3">
        <div class="fw-bold">The process</div>
        <div class="mt-1" style="white-space: pre-wrap; line-height: 1.6;">{{ m.the_process }}</div>
      </div>

      <div v-if="m.timeline" class="mt-3">
        <div class="fw-bold">Timeline</div>
        <div class="mt-1" style="white-space: pre-wrap; line-height: 1.6;">{{ m.timeline }}</div>
      </div>

      <div v-if="m.options" class="mt-3">
        <div class="fw-bold">Your options</div>
        <div class="mt-1" style="white-space: pre-wrap; line-height: 1.6;">{{ m.options }}</div>
      </div>

      <div v-if="m.what_to_do_now" class="mt-3">
        <div class="fw-bold">What you should do</div>
        <div class="mt-1" style="white-space: pre-wrap; line-height: 1.6;">{{ m.what_to_do_now }}</div>
      </div>

      <div v-if="m.related && m.related.length" class="mt-3">
        <div class="fw-bold">Related consequences</div>
        <div class="mt-1" style="white-space: pre-wrap; line-height: 1.6;">{{ m.related }}</div>
      </div>

      <div v-if="m.sources && m.sources.length" class="mt-3">
        <div class="fw-bold">Sources</div>
        <ul class="mt-1" style="font-size: 0.9rem;">
          <li v-for="(s,i) in m.sources" :key="i" class="muted">
            <strong>{{ s.label }}:</strong> {{ s.citation }}
            <span class="badge text-bg-light ms-1" :style="sourceColor(s.verification_status)">{{ s.verification_status }}</span>
          </li>
        </ul>
      </div>

      <div v-if="m.flagged" class="mt-3 alert alert-info">
        <strong>Note:</strong> {{ m.flag_reason }}
      </div>
    </div>

    <div class="mt-3 card-soft p-3">
      <div class="d-flex justify-content-between align-items-center">
        <div class="fw-bold">Related topics</div>
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
      <div v-else class="muted mt-2">No related topics yet.</div>
    </div>
  </div>

  <div v-else class="mt-3 muted">Loading…</div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const route = useRoute();
const router = useRouter();

const m = ref<any | null>(null);
const neighbors = ref<any[]>([]);

function severityLabel(sev: string): string {
  const labels: Record<string, string> = {
    IMMEDIATE: '⚠️ Very urgent',
    URGENT: '⚠️ Urgent',
    IMPORTANT: '→ Important',
    SOON: '→ Soon',
    BACKGROUND: '📚 Background'
  };
  return labels[sev] || sev;
}

function sourceColor(status: string): any {
  if (status === 'VERIFIED') return { backgroundColor: '#d4edda', color: '#155724' };
  if (status === 'PARTIAL') return { backgroundColor: '#fff3cd', color: '#856404' };
  return { backgroundColor: '#f8d7da', color: '#721c24' };
}

function goBack() {
  router.back();
}

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
