<template>
  <LandingSection
    headline="EXPERIMENTE AGORA"
    title="Ainda em dúvida se vale a pena?"
    description="Assista a estas aulas gratuitas sem compromisso e descubra por si mesmo como meu curso pode transformar suas habilidades em Laravel. Valide seu interesse e comece sua jornada!"
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
const props = defineProps({
  lectures: {
    type: Object,
    required: true,
  },
})
</script>
