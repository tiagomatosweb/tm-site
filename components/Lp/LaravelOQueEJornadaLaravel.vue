<template>
  <LandingSection
    headline="O Que é a Jornada Laravel?"
    title="Descubra a jornada que vai transformar suas habilidades em Laravel"
    description="A Jornada Laravel é um curso completo que vai do básico ao avançado, ensinando você a criar aplicações web de alto nível na prática!"
  >
    <div class="max-w-4xl mx-auto">
      <Card>
        <CardContent>
          <p class="text-xl font-medium text-center">Na Jornada Laravel, minha missão é levar você a um novo patamar
            no desenvolvimento web.
            Este curso foi cuidadosamente elaborado para que, em cada módulo, você aprenda o essencial e, logo em
            seguida, desenvolva projetos reais.</p>
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

      <p>A Jornada Laravel não é apenas sobre aprender a usar um framework; é sobre transformar você em um desenvolvedor
        completo, pronto para enfrentar os desafios do mercado. Venha fazer parte dessa jornada e construa o futuro que
        você deseja!</p>
    </div>
  </LandingSection>
</template>

<script setup>
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
    title: 'Suporte e comunidade',
    description: 'Você não estará sozinho nessa jornada. Terá acesso a uma comunidade ativa de alunos e suporte direto, onde poderá tirar dúvidas e trocar experiências.',
  },
]
</script>
