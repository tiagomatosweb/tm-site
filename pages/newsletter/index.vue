<template>
  <div>
    <LeadGenSection
      title="Conteúdo dev direto na sua inbox!"
      :lead-groups-id="[mailerliteGroups.TM_MUNDODEV]"
      :on-done="onDone"
    >
      <template #description>
        Junte-se a <span class="tm-gradient font-bold">4k+ leitores</span> e receba dicas, lições e insights retirados do campo de batalha de
        quem respira programação web há mais de 2 décadas.
      </template>

      <template #after-description>
        <div class="flex items-center justify-center lg:justify-start gap-2 mt-8">
          <Badge class="border-0 bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-500 text-yellow-800">Javascript</Badge>
          <Badge class="border-0 bg-green-50 dark:bg-green-500/10 dark:text-green-400 text-green-700">Vue</Badge>
          <Badge class="border-0 bg-indigo-50 dark:bg-indigo-400/10 dark:text-indigo-400 text-indigo-700">PHP</Badge>
          <Badge class="border-0 bg-red-50 dark:bg-red-400/10 dark:text-red-400 text-red-700">Laravel</Badge>
          <Badge class="border-0">Carreira</Badge>
        </div>
      </template>
    </LeadGenSection>

    <TestimonialSection/>

    <AboutSection />
  </div>
</template>

<script setup>
import LeadGenSection from '~/components/Leadgen/LeadGenSection.vue';
import TestimonialSection from '~/components/Testimonial/TestimonialSection.vue';
import AboutSection from '~/components/About/AboutSection.vue';
import {mailerliteGroups} from '~/common/utils/mailerlite-groups';

definePageMeta({
  layout: 'lp',
})

const router = useRouter()
function onDone() {
  return router.push({ name: 'newsletter-obrigado' })
}
</script>
