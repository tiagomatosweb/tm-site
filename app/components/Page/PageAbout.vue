<template>
  <UPageSection
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
    }"
  >
    <div class="max-w-2xl mx-auto">
      <AboutGreetings avatar-size="lg"/>
      <AboutBio class="mt-6"/>
    </div>
  </UPageSection>
</template>

<script setup lang="ts">
import AboutGreetings from '~/components/About/AboutGreetings.vue';
import AboutBio from '~/components/About/AboutBio.vue';
</script>
