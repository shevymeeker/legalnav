<template>
  <div class="app-shell">
    <div class="context-bar">
      <div class="d-flex align-items-center gap-2">
        <img src="/icons/logo-192.png" alt="Wildman Legal Nav logo" class="app-logo" />
        <div>
          <div class="fw-bold">Wildman Legal Nav</div>
          <div class="muted small">not legal advice</div>
        </div>
      </div>
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
