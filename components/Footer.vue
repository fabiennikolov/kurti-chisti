<template>
  <section class="flex flex-col lg:justify-end">
    <div class="w-full border-t bg-gray-800/90 py-4 dark:border-gray-900 dark:bg-gray-900">
      <div class="mx-auto max-w-6xl">
        <div class="mx-auto max-w-6xl flex-1 justify-center px-4 py-2 lg:py-0">
          <div class="flex flex-wrap py-4 -mx-3">
            <div class="mb-7 w-full px-4 lg:mb-0 lg:w-4/12 md:w-1/2">
              <p class="inline-block pb-2 text-lg font-bold text-gray-300">
                За фирмата
              </p>
              <div class="mb-4 w-16 border-b-2 border-gray-200 dark:border-gray-600" />
              <p class="leading-6 text-gray-300 lg:w-64">
                Хамали 8 е нова фирма, предлагаща хамалски услуги в София и национално.
              </p>
            </div>
            <div class="mb-7 w-full px-4 lg:mb-0 lg:w-2/12 md:w-1/4">
              <h2 class="pb-2 text-lg font-bold text-gray-300 duration-500 hover:text-white">
                Бърз достъп
              </h2>
              <div class="mb-4 w-16 border-b-2 border-gray-200 dark:border-gray-600" />
              <ul class="text-gray-300">
                <li class="mb-4">
                  <NuxtLink to="/" class="inline-block text-base font-normal duration-500 hover:text-white">
                    Начало
                  </NuxtLink>
                </li>
                <li class="mb-4">
                  <NuxtLink to="/about" class="inline-block text-base font-normal duration-500 hover:text-white">
                    За нас
                  </NuxtLink>
                </li>
                <li class="mb-4">
                  <NuxtLink to="/faq" class="inline-block text-base font-normal duration-500 hover:text-white">
                    Често задавани въпроси
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mb-7 w-full px-4 lg:mb-0 lg:w-2/12 md:w-1/4">
              <h2 class="pb-2 text-lg font-bold text-gray-300 duration-500 hover:text-white">
                Услуги
              </h2>
              <div class="mb-4 w-16 border-b-2 border-gray-200 dark:border-gray-600" />
              <ul class="text-gray-300">
                <li class="mb-4">
                  <NuxtLink href="/services/kurti" class="inline-block text-base font-normal duration-500 hover:text-white">
                    Кърти
                  </NuxtLink>
                </li>
                <li class="mb-4">
                  <NuxtLink href="/services/chisti" class="inline-block text-base font-normal duration-500 hover:text-white">
                    Чисти
                  </NuxtLink>
                </li>
                <li class="mb-4">
                  <NuxtLink href="/services/izvozva" class="inline-block text-base font-normal duration-500 hover:text-white">
                    Извозва
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="mb-2 w-full px-4 lg:mb-0 lg:w-4/12 md:w-1/3">
              <h2 class="pb-2 text-lg font-bold text-gray-300 duration-500 hover:text-white">
                Контакти
              </h2>
              <div class="mb-4 w-16 border-b-2 border-gray-200 dark:border-gray-600" />
              <p class="mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt mr-1 h-4 w-4 text-gray-200" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <span class="text-gray-300 duration-500 hover:text-white">София</span>
              </p>
              <p class="mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope mr-2 h-4 w-4 text-gray-200" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                </svg>
                <a href="mailto:hblagoev21@abv.bg" class="text-gray-300 duration-500 hover:text-white">hblagoev21@abv.bg</a>
              </p>
              <p class="mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone mr-2 h-4 w-4 text-gray-200" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
                <a class="text-gray-300 duration-500 hover:text-white" href="tel:+359879883894">+359879883894</a>
              </p>
            </div>
          </div>
        </div>
        <div class="mb-4 flex flex-wrap items-center justify-start gap-4 px-4">
          <h2 class="mb-4 text-2xl font-semibold tracking-wider text-gray-300 duration-500 lg:mb-0 dark:text-gray-400 hover:text-white">
            Абонирай се, за да вземеш отстъпка !
          </h2>
          <div class="flex flex-wrap">
            <div class="mb-2 w-full py-1 lg:mb-0 lg:mr-3 lg:flex-1 lg:py-0">
              <input type="email " class="inline-block h-12 w-full border rounded-md px-3 text-gray-700 duration-500 dark:border-gray-700 dark:bg-gray-700 dark:text-gray-400 hover:text-white placeholder-gray-500 dark:placeholder-gray-400" placeholder="email">
            </div>
            <div class="w-full py-1 lg:w-auto lg:py-0">
              <a href="#" class="inline-block w-full rounded-md bg-gray-400 px-5 py-4 text-center font-medium leading-4 text-gray-900 duration-300 duration-500 dark:bg-gray-700 hover:bg-gray-200 dark:text-gray-400 dark:hover:bg-gray-800">Абонирай се</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-300 px-4 py-6 dark:bg-gray-800 dark:text-gray-400">
      <div class="mx-auto max-w-6xl flex flex-wrap items-center justify-center gap-4">
        <div class="ml-4">
          © Copyright 2023 . Всички права запазени
        </div>
      </div>
    </div>
  </section>
</template>
