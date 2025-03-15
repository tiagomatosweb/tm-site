<template>
  <NuxtLink
    :key="post.path"
    :to="post.path"
  >
    <Card
      class="p-4 border border-gray-200 dark:border-gray-800 bg-transparent hover:bg-gray-100 dark:bg-transparent dark:hover:bg-gray-900">
      <div class="text-xs text-gray-500 tracking-wide">{{ $dayjs(post.date).format('DD MMMM YYYY') }}</div>

      <h3 class="font-semibold mt-2">
        {{ post.title }}
      </h3>

      <div class="mt-2">
        <p class="text-sm text-gray-500">{{ post.description }}</p>
      </div>

      <div class="mt-4 flex items-center text-sm font-medium text-primary">
        Leia mais
        <ChevronRightIcon class="size-4 ml-1"/>
      </div>
    </Card>
  </NuxtLink>
</template>

<script setup>
import {ChevronRightIcon} from 'lucide-vue-next';

const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>
