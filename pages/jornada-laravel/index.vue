<template>
  <NuxtLayout name="lp">
    <LandingHero
      title="Jornada Laravel: do Zero ao Mestre"
      description="Desperte seu potencial em PHP e abra portas para novas oportunidades! Aprenda Laravel de forma prática e crie aplicações web rápidas e robustas."
    >
      <template #before-title>
        <IconLaravel class="mb-2"/>
      </template>

      <template #after-description>
        <div class="flex justify-center lg:justify-start gap-6 mt-6">
          <BadgeCourseCount :number="stats.courses_count"/>
          <BadgeLectureCount :number="stats.lectures_count"/>
          <BadgeDuration :duration="stats.duration" />
        </div>

        <Button
          v-if="checkout"
          as="a"
          variant="marketing"
          size="lg"
          class="h-16 text-2xl font-bold rounded-xl mt-10"
          :href="checkout.link"
          target="_blank"
        >
          {{ checkout.btn_label }}
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

    <LpLaravelProjetosReais />

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

    <LpLaravelOffer/>

    <AboutSection />
  </NuxtLayout>
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
  layout: false,
})

const {data: stats} = useLazyAsyncData('laravel-journey-stats', () => journeyAPI.getStats('laravel'))
const dayjs = useDayjs()

const bfcm = {
  friday: {
    link: 'https://pay.hotmart.com/S96627323M?off=7r29g2s3&checkoutMode=10',
    off: '70%',
    btn_label: 'Matricule-se agora com 70% OFF'
  },
  weekend: {
    link: 'https://pay.hotmart.com/S96627323M?off=ymmquk5i&checkoutMode=10',
    off: '50%',
    btn_label: 'Matricule-se agora com 50% OFF'
  },
  monday: {
    link: 'https://pay.hotmart.com/S96627323M?off=sc6334po&checkoutMode=10',
    off: '40%',
    btn_label: 'Matricule-se agora com 40% OFF'
  },
  full: {
    link: 'https://pay.hotmart.com/S96627323M?checkoutMode=10',
    off: '0',
    btn_label: 'Matricule-se agora'
  },
}

const checkout = computed(() => {
  const friday = '2024-11-29';
  const saturday = '2024-11-30';
  const sunday = '2024-12-01';
  const monday = '2024-12-02';
  const now = dayjs.utc().local().format('YYYY-MM-DD')

  if (now < '2024-11-29') {
    return false
  }

  if (now === friday) {
    return bfcm.friday
  }

  if (now === saturday || now === sunday) {
    return bfcm.weekend
  }

  if (now === monday) {
    return bfcm.monday
  }

  return bfcm.full
})

useHead({
  title: 'Domine o Laravel: Transforme sua Carreira em Desenvolvimento Web',
  meta: {
    description: 'Aprenda Laravel do zero ao avançado com a Jornada Laravel. Cursos práticos, suporte contínuo e projetos reais para impulsionar sua carreira como desenvolvedor.',
  },
})
</script>
