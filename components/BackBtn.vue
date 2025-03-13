<template>
  <NuxtLink
    :to="to"
    class="flex items-center justify-center rounded-full size-10 bg-gray-200/20 border border-gray-200 dark:bg-gray-800/50 dark:border-gray-700/50"
  >

    <ChevronLeftIcon class="size-4 text-gray-400"/>
  </NuxtLink>

  <!--  <NuxtLink-->
  <!--    :to="to"-->
  <!--    class="inline-flex items-center text-sm text-gray-400 dar:text-gray-500 no-underline hover:underline"-->
  <!--  >-->
  <!--    <svg class="size-4 mr-1" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"-->
  <!--         xmlns="http://www.w3.org/2000/svg" aria-hidden="true">-->
  <!--      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>-->
  <!--    </svg>-->
  <!--    Voltar-->
  <!--  </NuxtLink>-->
</template>

<script setup>
import {ChevronLeftIcon} from 'lucide-vue-next';

defineProps({
  to: [String, Object],
})
</script>
