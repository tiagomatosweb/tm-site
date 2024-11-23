<template>
  <div class="flex flex-col h-screen px-6 py-4">
    <div>
      <AppHeader />

      <div class="max-w-4xl mx-auto">
        <slot/>
      </div>
    </div>

    <AppFooter class="mt-auto"/>
  </div>
</template>

<script setup>
import AppHeader from '~/common/components/App/AppHeader.vue';
import AppFooter from '~/common/components/App/AppFooter.vue';
</script>
