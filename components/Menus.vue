<template>
  <TabGroup>
    <TabList class="flex justify-center">
      <ul class="space-x-4">
        <Tab as="template" v-slot="{ selected }">
          <TabButton name="breakfast" :selected="selected" />
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <TabButton name="Launch" :selected="selected" />
        </Tab>
        <Tab as="template" v-slot="{ selected }">
          <TabButton name="Dinner" :selected="selected" />
        </Tab>
      </ul>
      <!-- Use the `selected` state to conditionally style the selected tab. -->
      <!-- ... -->
    </TabList>
    <TabPanels>
      <TabPanel>Content 1</TabPanel>
      <TabPanel>Content 2</TabPanel>
      <!-- ... -->
    </TabPanels>
  </TabGroup>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<style scoped></style>
