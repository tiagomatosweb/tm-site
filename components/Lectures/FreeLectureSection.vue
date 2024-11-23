<template>
  <LandingSection
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <div class="max-w-4xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Vimeo
          v-for="lecture in props.lectures"
          :key="lecture.id"
          :id="lecture.video_id"
          class="shadow-2xl shadow-primary/10"
        />
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';
import Vimeo from '~/common/components/Videoplay/Vimeo.vue';

const props = defineProps({
  headline: {
    type: String,
    default: 'Experimente Agora'
  },
  title: {
    type: String,
    default: 'Aulas gratuitas'
  },
  description: {
    type: String,
    default: 'Assista a estas aulas gratuitas.'
  },
  lectures: {
    type: Object,
    required: true,
  },
})
</script>
