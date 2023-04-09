<template>
  <div class="py-10 px-20">
    <header class="pb-10 space-y-2">
      <h2 class="text-primary text-xl">Book your table now</h2>
      <h1 class="text-4xl font-bold text-primary-accent">
        Best dining experience
      </h1>
    </header>
    <form class="grid grid-cols-2 gap-6">
      <Input label="Your name" placeholder="Enter your name" type="text" />
      <Input label="Email address" placeholder="Enter your email" type="text" />
      <div class="grid">
        <label for="date">Select your date:</label>
        <select name="date" id="date">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <div class="grid">
        <label for="people">Number of people</label>
        <select
          name="people"
          id="people"
          class="border-primary-accent/40 focus:border-0 focus:ring-1 focus:ring-primary"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="3">3</option>
        </select>
      </div>
      <button class="btn btn-colors-tertiary">book a table</button>
    </form>
  </div>
</template>
