<template>
  <UButton
    :to="to"
    icon="i-lucide-chevron-left"
    size="lg"
    variant="soft"
    :ui="{ base: 'rounded-full' }"
  >
  </UButton>
</template>

<script setup>
defineProps({
  to: [String, Object],
})
</script>
