<template>
  <p :class="cn('text-2xl', props.class)">
    <slot>{{ props.text }}</slot>
  </p>
</template>

<script setup lang="ts">
import {cn} from '~/lib/utils';

const props = defineProps(['text', 'class']);
</script>
