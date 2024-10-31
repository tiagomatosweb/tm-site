<template>
  <NuxtLayout
    name="lp"
    :background="operahouse"
  >
    <SectionLeadGen
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
    </SectionLeadGen>

    <SectionTestimonial/>

    <SectionAbout wrap-class="max-w-2xl"/>
  </NuxtLayout>
</template>

<script setup>
import operahouse from '@/assets/img/opera-house.webp'
import {leadAPI} from '~/api/lead';

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
