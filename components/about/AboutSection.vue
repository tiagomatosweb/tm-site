<template>
  <LandingSection
    :root-class="props.rootClass"
    :wrap-class="cn('max-w-2xl', props.wrapClass)"
  >
    <AboutGreetings avatar-size="lg" />

    <AboutBio class="mt-6" />
  </LandingSection>
</template>

<script setup lang="ts">
import {cn} from '~/lib/utils';
import { type HTMLAttributes } from 'vue'
import LandingSection from '~/common/components/landing/LandingSection.vue';
import AboutGreetings from '~/components/about/AboutGreetings.vue';
import AboutBio from '~/components/about/AboutBio.vue';

const props = defineProps<{
  rootClass?: HTMLAttributes['class'],
  wrapClass?: HTMLAttributes['class'],
}>()
</script>
