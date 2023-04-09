<template>
  <div class="flex gap-5 items-center flex-wrap">
    <div>
      <h2 class="text-xl">Subscribe to our newsletter</h2>
      <h1 class="text-base">Receive 20% discount</h1>
    </div>
    <form class="flex items-center h-full">
      <input
        type="email"
        placeholder="Your email here"
        class="focus:ring-0 focus:border-primary"
      />
      <button
        type="submit"
        class="bg-primary hover:text-primary-accent w-full px-4 py-3"
      >
        <nuxt-icon name="send" class="" />
      </button>
    </form>
  </div>
</template>
