<template>
  <UPageSection
    orientation="horizontal"
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
    }"
  >
    <template #description>
      <OfferInvite
        :title="props.offerInviteTitle"
        :description="props.offerInviteDescription"
      />

      <USeparator class="my-8"/>

      <OfferWarranty/>
    </template>

    <div class="max-w-lg mx-auto">
      <OfferPricing
        :full-price="props.offerFullPrice"
        :offer-price="props.offerPrice"
        :installment-price="props.offerInstallmentPrice"
        :button-props="{
          href: props.offerLink,
        }"
      />
    </div>
  </UPageSection>
</template>

<script setup>
import OfferInvite from './OfferInvite.vue';
import OfferWarranty from './OfferWarranty.vue';
import OfferPricing from './OfferPricing.vue';

const props = defineProps({
  offerInviteTitle: String,
  offerInviteDescription: String,
  offerFullPrice: String,
  offerPrice: String,
  offerInstallmentPrice: String,
  offerLink: String,
})
</script>
