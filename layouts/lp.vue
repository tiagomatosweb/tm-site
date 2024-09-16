<template>
  <div>
    <div class="flex flex-col h-screen px-6 py-4">
      <div>
        <NuxtLink :to="{ name: 'index' }">
          <img
            src="@/assets/img/tm-logo-dark.svg"
            alt="Tiago Matos"
            width="40"
            class="inline-block dark:hidden"
          >

          <img
            src="@/assets/img/tm-logo-light.svg"
            alt="Tiago Matos"
            width="40"
            class="hidden dark:inline-block"
          >
        </NuxtLink>

        <div class="max-w-4xl mx-auto">
          <slot/>
        </div>
      </div>

      <AppFooter class="mt-auto"/>
    </div>
  </div>
</template>

<script setup>
import AppFooter from '@/components/AppFooter.vue';
import AppHeader from '@/components/AppHeader.vue';
</script>
