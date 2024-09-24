<template>
  <div
    v-if="background"
    class="z-0 absolute top-0 inset-x-0"
  >
    <div
      class="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none dark:from-gray-950 absolute"/>
    <img :class="cn('w-full opacity-40', props.backgroundClass)" :src="props.background" alt="">
  </div>

  <div class="relative z-10">
    <div class="flex flex-col min-h-screen">
      <div class="text-center py-6">
        <TMLogo
          logo-width="120"
        />
      </div>

      <div>
        <slot/>
      </div>

      <AppFooter class="mt-auto"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {cn} from '~/lib/utils';
import type {PrimitiveProps} from 'radix-vue';
import type {HTMLAttributes} from 'vue';

interface Props extends PrimitiveProps {
  background?: string,
  backgroundClass?: HTMLAttributes['class'],
}

const props = defineProps<Props>();
</script>
