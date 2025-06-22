<template>
  <UHeader>
    <template #left>
      <AppLogo
        logo-type="icon"
        logo-width="40"
      />
    </template>
    <UNavigationMenu
      :items="items"
      variant="link"
    />

    <template #right>
      <UButton
        label="Garantir minha vaga"
        variant="soft"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
      />

      <UColorModeButton/>
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
    </template>
  </UHeader>

  <UMain>
    <slot/>
  </UMain>

  <UFooter>
    <template #left>
      sdsd
    </template>

    <template #right>
      sdsd
    </template>
  </UFooter>
</template>

<script setup>
import AppLogo from '~/components/App/AppLogo.vue';

const test = inject('test')
const route = useRoute()
const items = computed(() => [
  {label: 'Conteúdo do curso', to: '/curriculo'},
  {label: 'Projetos', to: '/projetos'},
  {label: 'Aulas gratuitas', to: '/aula-gratis'},
  {label: 'FAQ', to: '/faq'},
])
</script>
