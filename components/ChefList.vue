<template>
  <div class="grid grid-cols-4 gap-8">
    <ChefListItem v-for="chef in chefs" :key="chef.id" :chef="chef" />
  </div>
</template>
<script setup lang="ts">
defineProps(["chefs"]);
</script>
