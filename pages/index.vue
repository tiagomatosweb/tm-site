<template>
    <div class="space-y-8">
<!--        <BannerSaas />-->

        <About />

        <hr class="border-gray-200 dark:border-gray-800">

        <div>
            <Heading tag="h2">
                👨🏻‍💻&nbsp;&nbsp;<span class="tm-gradient">Aprenda a construir seu produto SaaS Multi-Tenant com Laravel API e Vue SPA</span>
            </Heading>
            <div class="space-y-1">
                <p>🚀 Do zero do deploy</p>
                <p>🗓️ Aulas toda quinta às 19h</p>
                <p>🎥 Ao vivo no YouTube</p>
                <p>🔗 Toque aqui e ativa o sininho</p>
            </div>
        </div>

        <hr class="border-gray-200 dark:border-gray-800">

        <Youtube />

        <hr class="border-gray-200 dark:border-gray-800">

        <Ebooks />
    </div>
</template>

<script setup>
import About from '@/components/About.vue'
import Ebooks from '@/components/Ebooks.vue'
import BannerSaas from '@/components/BannerSaas.vue';
// import dayjs from 'dayjs';
//
// const liveDay = computed(() => {
//     return dayjs().format('dddd')
// })
</script>
