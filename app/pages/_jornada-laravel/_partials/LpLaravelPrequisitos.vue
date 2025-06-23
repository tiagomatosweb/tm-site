<template>
  <LandingSection
    headline="Pré-requisitos"
    title="O que eu preciso saber antes de me matricular?"
    description="Antes de iniciar sua Jornada Laravel, é importante que você tenha alguns fundamentos essenciais. Estes conhecimentos vão te ajudar a aproveitar ao máximo cada módulo do curso!"
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
    icon: 'i-custom-php',
    title: 'Conhecimento básico de PHP',
    description: 'É importante ter uma noção básica de PHP, incluindo variáveis, estruturas como if e foreach, funções e uma ideia de como usar classes e objetos.',
  },
  {
    icon: 'i-custom-database',
    title: 'Noções de Banco de Dados',
    description: 'Conhecimentos básicos em SQL são desejáveis, como fazer consultas (SELECT), inserir (INSERT), atualizar (UPDATE) e apagar (DELETE) dados em um banco de dados relacional como MySQL.',
  },
  {
    icon: 'i-custom-terminal',
    title: 'Familiaridade com o Terminal/CLI',
    description: 'Familiaridade com o terminal ajuda bastante, pois você precisará navegar por pastas e rodar comandos básicos para configurar o Laravel e instalar dependências.',
  },
  {
    icon: 'i-custom-code',
    title: 'Noções Básicas de Lógica de Programação',
    description: 'É fundamental entender conceitos de lógica de programação, como estruturas condicionais, loops e funções. Isso ajudará você a acompanhar melhor o conteúdo e resolver problemas de forma mais eficiente.',
  },
  {
    icon: 'i-custom-html5',
    title: 'Conhecimento de HTML',
    description: 'Você deve entender o básico de HTML para criar páginas simples e estruturadas.',
  },
  {
    icon: 'i-custom-ccs3',
    title: 'Conhecimento de CSS',
    description: 'É importante ter uma noção de CSS para estilizar essas páginas e deixá-las com um visual agradável.',
  },
]
</script>
