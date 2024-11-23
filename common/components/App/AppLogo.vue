<template>
  <NuxtLink
    :to="{ name: 'index' }"
    class="inline-flex"
  >
    <Component
      :is="component"
      :width="width"
      class="text-brand-dark-blue dark:text-white"
    />
  </NuxtLink>
</template>

<script setup>
import {computed} from 'vue';
import LogoIcon from './AppLogoIcon.vue'
import LogoFull from './AppLogoFull.vue'

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

const width = computed(() => {
  if (props.logoWidth) {
    return props.logoWidth
  }

  if (props.logoType === 'icon') {
    return '40'
  }

  return '110';
})

</script>
