<template>
  <ClientOnly>
    <NuxtLink
      :to="{ name: 'index' }"
      class="inline-flex"
    >
      <Component
        :is="component"
        :width="logoWidth"
      />
    </NuxtLink>
  </ClientOnly>
</template>

<script setup>
import TMIconBlue from './IconBlue.vue';
import TMIconWhite from './IconWhite.vue';
import TMLogoBlue from './LogoBlue.vue';
import TMLogoWhite from './LogoWhite.vue';

const props = defineProps({
  logoType: {
    type: String,
    validator: value => ['logo', 'icon'].includes(value),
    default: 'logo',
  },
  logoWidth: {
    type: String,
  },
})

const colorMode = useColorMode()
const component = computed(() => {
  if (props.logoType === 'logo') {
    if (colorMode.value === 'dark') {
      return TMLogoWhite;
    } else {
      return TMLogoBlue;
    }
  }

  if (props.logoType === 'icon') {
    if (colorMode.value === 'dark') {
      return TMIconWhite;
    } else {
      return TMIconBlue;
    }
  }

  return TMLogoBlue;
})

</script>
