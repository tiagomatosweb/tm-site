<template>
  <NuxtLayout name="jornadas">
    <template #right>
      <UButton
        label="Garantir minha vaga"
        variant="soft"
        color="neutral"
        trailing-icon="i-lucide-arrow-right"
        :href="offerLink.LARAVEL"
      />
    </template>

    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
})

const {data: navigation} = await useAsyncData('navigation', () => queryCollectionNavigation('jornadaLaravel'));
provide('navigation', navigation);
</script>
