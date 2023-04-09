<template>
  <div class="relative text-white bg-primary-accent">
    <Section class="space-y-6">
      <NewsLetter />
      <div class="grid tablet:grid-cols-2 items-center wide:grid-cols-4 gap-10">
        <div class="border-r border-white/10">Logo</div>
        <div class="space-y-3 text-sm text-white/50 text-left">
          <div>
            <!-- location -->
            70 Bowman St. <br />
            South Windsor, CT 06074
          </div>
          <div>
            <p>email@gmail.com</p>
            <p>phonenumber</p>
          </div>
          <div class="w-full flex justify-left">
            <div class="flex gap-5">
              <SocialLink name="facebook" />
              <SocialLink name="twitter" />
              <SocialLink name="google" />
            </div>
            <!-- sociallink -->
          </div>
        </div>
        <div class="text-left">
          <h1 class="text-xl">Footer Menu</h1>
          <ul class="text-sm space-y-1 mt-2 text-white/50">
            <li>Home Page</li>
            <li>Contact Us</li>
            <li>FAQ's</li>
            <li>Feeds</li>
          </ul>
        </div>
        <div class="text-left">
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
    <div class="bg-primary text-white p-2 tablet:p-4 border-t-2 border-white">
      <p class="text-center text-xs tablet:text-sm">
        &copy;Copyright 2023. All right reserved
      </p>
    </div>
  </div>
</template>
