<template>
  <div :class="cn('leading-7 text-gray-600 dark:text-gray-400', props.class)">
    <p>Atuo como engenheiro de software no mercado australiano e dedico parte do meu tempo a
      entregar conteúdo de qualidade para programadores Laravel e Vue.</p>
  </div>
</template>

<script setup lang="ts">
import {type HTMLAttributes} from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class']
}>();
</script>
