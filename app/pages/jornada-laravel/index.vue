<template>
  <LandingHero
    title="Jornada Laravel: do Zero ao Mestre"
    description="Desperte seu potencial em PHP e abra portas para novas oportunidades! Aprenda Laravel de forma prática e crie aplicações web rápidas e robustas."
  >
    <template #before-title>
      <IconLaravel class="mb-2"/>
    </template>

    <template #after-description>
      <div class="flex justify-center flex-wrap lg:justify-start gap-6 mt-6">
        <BadgeCourseCount :number="stats.courses_count"/>
        <BadgeLectureCount :number="stats.lectures_count"/>
        <BadgeDuration :duration="stats.duration"/>
      </div>

      <Button
        as="a"
        variant="marketing"
        size="lg"
        class="h-16 text-2xl font-bold rounded-xl mt-10"
        href="https://pay.hotmart.com/S96627323M?checkoutMode=10"
      >
        Matricule-se agora
      </Button>
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

  <TestimonialSection
    headline="Histórias de Sucesso"
    title="Transforme sua carreira com a Jornada Laravel"
    description="Junte-se a mais de 1k alunos que mudaram suas vidas profissionais e alcançaram novos patamares na programação. Veja como eles se destacaram no mercado!"
  />

  <LpLaravelOQuePossoConstruir/>

  <LpLaravelPrequisitos/>

  <LpLaravelFaq/>

  <LpLaravelAulasGratuitas/>

  <LpLaravelOffer id="offer"/>

  <AboutSection/>
</template>

<script setup>
import LandingHero from '~/common/components/Landing/LandingHero.vue';
import IconLaravel from '~/common/components/Icons/IconLaravel.vue';
import CodeSnippetLaravel from '~/common/components/Codesnippet/CodeSnippetLaravel.vue';
import LpLaravelOQueE from '~/components/LpLaravel/LpLaravelOQueE.vue';
import LpLaravelParaQuemE from '~/components/LpLaravel/LpLaravelParaQuemE.vue';
import LpLaravelModulos from '~/components/LpLaravel/LpLaravelModulos.vue';
import LpLaravelPorqueAprenderComigo from '~/components/LpLaravel/LpLaravelPorqueAprenderComigo.vue';
import TestimonialSection from '~/components/Testimonial/TestimonialSection.vue';
import LpLaravelOQuePossoConstruir from '~/components/LpLaravel/LpLaravelOQuePossoConstruir.vue';
import LpLaravelPrequisitos from '~/components/LpLaravel/LpLaravelPrequisitos.vue';
import LpLaravelFaq from '~/components/LpLaravel/LpLaravelFaq.vue';
import LpLaravelAulasGratuitas from '~/components/LpLaravel/LpLaravelAulasGratuitas.vue';
import LpLaravelOffer from '~/components/LpLaravel/LpLaravelOffer.vue';
import AboutSection from '~/components/About/AboutSection.vue';
import LpLaravelProjetosReais from '~/components/LpLaravel/LpLaravelProjetosReais.vue';
import {journeyAPI} from '~/common/api/journey';
import BadgeDuration from '~/common/components/Ui/BadgeDuration.vue';
import BadgeLectureCount from '~/common/components/Ui/BadgeLectureCount.vue';
import BadgeCourseCount from '~/common/components/Ui/BadgeCourseCount.vue';

definePageMeta({
  layout: 'lp',
})

const links = ref([
  {
    label: 'Get started',
    to: '/getting-started',
    icon: 'i-lucide-square-play',
  },
  {
    label: 'Learn more',
    to: '/getting-started/theme',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right',
  },
])

const {data: stats} = await useAsyncData('laravel-journey-stats', () => journeyAPI.getStats('laravel'))

useHead({
  title: 'Domine o Laravel: Transforme sua Carreira em Desenvolvimento Web',
  meta: {
    description: 'Aprenda Laravel do zero ao avançado com a Jornada Laravel. Cursos práticos, suporte contínuo e projetos reais para impulsionar sua carreira como desenvolvedor.',
  },
})
</script>
