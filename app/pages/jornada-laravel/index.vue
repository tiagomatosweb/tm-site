<template>
  <UPageHero
    orientation="horizontal"
    title="Jornada Laravel: do Zero ao Mestre"
    description="A Jornada Laravel é mais do que um curso. É o caminho pra você dominar o framework PHP mais usado do mercado,  entender o que está codando e construir aplicações completas do zero ao deploy."
  >
    <template #top>
      <div
        class="absolute rounded-full dark:bg-primary blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80"/>
    </template>

    <template #headline>
      <UIcon name="i-custom-laravel" class="size-[56px]"/>
    </template>

    <template #links>
      <div>
        <div class="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center w-full gap-2">
          <UButton
            size="3xl"
            color="cta"
            trailing-icon="i-lucide-arrow-right"
            class="order-1"
            label="Quero começar agora"
            :href="offerLink.LARAVEL"
          />


          <!-- <div class="text-sm text-muted order-2 xl:order-3 lg:w-full lg:justify-start mt-1">
            ✅ Acesso imediato com
            <ULink class="underline" to="#bonus">bônus</ULink>
            já liberados.
          </div> -->
        </div>

        <!--        <div class="flex justify-center flex-wrap lg:justify-start gap-6 mt-10">-->
        <!--          <BadgeCourseCount :number="stats?.courses_count"/>-->
        <!--          <BadgeLectureCount :number="stats?.lectures_count"/>-->
        <!--          <BadgeDuration :duration="stats?.duration"/>-->
        <!--        </div>-->
      </div>
    </template>
    <!--    <div-->
    <!--      class="absolute -bottom-10 right-10 w-80 h-96 opacity-10 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"/>-->

    <!--    <div-->
    <!--      class="absolute left-1/2 transform -translate-x-1/2 w-36 h-64 origin-top-left rotate-[35.87deg] opacity-40 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"/>-->
    <CodeSnippetLaravel/>
  </UPageHero>

  <SectionWhatYouWillLearn />

  <SectionProjects />

  <SectionWhoIsItFor />

  <!--  Se você quer aprender o que cada linha de código faz, sem ficar de adivinhação ou dependente de ferramentas,-->
  <!--  este-->
  <!--  curso é para você. Aprenda como criar Saas com cargos e permissões totalmente personalizáveis e se torne um dev-->
  <!--  indispensável na nova realidade dos negócios.-->

  <SectionFreeLectures />

  <SectionBonus />

  <PageTestimonial/>

  <OfferSection
    offer-invite-title="Junte-se à Elite dos Devs Laravel"
    offer-invite-description="Faça parte de mais dos mais de 2k de alunos que dominam Laravel. Aqui forjamos profissionais altamente qualificados para encarar o mercado."
    offer-full-price="697"
    offer-price="397"
    offer-installment-price="39,62"
    :offer-link="offerLink.LARAVEL"
  />

  <PageAbout/>
</template>

<script setup>
import CodeSnippetLaravel from '~/components/Codesnippet/CodeSnippetLaravel.vue';
import PageAbout from '~/components/Page/PageAbout.vue';
import PageTestimonial from '~/components/Page/PageTestimonial.vue';
import OfferSection from '~/components/Offer/OfferSection.vue';
import SectionWhatYouWillLearn from './_partials/SectionWhatYouWillLearn.vue';
import SectionProjects from './_partials/SectionProjects.vue';
import SectionWhoIsItFor from './_partials/SectionWhoIsItFor.vue';
import SectionFreeLectures from './_partials/SectionFreeLectures.vue';
import SectionBonus from './_partials/SectionBonus.vue';
// import BadgeDuration from '~/components/BadgeDuration.vue';
// import BadgeCourseCount from '~/components/BadgeCourseCount.vue';
// import BadgeLectureCount from '~/components/BadgeLectureCount.vue';

// const endpoint = 'api/journeys/laravel/stats'
// const {data: stats} = await useAsyncData(endpoint, () => axios.get(endpoint))
useSeoMeta({
  title: 'Jornada Laravel: Domine Laravel com Projeto Real e Suporte',
  description: 'Transforme sua carreira com um curso prático de Laravel. Aprenda do zero, crie um projeto SaaS, receba suporte real e evolua sem depender de IA.',
})
</script>
