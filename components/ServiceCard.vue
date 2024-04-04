<script setup lang="ts">
import type { CardProps } from '~/types'

const { title, description, image, link } = defineProps<CardProps>()
const router = useRouter()

function redirectToService(redirect: string) {
  router.push(redirect)
}
</script>

<template>
  <div
    v-if="title && image && link"
    class="max-w-90 w-full cursor-pointer overflow-hidden b-2 b-transparent rounded-md p-2 py-2 shadow-xl drop-shadow-xl duration-500 space-y-6 dark:b-1 dark:b-white hover:bg-gray-200/75 dark:hover:bg-slate-600"
    @click="redirectToService(link.redirect)"
  >
    <NuxtLink :to="link.redirect">
      <img :src="image" class="mx-auto h-60 w-full rounded-md object-cover" width="340" height="240" alt="Снимка на Услугата">
    </NuxtLink>
    <h3 class="text-center text-2xl font-extrabold transition-all-300">
      {{ title }}
    </h3>
    <p v-if="description" class="mt-2 text-center text-black dark:text-white">
      {{ description }}
    </p>
  </div>
</template>
