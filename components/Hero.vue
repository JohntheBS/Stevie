<template>
  <Swiper class="w-full h-full" :loop="true" :modules="[SwiperAutoplay]"
    :autoplay="{ delay: 4500, disableOnInteraction: false }">
    <SwiperSlide v-for="slide in ['One', 'Two', 'Three', 'Four', 'Five']" class="bg-primary/40">
      <div class="flex items-center justify-center h-full w-full">
        Slide {{ slide }}
      </div>
    </SwiperSlide>
  </Swiper>
</template>
