<script setup lang="ts">
const showMobileMenu = ref(false)

const menuItems = [
  { text: 'Начало', route: '/' },
  { text: 'Често задавани въпроси', route: '/faq' },
  { text: 'За нас', route: '/about' },
]

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<template>
  <div class="sticky top-0 z-100 border-b border-b-white/40 bg-gray-900/90 py-2 backdrop-blur-sm">
    <div class="mx-auto w-full flex justify-between px-4 container">
      <div class="flex items-center justify-center gap-8 lg:text-1rem">
        <NuxtLink to="/">
          <img src="@/logo.webp" class="inline-block h-10 w-12 sm:h-16 sm:w-16">
        </NuxtLink>
        <NuxtLink to="/" class="text-3 font-bold text-white duration-300 sm:mt-0 sm:text-5 hover:text-gray-400">
          Кърти, чисти и извозва в град София и околността
        </NuxtLink>
      </div>
      <div class="flex items-center justify-between space-x-4">
        <button class="rounded-md text-white lg:hidden focus:bg-gray-300/25" @click="toggleMobileMenu">
          <svg
            class="" xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.5" d="M20 7H4m16 5H4m16 5H4"
            />
          </svg>
        </button>
        <div class="hidden text-sm text-white/80 lg:flex space-x-4">
          <a href="tel:+359879883894">
            <button class="rounded-md bg-gray-200 px-2 py-2 text-3 font-bold text-black duration-500 hover:bg-gray-400 xl:text-4">
              Обадете се сега: 0879883894
            </button>
          </a>
          <template v-for="item in menuItems" :key="item.id">
            <NuxtLink
              :to="item.route"
              class="py-2 text-3 font-bold text-white/80 xl:text-4 hover:text-white/90"
              :class="{ 'border-b-1 border-white': $route.path === item.route }"
              @click="toggleMobileMenu"
            >
              {{ item.text }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
    <div v-if="showMobileMenu" class="grid b-white/9 p-4 lg:hidden space-y-2">
      <a href="tel:+359879883894">
        <button class="w-full rounded-md bg-gray-200 px-2 py-2 text-3 font-bold text-black xl:text-4">
          Обадете се сега: 0879883894
        </button>
      </a>
      <template v-for="item in menuItems" :key="item.id">
        <NuxtLink :to="item.route" class="b-b-1 text-4 font-bold text-white/80 sm:px-4" @click="toggleMobileMenu">
          {{ item.text }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
