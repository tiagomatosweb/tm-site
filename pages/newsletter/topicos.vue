<template>
  <div>
      <LandingSection
        v-if="isSuccess"
        title="Boa jovem! Agora eu já sei o que você curte 👊"
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
                <div class="flex flex-col sm:flex-row sm:items-center justify-between sm:space-x-6 space-y-2 sm:space-y-0">
                    <div
                      class="shrink-0"
                      :class="topic.selected ? 'text-brand-light-blue' : null"
                    >
                      <IconCircleCheckBig class="size-8" />
                    </div>
<!--                    <div class="shrink-0 size-8 border-2 border-brand-light-blue rounded-full p-1">-->
<!--                      <div class="w-full h-full rounded-full bg-brand-light-blue" />-->
<!--                    </div>-->

                    <div class="flex flex-col space-y-1">
                      <span class="text-base font-bold">{{ topic.title }}</span>
                      <span class="font-normal leading-snug text-gray-400">{{ topic.description }}</span>
                    </div>
                    <input type="checkbox" :checked="topic.selected" :id="topic.id">

<!--                  <Switch-->
<!--                    :checked="topic.selected"-->
<!--                    :id="topic.id"-->
<!--                    @update:checked="() => topic.selected = !topic.selected"-->
<!--                  />-->
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
import {leadAPI} from '~/api/lead';

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
    mailerlite_group_id: '135215804048213853',
    title: 'Laravel – Conteúdo técnico e de carreira',
    description: 'Se você quer se especializar em Laravel, eu vou te enviar tudo que você precisa para alavancar a sua carreira: dicas de código, boas práticas e estratégias de carreira.',
    selected: false,
  },
  {
    id: 'vue',
    mailerlite_group_id: '136027254000977502',
    title: 'Vue.js – Conteúdo técnico e de carreira',
    description: 'Se o seu foco é Vue.js, vou compartilhar desde o básico até hacks avançados pra você dominar essa tecnologia e criar projetos incríveis.',
    selected: false,
  },
  {
    id: 'story',
    mailerlite_group_id: '133312048173942337',
    title: 'Minha História – Da Bahia para a Austrália com projetos de até 80 mil dólares',
    description: 'Quer saber como eu saí da correria dos ratos na Bahia e construí uma vida de sucesso na Austrália? Te conto tudo, sem filtro.',
    selected: false,
  },
  {
    id: 'tech',
    mailerlite_group_id: '118070622771218165',
    title: 'Mundo dos Devs – Dicas, novidades e tendências do universo tech',
    description: 'Pra quem quer ficar por dentro das últimas novidades e tendências no mercado de tecnologia e desenvolvimento.',
    selected: false,
  },
])
const loading = ref(false)
const isSuccess = ref(false)

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

// const {data} = await useAsyncData(async () => {
//     const response = await leadAPI.getSubscriber(email)
//     const originalGroups = response?.data?.groups
//
//     if (originalGroups) {
//       topics.value.forEach(o => {
//         o.selected = originalGroups.includes(o.mailerlite_group_id)
//       })
//     }
//     return response?.data
//   },
// )
</script>
