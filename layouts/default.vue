<template>
  <div class="layout">
    <Nav />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>
