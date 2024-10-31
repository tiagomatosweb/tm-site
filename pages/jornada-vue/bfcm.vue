<template>
  <NuxtLayout name="lp">
    <SectionLeadGen
      :lead-groups-id="[mailerliteGroups.VUE_BFCM]"
      lead-btn-text="Entrar para o grupo do WhatsApp"
      lead-btn-class="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-300 hover:shadow-emerald-500/50"
      :on-done="onDone"
    >
      <template #before-title>
        <IconVue class="mb-2"/>
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
  title: 'Aprenda Vue.js: Torne-se um Especialista em Desenvolvimento de Aplicações Web',
  meta: {
    description: 'Descubra a Jornada Vue e desenvolva aplicações dinâmicas e interativas. Aulas práticas, projetos reais e uma comunidade engajada esperam por você para transformar suas habilidades em programação.'
  }
})

function onDone() {
  return navigateTo('https://chat.whatsapp.com/Lw8LQh3VA1j2Xdvconq6qj', {
    external: true
  })
}
</script>
