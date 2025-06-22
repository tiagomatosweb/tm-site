<template>
  <FaqSection
    title="Ainda tem alguma dúvida? 🤔"
    description="Aqui estão as perguntas mais comuns sobre o curso. Se você ainda tiver alguma dúvida, não hesite em entrar em contato!"
    :items="items"
  />
</template>

<script setup>
import FaqSection from '~/components/Faq/FaqSection.vue';

const items = ref([
  {
    label: 'O que é a Jornada Vue?',
    content: '<p>A Jornada Vue é um curso completo que ensina Vue.js desde os fundamentos até conceitos avançados, focando na prática.</p>',
  },
  {
    label: 'O que vou aprender na Jornada Vue?',
    content: '<p>Na Jornada Vue, você aprenderá desde os conceitos básicos do Vue.js até técnicas avançadas para criar aplicações dinâmicas e escaláveis. Começaremos sem ferramentas de empacotamento, para garantir que você entenda cada recurso do framework na raiz. Depois, avançaremos para o uso de ferramentas modernas e projetos práticos que solidificarão seu conhecimento.</p>',
  },
  {
    label: 'Preciso de conhecimentos prévios em programação?',
    content: '<p>É recomendável ter noções básicas de HTML, CSS e JavaScript para aproveitar melhor o curso.</p>',
  },
])
</script>
