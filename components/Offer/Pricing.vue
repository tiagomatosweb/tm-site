<template>
  <div class="bg-white shadow-xl border border-gray-200 rounded-lg p-6 md:p-10">
    <h2 class="text-gray-900 font-extrabold text-3xl leading-8">
      1 ano de progresso acelerado
    </h2>

    <OfferBenefits :benefits="benefits"/>

    <div class="mt-6 flex flex-col items-center gap-1 text-gray-900">
      <div class="flex items-center gap-2 text-2xl font-bold">
        TOTAL: de

        <div class="relative">
          R$ {{ props.fullPrice }}
          <svg class="absolute top-[13px] left-[-5px]" width="101" height="7" viewBox="0 0 101 7" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100.38 1.58474C99.8879 1.53383 99.4 1.54655 98.9037 1.53806C98.4158 1.53382 97.9237 1.50837 97.4358 1.46595C96.3498 1.36413 95.2595 1.26231 94.1735 1.16898C92.0778 0.986563 89.9821 0.846565 87.8821 0.770204C85.9561 0.698084 84.0301 0.659912 82.0998 0.659912C81.5992 0.659912 81.1029 0.659907 80.6023 0.668392C78.6933 0.689604 76.78 0.715062 74.8709 0.76597C70.4038 0.888997 65.9366 1.01201 61.4737 1.21989C57.1126 1.42352 52.7515 1.64412 48.3946 1.91139C46.2522 2.0429 44.1099 2.16593 41.9675 2.31017C39.6512 2.46713 37.3349 2.6029 35.0228 2.78107C30.2502 3.14591 25.4733 3.51498 20.7007 3.88407C16.556 4.20648 12.4282 4.69011 8.31738 5.29677C5.66169 5.6913 3.01449 6.14947 0.380005 6.65007C3.40902 6.84521 6.44227 6.94702 9.47978 6.97248C11.4652 6.98944 13.4506 6.95127 15.436 6.87066C16.7172 6.81976 17.9984 6.74764 19.2753 6.65855C20.0601 6.6034 20.845 6.51855 21.6298 6.44643C23.7297 6.24704 25.8297 6.04341 27.9296 5.84826C30.3308 5.62342 32.7319 5.37737 35.1373 5.17798C37.6149 4.97011 40.0924 4.75799 42.5741 4.55011C44.8013 4.36345 47.0328 4.21074 49.26 4.04104C51.4363 3.87559 53.6127 3.75256 55.789 3.61256C57.9822 3.47257 60.1755 3.3665 62.373 3.24772C64.6045 3.12893 66.8445 3.06531 69.0759 2.98046C73.157 2.8235 77.2424 2.77258 81.3235 2.74713C83.5931 2.7344 85.867 2.64955 88.1367 2.57319C90.3724 2.49683 92.6123 2.39502 94.848 2.25926C95.7559 2.20411 96.6722 2.16593 97.5758 2.0726C98.017 2.03018 98.454 1.97502 98.8867 1.88594C99.2685 1.80533 99.6461 1.69503 100.032 1.62291C100.147 1.60595 100.265 1.59746 100.38 1.58474Z"
              fill="#FC111E"/>
          </svg>
        </div>
      </div>

      <div class="bg-primary rounded-lg px-3 py-0.5 text-white text-lg font-bold">
        POR APENAS 12X DE
      </div>

      <div class="font-poppins font-extrabold text-7xl">
        R${{ props.installmentPrice }}
      </div>

      <div>ou R$ {{ props.offerPrice }} à vista</div>
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
    default: '0',
  },
  installmentPrice: {
    type: String,
    default: '0.00',
  },
  offerPrice: {
    type: String,
    default: '0',
  },
  benefits: Array,
})
</script>
