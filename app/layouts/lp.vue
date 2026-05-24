<template>
  <div>
    <div
      v-if="background"
      class="z-0 absolute top-0 inset-x-0"
    >
      <img :class="cn('w-full opacity-40', props.backgroundClass)" :src="props.background" alt="">
      <div
        class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-gray-950 absolute"/>
    </div>

    <div class="relative z-10">
      <div class="flex flex-col min-h-screen">
        <div class="text-center py-6">
          <AppLogo
            :logo-src="logo?.src"
            :logo-alt="logo?.alt"
            :logo-width="logo?.width"
            :logo-to="logo?.to"
          />
        </div>

        <div>
          <slot/>
        </div>

        <AppFooter class="mt-auto"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppFooter from '~/components/App/AppFooter.vue';
import AppLogo from '~/components/App/AppLogo.vue';

const route = useRoute();

const logo = computed(() => {
  const key = route.meta.logo as string | undefined;
  if (!key || !(key in lpLogos)) {
    return { width: '120' };
  }

  const preset = lpLogos[key as keyof typeof lpLogos];
  return {
    ...preset,
    width: (route.meta.logoWidth as string | undefined) ?? preset.width,
    to: (route.meta.logoTo as string | { name: string } | undefined) ?? preset.to,
  };
});

const props = defineProps({
  background: {
    type: String,
    default: '',
  },
  backgroundClass: {
    type: String,
    default: '',
  },
});
</script>
