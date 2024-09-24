<template>
  <h1 :class="cn('text-5xl font-black tracking-tight !leading-tight text-gray-900 dark:text-white mb-0', props.class)">
    <slot>{{ props.text }}</slot>
  </h1>
</template>

<script setup lang="ts">
import {cn} from '~/lib/utils';
import type { PrimitiveProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'

interface Props extends PrimitiveProps {
  text?: string,
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
</script>
