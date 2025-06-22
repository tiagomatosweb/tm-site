<template>
  <LandingSection
    headline="O que você será capaz de construir"
    title="Dê vida às suas ideias com a Jornada Vue"
    description="Ao longo do curso, você adquirirá as habilidades necessárias para criar aplicações web dinâmicas e interativas. Prepare-se para desenvolver projetos que impressionam! Aqui estão alguns exemplos do que você poderá construir:"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <UCard v-for="item in items">
        <h3 class="text-lg font-bold">{{ item.title }}</h3>
        <p class="text-gray-500 dark:text-gray-400 mt-2">{{ item.description }}</p>
      </UCard>
    </div>

    <p class="text-center text-xl mt-16">Com a Jornada Vue, suas ideias ganharão vida e você estará pronto para
      enfrentar desafios reais no desenvolvimento web!</p>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const items = [
  {
    title: 'Aplicações de Uma Página (SPA)',
    description: 'Crie interfaces de usuário fluidas e responsivas que oferecem uma experiência de navegação excepcional.',
  },
  {
    title: 'Dashboards Interativos',
    description: 'Desenvolva painéis de controle com gráficos e relatórios em tempo real para visualização de dados.',
  },
  {
    title: 'Componentes Reutilizáveis',
    description: 'Aprenda a criar componentes Vue que podem ser utilizados em diversos projetos, economizando tempo e aumentando a eficiência.',
  },
  {
    title: 'Integração com APIs',
    description: 'Construa aplicações que se conectam a APIs externas, permitindo que você trabalhe com dados em tempo real.',
  },
  {
    title: 'Formulários Dinâmicos',
    description: 'Crie formulários interativos que melhoram a experiência do usuário e capturam dados de maneira eficaz.',
  },
  {
    title: 'E-commerce',
    description: 'Construa um e-commerce com gerenciamento de produtos, carrinho e checkout, além de filtros e recomendações personalizadas.',
  },
]
</script>
