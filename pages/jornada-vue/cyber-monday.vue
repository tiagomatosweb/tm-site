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

    <LandingSection
      headline="Aulas Grátis de Vue.js"
      title="Simule um Carrinho de Compras com Vuetify e Pinia"
      description="Descubra como implementar um carrinho de compras funcional, aprendendo a adicionar, remover e calcular valores usando Pinia para gerenciamento de estado no Vue.js."
    >
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="lecture in freeLectures"
            :key="lecture.id"
          >
            <Vimeo
              :id="lecture.video_id"
              class="shadow-2xl shadow-primary/10"
            />

            <h6 class="heading-6 mt-1">{{ lecture.title }}</h6>
          </div>

        </div>
      </div>
    </LandingSection>

    <LpVueModulos />

    <LpVueProjetosReais />

    <LpVuePorqueAprenderComigo/>

    <TestimonialSection
      headline="Depoimentos Inspiradores"
      title="Alavanque sua carreira com a Jornada Vue"
      description="Junte-se a mais de 1k alunos que elevaram suas habilidades em Vue.js e conquistaram novas oportunidades. Confira histórias reais de sucesso no mercado!"
    />

    <LpVueOQuePossoConstruir />

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
import LandingSection from '~/common/components/Landing/LandingSection.vue';
import Vimeo from '~/common/components/Videoplay/Vimeo.vue';

definePageMeta({
  layout: false,
})

const freeLectures = [
  {
    id: 807120759,
    title: 'Introdução',
    video_id: 807120759,
  },
  {
    id: 807121396,
    title: 'Configurando o cabeçalho',
    video_id: 807121396,
  },
  {
    id: 807121915,
    title: 'Criando card para os produtos',
    video_id: 807121915,
  },
  {
    id: 807122704,
    title: 'Criando carrinho',
    video_id: 807122704,
  },
  {
    id: 807123379,
    title: 'Polindo o design',
    video_id: 807123379,
  },
  {
    id: 807123793,
    title: 'Adicionando controles do carrinho',
    video_id: 807123793,
  },
  {
    id: 807124408,
    title: 'Instalando json-server e fazendo ajax',
    video_id: 807124408,
  },
  {
    id: 807125171,
    title: 'Adicionando produto ao carrinho',
    video_id: 807125171,
  },
  {
    id: 807125737,
    title: 'Exibindo produtos no carrinho',
    video_id: 807125737,
  },
  {
    id: 807126320,
    title: 'Removendo produto do carrinho',
    video_id: 807126320,
  },
  {
    id: 807126635,
    title: 'Calculando total',
    video_id: 807126635,
  },
  {
    id: 807127305,
    title: 'Dando o último tapa no carrinho',
    video_id: 807127305,
  },
]

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
