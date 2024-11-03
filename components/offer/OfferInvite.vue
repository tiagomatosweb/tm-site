<template>
  <h3 class="heading-3">
    {{ props.title }}
  </h3>

  <p class="text-description mt-2">
    {{ props.description }}
  </p>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Junte-se à Elite'
  },
  description: {
    type: String,
    default: 'Faça parte de mais dos mais de 2k de alunos. Aqui forjamos profissionais altamente qualificados para encarar o mercado.'
  },
})
</script>
