<template>
  <div
    v-if="show"
    class="p-3 btn-colors-secondary grid place-items-center rounded fixed bottom-6 right-6 shadow-[0px_0px_10px_-2px] shadow-white animate-bounce [animation-duration:_2s_ease-in] cursor-pointer"
    @click="scrollToTop"
  >
    <nuxt-icon name="arrow-up" class="text-sm" />
  </div>
</template>

<script setup lang="ts">
const scrollToTop = () => window.scrollTo({ behavior: "smooth", top: 0 });
const { x, y } = useScroll(window.document);

const show = computed(() => y.value > 100);
</script>
