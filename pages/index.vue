<template>
    <div class="space-y-8">
<!--        <BannerSaas />-->

        <About />

        <hr class="border-gray-200 dark:border-gray-800">

        <Aulao />

        <hr class="border-gray-200 dark:border-gray-800">

        <Youtube />

        <hr class="border-gray-200 dark:border-gray-800">

        <Ebooks />
    </div>
</template>

<script setup>
import About from '@/components/About.vue'
import Ebooks from '@/components/Ebooks.vue'
import Aulao from '@/components/Aulao.vue';
import BannerSaas from '@/components/BannerSaas.vue';
// import dayjs from 'dayjs';
//
// const liveDay = computed(() => {
//     return dayjs().format('dddd')
// })
</script>
