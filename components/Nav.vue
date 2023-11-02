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
  <div class="sticky top-0 z-100 bg-transparent backdrop-blur">
    <div class="mx-auto w-full flex items-center justify-between border-white/9 px-4 py-4 sm:px-12">
      <div class="flex justify-center gap-8 lg:text-1rem">
        <NuxtLink to="/">
          <img src="@/logo.png" class="my-3 inline-block max-w-35 lg:max-w-45">
        </NuxtLink>
      </div>
      <div class="flex items-center justify-between space-x-4">
        <button class="text-white lg:hidden" @click="toggleMobileMenu">
          <UnoIcon icon="i-iconamoon-menu-burger-horizontal" class="h8 w8" />
        </button>
        <div class="hidden text-sm text-white/80 lg:flex space-x-4">
          <a class="block items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-4 font-bold" href="tel:+359879883894">Обадете се сега: 0879883894</a>
          <template v-for="item in menuItems" :key="item.id">
            <NuxtLink :to="item.route" class="px2 py2 xl:hover:(rounded-md bg-white/9)" @click="toggleMobileMenu">
              {{ item.text }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>

    <div v-if="showMobileMenu" class="grid b-white/9 p-4 lg:hidden space-y-2">
      <a class="inline-block w-63 items-center justify-center rounded-md bg-blue-600 px-4 py-2" href="tel:+359879883894">Обадете се сега: 0879883894</a>
      <template v-for="item in menuItems" :key="item.id">
        <NuxtLink :to="item.route" class="text-white/80 hover:(rounded-3 bg-white/9)" @click="toggleMobileMenu">
          {{ item.text }}
        </NuxtLink>
      </template>
    </div>
  </div>
</template>
