<template>
  <LandingSection
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <div class="max-w-5xl mx-auto space-y-20">
      <div class="flex flex-wrap items-center justify-center gap-8">
        <iframe width="225" height="400" src="https://www.youtube.com/embed/9GNqY_uKyic?si=YMefGPPPyNGVG1tQ"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        <iframe width="225" height="400" src="https://www.youtube.com/embed/cHwk-k0NZMA?si=mcY1tw9o4U2omZMA"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        <iframe width="225" height="400" src="https://www.youtube.com/embed/ZvVkp1NinTc?si=C5VfUpQPykrX5HBK"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        <iframe width="225" height="400" src="https://www.youtube.com/embed/FeGSxHcM35k?si=NPoTPs6AVM3px6kS"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
      </div>
    </div>

    <div class="column-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8 mt-24">
      <Card
        v-for="item in items"
        class="break-inside-avoid"
      >
        <CardContent>
          <div class="text-gray-700 dark:text-gray-300 text-sm">
            ”<span v-html="item.comment" />"
          </div>

          <div class="text-gray-900 dark:text-gray-100 text-base font-semibold leading-tight mt-4">
            {{ item.author }}
          </div>
        </CardContent>
      </Card>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const props = defineProps({
  headline: {
    type: String,
    default: 'Depoimentos'
  },
  title: {
    type: String,
    default: 'Milhares de carreiras transformadas'
  },
  description: {
    type: String,
    default: 'Mais de 1K alunos que alavancaram suas carreiras na programação'
  },
})

const items = [
  {
    author: 'Mauricio Testa',
    comment: 'Faaaala irmão blza??? Gostaria de deixar aqui meu agradecimento pelas tuas aulas "VueJS do jeito ninja".. graças a elas hj estou consolidado em uma multinacional\n' +
      'americana trabalhando 100%\n' +
      'home office..\n' +
      'Muito obrigado !!!'
  },
  {
    author: 'Matheus Thurler',
    comment: 'No sei curso de cara já gostei foi da abordagem de como armazenar o token pelo cookie, foi uma imensa ajuda'
  },
  {
    author: 'Vinicus Dutra',
    comment: 'Excelente aula. Que didática phoda! Vai direto ao ponto e de forma super clara! Parabéns e obrigado por compartilhar com a gente esse conhecimento.'
  },
  {
    author: 'Débora Taveira',
    comment: 'Sua didática é sensacional!'
  },
  {
    author: 'João Teves',
    comment: 'Uhuuuuul Esperando meu primeiro salário cair pra comprar no cartão hahaha Consegui uma vaga de Jr e você me ajudou muito com as suas aulas gratuitas no YouTube'
  },
  {
    author: 'Lucas Gomes',
    comment: 'Cara, é incrível como vc explica bem.. Eu achava o Vuex super complicado mas com essas duas lives que vc fez eu aprendi e agora acho Vuex incrível! Muito obrigado pelos seus vídeos, continue assim que vc está ajudando muita gente.. vc é top! Agora irei praticar bastante pra fixar bem o conteúdo e depois partir para seus videos de nuxt! Abraços !'
  },
  {
    author: 'Felipe Gourlart',
    comment: 'Monstro! Sensacional, obrigado pelo conteúdo!!!'
  },
  {
    author: 'Débora Taveira',
    comment: 'Sua didática é sensacional!'
  },
  {
    author: 'Mauricio Testa',
    comment: 'Faaala mestre, eu de novo tudo bem??\n' +
      'Cara, gostaria muito de te agradecer pelo curso de laravel + vue. Didática sensacional e organização de código fantástica aproveitando tudo que o framework tem a oferecer!\n' +
      'Acabei de terminar o curso aqui e fiquei muito satisfeito com o que aprendi. Aproveitei e adicionei alguns recursos a mais, como auto login ao criar conta e redefinição de senha sem precisar inserir e-mail (apenas pelo token).\n' +
      'Aproveitando, gostaria de saber se o curso tem certificado e como faço pra obtê-lo.\n' +
      'Sucesso!'
  },
  {
    author: 'Ricardo Soares',
    comment: 'Grande Tiago...parabens por seus conteúdos... tem me ajudado muito...Jesus abençoe muito a sua vida e abra excelentes portas'
  },
  {
    author: 'Roger Santos',
    comment: 'Já tinha lido na documentação, mas não havia entendido muito bem. Agora ficou super claro, Obrigado :)'
  },
  {
    author: 'Alano Morais',
    comment: 'Cara teu conteúdo é muito massa e a didática, nem se fala.'
  },
]
</script>
