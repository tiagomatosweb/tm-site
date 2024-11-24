<template>
  <RealProjectSection
    :items="items"
  />
</template>

<script setup>
import RealProjectSection from '~/components/RealProjects/RealProjectSection.vue';
import {coursesAPI} from '~/common/api/courses';
import ScreenshotAgendaMe from '@/assets/img/screenshot-agendame.webp';
import ScreenshotOrdemDeServico from '@/assets/img/screenshot-ordem-de-servico.webp';
import ScreenshotVuetifyCart from '@/assets/img/screenshot-vuetify-cart.webp';

const {data} = useLazyAsyncData(() => coursesAPI.getCourses({
  'filter[ids]': '28,34,14'
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
  } else if (o.id === 34) {
    return {
      id: o.id,
      img: ScreenshotOrdemDeServico,
      headline: 'Gereciamento de estado',
      title: 'Ordem de serviço',
      subtitle: 'Domine o gerenciamento de estado com Pinia.',
      description: 'Aprenda todas as técnicas de gerenciamento de estado usando Pinia, do básico ao avançado. No final, aplique o que aprendeu criando um gerador de ordens de serviço simples e funcional, totalmente controlado pelo estado do Pinia.',
      duration: o.duration,
      lectures_count: o.lectures_count,
    }
  } else if (o.id === 14) {
    return {
      id: o.id,
      img: ScreenshotVuetifyCart,
      headline: 'VUETIFY',
      title: o.title,
      subtitle: 'Construa um carrinho de compras completo com Vuetify e Pinia.',
      description: 'Domine as técnicas fundamentais para criar um carrinho de compras eficiente: adicionar, remover itens, calcular subtotal e total. Tudo isso usando Pinia para gerenciar o estado do carrinho de forma prática e moderna, integrado ao Vuetify para uma interface elegante e responsiva.',
      duration: o.duration,
      lectures_count: o.lectures_count,
    }
  }

  return {}
}))
</script>
