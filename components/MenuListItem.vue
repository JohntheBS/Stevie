<template>
  <div
    class="relative bg-white shadow-[0px_5px_20px_5px] shadow-gray-300 hover:border-r-4 transition-all hover:border-primary"
  >
    <div
      class="h-32 w-32 bg-white shadow rounded-full absolute left-1/2 wide:top-1/2 wide:left-0 -translate-x-1/2 -translate-y-1/2 wide:-translate-x-1/2 wide:-translate-y-1/2"
    ></div>
    <div class="space-y-3 p-6 wide:p-10 pt-14 wide:pl-20">
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
