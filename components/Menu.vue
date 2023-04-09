<template>
  <header class="text-center pb-12">
    <h2 class="text-primary text-xl">All our menus</h2>
    <h1 class="text-4xl font-bold text-primary-accent">Complete your day</h1>
  </header>
  <TabGroup>
    <TabList class="flex justify-center">
      <ul class="space-x-4">
        <Tab
          v-for="(m, i) in menus"
          :key="i"
          as="template"
          v-slot="{ selected }"
        >
          <TabButton :name="m.name" :selected="selected" />
        </Tab>
      </ul>
    </TabList>
    <TabPanels>
      <TabPanel v-for="(m, i) in menus" :key="i">
        <MenuList :foods="m.foods" />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
defineProps(["menus"]);
</script>

<style scoped></style>
