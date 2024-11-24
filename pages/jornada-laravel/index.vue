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

definePageMeta({
  layout: false,
})

useHead({
  title: 'Domine o Laravel: Transforme sua Carreira em Desenvolvimento Web',
  meta: {
    description: 'Aprenda Laravel do zero ao avançado com a Jornada Laravel. Cursos práticos, suporte contínuo e projetos reais para impulsionar sua carreira como desenvolvedor.',
  },
})
</script>
