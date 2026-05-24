<template>
  <LandingSection
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <div class="max-w-4xl mx-auto">
      <div class="space-y-3">
        <UAccordion
          default-value="0"
          :unmount-on-hide="false"
          :ui="{ trigger: 'text-base', body: 'text-base text-muted' }"
          :items="faqs"
        >
          <template #body="{ item }">
            <span v-html="item.content"/>
          </template>
        </UAccordion>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import {ref} from 'vue';
import LandingSection from '~/components/Landing/LandingSection.vue';

const props = defineProps({
  headline: {
    type: String,
    default: 'FAQ',
  },
  title: {
    type: String,
    default: '',
  },
  label: {
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
    label: 'Quando terei acesso ao curso?',
    content: '<p>Após a confirmação da sua matrícula, você terá acesso imediato a todas as aulas. Além disso, receberá notificações por e-mail sempre que novas aulas forem adicionadas.</p>',
  },
  {
    label: 'O curso terá atualizações?',
    content: '<p><strong>Sim!</strong> Novas aulas e conteúdos sobre são adicionados mensalmente, para que você sempre tenha acesso às informações mais recentes e relevantes sobre o framework.</p>',
  },
  {
    label: 'O curso é adequado para iniciantes?',
    content: '<p>Absolutamente! Essa jornada foi projetada para levar você do zero ao avançado, mesmo que você esteja começando agora.</p>',
  },
  {
    label: 'Qual é a duração do curso?',
    content: '<p>O curso é projetado para ser flexível, permitindo que você aprenda no seu próprio ritmo, com acesso por 1 ano.</p>',
  },
  {
    label: 'Como posso tirar dúvidas?',
    content: '<p>Após a confirmação da matrícula, você será convidado para acessar uma área exclusiva para alunos no Discord onde você poderá tirar dúvidas diretamente comigo.</p>',
  },
  {
    label: 'Como funciona a comunidade de alunos?',
    content: '<p>Ao se matricular, você terá acesso a uma comunidade exclusiva onde pode trocar experiências e fazer networking com outros alunos.</p>',
  },
  {
    label: 'E se eu me arrepender de me inscrever no curso?',
    content: '<p>Você terá 14 dias para explorar o curso e decidir se ele é a escolha certa para você. Se dentro desse período você não estiver satisfeito, devolvemos 100% do seu investimento.</p>',
  },
  {
    label: 'Quais são as formas de pagamento aceitas?',
    content: '<p>O curso aceita uma variedade de formas de pagamento, como cartões de crédito, boleto, pix. Lembre-se de que pagamentos podem levar até 72 horas para serem confirmados em alguns casos.</p>',
  },
  {
    label: 'Tem certificado de conclusão do curso?',
    content: '<p><strong>Sim!</strong> Ao finalizar o curso, você pode solicitar seu certificado via e-mail, garantindo que você tenha uma certificação que ateste suas habilidades em Laravel.</p>',
  },
])

</script>
