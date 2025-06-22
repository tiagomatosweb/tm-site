<template>
  <LandingSection
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="lecture in props.lectures"
          :key="lecture.id"
        >
          <PlayerVimeo
            :id="lecture.video_id"
            class="shadow-2xl shadow-primary/10"
          />

          <h6 class="heading-6 mt-1">{{ lecture.title }}</h6>
        </div>

      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';
import PlayerVimeo from '~/components/PlayerVimeo.vue';

const props = defineProps({
  headline: {
    type: String,
    default: 'Experimente Agora',
  },
  title: {
    type: String,
    default: 'Aulas gratuitas',
  },
  description: {
    type: String,
    default: 'Assista a estas aulas gratuitas.',
  },
  lectures: {
    type: Array,
    required: true,
  },
})
</script>
