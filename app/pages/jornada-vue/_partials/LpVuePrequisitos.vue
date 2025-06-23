<template>
  <LandingSection
    headline="Pré-requisitos"
    title="Quais são os conhecimentos necessários antes de me matricular?"
    description="Antes de embarcar na Jornada Vue, é importante que você tenha alguns conhecimentos básicos para tirar o máximo proveito do curso. Aqui estão os pré-requisitos:"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <UCard
        v-for="item in items"
        variant="soft"
      >
        <UIcon :name="item.icon" class="size-[32px]"/>
        <h3 class="text-lg font-medium mt-6">{{ item.title }}</h3>
        <p class="text-gray-500 dark:text-gray-400 mt-2">{{ item.description }}</p>
      </UCard>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const items = [
  {
    icon: 'i-custom-js',
    title: 'Noções Básicas de JavaScript',
    description: 'Familiaridade com os conceitos fundamentais de JavaScript é crucial, pois o Vue.js é um framework baseado nessa linguagem. Isso facilitará sua compreensão e aplicação dos recursos do Vue.',
  },
  {
    icon: 'i-custom-html5',
    title: 'Conhecimento de HTML',
    description: 'Você deve entender o básico de HTML para estruturar suas páginas web. Isso é fundamental para que você consiga aplicar os conceitos do Vue de forma eficaz.',
  },
  {
    icon: 'i-custom-css3',
    title: 'Conhecimento de CSS',
    description: 'Ter uma noção de CSS é essencial para estilizar suas aplicações e garantir que elas tenham um visual atraente e responsivo.',
  },
  {
    icon: 'i-custom-code',
    title: 'Noções Básicas de Lógica de Programação',
    description: 'É fundamental entender conceitos de lógica de programação, como estruturas condicionais, loops e funções. Isso ajudará você a acompanhar melhor o conteúdo e resolver problemas de forma mais eficiente.',
  },
  {
    icon: 'i-custom-terminal',
    title: 'Familiaridade com Terminal',
    description: 'Saber utilizar o terminal é importante para executar comandos e gerenciar seu ambiente de desenvolvimento. Isso será útil durante a instalação e execução das suas aplicações Vue.',
  },
]
</script>
