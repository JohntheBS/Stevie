<template>
  <div>
    <div class="grid grid-cols-2 gap-y-10 gap-x-24 px-32 py-10">
      <MenuListItem v-for="f in foods" :key="f.id" :food="f" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["foods"]);
</script>
