<template>
  <div class="bg-white shadow-xl border border-gray-200 rounded-lg p-6 md:p-10">
    <h2 class="text-gray-900 font-extrabold text-3xl leading-8">
      1 ano de progresso acelerado
    </h2>

    <OfferBenefits :benefits="benefits"/>

    <div class="mt-6 text-gray-900 ">
      <div class="font-poppins font-extrabold text-3xl">
        12x de R${{props.installmentPrice}}
      </div>
      <div class="text-base">ou R${{props.fullPrice}} à vista</div>
    </div>

    <div class="mt-8">
      <Button
        variant="marketing"
        type="submit"
        size="lg"
        class="w-full h-16 mt-6 text-2xl font-bold rounded-xl"
      >
        Matricule-se agora
      </Button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  fullPrice: {
    type: String,
    default: '0'
  },
  installmentPrice: {
    type: String,
    default: '0.00'
  },
  benefits: Array,
})
</script>
