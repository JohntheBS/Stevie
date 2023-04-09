<template>
  <div class="relative text-white">
    <div class="w-full absolute">
      <div
        class="bg-primary text-white h-40 w-full mx-auto max-w-[1200px] -translate-y-1/2 z-10 top-0"
      >
        <NewsLetter />
      </div>
    </div>
    <div class="bg-primary-accent px-20 pt-28">
      <div class="grid grid-cols-4 gap-5 p-14">
        <div class="border-r border-white/10">Logo</div>
        <div class="space-y-3 text-sm text-white/50">
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
            <SocialLink />
            <SocialLink />
            <SocialLink />
            <!-- sociallink -->
          </div>
        </div>
        <div>
          <h1 class="text-xl">Footer Menu</h1>
          <ul class="text-sm space-y-3 mt-5 text-white/50">
            <li>Home Page</li>
            <li>Contact Us</li>
            <li>FAQ's</li>
            <li>Feeds</li>
          </ul>
        </div>
        <div>
          <h1 class="text-xl">Footer Menu</h1>
          <ul class="text-sm space-y-3 mt-5 text-white/50">
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
            <li>link4</li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
    <div class="bg-primary text-white p-4 border-t-2 border-white">
      <p class="text-center text-sm">
        &copy;Copyright 2023. All right reserved
      </p>
    </div>
  </div>
</template>
