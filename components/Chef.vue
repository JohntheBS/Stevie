<template>
  <div>
    <header class="text-center pb-12">
      <h2 class="text-primary text-xl">All about our chefs</h2>
      <h1 class="text-4xl font-bold text-primary-accent">Awesome makers</h1>
    </header>
    <ChefList :chefs="chefs" />
  </div>
</template>
<script setup lang="ts">
defineProps(["chefs"]);
</script>
