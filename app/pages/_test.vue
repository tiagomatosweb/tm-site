<template>
  <UPageSection class="mx-auto max-w-5xl">
    <div
      ref="carousel"
      class="aspect-[4/5] mx-auto bg-black px-10 py-10 rounded-xl"
    >
      <ContentRenderer
        :value="data.meta"
      />
    </div>

    <!--    <UCarousel-->
    <!--      v-slot="{ item }"-->
    <!--      arrows-->
    <!--      :items="data"-->
    <!--      ref="carousel"-->
    <!--      class="aspect-[4/5] mx-auto bg-black px-10 py-10 rounded-xl"-->
    <!--    >-->
    <!--      <ContentRenderer-->
    <!--        :value="item.meta"-->
    <!--      />-->
    <!--    </UCarousel>-->
  </UPageSection>
</template>

<script setup>
import html2canvas from 'html2canvas';
import {toPng, toSvg} from 'html-to-image';

const carousel = ref(null)
// onMounted(() => {
//   toSvg(carousel.value)
//     .then((dataUrl) => {
//       const img = new Image();
//       img.src = dataUrl;
//       document.body.appendChild(img);
//     })
//     .catch((err) => {
//       console.error('oops, something went wrong!', err);
//     });
//
//   // html2canvas(carousel.value).then(function (canvas) {
//   //   document.body.appendChild(canvas);
//   // });
// })

const {data} = await useAsyncData('sdsd', () => queryCollection('instagram').where('stem', '=', 'instagram/laravel/sql-na-mao').first())

// const {data} = await useAsyncData('sdsd', () => Promise.all([
//   queryCollection('instagram').where('stem', '=', 'instagram/laravel/sql-na-mao').first(),
//   queryCollection('instagram').where('stem', '=', 'instagram/laravel/filas').first(),
// ]))
// const {data} = await useAsyncData('sdsd', () => queryCollection('instagram').all())
</script>
