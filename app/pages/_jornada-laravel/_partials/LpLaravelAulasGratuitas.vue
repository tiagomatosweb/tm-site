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
import axios from 'axios';
import PageFreeLectures from '~/components/Page/PageFreeLectures.vue';

const {data} = useLazyAsyncData('laravel-free-lecture', () => axios.get('api/lectures/free', {
  params: {
    'filter[course_id]': 32,
  },
}).then((res) => res.data))
</script>
