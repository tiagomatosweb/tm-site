<template>
  <div class="shrink-0 flex items-center space-x-2 text-left">
    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-violet-500/20">
      <Icon
        name="i-lucide-graduation-cap"
        class="size-6 text-violet-400"
      />
    </div>

    <div>
      <div class="text-sm text-gray-500 dark:text-gray-400 font-medium">Total de</div>
      <div class="text-xl text-gray-700 dark:text-gray-300 font-medium">{{ number }} cursos</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  number: Number,
})
</script>
