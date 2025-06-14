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
    </template>

    <template #body>
      <!--      sdsdsdsd-->
      <!--      <UContentNavigation-->
      <!--        highlight-->
      <!--        :navigation="navigation"-->
      <!--      />-->
    </template>
  </UHeader>

  <UMain>
    <!--        <template #left>-->
    <!--          <UPageAside>-->
    <!--            <UContentNavigation-->
    <!--              highlight-->
    <!--              :navigation="navigation"-->
    <!--            />-->
    <!--          </UPageAside>-->
    <!--        </template>-->

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
import AppLogo from '~/common/components/App/AppLogo.vue';

const route = useRoute()
const items = computed(() => [
  {label: 'Conteúdo do curso', to: '/curriculo'},
  {label: 'Projetos', to: '/projetos'},
  {label: 'Aulas gratuitas', to: '/aula-gratis'},
  {label: 'FAQ', to: '/faq'},
])
</script>
