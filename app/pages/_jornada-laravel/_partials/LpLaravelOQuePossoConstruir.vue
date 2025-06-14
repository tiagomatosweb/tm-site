<template>
  <LandingSection
    headline="O que você será capaz de construir"
    title="Crie projetos incríveis e impulsione sua carreira"
    description="Após a Jornada Laravel, você estará preparado para desenvolver aplicações que impressionam. Confira alguns exemplos do que você poderá construir:"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <Card
        v-for="item in items"
        class="bg-transparent dark:bg-transparent"
      >
        <h3 class="text-lg font-bold">{{ item.title }}</h3>
        <p class="text-gray-500 dark:text-gray-400 mt-2">{{ item.description }}</p>
      </Card>
    </div>

    <p class="text-center text-xl mt-16">Com a Jornada Laravel, você transformará suas ideias em realidade, adquirindo as habilidades necessárias para enfrentar os desafios do desenvolvimento web com confiança!</p>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const items = [
  {
    title: 'Aplicações SaaS',
    description: 'Crie soluções escaláveis e modernas que atendem a diversas necessidades de negócios, como gestão de tarefas, controle financeiro e muito mais.',
  },
  {
    title: 'Sites Dinâmicos',
    description: 'Desenvolva websites interativos que se adaptam às necessidades dos usuários, oferecendo uma experiência personalizada e envolvente.',
  },
  {
    title: 'APIs Robustas',
    description: 'Construa APIs que permitem a comunicação eficiente entre diferentes sistemas, facilitando a integração e a troca de dados.',
  },
  {
    title: 'Dashboards',
    description: 'Elabore painéis de controle que fornecem visualizações intuitivas e dados em tempo real, ajudando empresas a tomarem decisões mais informadas.',
  },
  {
    title: 'Sistema de Autenticação',
    description: 'Implemente sistemas de login seguros e eficientes, garantindo que os usuários tenham acesso controlado às suas aplicações.',
  },
  {
    title: 'E-commerce',
    description: 'Crie e-commerce com gerenciamento de produtos, carrinho de compras e integração de pagamentos, garantindo uma experiência de compra fácil e segura.',
  },
]
</script>
