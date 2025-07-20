<template>
  <AppHeader/>
  <UMain>
    <slot/>
  </UMain>
  <AppFooter/>
</template>

<script setup>
import AppHeader from '~/components/App/AppHeader.vue';
import AppFooter from '~/components/App/AppFooter.vue';
</script>
