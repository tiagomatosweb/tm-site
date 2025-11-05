<template>
  <div>
    <UPageSection
      orientation="horizontal"
      headline="🎁 2 dias grátis"
      title="Teste o Vue PRO gratuitamente por 2 dias"
      :ui="{
        title: 'lg:text-4xl'
      }"
    >
      <template #leading>
        <UIcon name="i-custom-vue" class="size-[56px]"/>
      </template>
      
      <template #description>
        <div class="heading-3 text-toned">Teste o Vue PRO sem nenhum compromisso. Explore todos os cursos, projetos e conteúdos exclusivos por 2 dias completos.</div>

        <div class="mt-3">
          <span class="tm-gradient font-bold">100% grátis</span> e sem cartão de crédito. Use esses 2 dias para conhecer a fundo o que o Vue PRO tem a oferecer e veja se faz sentido pra você.
        </div>
      </template>

      <CodeIDE>
        <div
          v-if="isSent"
          class="text-lg flex flex-col gap-4"
        >
          <p>Boa {{ user?.first_name || 'jovem' }}, sua conta foi criada com sucesso!</p>
          <p>Você vai receber em breve um e-mail com todas as instruções para começar a usar seus 2 dias grátis no Vue PRO.</p>
          <p>Prepare-se pra elevar seu nível com Vue.js! 💻🔥</p>
          <p>Abs, TM</p>
        </div>

        <RegisterForm
          v-else
          :trial-product-id="2"
          :button-props="{
            label: 'Começar teste grátis'
          }"
          @done="onDone"
        />
      </CodeIDE>
    </UPageSection>

    <PageTestimonial/>
  </div>
</template>

<script setup>
import CodeIDE from '~/components/Codesnippet/CodeIDE.vue';
import RegisterForm from '~/components/Leadgen/RegisterForm.vue';
import PageTestimonial from '~/components/Page/PageTestimonial.vue';

definePageMeta({
  layout: 'lp',
})

const user = ref({});
const isSent = ref(false);

function onDone(data) {
  isSent.value = true
  user.value = data
}
</script>

