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
<!--        <Button-->
<!--          variant="marketing"-->
<!--          type="submit"-->
<!--          size="lg"-->
<!--          class="h-16 mt-6 text-2xl font-bold rounded-xl"-->
<!--        >-->
<!--          Matricule-se agora-->
<!--        </Button>-->
      </template>

      <template #content-right>
        <CodeSnippetVue/>
      </template>
    </LandingHero>

    <LpVueOQueE/>

    <LpVueParaQuemE/>

<!--    <LpVueOQueVouAprender/>-->

    <LpVueModulos />

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

definePageMeta({
  layout: false,
})

useHead({
  title: 'Aprenda Vue.js: Torne-se um Especialista em Desenvolvimento de Aplicações Web',
  meta: {
    description: 'Descubra a Jornada Vue e desenvolva aplicações dinâmicas e interativas. Aulas práticas, projetos reais e uma comunidade engajada esperam por você para transformar suas habilidades em programação.'
  }
})

</script>
