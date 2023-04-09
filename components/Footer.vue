<template>
  <div class="relative text-white bg-primary-accent">
    <div class="w-full absolute">
      <div
        class="bg-primary text-white min-h-[10rem] laptop:max-w-screen-tablet desktop:max-w-screen-laptop tablet:max-w-screen-tablet p-4 mx-auto -translate-y-1/2 z-10 top-0"
      >
        <NewsLetter />
      </div>
    </div>
    <Section class="pt-40">
      <div class="grid grid-cols-12 gap-10">
        <div class="border-r col-span-full tablet:col-span-6 border-white/10">
          Logo
        </div>
        <div
          class="space-y-3 col-span-full tablet:col-span-6 text-sm text-white/50"
        >
          <div>
            <!-- location -->
            70 Bowman St. <br />
            South Windsor, CT 06074
          </div>
          <div>
            <p>email@gmail.com</p>
            <p>phonenumber</p>
          </div>
          <div class="flex gap-2">
            <SocialLink name="facebook" />
            <SocialLink name="twitter" />
            <SocialLink name="google" />
            <!-- sociallink -->
          </div>
        </div>
        <div class="col-span-full tablet:col-span-6">
          <h1 class="text-xl">Footer Menu</h1>
          <ul class="text-sm space-y-1 mt-2 text-white/50">
            <li>Home Page</li>
            <li>Contact Us</li>
            <li>FAQ's</li>
            <li>Feeds</li>
          </ul>
        </div>
        <div class="col-span-full tablet:col-span-6">
          <h1 class="text-xl">Footer Menu</h1>
          <ul class="text-sm space-y-1 mt-2 text-white/50">
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
            <li>link4</li>
          </ul>
        </div>
        <div></div>
      </div>
    </Section>
    <div class="bg-primary text-white p-4 border-t-2 border-white">
      <p class="text-center text-sm">
        &copy;Copyright 2023. All right reserved
      </p>
    </div>
  </div>
</template>
