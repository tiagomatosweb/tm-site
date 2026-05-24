<template>
  <UPageSection
    :ui="sectionUi"
  >
    <template
      v-if="$slots.headline"
      #headline
    >
      <slot name="headline" />
    </template>
    <template
      v-else-if="props.headline"
      #headline
    >
      {{ props.headline }}
    </template>

    <template
      v-if="$slots.title"
      #title
    >
      <slot name="title" />
    </template>
    <template
      v-else-if="props.title"
      #title
    >
      {{ props.title }}
    </template>

    <template
      v-if="$slots.description"
      #description
    >
      <slot name="description" />
    </template>
    <template
      v-else-if="props.description"
      #description
    >
      {{ props.description }}
    </template>

    <template #body>
      <slot>
        <div class="space-y-10">
          <div class="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            <iframe
              v-for="video in videos"
              :key="video.src"
              :src="video.src"
              :title="video.title"
              class="aspect-[9/16] w-full rounded-lg"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>

          <UPageColumns class="xl:columns-4">
            <UPageCard
              v-for="(testimonial, index) in items"
              :key="index"
              variant="subtle"
              :description="testimonial.comment"
              :ui="{
                description: 'before:content-[open-quote] after:content-[close-quote]',
              }"
            >
              <template #footer>
                {{ testimonial.author }}
              </template>
            </UPageCard>
          </UPageColumns>
        </div>
      </slot>
    </template>
  </UPageSection>
</template>

<script setup>
const props = defineProps({
  headline: {
    type: String,
    default: 'Depoimentos',
  },
  title: {
    type: String,
    default: 'O que dizem os alunos',
  },
  description: {
    type: String,
    default: 'Devs que passaram pelas aulas e começaram a entender Laravel com mais clareza — da organização do código até projetos mais próximos do mundo real.',
  },
  ui: {
    type: Object,
    default: () => ({}),
  },
})

const defaultUi = {
  root: 'border-t border-default',
  container: 'max-w-5xl',
  wrapper: 'items-start text-left',
  headline: 'justify-start text-laravel',
  title: 'text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight text-left',
  description: 'text-left max-w-3xl',
}

const sectionUi = computed(() => ({
  ...defaultUi,
  ...props.ui,
}))

const videos = [
  { src: 'https://www.youtube.com/embed/9GNqY_uKyic?si=YMefGPPPyNGVG1tQ', title: 'Depoimento em vídeo 1' },
  { src: 'https://www.youtube.com/embed/cHwk-k0NZMA?si=mcY1tw9o4U2omZMA', title: 'Depoimento em vídeo 2' },
  { src: 'https://www.youtube.com/embed/ZvVkp1NinTc?si=C5VfUpQPykrX5HBK', title: 'Depoimento em vídeo 3' },
  { src: 'https://www.youtube.com/embed/FeGSxHcM35k?si=NPoTPs6AVM3px6kS', title: 'Depoimento em vídeo 4' },
]

const items = [
  {
    author: 'Mauricio Testa',
    comment: 'Faaaala irmão blza??? Gostaria de deixar aqui meu agradecimento pelas tuas aulas "VueJS do jeito ninja".. graças a elas hj estou consolidado em uma multinacional\n'
      + 'americana trabalhando 100%\n'
      + 'home office..\n'
      + 'Muito obrigado !!!',
  },
  {
    author: 'Matheus Thurler',
    comment: 'No sei curso de cara já gostei foi da abordagem de como armazenar o token pelo cookie, foi uma imensa ajuda',
  },
  {
    author: 'Vinicus Dutra',
    comment: 'Excelente aula. Que didática phoda! Vai direto ao ponto e de forma super clara! Parabéns e obrigado por compartilhar com a gente esse conhecimento.',
  },
  {
    author: 'Débora Taveira',
    comment: 'Sua didática é sensacional!',
  },
  {
    author: 'João Teves',
    comment: 'Uhuuuuul Esperando meu primeiro salário cair pra comprar no cartão hahaha Consegui uma vaga de Jr e você me ajudou muito com as suas aulas gratuitas no YouTube',
  },
  {
    author: 'Lucas Gomes',
    comment: 'Cara, é incrível como vc explica bem.. Eu achava o Vuex super complicado mas com essas duas lives que vc fez eu aprendi e agora acho Vuex incrível! Muito obrigado pelos seus vídeos, continue assim que vc está ajudando muita gente.. vc é top! Agora irei praticar bastante pra fixar bem o conteúdo e depois partir para seus videos de nuxt! Abraços !',
  },
  {
    author: 'Felipe Gourlart',
    comment: 'Monstro! Sensacional, obrigado pelo conteúdo!!!',
  },
  {
    author: 'Débora Taveira',
    comment: 'Sua didática é sensacional!',
  },
  {
    author: 'Mauricio Testa',
    comment: 'Faaala mestre, eu de novo tudo bem??\n'
      + 'Cara, gostaria muito de te agradecer pelo curso de laravel + vue. Didática sensacional e organização de código fantástica aproveitando tudo que o framework tem a oferecer!\n'
      + 'Acabei de terminar o curso aqui e fiquei muito satisfeito com o que aprendi. Aproveitei e adicionei alguns recursos a mais, como auto login ao criar conta e redefinição de senha sem precisar inserir e-mail (apenas pelo token).\n'
      + 'Aproveitando, gostaria de saber se o curso tem certificado e como faço pra obtê-lo.\n'
      + 'Sucesso!',
  },
  {
    author: 'Ricardo Soares',
    comment: 'Grande Tiago...parabens por seus conteúdos... tem me ajudado muito...Jesus abençoe muito a sua vida e abra excelentes portas',
  },
  {
    author: 'Roger Santos',
    comment: 'Já tinha lido na documentação, mas não havia entendido muito bem. Agora ficou super claro, Obrigado :)',
  },
  {
    author: 'Alano Morais',
    comment: 'Cara teu conteúdo é muito massa e a didática, nem se fala.',
  },
]
</script>
