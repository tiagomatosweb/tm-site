<template>
  <div>
    <LandingSection
      v-if="isSuccess"
      headline="Boa Jovem 👊"
      title="Agora eu já sei quais conteúdos você está ineressado"
    />

    <LandingSection
      v-else
      title="Receba só conteúdo relevante e que vale a pena!"
      description="Escolhe o que faz sentido pra você e bora nessa! 🚀"
    >
      <div class="max-w-2xl mx-auto">
        <div class="grid gap-2">
          <Label
            v-for="topic in topics"
            :key="topic.id"
            :for="topic.id"
            class="cursor-pointer"
          >
            <Card>
              <CardContent>
                <div
                  class="flex flex-col sm:flex-row sm:items-center justify-between sm:space-x-6 space-y-2 sm:space-y-0">
                  <div class="flex flex-col space-y-1">
                    <span class="text-base font-bold">{{ topic.title }}</span>
                    <span class="font-normal leading-snug text-gray-400">{{ topic.description }}</span>
                  </div>

                  <Switch
                    :checked="topic.selected"
                    :id="topic.id"
                    @update:checked="() => topic.selected = !topic.selected"
                  />
                </div>
              </CardContent>
            </Card>
          </Label>

          <Button
            variant="marketing"
            size="lg"
            class="text-lg h-12 mt-2"
            :loading="loading"
            @click="storePreference"
          >Salvar
          </Button>
        </div>
      </div>
    </LandingSection>
  </div>
</template>

<script setup>
import {ref} from 'vue';
import {leadAPI} from '~/common/api/lead';
import LandingSection from '~/common/components/landing/LandingSection.vue';
import {mailerliteGroups} from '~/common/utils/mailerlite-groups';

definePageMeta({
  layout: 'lp',
  middleware: async (to) => {
    const email = to?.query?.email
    if (!email) {
      return navigateTo({name: 'index'})
    }
  },
})

const route = useRoute()
const email = route.query.email
const topics = ref([
  {
    id: 'laravel',
    mailerlite_group_id: mailerliteGroups.LARAVEL_INTERESSE,
    title: 'Laravel – Conteúdo técnico e de carreira',
    description: 'Se você quer se especializar em Laravel, eu vou te enviar tudo que você precisa para alavancar a sua carreira: dicas de código, boas práticas e estratégias de carreira.',
    selected: false,
  },
  {
    id: 'vue',
    mailerlite_group_id: mailerliteGroups.VUE_INTERESSE,
    title: 'Vue.js – Conteúdo técnico e de carreira',
    description: 'Se o seu foco é Vue.js, vou compartilhar desde o básico até hacks avançados pra você dominar essa tecnologia e criar projetos incríveis.',
    selected: false,
  },
  {
    id: 'story',
    mailerlite_group_id: mailerliteGroups.TM_MINHAHISTORIA,
    title: 'Minha História – Da Bahia para a Austrália com projetos de até 80 mil dólares',
    description: 'Quer saber como eu saí da correria dos ratos na Bahia e construí uma vida de sucesso na Austrália? Te conto tudo, sem filtro.',
    selected: false,
  },
  {
    id: 'tech',
    mailerlite_group_id: mailerliteGroups.TM_MUNDODEV,
    title: 'Mundo dos Devs – Dicas, novidades e tendências do universo tech',
    description: 'Pra quem quer ficar por dentro das últimas novidades e tendências no mercado de tecnologia e desenvolvimento.',
    selected: false,
  },
])
const loading = ref(false)
const isSuccess = ref(false)

const {data} = await useAsyncData('subscriber', () => leadAPI.getSubscriber(email).then(r => r.data))
const originalGroups = data.value?.groups

if (originalGroups) {
  topics.value.forEach(o => {
    o.selected = originalGroups.includes(o.mailerlite_group_id)
  })
}

async function storePreference() {
  const groups = topics.value
    .filter(topic => topic.selected)
    .map(o => o.mailerlite_group_id)

  try {
    loading.value = true
    await leadAPI.storePreference({
      email,
      groups,
    })
    isSuccess.value = true
  } catch (e) {
    loading.value = false
  }
}
</script>
