<template>
  <UHeader
    :toggle="{
      class: 'hidden'
    }"
  >
    <template #left>
      <AppLogo
        logo-type="icon"
        logo-width="40"
      />
    </template>

    <template #right>
      <UNavigationMenu :items="navigationMenu"/>
      <UColorModeButton/>
    </template>
  </UHeader>
</template>

<script setup>
import AppLogo from '~/common/components/App/AppLogo.vue';

const route = useRoute()

const navigationMenu = computed(() => [
  // {
  //   label: 'Jornada Laravel',
  //   to: '/blog',
  //   active: route.path.startsWith('/blog'),
  // },
  // {
  //   label: 'Jornada Vue',
  //   to: '/blog',
  //   active: route.path.startsWith('/blog'),
  // },
  // {
  //   label: 'Blog',
  //   to: '/blog',
  //   active: route.path.startsWith('/blog'),
  // },
])
</script>
