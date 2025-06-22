<template>
  <NuxtLayout
    name="lp"
    :background="operahouse"
  >
    <LeadGenSection
      title-class="text-4xl"
      :lead-groups-id="[mailerliteGroups.TM_MINHAHISTORIA]"
      @done="onDone"
    >
      <template #title>
        Como saí da corrida dos ratos na Bahia para fazer projetos de até <span class="tm-gradient font-bold">80 mil dólares</span>
        na Austrália 🦘
      </template>

      <template #description>
        Saiba um pouco mais sobre a minha carreira como dev full stack.
      </template>
    </LeadGenSection>

    <PageTestimonial/>

    <PageAbout/>
  </NuxtLayout>
</template>

<script setup>
import operahouse from '@/assets/img/opera-house.webp'
import {leadAPI} from '~/common/api/lead';
import PageAbout from '~/components/Page/PageAbout.vue';
import PageTestimonial from '~/components/Page/PageTestimonial.vue';
import LeadGenSection from '~/components/Leadgen/LeadGenSection.vue';

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
