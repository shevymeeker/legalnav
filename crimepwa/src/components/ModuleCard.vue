<template>
  <div class="card-soft p-3">
    <div class="d-flex justify-content-between align-items-start gap-3">
      <div style="min-width: 0;">
        <div class="fw-bold">{{ m.title }}</div>
        <div class="muted small clamp-4">{{ m.one_line_purpose }}</div>
      </div>
      <div class="text-end">
        <span class="badge text-bg-light border">{{ m.time_sensitivity || 'NONE' }}</span>
        <div class="mt-2">
          <RouterLink class="btn btn-sm btn-outline-primary tap-target" :to="`/m/${m.id}`">
            Open
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="mt-2">
      <span v-for="p in (m.phase_tags || []).slice(0,4)" :key="p" class="pill">
        <span class="mono">{{ p }}</span>
      </span>
      <span v-for="a in (m.actor_tags || []).slice(0,3)" :key="a" class="pill">
        <span class="mono">{{ a }}</span>
      </span>
    </div>

    <div class="mt-3 muted small clamp-4">{{ m.summary }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ m: any }>();
</script>
