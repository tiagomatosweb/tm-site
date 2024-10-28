<template>
  <LandingSection
    headline="Pré-requisitos"
    title="O que eu preciso saber antes de me matricular?"
    description="O curso Laravue é para você que nunca mexeu nesses frameworks ou tem apenas um conhecimento básico."
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card v-for="item in items">
        <CardContent>
          <Component :is="item.icon"/>
          <h3 class="text-lg font-medium mt-6">{{ item.title }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">{{ item.description }}</p>
        </CardContent>
      </Card>
    </div>
  </LandingSection>
</template>

<script setup>
import IconPhp from '~/components/Icon/Php.vue';
import IconHtml5 from '~/components/Icon/Html5.vue';
import IconCss3 from '~/components/Icon/Css3.vue';
import IconTerminal from '~/components/Icon/Terminal.vue';
import IconDatabase from '~/components/Icon/Database.vue';
import IconCode from '~/components/Icon/Code.vue';

const items = [
  {
    icon: IconCode,
    title: 'Noções Básicas de Lógica de Programação',
    description: 'É fundamental entender conceitos de lógica de programação, como estruturas condicionais, loops e funções. Isso ajudará você a acompanhar melhor o conteúdo e resolver problemas de forma mais eficiente.'
  },
  {
    icon: IconPhp,
    title: 'Conhecimento básico de PHP',
    description: 'Você deve entender o básico de HTML para criar páginas simples e de CSS para deixar essas páginas com um visual agradável.',
  },
  {
    icon: IconTerminal,
    title: 'Familiaridade com o Terminal/CLI',
    description: 'Familiaridade com o terminal ajuda bastante, pois você precisará navegar por pastas e rodar comandos básicos para configurar o Laravel e instalar dependências.',
  },
  {
    icon: IconDatabase,
    title: 'oções de Banco de Dados',
    description: 'Conhecimentos básicos em SQL são essenciais, como fazer consultas (SELECT), inserir (INSERT), atualizar (UPDATE) e apagar (DELETE) dados em um banco de dados relacional como MySQL.',
  },
  {
    icon: IconHtml5,
    title: 'Conhecimento de HTML',
    description: 'Você deve entender o básico de HTML para criar páginas simples e estruturadas.',
  },
  {
    icon: IconCss3,
    title: 'Conhecimento de CSS',
    description: 'É importante ter uma noção de CSS para estilizar essas páginas e deixá-las com um visual agradável.',
  },
]
</script>
