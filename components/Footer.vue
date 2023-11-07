<template>
  <div
    class="grid mx-a items-center justify-center gap-14 b-t-1 b-white/80 px-4 px-a py-14 xl:grid-cols-4 md:flex .dark:b-t-1 .dark:b-white/25 .dark:bg-white/8 .light:bg-gray-900/90"
  >
    <div>
      <NuxtLink to="/">
        <img src="@/logo.webp" class="m-4 inline-block h-10 h-24 w-12 w-24 flex gap-4">
      </NuxtLink>
    </div>
    <div class="flex flex-col">
      <p class="mb-4 font-bold md:text-4 xl:text-2xl .light:text-white">
        Последвайте ни:
      </p>
      <a href="https://www.facebook.com/profile.php?id=61553176502982" target="_blank">
        <UnoIcon class="h-8 w-8 text-white hover:text-white/60" icon="i-carbon:logo-facebook">
          asd
        </UnoIcon>
      </a>
    </div>
    <a href="tel:+359879883894">
      <button class="rounded-md bg-gray-200 px-2 py-2 text-3 font-bold text-black ring-1 ring-white duration-500 hover:bg-gray-400 xl:text-4">
        Обадете се сега: 0879883894
      </button>
    </a>
    <div>
      <p class="mb-4 font-bold md:text-4 xl:text-2xl .light:text-white">
        Страници:
      </p>
      <ul class="flex-col font-medium text-gray-200 md:flex md:text-3 xl:text-xl">
        <li class="hover:text-white">
          <NuxtLink to="/">
            Начало
          </NuxtLink>
        </li>
        <li class="hover:text-white">
          <NuxtLink to="/faq">
            Често задавани въпроси
          </NuxtLink>
        </li>
        <li class="hover:text-white">
          <NuxtLink to="/about">
            За нас
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
