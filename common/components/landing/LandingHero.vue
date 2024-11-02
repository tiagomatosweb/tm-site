<template>
  <LandingSection class="relative py-14">
    <div
      class="absolute -bottom-10 right-10 w-80 h-96 opacity-10 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"/>

    <div class="relative flex flex-col lg:flex-row gap-10">
      <div class="flex flex-col items-center lg:items-start justify-center lg:w-1/2 text-center lg:text-left">
        <slot name="before-title"/>

        <LandingHeroTitle :class="props.titleClass">
          <slot name="title">
            {{ props.title }}
          </slot>
        </LandingHeroTitle>

        <div class="mt-3">
          <LandingHeroDescription>
            <slot name="description">
              {{ props.description }}
            </slot>
          </LandingHeroDescription>

          <slot name="after-description"/>
        </div>
      </div>

      <div class="relative w-full lg:w-1/2 max-w-xl lg:max-w-none mx-auto">
        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-36 h-64 origin-top-left rotate-[35.87deg] opacity-40 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"/>

        <slot name="content-right"/>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/landing/LandingSection.vue';
import LandingHeroTitle from '~/common/components/landing/LandingHeroTitle.vue';
import LandingHeroDescription from '~/common/components/landing/LandingHeroDescription.vue';

const props = defineProps({
  title: String,
  titleClass: String,
  leadGroupId: String,
  description: String,
  descriptionClass: String,
})
</script>
