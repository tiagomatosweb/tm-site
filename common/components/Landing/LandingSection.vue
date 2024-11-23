<template>
  <div :class="cn('py-10 md:py-24', props.rootClass)">
    <div :class="cn('mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl', props.wrapClass)">
      <LandingSectionHeader
        v-if="props.headline || props.title || props.description"
        :headline="props.headline"
        :title="props.title"
        :description="props.description"
      />

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {cn} from '~/lib/utils';
import { type HTMLAttributes } from 'vue'
import LandingSectionHeader from '~/common/components/Landing/LandingSectionHeader.vue';

const props = defineProps<{
  rootClass?: HTMLAttributes['class'],
  wrapClass?: HTMLAttributes['class'],
  title?: string,
  description?: string,
  headline?: string,
}>()
</script>
