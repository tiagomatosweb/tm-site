<template>
  <PageFreeLectures
    v-if="data"
    headline="Experimente Antes de Decidir"
    title="Ainda em dúvida sobre se matricular?"
    description="Assista às nossas aulas gratuitas e descubra como a Jornada Vue pode transformar suas habilidades em desenvolvimento web!"
    :lectures="data"
  />
</template>

<script setup>
import PageFreeLectures from '~/components/Page/PageFreeLectures.vue';

const { data } = useApiFetch('api/lectures/free', {
  lazy: true,
  query: {
    'filter[course_id]': '14,30,34',
  },
  transform: (response) => response.data,
})
</script>
