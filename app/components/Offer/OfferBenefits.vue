<template>
  <ul class="space-y-3 mt-4">
    <li
      v-for="(benefit, index) in props.benefits"
      :key="index"
      class="flex items-start gap-x-2 text-inverted"
    >
      <UIcon name="i-lucide-circle-check" class="text-primary size-5 shrink-0"/>
      {{ benefit }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  benefits: Array,
})
</script>
