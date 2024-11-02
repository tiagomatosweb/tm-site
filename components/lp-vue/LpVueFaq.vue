<template>
  <FaqSection
    title="Ainda tem alguma dúvida? 🤔"
    description="Aqui estão as perguntas mais comuns sobre o curso. Se você ainda tiver alguma dúvida, não hesite em entrar em contato!"
    :items="items"
  />
</template>

<script setup>
import {ref} from 'vue';
import FaqSection from '~/components/faq/FaqSection.vue';

const items = ref([
  {
    title: 'O que é a Jornada Vue?',
    text: '<p>A Jornada Vue é um curso completo que ensina Vue.js desde os fundamentos até conceitos avançados, focando na prática.</p>',
    is_open: true,
  },
  {
    title: 'O que vou aprender na Jornada Vue?',
    text: '<p>Na Jornada Vue, você aprenderá desde os conceitos básicos do Vue.js até técnicas avançadas para criar aplicações dinâmicas e escaláveis. Começaremos sem ferramentas de empacotamento, para garantir que você entenda cada recurso do framework na raiz. Depois, avançaremos para o uso de ferramentas modernas e projetos práticos que solidificarão seu conhecimento.</p>',
  },
  {
    title: 'Preciso de conhecimentos prévios em programação?',
    text: '<p>É recomendável ter noções básicas de HTML, CSS e JavaScript para aproveitar melhor o curso.</p>',
  },
])
</script>
