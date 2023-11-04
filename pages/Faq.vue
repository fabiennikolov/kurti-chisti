<script setup lang="ts">
interface FaqItem {
  question: string
  answer: string
  showAnswer: boolean
}

const faqItems: Ref<FaqItem[]> = ref([
  {
    question: 'How do I register my team ?',
    answer: 'You can easily register your team by filling out the registration form or contacting us through our official Discord channel.',
    showAnswer: false,
  },
  {
    question: 'Am I eligible for rewards ?',
    answer: 'To check your eligibility for rewards, please refer to the rules and guidelines provided in our Discord channel.',
    showAnswer: false,
  },
  {
    question: 'What kind of rewards can I earn ?',
    answer: 'We offer a variety of exciting rewards, including cash prizes, in-game currency, and much more!',
    showAnswer: false,
  },

])

function toggleAnswer(faq: FaqItem) {
  faq.showAnswer = !faq.showAnswer
}
</script>

<template>
  <div class="mx-auto mt-15 max-w-6xl p-6">
    <h1 class="mb-10 text-3xl font-semibold">
      Frequently Asked Questions
    </h1>
    <ul class="space-y-6">
      <li v-for="(faq, index) in faqItems" :key="index">
        <h2
          class="cursor-pointer rounded-3 px-4 py-2 text-lg duration-200 .dark:bg-white/9 .light:bg-gray-300 .dark:hover:bg-white/12 .light:hover-bg-gray-100"
          @click="toggleAnswer(faq)"
        >
          {{ faq.question }}
          <UnoIcon
            v-if="faq.showAnswer"
            icon="i-ic-round-minus"
            class="float-right mt1"
          />
          <UnoIcon
            v-else
            icon="i-ic-round-add"
            class="float-right mt1"
          />
        </h2>
        <p v-if="faq.showAnswer" class="ml2 mt-3 text-gray-300">
          {{ faq.answer }}
        </p>
      </li>
    </ul>
  </div>
  <Newsletter />
</template>
