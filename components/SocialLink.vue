<template>
  <div
    class="h-8 aspect-square rounded-full flex items-center justify-center cursor-pointer hover:bg-primary hover:text-white bg-white text-primary-accent"
  >
    <nuxt-icon :name="name" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string }>();
</script>
