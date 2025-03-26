<template>
  <LandingSection root-class="md:py-16" wrap-class="max-w-5xl">
    <BackBtn :to="{ name: 'blog' }"/>

    <div
      class="mt-10 max-w-none">
      <time
        :datetime="$dayjs(data.date).format('DD MMMM YYYY')"
        class="text-sm text-gray-500"
      >
        {{ $dayjs(data.date).format('DD MMMM YYYY') }}
      </time>

      <ProseH1>{{ data.title }}</ProseH1>

      <ContentRenderer
        :value="data"
      />
    </div>

    <div class="mt-16">
      <DisqusComments identifier="route.path"/>
    </div>
  </LandingSection>
</template>

<script setup>
import BackBtn from '@/components/BackBtn.vue';
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const route = useRoute()
const {data} = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first())
useSeoMeta({
  title: data.value?.title,
  // ogTitle: `${page.value.seo.title} - ${seo?.siteName}`,
  description: data.value?.description,
  // ogDescription: page.value.seo.description
})
</script>
