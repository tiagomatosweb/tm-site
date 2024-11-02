<template>
  <div :class="cn('text-xl leading-8 space-y-6', props.class)">
    <p>Sou desenvolvedor full stack com expertise
      em Laravel e Vue.js e atuo na área há mais de 20 anos.</p>
    <p>Atualmente sou engenheiro de software no mercado
      australiano e dedico parte do meu tempo a entregar conteúdo de qualidade para programadores de todos os
      níveis.</p>
  </div>
</template>

<script setup lang="ts">
import {cn} from '~/lib/utils';
import { type HTMLAttributes } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>
