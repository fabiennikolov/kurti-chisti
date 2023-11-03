<script setup lang="ts">
const showMobileMenu = ref(false)

const menuItems = [
  { text: 'Често задавани въпроси', route: '/faq' },
  { text: 'За нас', route: '/contacts' },
]

function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value
}
</script>

<template>
  <div class="sticky top-0 z-100 border-b border-b-white/9 bg-black/60 backdrop-blur-sm">
    <div class="mx-auto w-full flex items-center justify-between px-4 py-4 container sm:px-12">
      <div class="flex items-center justify-center gap-8 lg:text-1rem">
        <NuxtLink to="/">
          <img src="@/logo.webp" class="inline-block h-10 w-12 sm:h-16 sm:w-16">
        </NuxtLink>
        <p class="text-3 font-bold text-blue/95 sm:mt-0 sm:text-5">
          Кърти, чисти и извозва в град София и околността
        </p>
      </div>
      <div class="flex items-center justify-between space-x-4">
        <button class="text-white lg:hidden" @click="toggleMobileMenu">
          <svg
            class=".light:text-black" xmlns="http://www.w3.org/2000/svg"
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
            <CoolButton class="text-3 font-bold xl:text-4">
              Обадете се сега: 0879883894
            </CoolButton>
          </a>
          <template v-for="item in menuItems" :key="item.id">
            <NuxtLink :to="item.route" class="b-1 b-white rounded-md px-4 py-2 text-3 font-bold text-white/80 xl:text-4 hover:(.dark:bg-white/9 .light:bg-black/20)" @click="toggleMobileMenu">
              {{ item.text }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>
    <div v-if="showMobileMenu" class="grid b-white/9 p-4 lg:hidden space-y-2">
      <a class="inline-block w-64 items-center justify-center b-1 b-white rounded-md bg-blue-600 px-4 py-2" href="tel:+359879883894">Обадете се сега: 0879883894</a>
      <template v-for="item in menuItems" :key="item.id">
        <NuxtLink :to="item.route" class="b-b-1 text-4 font-bold text-white/80 sm:px-4 hover:(.dark:bg-white/9 .light:bg-black/20)" @click="toggleMobileMenu">
          {{ item.text }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
