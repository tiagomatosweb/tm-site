<template>
  <div>
    <BackBtn :to="{ name: 'blog' }"/>

    <div class="mt-10 prose prose-gray dark:prose-invert dark:prose-p:text-gray-300 prose-p:my-8 prose-pre:bg-gray-900 dark:prose-pre:bg-gray-50/5 prose-pre:px-4 prose-pre:py-6 max-w-none">
      <time
        :datetime="$dayjs(data.date).format('DD MMMM YYYY')"
        class="text-sm text-gray-500"
      >
        {{ $dayjs(data.date).format('DD MMMM YYYY') }}
      </time>

      <h1 class="mt-3">{{ data.title }}</h1>

      <ContentRenderer
        :value="data"
      />
    </div>
  </div>


  <div>
    <DisqusComments identifier="route.path"/>
  </div>
</template>

<script setup>
import BackBtn from '@/components/BackBtn.vue';

const route = useRoute()
const {data} = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())
useSeoMeta({
  title: data.value?.title,
  description: data.value?.description,
})
</script>
