<template>
  <UPageSection class="mx-auto max-w-5xl">
    <UCarousel
      v-slot="{ item }"
      arrows
      :items="data"
      class="aspect-[4/5] mx-auto bg-black px-10 py-10 rounded-xl"
    >
      <ContentRenderer
        :value="item.meta"
      />
    </UCarousel>
  </UPageSection>
</template>

<script setup>
// const {data} = await useAsyncData('sdsd', () => queryCollection('instagram').path(path).first())

const {data} = await useAsyncData('sdsd', () => Promise.all([
  queryCollection('instagram').where('stem', '=', 'instagram/laravel/sql-na-mao').first(),
  queryCollection('instagram').where('stem', '=', 'instagram/laravel/filas').first(),
]))
// const {data} = await useAsyncData('sdsd', () => queryCollection('instagram').all())
</script>
