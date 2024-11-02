<template>
  <LandingSection
    headline="Quem vai se beneficiar da Jornada Vue?"
    title="Descubra se a Jornada Vue é perfeita para o seu perfil!"
    description="Identifique-se com os tipos de alunos que já deram um salto em suas habilidades e carreiras com este curso prático e abrangente."
  >
    <div class="max-w-4xl mx-auto">
      <p class="text-xl mb-4">A Jornada Vue foi criada para ensinar o framework desde os fundamentos até as técnicas mais avançadas. Ou seja, é para você que:</p>

      <div class="space-y-20">
        <div
          v-for="(item, index) in items"
          class="flex flex-col md:flex-row items-start gap-4 md:gap-10"
          :class="{ 'md:flex-row-reverse': index % 2 }"
        >
          <img
            :src="item.image"
            :alt="item.image_alt"
            class="shrink-0 w-full md:w-[450px] rounded-2xl"
          >

          <div>
            <h3 class="heading-3">{{ item.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import Junior from 'assets/img/programador-junior.jpg'
import Pleno from 'assets/img/programador-pleno.jpg'
import Senior from 'assets/img/programador-senior.jpg'
import LandingSection from '~/common/components/landing/LandingSection.vue';

const items = [
  {
    image: Junior,
    image_alt: 'Programador Júnior',
    title: 'Nunca trabalhou com Vue.js',
    description: 'Se você nunca teve contato com Vue.js e está começando agora, fique tranquilo! Vou te guiar passo a passo, desde a criação de componentes básicos até a construção de aplicações interativas e dinâmicas, tudo sem atalhos.',
  },
  {
    image: Pleno,
    image_alt: 'Programador Pleno',
    title: 'Tem alguma experiência com Vue.js e quer aprofundar seus conhecimentos',
    description: 'Se você já conhece o básico do Vue.js e deseja explorar recursos mais avançados, esse curso é ideal para ajudar você a dominar o framework e utilizar as melhores práticas em projetos reais.',
  },
  {
    image: Senior,
    image_alt: 'Programador Senior',
    title: 'Já usa Vue.js, mas quer se tornar especialista',
    description: 'Se você já tem experiência com Vue.js, mas sente que precisa entender o framework em profundidade, aprenderá aqui a base sólida que faz toda a diferença. Vamos trabalhar com o Vue.js puro antes de introduzir ferramentas modernas, tornando você um verdadeiro especialista.',
  },
]
</script>
