<template>
  <LandingSection
    headline="O Que é a Jornada Vue?"
    title="Descubra a jornada que vai transformar suas habilidades em Vue.js"
    description="A Jornada Vue é um curso completo que vai do básico ao avançado, ensinando você a criar interfaces modernas e dinâmicas na prática!"
  >
    <div class="max-w-4xl mx-auto">
      <Card>
        <CardContent>
          <p class="text-xl font-medium text-center">Na Jornada Vue, meu objetivo é que você compreenda os fundamentos profundos do Vue.js, desde a raiz. Cada módulo foi cuidadosamente elaborado para que você aprenda a filosofia e a essência de cada recurso do framework, antes de avançar para técnicas mais avançadas e modernas.</p>
        </CardContent>
      </Card>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <Card
          v-for="item in items"
          class="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700"
        >
          <CardContent>
            <h3 class="text-lg font-bold">{{ item.title }}</h3>
            <p class="text-gray-500 dark:text-gray-400 mt-2">{{ item.description }}</p>
          </CardContent>
        </Card>
      </div>

      <p>A Jornada Vue não é apenas sobre aprender um framework; é sobre desenvolver uma base sólida, sem atalhos, e transformá-lo em um desenvolvedor Vue.js completo e confiante. Venha fazer parte dessa jornada e prepare-se para conquistar o mercado!</p>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/landing/LandingSection.vue';

const items = [
  {
    title: 'Do zero ao avançado',
    description: 'Começamos explorando o Vue.js puro, sem ferramentas de empacotamento, para que você realmente entenda a base do framework. Em seguida, avançamos para recursos mais complexos e introduzimos ferramentas de bundling, como Vite, no momento certo.',
  },
  {
    title: 'Resultados práticos desde o início',
    description: 'Nos primeiros módulos, você terá a chance de construir componentes e pequenas aplicações interativas. Isso permite que você veja os resultados de seu aprendizado na prática, mesmo enquanto ainda domina os conceitos fundamentais.',
  },
  {
    title: 'Construindo um portfólio sólido',
    description: 'Ao longo do curso, você vai desenvolver aplicações que poderá incluir no seu portfólio, exibindo suas habilidades em Vue.js para potenciais empregadores e clientes.',
  },
  {
    title: 'Suporte e comunidade ativa',
    description: 'Você terá acesso a uma comunidade exclusiva de alunos e a suporte direto, onde poderá tirar dúvidas e compartilhar experiências com outros desenvolvedores.',
  },
]
</script>
