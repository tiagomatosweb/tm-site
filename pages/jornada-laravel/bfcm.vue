<template>
  <NuxtLayout name="lp">
    <LeadGenSection
      :lead-groups-id="[mailerliteGroups.LARAVEL_BFCM]"
      title-class="text-4xl"
      lead-btn-text="Entrar para o grupo do WhatsApp"
      lead-btn-class="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-300 hover:shadow-emerald-500/50"
      :on-done="onDone"
    >
      <template #before-title>
        <IconLaravel class="mb-2"/>
      </template>

      <template #title>
        Black Friday da Jornada Laravel: Domine Laravel com até 70% de Desconto!
      </template>

      <template #description>
        Aproveite o melhor preço do ano para aprender Laravel do zero ao avançado. Oferta por tempo limitado!
      </template>

      <template #after-description>
        <p class="mt-8 text-gray-700 dark:text-gray-300">
          Essa promoção especial de Black Friday só estará disponível pelo WhatsApp! Para garantir o desconto e receber todas as instruções, preencha o formulário ao lado e entre para o nosso grupo exclusivo no WhatsApp. Lá, você terá acesso à oferta imperdível e poderá tirar todas as suas dúvidas!
        </p>
      </template>
    </LeadGenSection>

    <TestimonialSection />

    <AboutSection/>
  </NuxtLayout>
</template>

<script setup>
import {mailerliteGroups} from '~/common/utils/mailerlite-groups';
import LeadGenSection from '~/components/Leadgen/LeadGenSection.vue';
import IconLaravel from '~/common/components/Icons/IconLaravel.vue';
import TestimonialSection from '~/components/Testimonial/TestimonialSection.vue';
import AboutSection from '~/components/About/AboutSection.vue';
import {navigateTo} from '#app';

definePageMeta({
  layout: false,
  middleware: () => {
    return navigateTo({ name: 'jornada-laravel'})
  }
})

useHead({
  title: 'Domine o Laravel: Transforme sua Carreira em Desenvolvimento Web',
  meta: {
    description: 'Aprenda Laravel do zero ao avançado com a Jornada Laravel. Cursos práticos, suporte contínuo e projetos reais para impulsionar sua carreira como desenvolvedor.',
  },
})

function onDone() {
  return navigateTo('https://chat.whatsapp.com/GeSQUChzMbv2kNsS18IPpa', {
    external: true
  })
}
</script>
