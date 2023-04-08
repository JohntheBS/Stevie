<template>
  <div class="mx-4">
    <!-- <Button name="book a table" /> -->
    <Menu :menus="menu.menus" />

    <!-- {{ menu }} -->
  </div>
</template>

<script setup lang="ts">
import menu from "~/data/menu";
</script>

<style scoped></style>
