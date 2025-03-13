<script setup lang="ts">
import type {HTMLAttributes} from 'vue';
import {cn} from '@/lib/utils';
import {Primitive, type PrimitiveProps} from 'reka-ui';
import {type ButtonVariants, buttonVariants} from '.';
import Spinner from '~/common/components/Ui/Spinner.vue';

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  loading?: boolean,
  loadingClass?: HTMLAttributes['class'],
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <Spinner
      v-if="loading"
      :class="cn('-ml-1 mr-0.5 size-4 text-inherit', props.loadingClass)"
    />

    <slot/>
  </Primitive>
</template>
