<template>
  <FreeLectureSection
    headline="Experimente Antes de Decidir"
    title="Ainda em dúvida sobre se matricular?"
    description="Assista às nossas aulas gratuitas e descubra como a Jornada Vue pode transformar suas habilidades em desenvolvimento web!"
    :lectures="data"
  />
</template>

<script setup>
import {coursesAPI} from '~/common/api/courses';
import FreeLectureSection from '~/components/Lectures/FreeLectureSection.vue';

const {data} = useLazyAsyncData(() => coursesAPI.getFreeLectures(), {
  transform: r => r.data,
})
</script>
