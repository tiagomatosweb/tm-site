<template>
  <NuxtLayout name="lp">
    <LeadGenSection
      :lead-groups-id="[mailerliteGroups.VUE_BFCM]"
      title-class="text-4xl"
      lead-btn-text="Entrar para o grupo do WhatsApp"
      lead-btn-class="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-300 hover:shadow-emerald-500/50"
      :on-done="onDone"
    >
      <template #before-title>
        <UIcon name="i-custom-vue" class="size-[56px] mb-2"/>
      </template>

      <template #title>
        Black Friday da Jornada Vue: Torne-se um Expert em Vue.js com até 70% OFF
      </template>

      <template #description>
        Transforme suas habilidades com Vue.js com o melhor preço do ano. Promoção exclusiva e por tempo limitado!
      </template>

      <template #after-description>
        <p class="mt-8 text-gray-700 dark:text-gray-300">
          Essa promoção especial de Black Friday só estará disponível pelo WhatsApp! Para garantir o desconto e receber
          todas as instruções, preencha o formulário ao lado e entre para o nosso grupo exclusivo no WhatsApp. Lá, você
          terá acesso à oferta imperdível e poderá tirar todas as suas dúvidas!
        </p>
      </template>
    </LeadGenSection>

    <PageTestimonial/>

    <PageAbout/>
  </NuxtLayout>
</template>

<script setup>
import LeadGenSection from '~/components/Leadgen/LeadGenSection.vue';
import PageTestimonial from '~/components/Page/PageTestimonial.vue';
import PageAbout from '~/components/Page/PageAbout.vue';
import {navigateTo} from '#app';

definePageMeta({
  layout: false,
  middleware: () => {
    return navigateTo({name: 'jornada-vue'})
  },
})

function onDone() {
  return navigateTo('https://chat.whatsapp.com/Lw8LQh3VA1j2Xdvconq6qj', {
    external: true,
  })
}

useSeoMeta({
  title: 'Aprenda Vue.js: Torne-se um Especialista em Desenvolvimento de Aplicações Web',
  description: 'Descubra a Jornada Vue e desenvolva aplicações dinâmicas e interativas. Aulas práticas, projetos reais e uma comunidade engajada esperam por você para transformar suas habilidades em programação.',
})
</script>
