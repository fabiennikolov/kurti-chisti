<template>
  <section class="font-poppins flex items-center py-20 dark:bg-gray-800">
    <div class="mx-auto max-w-6xl flex-1 justify-center px-4 py-4 lg:py-6 md:px-6">
      <div class="flex flex-wrap items-center">
        <div class="mb-10 w-full px-4 lg:mb-8 xl:w-1/2">
          <div class="flex flex-wrap">
            <div class="w-full px-4 md:w-1/2">
              <img
                width="273" height="183"
                src="~/assets/images/cleaning.jpg" alt="Услуга чистене"
                class="mb-6 h-80 w-full rounded-lg object-cover"
              >
              <img
                width="4128" height="2322"
                src="~/assets/images/bus.jpg" alt="Услуга Превоз"
                class="h-80 w-full rounded-lg object-cover"
              >
            </div>
            <div class="w-full px-4 xl:mt-11 md:w-1/2">
              <img
                width="626" height="417"
                src="~/assets/images/sectionimg.png" alt="Снимка на Кърти-чисти-извозва"
                class="mb-6 h-80 w-full rounded-lg object-cover"
              >
              <img
                width="626" height="364"
                src="~/assets/images/sectionimg2.png" alt="Снимка на Кърти-чисти-извозва"
                class="h-80 w-full rounded-lg object-cover"
              >
            </div>
          </div>
        </div>
        <div class="mb-10 w-full px-4 lg:mb-8 xl:w-1/2">
          <span class="text-3xl text-5xl font-semibold text-gray-700">Защо да изберете нас</span>
          <h2 class="mb-4 mt-2 text-2xl font-bold text-gray-700 dark:text-gray-300">
            Оставете тежката работа на нас !
          </h2>
          <p class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400">
            Ние сме вашият любим източник за практични, полезни и интелигентни решения за дома и офиса,
            които могат да направят всеки аспект от вашия натоварен живот по-лесен.
          </p>
          <ul class="mb-10">
            <li class="mb-4 flex items-center text-base text-gray-600 dark:text-gray-400">
              <span class="mr-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-1-circle-fill h-6 w-6" viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z"
                  />
                </svg>
              </span>
              Професионализъм и опит
            </li>
            <li class="mb-4 flex items-center text-base text-gray-600 dark:text-gray-400">
              <span class="mr-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-2-circle-fill h-6 w-6" viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24c0-.691.493-1.306 1.336-1.306.756 0 1.313.492 1.313 1.236 0 .697-.469 1.23-.902 1.705l-2.971 3.293V12h5.344v-1.107H7.268v-.077l1.974-2.22.096-.107c.688-.763 1.287-1.428 1.287-2.43 0-1.266-1.031-2.215-2.613-2.215-1.758 0-2.637 1.19-2.637 2.402v.065h1.271v-.07Z"
                  />
                </svg>
              </span>
              Съвременно оборудване
            </li>
            <li class="mb-4 flex items-center text-base text-gray-600 dark:text-gray-400">
              <span class="mr-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-3-circle-fill h-6 w-6" viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8.082.414c.92 0 1.535.54 1.541 1.318.012.791-.615 1.36-1.588 1.354-.861-.006-1.482-.469-1.54-1.066H5.104c.047 1.177 1.05 2.144 2.754 2.144 1.653 0 2.954-.937 2.93-2.396-.023-1.278-1.031-1.846-1.734-1.916v-.07c.597-.1 1.505-.739 1.482-1.876-.03-1.177-1.043-2.074-2.637-2.062-1.675.006-2.59.984-2.625 2.12h1.248c.036-.556.557-1.054 1.348-1.054.785 0 1.348.486 1.348 1.195.006.715-.563 1.237-1.342 1.237h-.838v1.072h.879Z"
                  />
                </svg>
              </span>
              Персонализирани решения
            </li>
            <li class="mb-4 flex items-center text-base text-gray-600 dark:text-gray-400">
              <span class="mr-3 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-4-circle-fill h-6 w-6" viewBox="0 0 16 16"
                >
                  <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176c-.218.352-.438.703-.657 1.055ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z"
                  />
                </svg>
              </span>
              Отлични препоръки
            </li>
          </ul>
          <NuxtLink
            to="/about"
            class="rounded-md bg-gray-700 px-4 py-2 text-gray-100"
          >
            Научи повече
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
