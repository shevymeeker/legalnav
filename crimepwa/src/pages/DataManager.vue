<template>
  <div class="mt-3">
    <div class="card-soft p-3">
      <div class="fw-bold">Data Manager</div>
      <div class="muted small">
        Import/export the local IndexedDB dataset for editing, versioning, or collaboration.
        This is your “easy knob” for adding variables, modules, edges, and phrase mappings.
      </div>

      <div class="mt-3 d-flex gap-2 flex-wrap">
        <button class="btn btn-primary tap-target-lg" @click="download">Export JSON</button>
        <button class="btn btn-outline-secondary tap-target-lg" @click="resetToSeed">Reset to seed</button>
        <label class="btn btn-outline-primary tap-target-lg mb-0">
          Import JSON <input type="file" accept="application/json" hidden @change="onFile" />
        </label>
      </div>

      <div v-if="msg" class="mt-3 alert alert-info py-2 mb-0">{{ msg }}</div>
      <div v-if="err" class="mt-3 alert alert-danger py-2 mb-0">{{ err }}</div>
    </div>

    <div class="mt-3 card-soft p-3">
      <div class="fw-bold">How to add “new variables”</div>
      <div class="mt-2">
        <ol class="mb-0">
          <li>Edit <span class="mono">src/content/variables.ky.json</span> (phases, actors, edge_types, etc.).</li>
          <li>Use Export JSON to capture your local DB as a portable pack.</li>
          <li>Commit changes in GitHub, then redeploy. Seed packs are bundled at build-time.</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/stores/app';

const store = useAppStore();
const msg = ref('');
const err = ref('');

async function download() {
  msg.value = '';
  err.value = '';
  try {
    const payload = await store.exportAll();
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ky-law-nav.export.json';
    a.click();
    URL.revokeObjectURL(url);
    msg.value = 'Export downloaded.';
  } catch (e: any) {
    err.value = e?.message || String(e);
  }
}

async function resetToSeed() {
  msg.value = '';
  err.value = '';
  try {
    await store.ensureSeeded(true);
    msg.value = 'Reset complete.';
  } catch (e: any) {
    err.value = e?.message || String(e);
  }
}

async function onFile(ev: Event) {
  msg.value = '';
  err.value = '';
  const input = ev.target as HTMLInputElement;
  const file = input.files?.[0];
  if (!file) return;

  try {
    const text = await file.text();
    const obj = JSON.parse(text);
    await store.importAll(obj);
    msg.value = 'Import complete.';
  } catch (e: any) {
    err.value = e?.message || String(e);
  } finally {
    input.value = '';
  }
}
</script>
