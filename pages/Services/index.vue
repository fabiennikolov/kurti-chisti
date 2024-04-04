<script setup lang="ts">
import type { CardProps } from '~/types'

const title = ref('Открийте Света на Нашите Услуги: Качество, Надеждност, Удовлетворение')
const description = ref('Това е част от нашите услуги')

const cards = ref<CardProps[]>([
  {
    title: 'Кърти',
    link: {
      redirect: '/services/kurti',
    },
    image: 'https://kurti-chisti-izvozva.bg/_nuxt/background.BxnakYZG.jpg',
    description: 'Предлагаме професионално къртене на сгради и съоръжения с използване на специализирана техника. Безопасно, ефективно и надеждно изпълнение на проекти за всички видове обекти.',
  },
  {
    title: 'Чисти',
    link: {
      redirect: '/services/chisti',
    },
    image: 'https://kurti-chisti-izvozva.bg/_nuxt/bus.L69gkB0i.jpg',
    description: 'Предлагаме висококачествени услуги за чистене на домове, офиси и комерсиални обекти. Нашите професионални екипи използват съвременна техника и екологично приятни почистващи средства, за да осигурят безупречна чистота и хигиена.',
  },
  {
    title: 'Извозва',
    link: {
      redirect: '/services/izvozva',
    },
    image: 'https://kurti-chisti-izvozva.bg/_nuxt/sectionimg2.B3iW5tow.png',
    description: 'Предоставяме услуги за извозване на отпадъци и ненужни материали от различни места - домове, офиси, строителни площадки и други обекти.',
  },
  {
    title: 'Ремонтира',
    link: {
      redirect: '/services/remontira',
    },
    image: 'https://kurti-chisti-izvozva.bg/_nuxt/cleaning.BHpy88DE.jpg',
    description: 'Ние предоставяме услуги за професионално ремонтиране на домове, офиси и комерсиални обекти.',
  },

])
</script>

<template>
  <h1 class="my5 text-center text-4xl font-500">
    {{ title }}
  </h1>
  <h2 class="my1 text-center text-2xl">
    {{ description }}
  </h2>
  <ServiceCardSection :cards="cards" />
</template>
