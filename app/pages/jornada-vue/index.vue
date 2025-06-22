<template>
  <LandingHero
    title="Jornada Vue: da Raiz ao Avançado"
    description="Aprenda Vue.js sem atalhos, entendendo cada recurso do zero. Domine o essencial e avance para técnicas modernas com confiança."
  >
    <template #before-title>
      <IconVue class="mb-2"/>
    </template>

    <template #after-description>
      <div class="flex justify-center flex-wrap lg:justify-start gap-6 mt-6">
        <BadgeCourseCount :number="stats?.courses_count"/>
        <BadgeLectureCount :number="stats?.lectures_count"/>
        <BadgeDuration :duration="stats?.duration"/>
      </div>

      <UButton
        size="3xl"
        color="cta"
        trailing-icon="i-lucide-arrow-right"
        class="mt-10"
        href="https://pay.hotmart.com/U96627395Y?checkoutMode=10"
        label="Matricule-se agora"
      />
    </template>

    <template #content-right>
      <CodeSnippetVue/>
    </template>
  </LandingHero>

  <LpVueOQueE/>

  <LpVueParaQuemE/>

  <!--    <LpVueOQueVouAprender/>-->

  <LpVueModulos/>

  <LpVueProjetosReais/>

  <LpVuePorqueAprenderComigo/>

  <PageTestimonial
    headline="Depoimentos Inspiradores"
    title="Alavanque sua carreira com a Jornada Vue"
    description="Junte-se a mais de 1k alunos que elevaram suas habilidades em Vue.js e conquistaram novas oportunidades. Confira histórias reais de sucesso no mercado!"
  />

  <LpVueOQuePossoConstruir/>

  <LpVuePrequisitos/>

  <LpVueFaq/>

  <LpVueAulasGratuitas/>

  <LpVueOffer id="offer"/>

  <PageAbout/>
</template>

<script setup>
import LandingHero from '~/common/components/Landing/LandingHero.vue';
import IconVue from '~/common/components/Icons/IconVue.vue';
import CodeSnippetVue from '~/components/Codesnippet/CodeSnippetVue.vue';
import LpVueOQueE from '~/pages/jornada-vue/_partials/LpVueOQueE.vue';
import LpVueParaQuemE from '~/pages/jornada-vue/_partials/LpVueParaQuemE.vue';
import LpVueModulos from '~/pages/jornada-vue/_partials/LpVueModulos.vue';
import LpVuePorqueAprenderComigo from '~/pages/jornada-vue/_partials/LpVuePorqueAprenderComigo.vue';
import PageTestimonial from '~/components/Page/PageTestimonial.vue';
import LpVueOQuePossoConstruir from '~/pages/jornada-vue/_partials/LpVueOQuePossoConstruir.vue';
import LpVuePrequisitos from '~/pages/jornada-vue/_partials/LpVuePrequisitos.vue';
import LpVueFaq from '~/pages/jornada-vue/_partials/LpVueFaq.vue';
import LpVueAulasGratuitas from '~/pages/jornada-vue/_partials/LpVueAulasGratuitas.vue';
import LpVueOffer from '~/pages/jornada-vue/_partials/LpVueOffer.vue';
import PageAbout from '~/components/Page/PageAbout.vue';
import LpVueProjetosReais from '~/pages/jornada-vue/_partials/LpVueProjetosReais.vue';
import BadgeCourseCount from '~/components/BadgeCourseCount.vue';
import BadgeDuration from '~/components/BadgeDuration.vue';
import BadgeLectureCount from '~/components/BadgeLectureCount.vue';
import {journeyAPI} from '~/common/api/journey';
import IconDatabase from '~/common/components/Icons/IconDatabase.vue';

definePageMeta({
  layout: 'lp',
})

const {data: stats} = await useAsyncData('vue-journey-stats', () => journeyAPI.getStats('vue'))

useHead({
  title: 'Aprenda Vue.js: Torne-se um Especialista em Desenvolvimento de Aplicações Web',
  meta: {
    description: 'Descubra a Jornada Vue e desenvolva aplicações dinâmicas e interativas. Aulas práticas, projetos reais e uma comunidade engajada esperam por você para transformar suas habilidades em programação.',
  },
})

</script>
