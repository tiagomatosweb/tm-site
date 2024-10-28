<template>
  <div class="text-center flex flex-col items-center mb-16 sm:mb-24">
    <div
      v-if="props.headline"
      class="mb-2 text-sm tracking-wide font-semibold text-primary uppercase"
    >
       {{ props.headline }}
    </div>

    <h2
      v-if="props.title"
      class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
      {{ props.title }}
    </h2>

    <div
      v-if="props.description"
      class="mt-4 text-lg/8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
    >
      {{ props.description }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { type HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class'],
  title?: string,
  description?: string,
  headline?: string,
}>()
</script>
