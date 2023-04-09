<template>
  <Swiper
    class="w-full h-full"
    :loop="true"
    :modules="[SwiperAutoplay]"
    :autoplay="{ delay: 4500, disableOnInteraction: false }"
    @slide-change="(swiper) => (index = swiper.realIndex)"
  >
    <SwiperSlide
      v-for="(slide, i) in ['One', 'Two', 'Three', 'Four', 'Five']"
      class="bg-slate-900/40"
    >
      <div
        class="flex flex-col space-y-16 items-center justify-center h-full w-[min(100%,_50rem)] p-2 mx-auto text-white"
      >
        <div class="flex flex-col gap-4 items-center">
          <Transition
            enter-active-class="duration-500 delay-300"
            leave-active-class="duration-500 translate-y-0"
            enter-from-class="opacity-0 translate-y-10"
            enter-to-class="opacity-100"
          >
            <p v-if="index === i">Welcome to our dining hall {{ slide }}</p>
          </Transition>
          <Transition
            enter-active-class="duration-500 delay-500"
            leave-active-class="duration-500 translate-y-0"
            enter-from-class="opacity-0 translate-y-20"
            enter-to-class="opacity-100"
          >
            <h3
              v-if="index === i"
              class="text-2xl tablet:tablet:text-5xl text-center font-semibold"
            >
              Best place for family & friends with green & healthy food.
            </h3>
          </Transition>
        </div>
        <Transition
          enter-active-class="duration-500 delay-300"
          leave-active-class="duration-500 translate-y-0"
          enter-from-class="opacity-0 translate-y-10"
          enter-to-class="opacity-100"
        >
          <Button v-if="index === i" name="Book a table"></Button>
        </Transition>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
const index = ref();
</script>
