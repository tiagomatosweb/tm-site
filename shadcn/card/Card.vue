<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg bg-gray-100 text-gray-950 dark:bg-gray-800 dark:text-gray-50',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
