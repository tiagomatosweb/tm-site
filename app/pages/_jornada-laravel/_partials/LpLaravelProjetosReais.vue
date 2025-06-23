<template>
  <PageProjects
    :items="items"
  />
</template>

<script setup>
import PageProjects from '~/components/Page/PageProjects.vue';
import {coursesAPI} from '~/api/courses';
import ScreenshotAgendaMe from 'assets/img/screenshot-agendame.webp';
import axios from 'axios';

const {data} = useLazyAsyncData('vue-projects', () => axios.get('api/courses', {
  params: {
    'filter[ids]': '28',
  },
}).then((res) => res.data))


const items = computed(() => !data.value?.length ? [] : data.value?.map(o => {
  if (o.id === 28) {
    return {
      id: o.id,
      img: ScreenshotAgendaMe,
      headline: 'MULTI-TENANT',
      title: o.title,
      subtitle: 'Construa um projeto SaaS completo de agendamento de consultas.',
      description: 'Prepare-se para criar um SaaS poderoso e funcional, aplicando as melhores práticas e funcionalidades como fluxo de autenticação, planos de assinaturas e cargos e permissões.',
      duration: o.duration,
      lectures_count: o.lectures_count,
    }
  }

  return {}
}))
</script>
