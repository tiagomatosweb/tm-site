<template>
  <NuxtLayout
    name="lp"
    :background="operahouse"
  >
    <LeadGenSection
      title-class="text-4xl"
      :lead-groups-id="[mailerliteGroups.TM_MINHAHISTORIA]"
      :on-done="onDone"
    >
      <template #title>
        Como saí da corrida dos ratos na Bahia para fazer projetos de até <span class="tm-gradient font-bold">80 mil dólares</span>
        na Austrália 🦘
      </template>

      <template #description>
        Saiba um pouco mais sobre a minha carreira como dev full stack.
      </template>
    </LeadGenSection>

    <TestimonialSection/>

    <AboutSection />
  </NuxtLayout>
</template>

<script setup>
import operahouse from '@/assets/img/opera-house.webp'
import {leadAPI} from '~/common/api/lead';
import AboutSection from '~/components/About/AboutSection.vue';
import TestimonialSection from '~/components/Testimonial/TestimonialSection.vue';
import LeadGenSection from '~/components/Leadgen/LeadGenSection.vue';
import {mailerliteGroups} from '~/common/utils/mailerlite-groups';

definePageMeta({
  layout: false,
  middleware: async (to) => {
    if (to.query?.email) {
      const data = {
        email: to.query?.email,
        groups: [mailerliteGroups.TM_MINHAHISTORIA],
      }

      await leadAPI.createSubscriber(data)
      return navigateTo({name: 'minha-historia-obrigado'})
    }
  },
})

const router = useRouter()
function onDone() {
  return router.push({name: 'minha-historia-obrigado'})
}
</script>
