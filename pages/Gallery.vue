<template>
  <div class="mx-auto my-24 container">
    <h1 class="mb-8 text-center text-4xl font-bold">
      Галерия на нашите обекти
    </h1>
    <div class="grid grid-cols-4 gap-4">
      <a
        v-for="i in 6"
        :key="i"
        :href="`/_nuxt/assets/images/Gallery/${i}.webp`"
        data-fancybox="gallery"
        data-caption="Image {{ i }}"
        class="group relative overflow-hidden rounded-lg shadow-md"
      >
        <div class="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 duration-500 group-hover:opacity-25" />
        <img
          width="379"
          height="279"
          class="aspect-[4/3] h-full w-full object-cover"
          :src="`/_nuxt/assets/images/Gallery/${i}.webp`"
          :alt="`Снимка ${i}`"
        >
      </a>
    </div>
  </div>
</template>
