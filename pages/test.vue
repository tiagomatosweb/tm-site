<template>
  <LandingSection root-class="md:py-16" wrap-class="max-w-5xl">
    <Carousel>
      <CarouselContent>
        <CarouselItem v-for="item in data">
          <div class="aspect-[4/5] mx-auto bg-black px-10 py-10 rounded-xl">
            <div
              class="prose prose-gray dark:prose-invert dark:prose-p:text-gray-300 prose-p:my-8 prose-pre:bg-gray-900 dark:prose-pre:bg-gray-50/5 prose-pre:px-4 prose-pre:py-6  max-w-none">
              <ContentRenderer
                :value="item.meta"
              />
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
  </LandingSection>
</template>

<script setup>
// const {data} = await useAsyncData('sdsd', () => queryCollection('instagram').path(path).first())
import LandingSection from '~/common/components/Landing/LandingSection.vue';

const {data} = await useAsyncData('sdsd', () => Promise.all([
  queryCollection('instagram').where('stem', '=', 'instagram/laravel/sql-na-mao').first(),
  queryCollection('instagram').where('stem', '=', 'instagram/laravel/filas').first(),
]))
// const {data} = await useAsyncData('sdsd', () => queryCollection('instagram').all())
</script>
