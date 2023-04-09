<template>
  <header class="relative h-screen md:h-[85vh]">
    <Hero class="relative z-auto" />
    <nav class="absolute top-0 inset-x-0 z-10">
      <div class="flex justify-between container mx-auto p-4">
        <span>Logo</span>
        <div class="flex gap-3">
          <NuxtLink :to="link === 1 ? `/` : `/${link}`"
            :class="['cursor-pointer hover:text-primary [&.router-link-active]:text-primary', link === 1 ? 'text-primary' : 'text-slate-500']"
            v-for="link in [1, 2, 3, 4]">Link {{ link }}</NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
