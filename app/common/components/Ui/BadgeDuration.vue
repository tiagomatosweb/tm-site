<template>
  <div class="shrink-0 flex items-center space-x-2 text-left">
    <div class="flex items-center justify-center w-12 h-12 rounded-lg bg-fuchsia-500/20">
      <Icon
        name="i-lucide-clock-5"
        class="size-6 text-fuchsia-400"
      />
    </div>

    <div>
      <div class="text-sm text-gray-500 dark:text-gray-400 font-medium">Duração</div>
      <div class="text-xl dark:text-gray-300 font-medium">
        <template v-if="hours">{{ hours }}h</template>
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import dayjsDuration from 'dayjs/plugin/duration'

dayjs.extend(dayjsDuration);

const props = defineProps({
  duration: Number,
})

const duration = dayjs.duration(props.duration * 1000);
const hours = computed(() => duration.hours() + (duration.days() * 24))
</script>
