<template>
  <div class="grid laptop:grid-cols-2 desktop:grid-cols-3 gap-8">
    <ChefListItem v-for="chef in chefs" :key="chef.id" :chef="chef" />
  </div>
</template>
<script setup lang="ts">
defineProps(["chefs"]);
</script>
