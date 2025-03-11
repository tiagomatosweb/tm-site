<template>
  <div>
    <div class="flex flex-col space-y-6">
      <Card
        v-for="post in data"
        :key="post.path"
        class="relative p-4 dark:bg-transparent dark:hover:bg-gray-800"
      >
        <NuxtLink :to="post.path">
          <div class="text-xs text-gray-500 tracking-wide">{{ $dayjs(post.date).format('DD MMMM YYYY') }}</div>

          <div class="font-semibold text-gray-900 dark:text-gray-50 leading-4 mt-2">
            {{ post.title }}
          </div>

          <div class="mt-2">
            <p class="text-sm text-gray-500">{{ post.description }}</p>
          </div>
        </NuxtLink>
      </Card>
    </div>
  </div>
</template>

<script setup>
import BackBtn from '~/components/BackBtn.vue';

const {data} = await useAsyncData('blog', () => queryCollection('blog')
  .all())
</script>
