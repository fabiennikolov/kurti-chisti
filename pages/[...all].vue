<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main class="mx-a mt-12 text-center">
    <div class="text-4xl">
      <h1 class="mb-12 text-24 font-extrabold text-gray-800">
        404
      </h1>
      <div class="inline-block" i-carbon-warning />
    </div>
    <div>Страницата не е намерена</div>
    <div>
      <button class="mt3 rounded-md bg-gray-700 px-4 py-2 text-sm text-white" @click="router.back()">
        Назад
      </button>
    </div>
  </main>
</template>
