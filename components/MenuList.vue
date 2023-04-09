<template>
  <div>
    <div class="grid desktop:grid-cols-2 gap-20 wide:gap-x-24 pt-10">
      <MenuListItem v-for="f in foods" :key="f.id" :food="f" />
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["foods"]);
</script>
