<template>
  <ul class="space-y-3 mt-4">

    <li
      v-for="benefit in props.benefits"
      :key="benefit.label"
      class="flex items-start gap-x-2 text-gray-900"
    >
      <svg class="size-6 mt-[2px] text-primary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path clip-rule="evenodd" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"></path>
      </svg>
      {{ benefit.label }}
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  benefits: Array,
})
</script>
