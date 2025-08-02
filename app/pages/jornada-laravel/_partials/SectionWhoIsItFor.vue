<template>
  <UPageSection
    title="Esse curso é pra você?"
    description="Se você se identifica com pelo menos um desses perfis, este curso é perfeito para você."
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
      features: 'gap-0',
    }"
  >
    <template #features>
      <UPageCard
        title="Já sabe PHP e quer avançar"
        icon="i-custom-php"
        description="Você domina o básico e quer aprender um framework moderno, robusto e com alta demanda no mercado."
        :ui="{
          root: 'rounded-r-none bg-gradient-to-tl from-indigo-500/20 from-5% via-transparent via-50% to-transparent',
          leadingIcon: 'size-10',
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
        }"
      />

      <UPageCard
        title="Quer projetos reais no portfólio"
        icon="i-custom-monitor-code"
        description="Cansou de tutoriais soltos. Quer colocar no portfólio aplicações completas com backend de verdade."
        :ui="{
          root: 'rounded-none bg-gradient-to-tl from-cyan-500/20 from-5% via-transparent via-50% to-transparent',
          leadingIcon: 'size-10',
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
        }"
      />

      <UPageCard
        title="Busca crescimento profissional"
        icon="i-custom-dev-male"
        description="Quer se tornar um dev Laravel sênior, dominar o backend moderno e aumentar sua renda com projetos mais complexos."
        :ui="{
          root: 'rounded-l-none bg-gradient-to-tl from-rose-600/10 from-5% via-transparent via-50% to-transparent',
          leadingIcon: 'size-10',
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
        }"
      />
    </template>
  </UPageSection>
</template>

