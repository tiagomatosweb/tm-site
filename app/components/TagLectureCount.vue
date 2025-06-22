<template>
  <div class="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 gap-x-1">
    <UIcon
      name="i-lucide-video"
      class="size-4 text-gray-400 dark:text-gray-500"
    />

    <div>{{ number }} aula<span v-if="number !== 1">s</span></div>
  </div>
</template>

<script setup>
defineProps({
  number: [Number, String],
})
</script>
