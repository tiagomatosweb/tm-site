<template>
  <SectionFreeLecture
    headline="Experimente Agora"
    title="Ainda em dúvida se vale a pena?"
    description="Assista a estas aulas gratuitas sem compromisso e descubra por si mesmo como meu curso pode transformar suas habilidades em Laravel. Valide seu interesse e comece sua jornada!"
    :lectures="data"
  />
</template>

<script setup>
import {coursesAPI} from '~/api/courses';

const {data} = useLazyAsyncData(() => coursesAPI.getFreeLectures(), {
  transform: r => r.data,
})
</script>
