<template>
  <div
    class="grid tablet:grid-cols-2 lg:grid-cols-4 gap-5 laptop:gap-10 lg:gap-8"
  >
    <ChefListItem v-for="chef in chefs" :key="chef.id" :chef="chef" />
  </div>
</template>
<script setup lang="ts">
defineProps(["chefs"]);
</script>
