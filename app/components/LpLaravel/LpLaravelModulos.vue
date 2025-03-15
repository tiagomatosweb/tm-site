<template>
  <LandingSection
    headline="Estrutura Completa do Curso"
    title="Veja o que você vai aprender, passo a passo"
    description="Conheça a jornada de aprendizado que preparei para você, desde os fundamentos até técnicas avançadas. Cada módulo foi planejado para garantir que você domine o Laravel de forma prática e completa."
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

    <div class="flex flex-col items-center my-16">
      <h3 class="heading-3">Novos módulos em breve</h3>

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
import {coursesAPI} from '~/common/api/courses';
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const {data: items} = useLazyAsyncData(() => coursesAPI.getCourse('laravel-pro'), {
  transform: r => r.data,
})

const futureModules = [
  'Sanctum',
  'Fortify',
  'Inertia',
  'Fila',
  'Jobs',
  'Event e Listeners',
  'Arquitetura API',
  'Laravel Reverb',
  'Laravel Forge',
]
</script>
