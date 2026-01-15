<template>
  <div class="app-shell">
    <div class="context-bar">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="fw-bold">Criminal Law Navigator: Kentucky</div>
          <div class="muted small">
            Your offline guide to criminal charges and process
          </div>
        </div>
        <button class="btn btn-outline-secondary btn-sm tap-target" @click="syncNow">
          Sync
        </button>
      </div>
    </div>

    <router-view />

    <nav class="bottom-nav" aria-label="Bottom navigation">
      <div class="nav-inner">
        <RouterLink class="nav-btn" :class="{ active: $route.name==='home' }" to="/">Search</RouterLink>
        <RouterLink class="nav-btn" :class="{ active: $route.name==='graph' }" to="/graph">Connections</RouterLink>
        <RouterLink class="nav-btn" :class="{ active: $route.name==='data' }" to="/data">Manage</RouterLink>
        <a class="nav-btn" href="https://github.com" target="_blank" rel="noreferrer">Source</a>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const lastSyncLabel = computed(() => store.lastSyncAt ? new Date(store.lastSyncAt).toLocaleString() : 'never');

async function syncNow() {
  await store.ensureSeeded(true);
}
</script>
