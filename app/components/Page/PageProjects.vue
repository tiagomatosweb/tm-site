<template>
  <LandingSection
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <div class="space-y-20">
      <div
        v-for="(course, index) in items"
        class="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div :class="index % 2 === 0 ? 'flex lg:justify-end' : 'lg:order-2'">
          <div>
            <img
              :src="course.img"
              alt=""
              class="w-full rounded-2xl"
            >
          </div>
        </div>

        <div :class="index % 2 === 0 ? 'px-7 md:px-0' : 'lg:order-1 flex'">
          <div class="md:max-w-lg">
            <Headline>
              {{ course.headline }}
            </Headline>

            <h3 class="heading-3 mt-3">
              {{ course.title }}
            </h3>

            <div class="flex items-center gap-x-3 mt-1">
              <TagLectureCount :number="course.lectures_count"/>
              <TagDuration :duration="course.duration" hide-seconds/>
            </div>

            <div class="mt-3">
              <p class="heading-5 text-gray-800 dark:text-gray-100">{{ course.subtitle }}</p>

              <p class="text-muted mt-6">{{ course.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import LandingSection from '~/common/components/Landing/LandingSection.vue';
import Headline from '~/components/Headline.vue';
import TagLectureCount from '~/components/TagLectureCount.vue';
import TagDuration from '~/components/TagDuration.vue';

const props = defineProps({
  headline: {
    type: String,
    default: 'PROJETOS',
  },
  title: {
    type: String,
    default: 'Projetos reais inclusos',
  },
  description: {
    type: String,
    default: 'Apesar de todas as aulas serem 100% práticas, a Jornada Laravel traz projetos reais para te preparar da melhor forma possível para o mercado.',
  },
  items: {
    type: Array,
    default: () => [],
  },
})

const details = {
  28: {
    _headline: 'Construa um projeto SaaS completo de agendamento de consultas.',
    _description: 'Prepare-se para criar um SaaS poderoso e funcional, aplicando as melhores práticas e funcionalidades como fluxo de autenticação, planos de assinaturas e cargos e permissões.',
    _label: 'MULTI-TENANT',
    // _img: agendaMeScreenshot,
  },
  33: {
    _headline: 'Projeto simples com fundamentos essenciais de um projeto SaaS.',
    _description: 'Aprenda a implementar todo o fluxo de autenticação de usuários com isolamento de dados, garantindo que cada usuário tenha acesso apenas às suas próprias todo\'s.',
    _label: 'MINI-TENANT',
    // _img: todoListScreenshot,
  },
}
</script>
