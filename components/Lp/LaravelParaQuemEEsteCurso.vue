<template>
  <LandingSection
    headline="Para quem é a Jornada Laravel?"
    title="Veja se a Jornada Laravel é a escolha certa!"
    description="Identifique-se com os perfis de alunos que já transformaram suas carreiras com esse curso prático e completo."
  >
    <div class="max-w-4xl mx-auto">
      <p class="text-xl mb-4">A Jornada Laravel foi criada para ensinar o framework do zero até o nível mais avançado.
        Ou seja, é para você
        que:</p>

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
import Junior from '@/assets/img/programador-junior.jpg'
import Pleno from '@/assets/img/programador-pleno.jpg'
import Senior from '@/assets/img/programador-senior.jpg'

const items = [
  {
    image: Junior,
    image_alt: 'Programador Júnior',
    title: 'Nunca trabalhou com Laravel',
    description: 'Se você nunca viu Laravel e está começando agora, não se preocupe! Eu vou te guiar em cada passo, desde a instalação até técnicas super avançadas, tudo na prática.',
  },
  {
    image: Pleno,
    image_alt: 'Programador Pleno',
    title: 'Tem alguma experiência com Laravel e quer subir de nível',
    description: 'Se você já tem familiaridade com Laravel e quer se aprofundar, esse curso vai te ajudar a dominar as ferramentas e te preparar para encarar projetos desafiadores com confiança.',
  },
  {
    image: Senior,
    image_alt: 'Programador Senior',
    title: 'Já conhece Laravel, mas está perdido em projetos',
    description: 'Se você já domina Laravel, mas se sente inseguro para criar um projeto do zero até o deploy, aqui você aprenderá a construir projetos completos, usando tudo o que o framework pode oferecer',
  },
]
</script>
