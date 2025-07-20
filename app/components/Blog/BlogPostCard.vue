<template>
  <NuxtLink
    :key="post.path"
    :to="post.path"
  >
    <UCard
      :ui="{ root: 'hover:bg-gray-100 dark:hover:bg-gray-800 transition-all ease-in-out duration-300', body: 'p-4 sm:p-4' }"
    >
      <div class="text-xs text-gray-500 tracking-wide">{{ $dayjs(post.date).format('DD MMMM YYYY') }}</div>

      <h3 class="font-semibold mt-2">
        {{ post.title }}
      </h3>

      <div class="mt-2">
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ post.description }}</p>
      </div>

      <div class="mt-4 flex items-center text-sm font-medium text-(--ui-primary)">
        Leia mais
        <UIcon name="i-lucide-chevron-right" class="size-4 ml-1"/>
      </div>
    </UCard>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})
</script>
