<template>
  <FaqSection
    :items="items"
  />
</template>

<script setup>
import FaqSection from '~/components/Faq/FaqSection.vue';

const items = ref([
  {
    label: 'O que é a Jornada Laravel?',
    content: '<p>A Jornada Laravel é um curso completo, criado para ensinar Laravel do básico ao avançado. Ele foi estruturado para que você aprenda cada etapa do framework de forma prática, construindo projetos reais e desenvolvendo habilidades que vão prepará-lo para o mercado de trabalho.</p>',
  },
  {
    label: 'O que vou aprender na Jornada Laravel?',
    content: '<p>Na Jornada Laravel, você aprenderá desde os fundamentos do framework, como rotas e controllers, até técnicas avançadas para desenvolver aplicações robustas. O curso inclui tópicos essenciais de autenticação, APIs, Eloquent ORM, testes, e integração com front-end. A cada módulo, você irá colocar em prática o que aprendeu, criando projetos reais e ganhando confiança para enfrentar desafios no desenvolvimento web.</p>',
  },
  {
    label: 'Preciso ter experiência prévia em PHP para aprender Laravel?',
    content: '<p>É importante ter uma noção básica de PHP, incluindo variáveis, estruturas como if e foreach, funções e uma ideia de como usar classes e objetos. Isso ajudará você a acompanhar melhor o conteúdo do curso.</p>',
  },
])
</script>
