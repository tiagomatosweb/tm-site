<template>
  <NuxtLayout name="docs">
    <UPage v-if="page">
      <UPageHeader
        :title="page.title"
        :description="page.description"
        :links="page.links"
        :headline="headline"
      />

      <UPageBody>
        <ContentRenderer
          v-if="page"
          :value="page"
        />

        <USeparator v-if="surround?.length"/>

        <UContentSurround :surround="surround"/>
      </UPageBody>
    </UPage>
  </NuxtLayout>
</template>

<script setup>
import {findPageHeadline} from '#ui-pro/utils/content'


definePageMeta({
  layout: false,
})

const route = useRoute()
const navigation = inject('navigation')

const {data: page} = await useAsyncData(route.path, () => queryCollection('jornadaLaravel').path(route.path).first())
if (!page.value) {
  throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true})
}

const {data: surround} = await useAsyncData(`${route.path}-surround`, () => {
  return queryCollectionItemSurroundings('jornadaLaravel', route.path, {
    fields: ['description'],
  })
})

const title = page.value.title
const description = page.value.description

const headline = computed(() => findPageHeadline(navigation?.value, page.value))

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
})
</script>
