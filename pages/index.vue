<template>
  <div class="">
    <!-- <Button name="book a table" /> -->
    <!-- {{ menu }} -->
    <Section>
      <Menu :menus="menu.menus" />
    </Section>
    <!-- chef section -->
    <Section>
      <Chef :chefs="chef.chefs" />
    </Section>
    <div class="grid grid-cols-2">
      <div class="h-full w-full bg-primary-accent/70"></div>
      <Form class="col-start-2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import menu from "~/data/menu";
import chef from "~/data/chef";
</script>

<style scoped></style>
