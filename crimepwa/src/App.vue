<template>
  <div class="app-shell">
    <div class="context-bar">
      <div class="fw-bold">Criminal Law Navigator: Kentucky</div>
      <div class="muted small">Daviess County · Offline Guide</div>
    </div>

    <router-view />

    <nav class="bottom-nav" aria-label="Bottom navigation">
      <div class="nav-inner">
        <RouterLink class="nav-btn" :class="{ active: $route.name === 'home' }" to="/">
          Timeline
        </RouterLink>
        <RouterLink class="nav-btn" :class="{ active: $route.name === 'resources' }" to="/resources">
          Resources
        </RouterLink>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
</script>
