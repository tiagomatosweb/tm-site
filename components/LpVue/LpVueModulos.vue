<template>
  <LandingSection
    headline="Estrutura completa do curso"
    title="Descubra a jornada de aprendizado em Vue"
    description="Conheça o percurso que preparei para você, desde os conceitos básicos até técnicas avançadas. Cada módulo foi projetado para garantir que você domine o Vue.js de maneira prática e eficaz."
  >
    <div class="column-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      <Card
        v-for="(item, index) in items?.sections"
        class="break-inside-avoid"
      >
        <CardContent>
          <div class="text-xs text-gray-400 dark:text-gray-400 font-bold -mt-1">MODULO {{ index + 1 }}</div>
          <div class="font-bold">{{ item.title }}</div>
        </CardContent>
      </Card>
    </div>
  </LandingSection>
</template>

<script setup>
import {coursesAPI} from '~/common/api/courses';
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const {data: items} = useLazyAsyncData(() => coursesAPI.getCourse('vue-pro'), {
  transform: r => r.data,
})
</script>
