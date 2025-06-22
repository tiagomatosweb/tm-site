<template>
  <div :class="cn(props.class)">
    <UIcon
      name="i-lucide-loader-circle"
      :class="cn('animate-spin text-primary', props.iconClass)"
      :size="props.size"
    />
  </div>
</template>

<script setup lang="ts">
import type {HTMLAttributes} from 'vue';

const props = withDefaults(defineProps<{
  class?: HTMLAttributes['class']
  iconClass?: HTMLAttributes['class']
  size?: string | number
}>(), {
  class: null,
  iconClass: 'text-primary',
  size: '24',
});
</script>
