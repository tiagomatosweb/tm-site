<template>
  <div>
    <UPageSection
      orientation="horizontal"
      headline="🎁 Minicurso gratuito"
      title="Domine os 7 pilares que sustentam o Vue na prática"
      :ui="{
        title: 'lg:text-4xl'
      }"
    >
    <template #leading>
        <UIcon name="i-custom-vue" class="size-[56px]"/>
      </template>

      <template #description>
        <div class="heading-3 text-toned">Aprenda o que separa o dev que só monta componente do que realmente entende o framework.</div>

        <div class="mt-3">
          Mais de <span class="tm-gradient font-bold">4K devs</span> já estão recebendo dicas práticas por e-mail.
          Entre pro grupo que está subindo de nível com fundamentos sólidos que realmente se aplicam em projetos reais.
        </div>
      </template>

      <CodeIDE>
        <div
          v-if="isSent"
          class="text-lg flex flex-col gap-4"
        >
          <p>Boa {{ user?.name || 'jovem' }}, seu e-mail foi adicionado com sucesso!</p>
          <p>Fica de olho que em breve você vai começar a receber os conteúdos sobre os 7 Pilares do Vue.js.</p>
          <p>Bora dominar esse framework do jeito certo! 💻🔥</p>
          <p>Abs, TM</p>
        </div>

        <LeadGenForm
          v-else
          :button-props="{
            label: 'Começar o minicurso gratuito'
          }"
          :group-ids="[mailerliteGroups.VUE_INTERESSE]"
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
