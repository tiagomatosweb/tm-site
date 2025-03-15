<template>
  <NuxtLayout
    name="lp"
    :background="operahouse"
    background-class="opacity-20"
  >
    <div>
      <LandingSection
        headline="Boa jovem! 👊"
        title="Prepare-se para descobrir como a minha jornada de dev full stack me levou da Bahia aos projetos internacionais de alto valor"
        description="Agora, siga os passos abaixo para concluir..."
      >
        <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div>
            <LucideMail class="size-10 text-primary"/>
            <h4 class="heading-4 mt-2">1. Consulte a sua caixa de entrada</h4>
            <p>Lembre-se de checar se o e-mail caiu na sua caixa SPAM ou na aba "Promoções" caso esteja usando
              Gmail.</p>
          </div>

          <div>
            <LucideMailOpen class="size-10 text-primary"/>
            <h4 class="heading-4 mt-2">2. Abra o e-mail que acabou de receber</h4>
            <p>Procure pelo e-mail enviado por Tiago Matos com o assunto "Seja bem-vindo".</p>
          </div>

          <div>
            <LucideReply class="size-10 text-primary"/>
            <h4 class="heading-4 mt-2">3. Responda <em>"chegou"</em> para eu saber que deu certo</h4>
            <p>Isso vai evitar que seu provedor de e-mail coloque minhas próximas mensagens na caixa de SPAM ou
              "Promoções".</p>
          </div>
        </div>
      </LandingSection>
    </div>
  </NuxtLayout>
</template>

<script setup>
import operahouse from 'assets/img/opera-house.webp';
import LandingSection from '~/common/components/Landing/LandingSection.vue';

definePageMeta({
  layout: false,
})
</script>
