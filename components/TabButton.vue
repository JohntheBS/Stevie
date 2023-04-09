<template>
  <button
    class="btn bg-primary-accent text-white"
    :class="{
      'bg-primary': selected,
    }"
  >
    {{ name }}
  </button>
</template>

<script setup lang="ts">
defineProps(["name", "selected"]);
</script>

<style scoped></style>
