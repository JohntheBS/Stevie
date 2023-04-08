<template>
  <button :type="type" class="btn btn-colors-primary">{{ name }}</button>
</template>

<script setup lang="ts">
defineProps(["name", "type"]);
</script>

<style scoped></style>
