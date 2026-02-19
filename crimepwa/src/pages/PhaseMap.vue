<template>
  <div class="mt-3">
    <div class="card-soft p-3 mb-3">
      <div class="fw-bold fs-5">Kentucky Criminal Process</div>
      <div class="muted mt-1">
        Select a phase to explore the law, procedures, and key rights at each stage of a criminal case.
        Relevant reference documents are surfaced inside each phase.
      </div>
    </div>

    <div class="d-grid gap-2">
      <button
        v-for="phase in phases"
        :key="phase.id"
        class="phase-card"
        :class="`phase-card--${phase.color}`"
        @click="go(phase.id)"
      >
        <div class="phase-card__number">{{ phase.number }}</div>
        <div class="phase-card__body">
          <div class="phase-card__title">{{ phase.title }}</div>
          <div class="phase-card__snippet muted">{{ snippet(phase.content) }}</div>
        </div>
        <div class="phase-card__arrow">›</div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const router = useRouter();

const phases = computed(() => store.getPhases());

function go(id: string) {
  router.push(`/phase/${id}`);
}

function snippet(content: string): string {
  // Return the first non-empty, non-heading, non-rule line as a short descriptor
  const lines = content.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('---') || trimmed.startsWith('-')) continue;
    // Strip markdown bold markers
    const clean = trimmed.replace(/\*\*/g, '').replace(/\*/g, '');
    if (clean.length > 10) {
      return clean.length > 120 ? clean.slice(0, 117) + '…' : clean;
    }
  }
  return '';
}

onMounted(async () => {
  await store.ensureSeeded(false);
});
</script>
