<template>
  <OfferSection
    offer-invite-title="Junte-se à Elite dos Devs Laravel"
    offer-invite-description="Faça parte de mais dos mais de 2k de alunos que dominam Laravel. Aqui forjamos profissionais altamente qualificados para encarar o mercado."
    offer-full-price="697"
    offer-price="397"
    offer-installment-price="39,62"
    :offer-benefits="benefits"
    offer-link="https://pay.hotmart.com/S96627323M?off=394h1wy6&checkoutMode=10"
  />
</template>

<script setup>
import OfferSection from '~/components/Offer/OfferSection.vue';

const benefits = [
  { label: '1 ano de acesso ilimitado' },
  { label: 'Todos os cursos de Laravel incluídos' },
  { label: 'Comunidade exclusiva de alunos' },
  { label: 'Suporte direto comigo via Discord' },
  { label: 'Certificado digital de conclusão' },
  { label: 'Acesso a MasterClasses exclusivas' },
  { label: 'Novas aulas e cursos sempre disponíveis' },
]
</script>
