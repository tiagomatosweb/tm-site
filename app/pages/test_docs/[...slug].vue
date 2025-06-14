<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <!--          <UContentNavigation-->
          <!--            highlight-->
          <!--            :navigation="navigation[0].children"-->
          <!--          />-->
        </UPageAside>
      </template>

      <UPage>
        <!--        <UPageHeader-->
        <!--          :title="page.title"-->
        <!--          :description="page.description"-->
        <!--          :links="page.links"-->
        <!--          :headline="headline"-->
        <!--        />-->

        <UPageBody>
          sdsd223232
          <!--          <ContentRenderer-->
          <!--            v-if="page"-->
          <!--            :value="page"-->
          <!--          />-->
        </UPageBody>
      </UPage>
    </UPage>
  </UContainer>
</template>

<script setup lang="ts">
import {findPageHeadline} from '#ui-pro/utils/content';

definePageMeta({
  layout: 'jornadas',
});

const {data: navigation} = await useAsyncData('navigation', () => queryCollectionNavigation('jornadaLaravel'));
provide('navigation', navigation);


const route = useRoute();
console.log(route.path);
// const {data: page} = await useAsyncData(route.path, () => queryCollection('jornadaLaravel').path(route.path).first());
// const headline = computed(() => findPageHeadline(navigation.value[0].children, page.value));
// if (!page.value) {
//   throw createError({statusCode: 404, statusMessage: 'Page not found', fatal: true});
// }
//
// useSeoMeta({
//   title: page.value.seo.title,
//   titleTemplate: null,
//   ogTitle: page.value.seo.title,
//   description: page.value.seo.description,
//   ogDescription: page.value.seo.description,
//   ogImage: 'https://docs-template.nuxt.dev/social-card.png',
//   twitterImage: 'https://docs-template.nuxt.dev/social-card.png',
// });
</script>
