<template>
  <UPageSection
    title="🎁 Assista aulas gratuitas agora mesmo"
    description="Veja com seus próprios olhos como ensino na prática. Sem cadastro, sem enrolação."
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
    }"
  >
  <template #features>
    <div 
      v-for="lecture in data"
      :key="lecture.id"
    >
      <PlayerVimeo    
        :id="lecture.video_id"
        class="shadow-2xl shadow-primary/40"
      />

      <h4 class="text-lg font-semibold mt-4 relative">{{lecture.title}}</h4>
  </div>
  </template>
  </UPageSection>
</template>

<script setup>
import axios from 'axios'
const {data} = useLazyAsyncData('laravel-free-lecture', () => axios.get('api/lectures/free', {
  params: {
    'filter[course_id]': 32,
  },
}).then(r => r.data))

</script>