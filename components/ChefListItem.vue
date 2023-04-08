<template>
  <div
    class="bg-white shadow-[0px_0px_20px_-5px] shadow-gray-300 group text-primary-accent hover:bg-primary-accent/90 transition-all duration-300"
  >
    <div
      class="p-6 space-y-3 text-center group-hover:text-white [&>p]:text-primary-accent/70 group-hover:[&>p]:text-white"
    >
      <div
        class="h-24 w-24 rounded-full border-[3px] group-hover:border-primary border-black mx-auto"
      ></div>
      <h1 class="font-bold">{{ chef.name }}</h1>
      <p class="">{{ chef.level }}</p>
      <p class="">{{ chef.description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["chef"]);
</script>
