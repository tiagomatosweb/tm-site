<template>
  <UHeader>
    <template #left>
      <AppLogo
        logo-type="icon"
        logo-width="40"
      />
    </template>

    <template #body>
      sdsd
      <UContentNavigation
        highlight
        :navigation="navigation"
      />
    </template>
  </UHeader>

  <UMain>
    <slot/>
  </UMain>
</template>

<script setup>
import AppLogo from '~/common/components/App/AppLogo.vue';

const navigation = inject('navigation')
</script>
