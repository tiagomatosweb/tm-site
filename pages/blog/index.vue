<template>
  <LandingSection root-class="md:py-16">
    <div class="flex flex-col lg:flex-row gap-24">
      <div class="flex flex-col gap-8">
        <NuxtLink
          v-for="post in data"
          :key="post.path"
          :to="post.path"
        >
          <Card class="relative p-4 bg-transparent hover:bg-gray-200 dark:bg-transparent dark:hover:bg-gray-800">
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
      </div>

      <div class="lg:w-96 shrink-0">
        <NewsletterSignup/>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import {ChevronRightIcon} from 'lucide-vue-next';
import LandingSection from '~/common/components/Landing/LandingSection.vue';
import NewsletterSignup from '~/components/NewsletterSignup.vue';

const {data} = await useAsyncData('blog', () => queryCollection('blog')
  .all())
</script>
