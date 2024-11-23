<template>
  <LandingSection
    headline="O que você vai aprender"
    title="Conheça as habilidades que você vai desenvolver na Jornada Laravel!"
    description="Prepare-se para se aprofundar em Laravel e dominar as técnicas essenciais para construir aplicações web incríveis."
  >
    <ul class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-2">
      <li
        v-for="item in items"
        class="flex items-center gap-x-2"
      >
        <div class="bg-primary w-1.5 h-1.5 rounded-full"/>
        {{ item }}
      </li>
    </ul>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const items = [
  'Instalação e configuração',
  'Laravel sail',
  'Controllers',
  'Rotas',
  'Middleware',
  'Requests',
  'Responses',
  'Tratamento de erros com exceções',
  'Blade template',
  'Validação de formulário',
  'Comando Artisan',
  'Collections',
  'Eventos',
  'Query builder',
  'Eloquent',
  'Paginação',
  'Migrations',
  'Seeding',
  'Factories',
  'Filas',
  'Arquitetura API',
  'Resources',
  'Autenticação - Sanctum e Fortify',
]
</script>
