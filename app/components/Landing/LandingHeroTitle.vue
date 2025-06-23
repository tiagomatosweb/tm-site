<template>
  <h1 :class="cn('text-5xl font-black tracking-tight !leading-tight text-gray-900 dark:text-white mb-0', props.class)">
    <slot>{{ props.text }}</slot>
  </h1>
</template>

<script setup lang="ts">

const props = defineProps(['text', 'class']);
</script>
