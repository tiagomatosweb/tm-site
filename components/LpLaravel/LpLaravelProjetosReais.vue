<template>
  <RealProjectSection
    :items="items"
  />
</template>

<script setup>
import RealProjectSection from '~/components/RealProjects/RealProjectSection.vue';
import {coursesAPI} from '~/common/api/courses';
import ScreenshotAgendaMe from '@/assets/img/screenshot-agendame.webp';

const {data} = useLazyAsyncData(() => coursesAPI.getCourses({
  'filter[ids]': '28'
}).then(r => r.data))

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
