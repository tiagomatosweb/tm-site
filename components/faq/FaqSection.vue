<template>
  <LandingSection
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <div class="max-w-4xl mx-auto">
      <div class="space-y-3">
        <Card
          v-for="item in faqs"
          :key="item.title"
          class="cursor-pointer"
          @click.stop.prevent="item.is_open = !item.is_open"
        >
          <CardContent class="flex flex-col px-6 py-3">
            <div class="flex items-center justify-between">
              <div class="text-gray-800 dark:text-gray-100 font-medium text-base">{{ item.title }}</div>

              <div>
                <svg v-if="item.is_open" class="w-5 h-5 text-gray-800 dark:text-gray-200" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                </svg>
                <svg v-else class="w-5 h-5 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor"
                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>

            <div
              v-show="item.is_open"
              class="pt-4 mt-4 -mx-6 px-6 border-t dark:border-gray-700"
            >
                <span
                  v-html="item.text"
                  class="text-gray-800 dark:text-gray-100 space-y-3"
                />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import {ref} from 'vue';
import LandingSection from '~/common/components/landing/LandingSection.vue';

const props = defineProps({
  headline: {
    type: String,
    default: 'FAQ',
  },
  title: {
    type: String,
    default: 'Ficou alguma dúvida? 🤔',
  },
  description: {
    type: String,
    default: 'Veja se a sua dúvida está entre as perguntas mais frequentes que recebemos.',
  },
  items: {
    type: Array,
    default: () => [],
  },
})

const faqs = ref([
  ...props.items,
  {
    title: 'Quando terei acesso ao curso?',
    text: '<p>Após a confirmação da sua matrícula, você terá acesso imediato a todas as aulas. Além disso, receberá notificações por e-mail sempre que novas aulas forem adicionadas.</p>',
  },
  {
    title: 'O curso terá atualizações?',
    text: '<p><strong>Sim!</strong> Novas aulas e conteúdos sobre são adicionados mensalmente, para que você sempre tenha acesso às informações mais recentes e relevantes sobre o framework.</p>',
  },
  {
    title: 'O curso é adequado para iniciantes?',
    text: '<p>Absolutamente! Essa jornada foi projetada para levar você do zero ao avançado, mesmo que você esteja começando agora.</p>',
  },
  {
    title: 'Qual é a duração do curso?',
    text: '<p>O curso é projetado para ser flexível, permitindo que você aprenda no seu próprio ritmo, com acesso por 1 ano.</p>',
  },
  {
    title: 'Como posso tirar dúvidas?',
    text: '<p>Após a confirmação da matrícula, você será convidado para acessar uma área exclusiva para alunos no Discord onde você poderá tirar dúvidas diretamente comigo.</p>',
  },
  {
    title: 'Como funciona a comunidade de alunos?',
    text: '<p>Ao se matricular, você terá acesso a uma comunidade exclusiva onde pode trocar experiências e fazer networking com outros alunos.</p>',
  },
  {
    title: 'E se eu me arrepender de me inscrever no curso?',
    text: '<p>Você terá 14 dias para explorar o curso e decidir se ele é a escolha certa para você. Se dentro desse período você não estiver satisfeito, devolvemos 100% do seu investimento.</p>',
  },
  {
    title: 'Quais são as formas de pagamento aceitas?',
    text: '<p>O curso aceita uma variedade de formas de pagamento, como cartões de crédito, boleto, pix. Lembre-se de que pagamentos podem levar até 72 horas para serem confirmados em alguns casos.</p>',
  },
  {
    title: 'Tem certificado de conclusão do curso?',
    text: '<p><strong>Sim!</strong> Ao finalizar o curso, você pode solicitar seu certificado via e-mail, garantindo que você tenha uma certificação que ateste suas habilidades em Laravel.</p>',
  },
])

</script>
