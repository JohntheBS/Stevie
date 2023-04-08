<template>
  <div
    class="relative bg-white shadow-[0px_0px_20px_-5px] shadow-gray-300 hover:border-r-4 transition-all hover:border-primary"
  >
    <div
      class="h-32 w-32 bg-primary/70 rounded-full absolute top-0 -translate-x-1/2 translate-y-1/3"
    ></div>
    <div class="ml-10 space-y-3 p-10">
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
