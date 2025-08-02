<template>
  <UPageSection
    title="O que você vai dominar"
    description="Desenvolva habilidades práticas que realmente importam no mercado de trabalho."
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
      title: 'text-left',
      description: 'text-left'
    }"
  >
    <template #features>
      <UPageFeature
        v-for="feature in features"
        :key="feature.title"
        v-bind="feature"
      >
      <template 
        v-if="feature.soon"
        #title
      >
        <div class="flex items-center gap-2">
          {{ feature.title }}
            <UBadge 
              label="Breve" 
              size="sm"
              variant="soft"
              color="warning"
            />
        </div>
        </template>
      </UPageFeature>
    </template>
  </UPageSection>
</template>

<script setup>
const features = [
  {
    title: 'CRUD com Relacionamentos Avançados',
    description: 'Vá além do básico com muitos-para-muitos, pivot tables e joins eficientes usando Eloquent.',
    icon: 'i-lucide-git-branch',
    orientation: 'vertical'
  },
  {
    title: 'Banco de Dados Avançado',
    description: 'Domine migrations, seeders, Eloquent básico e avançado, além de Query Builder e queries otimizadas.',
    icon: 'i-lucide-database',
    orientation: 'vertical'
  },
  {
    title: 'Sistema Multiusuário',
    description: 'Implemente roles, permissions e gestão de usuários com arquitetura pronta para multi-tenant e times separados.',
    icon: 'i-lucide-users',
    orientation: 'vertical'
  },
  {
    title: 'Autenticação via API',
    description: 'Implemente login, logout e proteção de rotas com Laravel Sanctum de forma segura e moderna.',
    icon: 'i-lucide-shield-check',
    orientation: 'vertical'
  },
  {
  title: 'Frontend e Backend Desacoplados com API',
  description: 'Aprenda a estruturar seu backend como uma API moderna e conecte com qualquer frontend — Vue, React ou mobile.',
  icon: 'i-lucide-plug',
  orientation: 'vertical',
  },
  {
    title: 'Performance & Cache',
    description: 'Otimize suas aplicações com filas (queues), cache com tags, e estratégias de alta performance para projetos em produção.',
    icon: 'i-lucide-zap',
    orientation: 'vertical',
    soon: true,
  },
  {
    title: 'Deploy em Produção',
    description: 'Coloque seu projeto no ar com hospedagem compartilhada, VPS com acesso SSH ou Laravel Forge.',
    icon: 'i-lucide-rocket',
    orientation: 'vertical'
  },
  {
    title: 'Projetos Reais',
    description: 'Construa aplicações completas como Dashboard com AdminLTE, BookHub e o SaaS AgendaMe com autenticação e multiusuários.',
    icon: 'i-lucide-layout-dashboard',
    orientation: 'vertical'
  },
  {
    title: 'Arquitetura Útil com Services e Actions',
    description: 'Saia da hype dos padrões genéricos e organize seu código com uma arquitetura prática e reutilizável para o dia a dia.',
    icon: 'i-lucide-box',
    orientation: 'vertical'
  },
  {
    title: 'Ambientes de Dev, Staging e Produção',
    description: 'Organize seu .env, configure staging e evite erros comuns que derrubam sistemas por má configuração de ambiente.',
    icon: 'i-lucide-server-cog',
    orientation: 'vertical'
  },
  {
    title: 'Aplicações Monolíticas com Blade',
    description: 'Aprenda a construir projetos completos usando Blade, o motor de templates nativo do Laravel, com rotas, views e autenticação tradicional.',
    icon: 'i-lucide-layout-template',
    orientation: 'vertical'
  },
  {
    title: 'Código Limpo e com Propósito',
    description: 'Você entende o porquê de cada linha. Aprende boas práticas, organização e a escrever código profissional com Laravel.',
    icon: 'i-lucide-code-2',
    orientation: 'vertical'
  },
]
</script>