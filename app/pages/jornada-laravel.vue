<template>
  <NuxtPage/>
</template>

<script setup>
definePageMeta({
  layout: 'jornadas',
})

const {data: navigation} = await useAsyncData('navigation', () => queryCollectionNavigation('jornadaLaravel'));
console.log(navigation.value)
provide('navigation', navigation);
</script>
