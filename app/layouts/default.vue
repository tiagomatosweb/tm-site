<template>
  <AppHeader/>
  <UMain>
    <slot/>
  </UMain>
  <AppFooter/>
</template>

<script setup>
import AppHeader from '~/common/components/App/AppHeader.vue';
import AppFooter from '~/common/components/App/AppFooter.vue';
</script>
