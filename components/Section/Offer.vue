<template>
  <LandingSection class="bg-gray-200 dark:bg-gray-800">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row gap-x-14">
        <div>
          <OfferInvite
            :title="props.offerInviteTitle"
            :description="props.offerInviteDescription"
          />

          <hr class="border-gray-300 dark:border-gray-800 my-8">

          <OfferWarranty />
        </div>

        <div class="shrink-0 w-full lg:w-[500px] mt-16 lg:-mt-[150px]">
          <OfferPricing
            :full-price="offerFullPrice"
            :installment-price="offerInstallmentPrice"
            :benefits="benefits"
          />
        </div>
      </div>
    </div>
  </LandingSection>
</template>

<script setup lang="ts">
const props = defineProps({
  offerInviteTitle: String,
  offerInviteDescription: String,
  offerFullPrice: String,
  offerInstallmentPrice: String,
})

const benefits = [
  { label: '1 ano de acesso ilimitado' },
  { label: 'Acesso à todos os cursos da plataforma' },
  { label: 'Comunidade exclusiva para alunos' },
  { label: 'Suporte direto com o professor' },
  { label: 'Certificado digital de conclusão de curso' },
  { label: 'Acesso ao banco de Lives exclusivo' },
  { label: 'Acesso a novos cursos' },
]
</script>
