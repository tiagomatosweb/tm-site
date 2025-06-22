<template>
  <LandingSection
    headline="Por que aprender Laravel comigo?"
    title="Descubra os motivos para escolher a minha Jornada Laravel!"
    description="Aqui estão algumas razões que fazem da minha metodologia a escolha ideal para você dominar Laravel."
  >
    <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      <UCard
        v-for="item in items"
        class="break-inside-avoid"
      >
        <span class="font-bold">{{ item.title }}:</span> <span class="text-muted">{{ item.description }}</span>
      </UCard>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const items = [
  {
    title: 'Experiência prática',
    description: 'Eu não sou apenas um instrutor; sou um desenvolvedor ativo que trabalha com Laravel no dia a dia. Isso significa que você vai aprender técnicas e dicas que uso em projetos reais, tornando o aprendizado mais relevante e aplicável.',
  },
  {
    title: 'Metodologia simples e direta',
    description: 'Meu foco é descomplicar o aprendizado. Ao invés de sobrecarregar você com teoria, eu ensino na prática, permitindo que você construa projetos desde o início. Vamos colocar a mão na massa e criar!',
  },
  {
    title: 'Apoio contínuo',
    description: 'Durante o curso, estarei disponível para responder suas perguntas e ajudar em suas dificuldades. Não deixarei você sozinho na sua jornada; estarei aqui para guiar e apoiar.',
  },
  {
    title: 'Conteúdo atualizado',
    description: 'O mundo da tecnologia está sempre mudando. Estou comprometido em manter o conteúdo do curso atualizado com as melhores práticas e recursos mais recentes do Laravel.',
  },
  {
    title: 'Comunidade engajada',
    description: 'Ao se juntar a mim, você fará parte de uma comunidade de aprendizes apaixonados. Aqui, você poderá trocar experiências, tirar dúvidas e até formar parcerias em projetos.',
  },
  {
    title: 'Resultados rápidos',
    description: 'Meu objetivo é fazer você ver resultados rapidamente. Nos primeiros módulos, você já estará construindo seu próprio projeto. Vamos acelerar seu aprendizado e colocar você em ação!',
  },
  {
    title: 'Mentalidade de crescimento',
    description: 'Acredito que todos podem aprender, desde que tenham a motivação certa e o suporte necessário. Estou aqui para ajudar você a desenvolver a confiança necessária para encarar desafios e evoluir como desenvolvedor.',
  },
]
</script>
