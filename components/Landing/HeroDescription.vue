<template>
  <p :class="cn('text-2xl', props.class)">
    <slot>{{ props.text }}</slot>
  </p>
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
