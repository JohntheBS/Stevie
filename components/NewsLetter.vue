<template>
  <div class="flex flex-col desktop:flex-row gap-4 justify-between items-center">
    <div>
      <h2 class="text-xl tablet:text-3xl text-center laptop:text-left">Subscribe to our newsletter</h2>
      <h1 class="text-xl tablet:text-3xl text-center laptop:text-left font-semibold">Receive 20% discount</h1>
    </div>
    <form class="h-14 w-full flex">
      <input type="email" class="border-0 h-full w-full basis-2/3" />
      <button type="submit"
        class="btn-colors-secondary basis-1/3 h-full px-10 uppercase hover:border-2 hover:border-white">
        subscribe
      </button>
    </form>
  </div>
</template>
