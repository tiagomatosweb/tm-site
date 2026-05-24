<template>
  <NuxtLink
    :to="linkTo"
    class="inline-flex"
  >
    <img
      v-if="logoSrc"
      :src="logoSrc"
      :alt="logoAlt"
      :width="width"
      class="h-auto max-w-full"
    >
    <Component
      v-else
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
  logoSrc: {
    type: String,
    default: '',
  },
  logoAlt: {
    type: String,
    default: 'Tiago Matos',
  },
  logoTo: {
    type: [String, Object],
    default: undefined,
  },
})

const linkTo = computed(() => props.logoTo ?? { name: 'index' })

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
