<template>
  <LandingHero
    title="Jornada Laravel: do Zero ao Mestre"
    description="Desperte seu potencial em PHP e abra portas para novas oportunidades! Aprenda Laravel de forma prática e crie aplicações web rápidas e robustas."
  >
    <template #before-title>
      <UIcon name="i-custom-laravel" class="size-[56px] mb-2"/>
    </template>

    <template #after-description>
      <div class="flex justify-center flex-wrap lg:justify-start gap-6 mt-6">
        <BadgeCourseCount :number="stats.courses_count"/>
        <BadgeLectureCount :number="stats.lectures_count"/>
        <BadgeDuration :duration="stats.duration"/>
      </div>

      <UButton
        size="3xl"
        color="cta"
        trailing-icon="i-lucide-arrow-right"
        class="mt-10"
        href="https://pay.hotmart.com/S96627323M?checkoutMode=10"
        label="Matricule-se agora"
      />

      <!--        <div class="text-muted mt-6">-->
      <!--          Aprenda conceitos fundamentais como MVC - Model View e Controller e também tópicos avançados como Arquitetura-->
      <!--          API, Autenticação, Fila, Query Builder e muito mais.-->
      <!--        </div>-->
    </template>

    <template #content-right>
      <CodeSnippetLaravel/>
    </template>
  </LandingHero>

  <LpLaravelOQueE/>

  <LpLaravelParaQuemE/>

  <!--    <LpLaravelOQueVouAprender/>-->

  <LpLaravelModulos/>

  <LpLaravelProjetosReais/>

  <LpLaravelPorqueAprenderComigo/>

  <PageTestimonial
    headline="Histórias de Sucesso"
    title="Transforme sua carreira com a Jornada Laravel"
    description="Junte-se a mais de 1k alunos que mudaram suas vidas profissionais e alcançaram novos patamares na programação. Veja como eles se destacaram no mercado!"
  />

  <LpLaravelOQuePossoConstruir/>

  <LpLaravelPrequisitos/>

  <LpLaravelFaq/>

  <LpLaravelAulasGratuitas/>

  <LpLaravelOffer id="offer"/>

  <PageAbout/>
</template>

<script setup>
import LandingHero from '~/components/Landing/LandingHero.vue';
import CodeSnippetLaravel from '~/components/Codesnippet/CodeSnippetLaravel.vue';
import LpLaravelOQueE from './_partials/LpLaravelOQueE.vue';
import LpLaravelParaQuemE from './_partials/LpLaravelParaQuemE.vue';
import LpLaravelModulos from './_partials/LpLaravelModulos.vue';
import LpLaravelPorqueAprenderComigo from './_partials/LpLaravelPorqueAprenderComigo.vue';
import PageTestimonial from '~/components/Page/PageTestimonial.vue';
import LpLaravelOQuePossoConstruir from './_partials/LpLaravelOQuePossoConstruir.vue';
import LpLaravelPrequisitos from './_partials/LpLaravelPrequisitos.vue';
import LpLaravelFaq from './_partials/LpLaravelFaq.vue';
import LpLaravelAulasGratuitas from './_partials/LpLaravelAulasGratuitas.vue';
import LpLaravelOffer from './_partials/LpLaravelOffer.vue';
import PageAbout from '~/components/Page/PageAbout.vue';
import LpLaravelProjetosReais from './_partials/LpLaravelProjetosReais.vue';
import BadgeDuration from '~/components/BadgeDuration.vue';
import BadgeLectureCount from '~/components/BadgeLectureCount.vue';
import BadgeCourseCount from '~/components/BadgeCourseCount.vue';
import axios from 'axios';

definePageMeta({
  layout: 'lp',
})

const endpoint = 'api/journeys/laravel/stats'
const {data: stats} = await useAsyncData(endpoint, () => axios.get(endpoint))

useSeoMeta({
  title: 'Domine o Laravel: Transforme sua Carreira em Desenvolvimento Web',
  description: 'Aprenda Laravel do zero ao avançado com a Jornada Laravel. Cursos práticos, suporte contínuo e projetos reais para impulsionar sua carreira como desenvolvedor.',
})
</script>
