<template>
  <div
    class="bg-gray-200 shadow-[0px_0px_20px_-5px] shadow-gray-300 group text-primary-accent hover:bg-primary-accent/90 transition-all duration-300 prose"
  >
    <div
      class="p-6 wide:py-10 space-y-3 text-center group-hover:text-white [&>p]:text-primary-accent/70 group-hover:[&>p]:text-white"
    >
      <div
        class="h-24 w-24 rounded-full border-[3px] group-hover:border-primary bg-primary-accent/30 border-black mx-auto"
      ></div>
      <h3 class="font-bold">{{ chef.name }}</h3>
      <p class="text-sm">{{ chef.level }}</p>
      <p class="text-sm">{{ chef.description }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["chef"]);
</script>
