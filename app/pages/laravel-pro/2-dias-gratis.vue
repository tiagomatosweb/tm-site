<template>
  <div>
    <UPageSection
      orientation="horizontal"
      headline="🎁 2 dias grátis"
      title="Experimente o Laravel PRO sem compromisso"
      :ui="{
        title: 'lg:text-4xl'
      }"
    >
      <template #leading>
        <UIcon name="i-custom-laravel" class="size-[56px]"/>
      </template>
      
      <template #description>
        <div class="heading-3 text-toned">Acesse todo o conteúdo do Laravel PRO por 2 dias completamente grátis e descubra por que mais de 2K devs já dominam Laravel.</div>

        <div class="mt-3">
          Sem cartão de crédito. Sem pegadinhas. Apenas <span class="tm-gradient font-bold">2 dias grátis</span> para você explorar todos os cursos, projetos e bônus do Laravel PRO.
        </div>
      </template>

      <CodeIDE>
        <div
          v-if="isSent"
          class="text-lg flex flex-col gap-4"
        >
          <p>Boa {{ user?.first_name || 'jovem' }}, seu teste grátis foi iniciado com sucesso!</p>
          <p>Em breve você vai receber as instruções para acessar seus 2 dias grátis no Laravel PRO.</p>
          <p>Bora dominar esse framework do jeito certo! 💻🔥</p>
          <p>Abs, TM</p>
        </div>

        <StartTrialForm
          v-else
          :product-id="1"
          :button-props="{
            label: 'Garantir 2 dias grátis'
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
import StartTrialForm from '~/components/Leadgen/StartTrialForm.vue';
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

