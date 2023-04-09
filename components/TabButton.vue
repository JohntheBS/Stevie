<template>
  <button
    class="btn text-white focus:outline-none"
    :class="[selected ? 'bg-primary' : 'bg-primary-accent']"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
defineProps(["name", "selected"]);
</script>

<style scoped></style>
