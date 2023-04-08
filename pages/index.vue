<template>
  <div class="mx-4">
    <!-- <Button name="book a table" /> -->
    <!-- {{ menu }} -->
    <Section>
      <Menu :menus="menu.menus" />
    </Section>
    <!-- chef section -->
    <Section>
      <Chef :chefs="chef.chefs" />
    </Section>
  </div>
</template>

<script setup lang="ts">
import menu from "~/data/menu";
import chef from "~/data/chef";
</script>

<style scoped></style>
