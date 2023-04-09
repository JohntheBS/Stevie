<template>
  <header class="text-center pb-12">
    <h2 class="text-primary text-xl">All our menus</h2>
    <h1 class="text-4xl font-bold text-primary-accent">Complete your day</h1>
  </header>
  <HuiTabGroup>
    <HuiTabList class="flex justify-center">
      <ul class="space-x-4">
        <HuiTab
          v-for="(m, i) in menus"
          :key="i"
          as="template"
          v-slot="{ selected }"
        >
          <TabButton :name="m.name" :selected="selected" />
        </HuiTab>
      </ul>
    </HuiTabList>
    <HuiTabPanels>
      <HuiTabPanel v-for="(m, i) in menus" :key="i">
        <MenuList :foods="m.foods" />
      </HuiTabPanel>
    </HuiTabPanels>
  </HuiTabGroup>
</template>

<script setup lang="ts">
defineProps(["menus"]);
</script>

<style scoped></style>
