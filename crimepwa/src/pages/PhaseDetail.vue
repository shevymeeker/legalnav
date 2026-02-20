<template>
  <div class="mt-3">
    <!-- Loading / error states -->
    <div v-if="!store.loaded && !store.contentError" class="muted mt-4 text-center small">Loading…</div>
    <div v-else-if="store.contentError" class="alert alert-warning mt-4">Content unavailable offline.</div>

    <template v-else-if="store.loaded">
      <!-- Back / breadcrumb -->
      <div class="mb-3">
        <button
          v-if="props.subId"
          class="btn btn-outline-secondary btn-sm"
          @click="router.push(`/phase/${props.id}`)"
        >
          ← {{ phase?.title }}
        </button>
        <button
          v-else
          class="btn btn-outline-secondary btn-sm"
          @click="router.push('/')"
        >
          ← All Phases
        </button>
      </div>

      <div v-if="phase">
        <!-- Header -->
        <div class="card-soft p-3 mb-3">
          <div class="d-flex align-items-center gap-2 mb-1">
            <span class="phase-number-badge" :class="`phase-number-badge--${phase.color}`">
              {{ phase.number }}
            </span>
            <div class="fw-bold fs-5">{{ subPhase ? subPhase.title : phase.title }}</div>
          </div>
        </div>

        <!-- Sub-phase navigation cards (shown on phase overview when sub_phases exist) -->
        <div v-if="!props.subId && phase.sub_phases?.length" class="d-grid gap-2 mb-3">
          <button
            v-for="sub in phase.sub_phases"
            :key="sub.id"
            class="phase-card phase-card--teal"
            @click="router.push(`/phase/${phase.id}/${sub.id}`)"
          >
            <div class="phase-card__body">
              <div class="phase-card__title">{{ sub.title }}</div>
            </div>
            <div class="phase-card__arrow">›</div>
          </button>
        </div>

        <!-- Lifecycle content (shown when: subId set, OR phase has no sub_phases) -->
        <div
          v-if="props.subId || !phase.sub_phases?.length"
          class="card-soft p-3 mb-3 lifecycle-content"
          v-html="renderedContent"
        />

        <!-- Linked reference documents -->
        <div v-if="linkedResources.length" class="mt-3">
          <div class="fw-semibold mb-2">Reference Documents</div>
          <div class="d-grid gap-2">
            <div v-for="r in linkedResources" :key="r.id" class="card-soft p-3">
              <div class="fw-semibold">{{ r.title }}</div>
              <div class="muted mt-1 small">{{ r.summary }}</div>
              <div v-if="r.tags?.length" class="mt-2 d-flex flex-wrap gap-1">
                <span v-for="tag in r.tags" :key="tag" class="badge text-bg-light border">{{ tag }}</span>
              </div>
              <div class="mt-3 d-flex gap-2 flex-wrap">
                <a
                  class="btn btn-outline-primary btn-sm"
                  :href="assetHref(r.file)"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open PDF
                </a>
                <a class="btn btn-outline-secondary btn-sm" :href="assetHref(r.file)" download>
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Prev / Next phase navigation (only on phase overview, not sub-phase) -->
        <div v-if="!props.subId" class="phase-nav mt-4">
          <button
            v-if="prevPhase"
            class="phase-nav__btn phase-nav__btn--prev"
            @click="router.push(`/phase/${prevPhase.id}`)"
          >
            <span class="phase-nav__arrow">‹</span>
            <span class="phase-nav__label">
              <span class="phase-nav__hint">Previous</span>
              <span class="phase-nav__name">{{ prevPhase.short }}</span>
            </span>
          </button>
          <div v-else />

          <button
            v-if="nextPhase"
            class="phase-nav__btn phase-nav__btn--next"
            @click="router.push(`/phase/${nextPhase.id}`)"
          >
            <span class="phase-nav__label">
              <span class="phase-nav__hint">Next</span>
              <span class="phase-nav__name">{{ nextPhase.short }}</span>
            </span>
            <span class="phase-nav__arrow">›</span>
          </button>
          <button
            v-else
            class="phase-nav__btn phase-nav__btn--next"
            @click="router.push('/')"
          >
            <span class="phase-nav__label">
              <span class="phase-nav__hint">Done</span>
              <span class="phase-nav__name">All Phases</span>
            </span>
            <span class="phase-nav__arrow">›</span>
          </button>
        </div>
      </div>

      <div v-else class="muted mt-4">Phase not found.</div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { mdToHtml } from '@/utils/parseLifecycle';
import { getResourceAsset } from '@/content/resourceAssets';

const props = defineProps<{ id: string; subId?: string }>();
const store = useAppStore();
const router = useRouter();

const phase = computed(() => store.getPhase(props.id));
const subPhase = computed(() =>
  props.subId ? phase.value?.sub_phases?.find(s => s.id === props.subId) : null
);

const allPhases = computed(() => store.getPhases());
const currentIndex = computed(() => allPhases.value.findIndex(p => p.id === props.id));
const prevPhase = computed(() => currentIndex.value > 0 ? allPhases.value[currentIndex.value - 1] : null);
const nextPhase = computed(() => currentIndex.value < allPhases.value.length - 1 ? allPhases.value[currentIndex.value + 1] : null);

const renderedContent = computed(() => {
  if (!phase.value) return '';
  if (props.subId) {
    return mdToHtml(store.getSubPhaseContent(props.id, props.subId));
  }
  return mdToHtml(phase.value.content);
});

const linkedResources = computed(() =>
  phase.value ? store.getResourcesForPhase(phase.value) : []
);

function assetHref(file: string): string {
  return getResourceAsset(file);
}

onMounted(async () => {
  await store.ensureLoaded();
});
</script>
