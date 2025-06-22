<template>
  <NuxtPage/>
</template>

<script setup>
definePageMeta({
  layout: 'jornadas',
})

const {data: navigation} = await useAsyncData('navigation', () => queryCollectionNavigation('jornadaLaravel'));
provide('navigation', navigation);
</script>
