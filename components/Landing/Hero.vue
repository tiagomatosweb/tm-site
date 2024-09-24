<template>
  <LandingSection class="relative py-14">
    <div
      class="absolute -bottom-10 right-10 w-80 h-96 opacity-10 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"></div>

    <div class="relative flex flex-col lg:flex-row gap-10">
      <div class="flex flex-col justify-center lg:w-1/2 text-center lg:text-left">
          <LandingHeroTitle :class="props.titleClass">
            <slot name="title">
              {{ props.title }}
            </slot>
          </LandingHeroTitle>

        <div class="mt-5">
          <LandingHeroDescription>
            <slot name="description">
              {{ props.description }}
            </slot>
          </LandingHeroDescription>

          <slot name="extra" />
        </div>
      </div>

      <div class="relative lg:w-1/2 max-w-xl lg:max-w-none mx-auto">
        <div
          class="absolute left-1/2 transform -translate-x-1/2 w-36 h-64 origin-top-left rotate-[35.87deg] opacity-40 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"></div>

        <LeadGenForm
          :group-id="leadGroupId"
          @done="emit('lead-done')"
        />
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import LeadGenForm from '~/components/LeadGenForm.vue';

const emit = defineEmits(['lead-done'])
const props = defineProps({
  title: String,
  titleClass: String,
  leadGroupId: String,
  description: String,
  descriptionClass: String,
})
</script>
