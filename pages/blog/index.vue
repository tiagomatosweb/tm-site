<template>
  <LandingSection root-class="md:py-16">
    <div class="flex gap-24">
      <div class="flex flex-col space-y-6">
        <Card
          v-for="post in data"
          :key="post.path"
          class="relative p-4 dark:bg-transparent dark:hover:bg-gray-800"
        >
          <NuxtLink :to="post.path">
            <div class="text-xs text-gray-500 tracking-wide">{{ $dayjs(post.date).format('DD MMMM YYYY') }}</div>

            <div class="font-semibold text-gray-900 dark:text-gray-50 leading-4 mt-2">
              {{ post.title }}
            </div>

            <div class="mt-2">
              <p class="text-sm text-gray-500">{{ post.description }}</p>
            </div>
          </NuxtLink>
        </Card>
      </div>
      <div class="w-96 shrink-0">
        <Card class="bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-800">
          <CardContent>
            <h2 class="flex text-sm font-semibold text-gray-900 dark:text-gray-100">
              <MailIcon class="size-5 mr-2 text-gray-400 dark:text-gray-500"/>
              Mantenha-se atualizado
            </h2>

            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Receba notificações quando eu publicar algo
              novo.</p>

            <LeadGenFormMinimal/>
          </CardContent>
        </Card>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import {MailIcon} from 'lucide-vue-next';
import BackBtn from '~/components/BackBtn.vue';
import LandingSection from '~/common/components/Landing/LandingSection.vue';
import LeadGenFormMinimal from '~/components/Leadgen/LeadGenFormMinimal.vue';

const {data} = await useAsyncData('blog', () => queryCollection('blog')
  .all())
</script>
