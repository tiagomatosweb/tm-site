<template>
  <LandingSection
    :root-class="props.rootClass"
    :wrap-class="props.wrapClass"
  >
    <AboutGreetings />

    <AboutBio class="mt-6" />
  </LandingSection>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'

const props = defineProps<{
  rootClass?: HTMLAttributes['class'],
  wrapClass?: HTMLAttributes['class'],
}>()
</script>
