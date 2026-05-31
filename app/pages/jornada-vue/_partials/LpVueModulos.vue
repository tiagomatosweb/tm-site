<template>
  <LandingSection
    headline="Estrutura completa do curso"
    title="Descubra a jornada de aprendizado em Vue"
    description="Conheça o percurso que preparei para você, desde os conceitos básicos até técnicas avançadas. Cada módulo foi projetado para garantir que você domine o Vue.js de maneira prática e eficaz."
  >
    <div class="column-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      <UCard
        v-for="(item, index) in data?.sections"
        variant="soft"
        class="break-inside-avoid"
      >
        <div class="text-xs text-gray-400 dark:text-gray-400 font-bold -mt-1">MODULO {{ index + 1 }}</div>
        <div class="font-bold">{{ item.title }}</div>
      </UCard>
    </div>

    <div class="flex flex-col items-center my-16">
      <h3 class="heading-3">E mais isso aqui 👇👇👇</h3>

      <ul class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-2 mt-4">
        <li
          v-for="item in futureModules"
          class="flex items-center gap-x-2"
        >
          <div class="bg-primary w-1.5 h-1.5 rounded-full"/>
          {{ item }}
        </li>
      </ul>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/components/Landing/LandingSection.vue';

const { data } = useApiFetch('api/courses/vue-pro', {
  lazy: true,
  transform: (response) => response.data,
})

const futureModules = [
  'Vue Router',
  'Pinia',
  'Vuetify Cart',
]
</script>
