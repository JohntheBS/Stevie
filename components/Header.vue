<template>
  <header class="relative h-screen md:h-[85vh]">
    <Hero class="relative z-auto" />
    <nav class="absolute top-0 inset-x-0 z-10">
      <div class="flex justify-between container mx-auto p-4 items-center">
        <div>
          <span
            v-for="(l, i) in 'Logo'"
            class="text-3xl"
            :class="[i % 2 == 0 ? 'text-primary' : 'text-amber-400']"
            >{{ l }}</span
          >
        </div>
        <div class="gap-8 hidden tablet:flex">
          <NuxtLink
            :to="link.url"
            :class="[
              'cursor-pointer hover:text-primary text-gray-200 [&.router-link-active]:text-primary',
            ]"
            v-for="link in links"
            >{{ link.label }}</NuxtLink
          >
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
interface NavLink {
  label: string;
  url: string;
  children?: NavLink;
}

const links: NavLink[] = [
  { label: "Home", url: "/" },
  { label: "Reservations", url: "/reservations" },
  { label: "Menu", url: "/menu" },
  { label: "About", url: "/about" },
];
</script>
