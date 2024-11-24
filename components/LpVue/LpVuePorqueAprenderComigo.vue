<template>
  <LandingSection
    headline="Por que estudar Vue ao meu lado?"
    title="Veja por que a Jornada Vue é a escolha certa para o seu aprendizado!"
    description="Conheça as razões que tornam a minha metodologia ideal para transformar você em um verdadeiro especialista em Vue.js!"
  >
    <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
      <Card
        v-for="item in items"
        class="break-inside-avoid"
      >
        <CardContent>
          <span class="font-bold">{{ item.title }}:</span> <span class="text-muted">{{ item.description }}</span>
        </CardContent>
      </Card>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const items = [
  {
    title: 'Experiência prática',
    description: 'Eu sou um desenvolvedor ativo que trabalha com Vue.js no dia a dia. Você aprenderá técnicas e dicas que utilizo em projetos reais, tornando o aprendizado mais relevante e aplicável.',
  },
  {
    title: 'Metodologia simples e direta',
    description: 'Meu foco é descomplicar o aprendizado. Vamos começar do básico, sem ferramentas de empacotamento, para que você compreenda a filosofia e os fundamentos do Vue. A prática vem em primeiro lugar!',
  },
  {
    title: 'Apoio contínuo',
    description: 'Durante o curso, estarei disponível para responder suas perguntas e ajudar em suas dificuldades. Você não estará sozinho; estarei aqui para guiar e apoiar sua jornada.',
  },
  {
    title: 'Conteúdo atualizado',
    description: 'O mundo da tecnologia está sempre mudando. Estou comprometido em manter o conteúdo do curso atualizado com as melhores práticas e recursos mais recentes do Vue.js.',
  },
  {
    title: 'Comunidade engajada',
    description: 'Ao se juntar a mim, você fará parte de uma comunidade de aprendizes apaixonados. Aqui, poderá trocar experiências, tirar dúvidas e até formar parcerias em projetos.',
  },
  {
    title: 'Resultados rápidos',
    description: 'Meu objetivo é fazer você ver resultados rapidamente. Nos primeiros módulos, você já estará construindo suas próprias aplicações. Vamos acelerar seu aprendizado e colocá-lo em ação!',
  },
  {
    title: 'Mentalidade de crescimento',
    description: 'Acredito que todos podem aprender com a motivação certa e o suporte necessário. Estou aqui para ajudar você a desenvolver a confiança necessária para encarar desafios e evoluir como desenvolvedor.',
  },
]
</script>
