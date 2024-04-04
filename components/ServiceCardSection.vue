<script setup lang="ts">
import type { CardProps } from '~/types'

defineProps<{
  cards: CardProps[]
}>()
</script>

<template>
  <div class="grid grid-cols-1 mx-auto mt-12 justify-items-center gap-4 px-4 container lg:grid-cols-4 md:grid-cols-2 lt-lg:w-fit sm:px-0">
    <ServiceCard
      v-for="card in cards" :key="card.title"
      v-bind="card"
    />
  </div>
</template>
