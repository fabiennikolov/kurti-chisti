<template>
  <div class="relative w-full px-12 py-28">
    <div class="relative z-10 mx-auto h-auto w-fit rounded-lg bg-transparent px-2 py-24 text-center md:py-24">
      <h1 class="mb-12 text-center text-5xl font-bold">
        Кърти Чисти Извозва
      </h1>
      <a class="mx-auto w-fit flex px-4 text-2xl font-bold" href="tel:+359879883894">
        <button class="rounded-md bg-gray-200 px-4 py-2 font-bold text-black ring-2 ring-black duration-300 hover:bg-gray-400">
          Обадете се сега
        </button>
      </a>
    </div>
    <img alt="KVM background image" width="1905" height="700" src="~/assets/images/background.jpg" class="absolute inset-0 h-full w-full object-cover">
  </div>
  <div class="mx-auto bg-gray-300 p-4 text-5 xl:p-12">
    <div class="mx-auto max-w-5xl space-y-3">
      <p>
        Ние сме вашият любим източник за практични, полезни и интелигентни решения за дома и офиса, които могат да направят всеки аспект от вашия натоварен живот по-лесен.
      </p>
      <p>
        За нас чистото и организирано пространство означава, повече организираност и свобода на клиентите ни. Използваме модерни техники и продукти за къртене, чистене и извозване.
      </p>
      <p>
        Това което ни отличава, е нашата отдаденост към пълното удовлетворяване на клиентите и ние сме готови да отговорим и да надхвърли вашите очаквания.
      </p>
      <p>
        С Нас, можете да се насладите на спокойствие, знаейки, че вашия дом или офис са в ръцете на експерти.
        Нашите услуги са достъпни, ефективни и гарантирано ще оставим след себе си блестяща и уютна обстановка.
      </p>
    </div>
  </div>
  <Section />
  <div class="mx-auto max-w-6xl w-fit px-4 py-10 leading-6 md:mt-20 space-y-14">
    <section class="grid gap-10 md:grid-cols-[1.5fr_1fr]">
      <div lt-md="xl:text-center xl:text-end">
        <h3 class="mb-4 text-end font-bold uppercase">
          Къртачни услуги
        </h3>
        <p>
          Къртачните услуги включват изкопаване, демолиция, извозване на материали и други строителни дейности, извършвани от специализирани фирми и индивидуални изпълнители със специална техника и оборудване. Те са от съществено значение за подготовката на строителни площадки и реализацията на различни проекти в строителството и инфраструктурата.
        </p>
      </div>
      <img src="~/assets/images/sectionimg.png" width="626" height="417" class="justify-self-center rounded-lg">
    </section>
    <section class="grid gap-4 md:grid-cols-[1fr_1.5fr]">
      <img src="~/assets/images/moving.jpg" width="626" height="417" class="order-last justify-self-center rounded-lg md:order-first">
      <div>
        <h3 class="mb-4 font-bold uppercase">
          Извозващи услуги
        </h3>
        <p>
          Извозващи услуги предоставят удобен и ефективен начин за пренос на различни стоки или предмети от едно място до друго, като осигуряват бърз и надежден транспорт. Тези услуги предоставят удовлетворение на клиентите, като ги освобождават от грижите за пренос и ги насочват към другите аспекти на техния живот или бизнес.
        </p>
      </div>
    </section>
  </div>
  <h2 class="my-8 text-center text-4xl font-bold sm:text-5xl">
    Нашите цени
  </h2>
  <div class="bg-gray-800 px-4 py-12">
    <div class="grid grid-cols-1 mx-auto text-white container md:grid-cols-3">
      <div class="flex flex-col">
        <p class="mb-4 mt-4 text-3xl font-bold">
          Вид услуга
        </p>
        <ul class="items-center b-b-1 b-t-1 bg-gray-600/75 space-y-2 divide-y xl:text-5">
          <li>Къртене на бетон</li>
          <li>Къртене на тухла</li>
          <li>Къртене на плочки</li>
          <li>Къртене на мозайка</li>
          <li>Къртене на баня</li>
          <li>Къртене на дървени каси</li>
          <li>Къртене на метални каси</li>
          <li>За всякакво друго къртене</li>
        </ul>
      </div>
      <div class="flex flex-col">
        <p class="mb-4 mt-4 text-3xl font-bold">
          Мерна единица
        </p>
        <ul class="b-b-1 b-t-1 space-y-2 divide-y xl:text-5">
          <li>кв.м</li>
          <li>кв.м</li>
          <li>кв.м</li>
          <li>кв.м</li>
          <li>цялостно</li>
          <li>цялостно</li>
          <li>цялостно</li>
          <li>цялостно / кв.м</li>
        </ul>
      </div>
      <div class="flex flex-col">
        <p class="mb-4 mt-4 text-3xl font-bold">
          Цена:
        </p>
        <ul class="b-b-1 b-t-1 bg-gray-600/75 font-bold space-y-2 divide-y xl:text-5">
          <li>от 30лв</li>
          <li>от 15лв</li>
          <li>от 14лв</li>
          <li>от 20лв</li>
          <li>по дог.</li>
          <li>от 50лв</li>
          <li>от 70лв</li>
          <li>по дог.</li>
        </ul>
      </div>
    </div>
  </div>
</template>
