<template>
  <LandingSection
    headline="O Que é a Jornada Laravel?"
    title="Descubra a jornada que vai transformar suas habilidades em Laravel"
    description="A Jornada Laravel é um curso completo que vai do básico ao avançado, ensinando você a criar aplicações web de alto nível na prática!"
  >
    <div class="max-w-4xl mx-auto">
      <UCard variant="soft">
        <p class="text-xl font-medium text-center">Na Jornada Laravel, minha missão é levar você a um novo patamar
          no desenvolvimento web.
          Este curso foi cuidadosamente elaborado para que, em cada módulo, você aprenda o essencial e, logo em
          seguida, desenvolva projetos reais.</p>
      </UCard>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
        <UCard v-for="item in items">
          <h3 class="text-lg font-bold">{{ item.title }}</h3>
          <p class="text-gray-500 dark:text-gray-400 mt-2">{{ item.description }}</p>
        </UCard>
      </div>

      <p>A Jornada Laravel não é apenas sobre aprender a usar um framework; é sobre transformar você em um desenvolvedor
        completo, pronto para enfrentar os desafios do mercado. Venha fazer parte dessa jornada e construa o futuro que
        você deseja!</p>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/components/Landing/LandingSection.vue';

const items = [
  {
    title: 'Do zero ao avançado',
    description: 'Começamos com os fundamentos do Laravel, como rotas e controllers, e avançamos para conceitos mais complexos, garantindo que você entenda cada etapa do processo.',
  },
  {
    title: 'Resultados rápidos',
    description: 'Nos primeiros módulos, você aprenderá o essencial para criar seu primeiro projeto, um dashboard simples com AdminLTE, permitindo que você veja resultados práticos rapidamente.',
  },
  {
    title: 'Construindo seu portfólio',
    description: 'Ao longo do curso, você vai construir aplicações que pode adicionar ao seu portfólio. Isso não só mostra suas habilidades, mas também impressiona possíveis empregadores.',
  },
  {
    title: 'Suporte e comunidade ativa',
    description: 'Você terá acesso a uma comunidade exclusiva de alunos e a suporte direto, onde poderá tirar dúvidas e compartilhar experiências com outros desenvolvedores.',
  },
]
</script>
