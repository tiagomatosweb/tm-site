<template>
  <NuxtLayout name="lp">
    <LandingHero
      title="Jornada Vue: da Raiz ao Avançado"
      description="Aprenda Vue.js sem atalhos, entendendo cada recurso do zero. Domine o essencial e avance para técnicas modernas com confiança."
    >
      <template #before-title>
        <IconVue class="mb-2"/>
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
      </template>

      <template #content-right>
        <CodeSnippetVue/>
      </template>
    </LandingHero>

    <LpVueOQueE/>

    <LpVueParaQuemE/>

<!--    <LpVueOQueVouAprender/>-->

    <LpVueModulos />

    <LpVueProjetosReais />

    <LpVuePorqueAprenderComigo/>

    <TestimonialSection
      headline="Depoimentos Inspiradores"
      title="Alavanque sua carreira com a Jornada Vue"
      description="Junte-se a mais de 1k alunos que elevaram suas habilidades em Vue.js e conquistaram novas oportunidades. Confira histórias reais de sucesso no mercado!"
    />

    <LpVueOQuePossoConstruir />

    <LpVuePrequisitos />

    <LpVueFaq />

    <LpVueAulasGratuitas />

    <LpVueOffer />

    <AboutSection />
  </NuxtLayout>
</template>

<script setup>
import LandingHero from '~/common/components/Landing/LandingHero.vue';
import IconVue from '~/common/components/Icons/IconVue.vue';
import CodeSnippetVue from '~/common/components/Codesnippet/CodeSnippetVue.vue';
import LpVueOQueE from '~/components/LpVue/LpVueOQueE.vue';
import LpVueParaQuemE from '~/components/LpVue/LpVueParaQuemE.vue';
import LpVueModulos from '~/components/LpVue/LpVueModulos.vue';
import LpVuePorqueAprenderComigo from '~/components/LpVue/LpVuePorqueAprenderComigo.vue';
import TestimonialSection from '~/components/Testimonial/TestimonialSection.vue';
import LpVueOQuePossoConstruir from '~/components/LpVue/LpVueOQuePossoConstruir.vue';
import LpVuePrequisitos from '~/components/LpVue/LpVuePrequisitos.vue';
import LpVueFaq from '~/components/LpVue/LpVueFaq.vue';
import LpVueAulasGratuitas from '~/components/LpVue/LpVueAulasGratuitas.vue';
import LpVueOffer from '~/components/LpVue/LpVueOffer.vue';
import AboutSection from '~/components/About/AboutSection.vue';
import LpVueProjetosReais from '~/components/LpVue/LpVueProjetosReais.vue';
import BadgeCourseCount from '~/common/components/Ui/BadgeCourseCount.vue';
import BadgeDuration from '~/common/components/Ui/BadgeDuration.vue';
import BadgeLectureCount from '~/common/components/Ui/BadgeLectureCount.vue';
import {journeyAPI} from '~/common/api/journey';

definePageMeta({
  layout: false,
})

const {data: stats} = useLazyAsyncData('vue-journey-stats', () => journeyAPI.getStats('vue'))
const dayjs = useDayjs()
const bfcm = {
  friday: {
    link: 'https://pay.hotmart.com/U96627395Y?off=fydmwhbf&checkoutMode=10',
    off: '70%',
    btn_label: 'Matricule-se agora com 70% OFF'
  },
  weekend: {
    link: 'https://pay.hotmart.com/U96627395Y?off=fvn169nf&checkoutMode=10',
    off: '50%',
    btn_label: 'Matricule-se agora com 50% OFF'
  },
  monday: {
    link: 'https://pay.hotmart.com/U96627395Y?off=0eg2d35s&checkoutMode=10',
    off: '40%',
    btn_label: 'Matricule-se agora com 40% OFF'
  },
  full: {
    link: 'https://pay.hotmart.com/U96627395Y?checkoutMode=10',
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
  title: 'Aprenda Vue.js: Torne-se um Especialista em Desenvolvimento de Aplicações Web',
  meta: {
    description: 'Descubra a Jornada Vue e desenvolva aplicações dinâmicas e interativas. Aulas práticas, projetos reais e uma comunidade engajada esperam por você para transformar suas habilidades em programação.'
  }
})

</script>
