<template>
  <OfferSection
    offer-invite-title="Junte-se à Elite dos Devs Laravel"
    offer-invite-description="Faça parte de mais dos mais de 2k de alunos que dominam Laravel. Aqui forjamos profissionais altamente qualificados para encarar o mercado."
    offer-full-price="397"
    offer-price="297"
    offer-installment-price="24,75"
    :offer-benefits="benefits"
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
