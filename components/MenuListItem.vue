<template>
  <div
    class="relative bg-white shadow-[0px_5px_20px_5px] shadow-gray-300 hover:border-r-4 transition-all hover:border-primary">
    <div
      class="h-32 w-32 bg-primary-accent/30 rounded-full absolute left-1/2 tablet:top-1/2 tablet:left-0 -translate-x-1/2  -translate-y-1/2 tablet:-translate-x-1/2 tablet:-translate-y-1/2">
    </div>
    <div class="mt-10 tablet:mt-0 tablet:ml-10 space-y-3 py-10 tablet:py-10 px-6 tablet:px-10">
      <div class="flex justify-between text-xl font-bold">
        <h1 class="font-semibold">{{ food.name }}</h1>
        <h2 class="text-primary">${{ food.price }}</h2>
      </div>
      <p class="text-gray-600">{{ food.description }}</p>
      <p class="text-primary underline">order now</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["food"]);
</script>
