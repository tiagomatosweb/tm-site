<template>
  <NuxtLayout name="lp">
    <SectionLeadGen
      :lead-groups-id="[mailerliteGroups.LARAVEL_BFCM]"
      lead-btn-text="Entrar para o grupo do WhatsApp"
      lead-btn-class="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-300 hover:shadow-emerald-500/50"
      :on-done="onDone"
    >
      <template #before-title>
        <IconLaravel class="mb-2"/>
      </template>

      <template #title>
        Oferta especial de Black Friday
      </template>

      <template #description>
        Junte-se a <span class="tm-gradient font-bold">4k+ leitores</span> e receba dicas, lições e insights retirados do campo de batalha de
        quem respira programação web há mais de 2 décadas.
      </template>
    </SectionLeadGen>

    <SectionTestimonial />

    <SectionAbout wrap-class="max-w-2xl"/>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
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
