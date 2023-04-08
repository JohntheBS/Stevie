<template>
  <div>
    <!-- header -->
    <header class="bg-green-400 h-[450px]">
      <nav class="flex justify-between">
        <h1 class="text-3xl">logo</h1>
        <ul class="flex gap-5">
          <li>home</li>
          <li>about</li>
          <li>cuisine</li>
          <li>menus</li>
          <li>privatedining</li>
        </ul>
      </nav>
    </header>
    <slot />
    <!-- footer -->
    <footer>default footer</footer>
  </div>
</template>

<script setup lang="ts"></script>
<style scoped></style>
