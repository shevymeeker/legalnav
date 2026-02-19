<template>
  <div class="mt-3">
    <!-- Back -->
    <button class="btn btn-outline-secondary btn-sm mb-3" @click="router.push('/')">
      ← All Phases
    </button>

    <div v-if="phase">
      <!-- Phase header -->
      <div class="card-soft p-3 mb-3">
        <div class="d-flex align-items-center gap-2 mb-1">
          <span class="phase-number-badge" :class="`phase-number-badge--${phase.color}`">
            {{ phase.number }}
          </span>
          <div class="fw-bold fs-5">{{ phase.title }}</div>
        </div>
      </div>

      <!-- Lifecycle content -->
      <div class="card-soft p-3 mb-3 lifecycle-content" v-html="renderedContent" />

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
    </div>

    <div v-else class="muted mt-4">Phase not found.</div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAppStore } from '@/stores/app';
import { mdToHtml } from '@/utils/parseLifecycle';
import { getResourceAsset } from '@/content/resourceAssets';

const props = defineProps<{ id: string }>();
const store = useAppStore();
const router = useRouter();

const phase = computed(() => store.getPhase(props.id));

const renderedContent = computed(() =>
  phase.value ? mdToHtml(phase.value.content) : ''
);

const linkedResources = computed(() =>
  phase.value ? store.getResourcesForPhase(phase.value) : []
);

function assetHref(file: string): string {
  return getResourceAsset(file);
}

onMounted(async () => {
  await store.ensureSeeded(false);
});
</script>
