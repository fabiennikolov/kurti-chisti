<template>
  <div
    class="mx-a flex items-center justify-center gap-14 b-t-1 b-black px-4 py-14 .dark:b-t-1 .dark:b-white/25 .dark:bg-white/8 .light:bg-gray-600/25"
  >
    <NuxtLink to="/">
      <img src="@/logo.webp" class="inline-block h-10 w-12 sm:h-16 sm:w-16">
    </NuxtLink>
    <a href="tel:+359879883894">
      <CoolButton class="text-3 font-bold xl:text-4">
        Обадете се сега: 0879883894
      </CoolButton>
    </a>
    <ul class="flex flex-col text-xl">
      <li>
        <NuxtLink to="/">
          Начало
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/faq">
          Често задавани въпроси
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          За нас
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
