<template>
  <LandingSection root-class="md:py-16">
    <div class="flex flex-col lg:flex-row gap-16">
      <div class="flex flex-col gap-8">
        <BlogPostCard
          v-for="post in data"
          :key="post.path"
          :post="post"
        />
      </div>

      <div class="lg:w-96 shrink-0">
        <NewsletterSignup/>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/components/Landing/LandingSection.vue';
import NewsletterSignup from '~/components/NewsletterSignup.vue';
import BlogPostCard from '~/components/Blog/BlogPostCard.vue';

const {data} = await useAsyncData('blog', () => queryCollection('blog')
  .all())
</script>
