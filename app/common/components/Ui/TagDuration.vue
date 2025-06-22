<template>
  <div class="flex items-center text-xs font-medium text-gray-500 dark:text-gray-400 gap-x-1">
    <Icon
      name="i-lucide-clock-5"
      class="size-3.5 text-gray-400 dark:text-gray-500"
    />

    <div v-if="hours">{{ hours }}h</div>
    <div v-if="minutes">{{ minutes }}m</div>
    <div v-if="!hideSeconds && seconds">{{ seconds }}s</div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import dayjsDuration from 'dayjs/plugin/duration'

dayjs.extend(dayjsDuration);

const props = defineProps({
  duration: [Number, String],
  hideSeconds: Boolean,
})

const duration = dayjs.duration(parseInt(props.duration) * 1000);
const hours = computed(() => duration.hours() + (duration.days() * 24))
const minutes = computed(() => duration.minutes())
const seconds = computed(() => duration.seconds())
</script>
