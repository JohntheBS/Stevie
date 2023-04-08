<template>
  <div>
    <header class="text-center pb-12 space-y-2 font-semibold">
      <h2 class="text-primary text-xl">All about our chefs</h2>
      <h1 class="text-4xl font-semibold text-primary-accent">Awesome makers</h1>
    </header>
    <ChefList :chefs="chefs" />
  </div>
</template>
<script setup lang="ts">
defineProps(["chefs"]);
</script>
