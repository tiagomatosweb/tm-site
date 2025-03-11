<template>
  <NuxtLink
    :to="to"
    class="inline-flex items-center text-sm text-gray-400 dar:text-gray-500 no-underline hover:underline"
  >
    <svg class="size-4 mr-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
    </svg>
    Voltar
  </NuxtLink>
</template>

<script setup>
defineProps({
  to: [String, Object],
})
</script>
