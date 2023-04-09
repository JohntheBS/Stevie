<template>
  <header class="text-center">
    <h2 class="text-primary text-xl">All our menus</h2>
    <h1 class="text-4xl font-bold text-primary-accent">Complete your day</h1>
  </header>
  <div class="space-y-20 tablet:space-y-0">
    <HuiTabGroup>
      <HuiTabList class="flex justify-center my-8">
        <ul class="flex space-x-1 tablet:space-x-4">
          <HuiTab
            v-for="(m, i) in menus"
            :key="i"
            as="div"
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
  </div>
</template>

<script setup lang="ts">
defineProps(["menus"]);
</script>

<style scoped></style>
