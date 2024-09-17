<template>
  <NuxtLink
    :to="{ name: 'index' }"
    class="inline-flex"
  >
    <Component
      :is="component"
      :width="logoWidth"
      class="text-brand-dark-blue dark:text-white"
    />
  </NuxtLink>
</template>

<script setup>
import LogoIcon from './Icon.vue'
import LogoFull from './Full.vue'

const props = defineProps({
  logoType: {
    type: String,
    validator: value => ['full', 'icon'].includes(value),
    default: 'full',
  },
  logoWidth: {
    type: String,
  },
})

const component = computed(() => {
  if (props.logoType === 'icon') {
    return LogoIcon
  }

  return LogoFull;
})

</script>
