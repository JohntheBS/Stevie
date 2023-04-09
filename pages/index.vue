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

    <Section class="my-10">
      <div class="grid laptop:grid-cols-2">
        <div class="bg-primary-accent/30 h-[450px]"></div>
        <Form class="" />
      </div>
    </Section>
    <!-- testimonial -->
  </div>
</template>

<script setup lang="ts">
import menu from "~/data/menu";
import chef from "~/data/chef";
</script>

<style scoped></style>
