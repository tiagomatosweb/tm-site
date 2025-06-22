<template>
  <div>
    <UPageSection
      orientation="horizontal"
      title="Descubra os 7 Princípios Essenciais do Laravel."
      :ui="{
        title: 'lg:text-4xl'
      }"
    >
      <template #description>
        <div class="heading-3 text-toned">Aprenda o que separa o dev que copia do que domina de verdade.</div>

        <div class="mt-3">
          Mais de <span class="tm-gradient">4.000 devs</span> já estão recebendo dicas práticas por e-mail.
          Entre pro grupo que está elevando o nível com fundamentos sólidos e aplicáveis no mundo real.
        </div>
      </template>

      <CodeIDE>
        <div
          v-if="isSent"
          class="text-lg flex flex-col gap-4"
        >
          <p>Boa {{ user?.name || 'jovem' }}, seu e-mail foi adicionado com sucesso!</p>
          <p>Fica de olho que em breve você vai começar a receber os conteúdos sobre os 7 Princípios Essenciais do
            Laravel.</p>
          <p>Bora dominar esse framework do jeito certo! 💻🔥</p>
          <p>Abs, TM</p>
        </div>

        <LeadGenForm
          v-else
          :button-props="{
            label: 'Começar o minicurso gratuito'
          }"
          :groups-id="[mailerliteGroups.LARAVEL_INTERESSE]"
          @done="onDone"
        />
      </CodeIDE>
    </UPageSection>

    <PageTestimonial/>
  </div>
</template>

<script setup>
import CodeIDE from '~/components/Codesnippet/CodeIDE.vue';
import LeadGenForm from '~/components/Leadgen/LeadGenForm.vue';
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
