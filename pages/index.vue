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

    <Section>
      <div class="grid grid-cols-12">
        <div class="hidden laptop:block laptop:col-span-4 desktop:col-span-6 h-full w-full bg-primary-accent/30"></div>
        <Form class="col-span-full laptop:col-span-8 desktop:col-span-6 laptop:p-3" />
      </div>
    </Section>
    <!-- testimonial -->
    <Section class="h-[200px]"> </Section>
  </div>
</template>

<script setup lang="ts">
import menu from "~/data/menu";
import chef from "~/data/chef";
</script>

<style scoped></style>
