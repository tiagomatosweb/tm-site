<template>
  <div class="flex flex-col h-screen">
    <div>
      <AppHeader/>

      <div class="mx-auto">
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
