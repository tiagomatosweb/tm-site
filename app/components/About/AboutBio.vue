<template>
  <div :class="cn('text-xl leading-8 space-y-6', props.class)">
    <p>Sou dev full stack com mais de 20 anos de estrada, especialista em Laravel e Vue.js.</p>
    <p>Hoje atuo como engenheiro de software no mercado australiano e dedico parte do meu tempo a ensinar, de forma
      prática e direta, o que realmente faz diferença na vida de quem quer viver de programação.</p>
    <p>Seja você iniciante ou já desenrolando no código, tô aqui pra te ajudar a subir de nível — de verdade.</p>
  </div>
</template>

<script setup lang="ts">
import {type HTMLAttributes} from 'vue';

const props = defineProps<{
  class?: HTMLAttributes['class']
}>();
</script>
