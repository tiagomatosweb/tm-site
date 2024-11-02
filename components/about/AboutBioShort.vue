<template>
  <div :class="cn('leading-6 text-gray-600 dark:text-gray-300', props.class)">
    <p>Atuo como engenheiro de software no mercado australiano e dedico parte do meu tempo a
      entregar conteúdo de qualidade para programadores Laravel e Vue.</p>
  </div>
</template>

<script setup lang="ts">
import {cn} from '~/lib/utils';
import { type HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
