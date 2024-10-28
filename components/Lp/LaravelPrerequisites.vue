<template>
  <LandingSection
    headline="Pré-requisitos"
    title="O que eu preciso saber antes de me matricular?"
    description="O curso Laravue é para você que nunca mexeu nesses frameworks ou tem apenas um conhecimento básico."
  >
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <Card>
        <CardContent>
          <IconPhp/>
          <h3 class="text-lg font-medium mt-2">Conhecimento básico de PHP</h3>
          <p class="text-gray-500 dark:text-gray-400">É importante ter uma noção básica de PHP, incluindo variáveis,
            estruturas como if e foreach, funções e uma ideia de como usar classes e objetos.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <div class="flex gap-2">
            <IconHtml5/>
            <IconCss3/>
          </div>
          <h3 class="text-lg font-medium mt-2">Conhecimento de HTML e CSS</h3>
          <p class="text-gray-500 dark:text-gray-400">Você deve entender o básico de HTML para criar páginas simples e
            de CSS para deixar essas páginas com um visual agradável.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <IconTerminal />
          <h3 class="font-medium mt-2">Familiaridade com o Terminal/CLI</h3>
          <p class="text-gray-500 dark:text-gray-400">Familiaridade com o terminal ajuda bastante, pois você precisará
            navegar por pastas e rodar comandos básicos para configurar o Laravel e instalar dependências.</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <IconDatabase />
          <h3 class="font-medium mt-2">Noções de Banco de Dados</h3>
          <p class="text-gray-500 dark:text-gray-400">Conhecimentos básicos em SQL são essenciais, como fazer
            consultas (SELECT), inserir (INSERT), atualizar (UPDATE) e apagar (DELETE) dados em um banco de dados
            relacional como MySQL.</p>
        </CardContent>
      </Card>
    </div>
  </LandingSection>
</template>
<script setup lang="ts">
import IconTerminal from '~/components/Icon/IconTerminal.vue';
</script>
