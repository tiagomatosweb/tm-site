<template>
  <div :class="rootClass">
    <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4031 0.825482L14.1523 6.43315L10.9015 0.825482H0.0759277L14.1523 25.1077L28.2288 0.825482H17.4031Z" fill="#41B883"/>
      <path d="M17.4032 0.825502L14.1524 6.43317L10.9016 0.825502H5.70654L14.1524 15.3945L22.5982 0.825502H17.4032Z" fill="#34495E"/>
    </svg>
  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validate: value => ['sm', 'md'].value(value)
  }
})

const rootClass = computed(() => [
  'flex items-center justify-center bg-emerald-500/20 rounded-lg p-2',
  sizeClass.value
])

const sizeClass = computed(() => {
  if (props.size === 'sm') {
    return 'w-10 h-10'
  }

  return 'w-14 h-14'
})
</script>

