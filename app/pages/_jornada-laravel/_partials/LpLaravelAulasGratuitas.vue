<template>
  <PageFreeLectures
    v-if="data"
    headline="Experimente Agora"
    title="Ainda em dúvida se vale a pena?"
    description="Assista a estas aulas gratuitas sem compromisso e descubra por si mesmo como meu curso pode transformar suas habilidades em Laravel. Valide seu interesse e comece sua jornada!"
    :lectures="data"
  />
</template>

<script setup>
import PageFreeLectures from '~/components/Page/PageFreeLectures.vue';

const { data } = useApiFetch('api/lectures/free', {
  lazy: true,
  query: {
    'filter[course_id]': 32,
  },
  transform: (response) => response.data,
})
</script>
