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
            :full-price="props.offerFullPrice"
            :offer-price="props.offerPrice"
            :installment-price="props.offerInstallmentPrice"
            :benefits="props.offerBenefits"
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
  offerPrice: String,
  offerInstallmentPrice: String,
  offerBenefits: Array,
})


</script>
