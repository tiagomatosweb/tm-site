<template>
  <div class="relative flex flex-col md:flex-row md:items-center gap-4">
    <div
      :class="`${avatarSize} rounded-full p-0.5 bg-tm-gradient`"
    >
      <img
        src="@/assets/img/avatar.webp"
        alt="Tiago Matos"
        class="rounded-full"
      >
    </div>

    <div>
        <span class="text-highlighted">
          <span class="font-bold text-2xl font-poppins">Fala jovem  👋🏼,</span>
          <br><b class="font-black text-3xl font-poppins">Tiago Matos aqui...</b>
        </span>
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  avatarSize: {
    type: String,
    default: 'sm',
    validator: value => ['sm', 'lg'].includes(value),
  },
})

const avatarSize = computed(() => {
  const sizes = {
    sm: 'size-16',
    lg: 'size-32',
  }

  return sizes[props.avatarSize]
})
</script>
