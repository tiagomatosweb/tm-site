<template>
    <div>
        <Heading tag="h2">
            🔗&nbsp;&nbsp;Meus links
        </Heading>

        <div class="grid grid-cols-2 gap-4">
            <Card
                tag="a"
                href="https://laravue.com.br/"
                target="_blank"
                class="flex items-center space-x-3 rounded-lg px-3 py-3 text-brand-teal font-bold"
            >
                <div class="flex-none flex items-center justify-center w-8 h-8">
                    <svg
                        width="376"
                        height="216"
                        viewBox="0 0 376 216"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M375.106 0.847656H197.809L164.676 67.6028L131.97 0.847656H0.893677L108.947 215.152H279.717L305.4 160.238H210.118L191.423 122.092H316.859L375.106 0.847656ZM191.778 186.932H126.329L46.6903 29.0316H114.339L148.855 99.4383L159.958 122.092L191.742 186.932H191.778ZM183.122 93.8724L215.297 29.0316H330.267L299.086 93.8724H183.122Z"
                            fill="#00CABE"
                        />
                    </svg>
                </div>

                <div class="text-xs md:text-sm truncate">
                    Curso Laravel e Vue.js
                </div>
            </Card>

            <Card
                v-for="link in links"
                :key="link.label"
                tag="a"
                :href="link.href"
                target="_blank"
                class="flex items-center space-x-3 rounded-lg px-3 py-3"
            >
                <div class="flex-none flex items-center justify-center w-8 h-8">
                    <img
                        :src="link.img"
                        :alt="link.img_alt"
                    >
                </div>

                <div class="text-xs md:text-sm truncate">
                    {{ link.label }}
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup>
import Heading from '@/components/Heading'
import Card from '@/components/Card'

import discord from '@/assets/img/discord.svg'
import telegram from '@/assets/img/telegram.svg'
import youtube from '@/assets/img/youtube.svg'
import instagram from '@/assets/img/instagram.svg'
import laptop from '@/assets/img/laptop.svg'

const links = [
    { label: 'Laravue Discord', img: discord, img_alt: 'LaraVue Discord', href: 'https://discord.gg/HXGwssB8S4' },
    { label: 'Laravue Telegram', img: telegram, img_alt: 'LaraVue Telegram', href: 'https://t.me/+YhayoHB107AK4kM_' },
    { label: 'Meu YouTube', img: youtube, img_alt: 'Youtube /tiagomatosweb', href: 'https://www.youtube.com/tiagomatosweb?sub_confirmation=1' },
    { label: 'Meu Instagram', img: instagram, img_alt: 'Instagram @tiagomatosweb', href: 'https://www.instagram.com/tiagomatosweb/' },
    { label: 'Meu Blog', img: laptop, img_alt: 'Blog blog.tiagomatos.com', href: 'https://blog.tiagomatos.com/' },
// { label: 'Face', img: '@/assets/img/facebook-f.svg', img_alt: 'Facebook /tiagomatosweb', href: 'https://www.facebook.com/tiagomatosweb' },
// { label: 'Site', img: '@/assets/img/globe.svg', img_alt: 'Site tiagomatos.com', href: 'https://tiagomatos.com/' },
// { label: 'Escola LaraVue', img: '@/assets/img/lv.svg', img_alt: 'Escola LaraVue', href: 'https://escola.laravue.com.br/' },
];

</script>
