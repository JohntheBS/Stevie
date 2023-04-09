<template>
  <div>
    <div class="grid laptop:grid-cols-2 tv:grid-cols-3 gap-y-24 tablet:gap-y-10 tablet:gap-x-24 tablet:px-6">
      <MenuListItem v-for="f in foods" :key="f.id" :food="f" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["foods"]);
</script>
