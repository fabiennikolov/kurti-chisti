<template>
  <div
    class="mx-a items-center justify-center gap-14 b-t-1 b-white/80 px-4 px-a py-14 md:flex .dark:b-t-1 .dark:b-white/25 .dark:bg-white/8 .light:bg-gray-900/90"
  >
    <NuxtLink to="/">
      <img src="@/logo.webp" class="m-4 inline-block h-10 h-24 w-12 w-24 flex gap-4">
    </NuxtLink>
    <a href="tel:+359879883894">
      <CoolButton class="mx-a mb-4 items-center justify-center text-3 font-bold xl:text-4">
        Обадете се сега: 0879883894
      </CoolButton>
    </a>
    <ul class="flex-col text-white/70 md:flex md:text-3 xl:text-xl">
      <li class="hover:text-white/90">
        <NuxtLink to="/">
          Начало
        </NuxtLink>
      </li>
      <li class="hover:text-white/90">
        <NuxtLink to="/faq">
          Често задавани въпроси
        </NuxtLink>
      </li>
      <li class="hover:text-white/90">
        <NuxtLink to="/about">
          За нас
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
