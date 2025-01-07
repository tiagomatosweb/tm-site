<template>
  <OfferSection
    offer-invite-title="Junte-se à Elite dos Devs Vue"
    offer-invite-description="Faça parte de mais dos mais de 2k de alunos que dominam Vue. Aqui forjamos profissionais altamente qualificados para encarar o mercado."
    offer-full-price="697"
    offer-price="397"
    offer-installment-price="39,62"
    :offer-benefits="benefits"
    offer-link="https://pay.hotmart.com/U96627395Y?off=b2d6obwg&checkoutMode=10"
  />
</template>

<script setup>
import OfferSection from '~/components/Offer/OfferSection.vue';

const benefits = [
  { label: '1 ano de acesso ilimitado' },
  { label: 'Todos os cursos de Vue incluídos' },
  { label: 'Comunidade exclusiva de alunos' },
  { label: 'Suporte direto comigo via Discord' },
  { label: 'Certificado digital de conclusão' },
  { label: 'Acesso a MasterClasses exclusivas' },
  { label: 'Novas aulas e cursos sempre disponíveis' },
]
</script>
