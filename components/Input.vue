<template>
  <div class="grid space-y-1">
    <label>{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      class="border-primary-accent/40 focus:border-0 focus:ring-1 focus:ring-primary"
    />
  </div>
</template>
<script setup lang="ts">
defineProps(["label", "placeholder", "type"]);
</script>
