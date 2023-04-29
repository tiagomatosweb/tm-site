<template>
    <div>
        <div class="relative flex flex-col md:flex-row rounded-xl">
            <div class="flex-none flex items-center justify-center rounded-full w-16 h-16 mb-6 md:mb-0 md:mr-4">
                <img
                    src="@/assets/img/avatar.webp"
                    alt="Tiago Matos"
                    class="rounded-full"
                >
            </div>

            <div>
                <span class="text-gray-900 dark:text-gray-50"><span class="font-bold text-2xl">Fala jovem  👋🏼,</span> <br><b class="font-black text-3xl">Tiago Matos aqui...</b></span>
            </div>
        </div>

        <div class="text-gray-600 dark:text-gray-400 leading-5 mt-4 space-y-4">
            <p class="leading-6">Atuo como engenheiro de software no mercado australiano e dedico parte do seu tempo a entregar conteúdo de qualidade para programadores Laravel e Vue.</p>
        </div>

        <div class="flex items-center space-x-3 mt-6">
            <Card
                tag="a"
                href="https://laravue.com.br"
                target="_blank"
                class="flex items-center justify-center aspect-square w-16"
            >
                <img
                    :src="laravue"
                    class="w-8"
                    alt="Cursos de Laravel e Vue.js"
                >
            </Card>

            <Card
                tag="a"
                href="https://discord.laravue.com.br"
                target="_blank"
                class="flex items-center justify-center aspect-square w-16"
            >
                <img
                    :src="discord"
                    alt="Discord"
                >
            </Card>

            <Card
                tag="a"
                href="https://t.me/+YhayoHB107AK4kM"
                target="_blank"
                class="flex items-center justify-center aspect-square w-16"
            >
                <img
                    :src="telegram"
                    alt="Telegram"
                >
            </Card>

            <Card
                tag="a"
                href="https://www.youtube.com/tiagomatosweb?sub_confirmation=1"
                target="_blank"
                class="flex items-center justify-center aspect-square w-16"
            >
                <img
                    :src="youtube"
                    alt="Youtube"
                >
            </Card>

            <Card
                tag="a"
                href="https://www.instagram.com/tiagomatosweb/"
                target="_blank"
                class="flex items-center justify-center aspect-square w-16"
            >
                <img
                    :src="instagram"
                    alt="Instagram"
                >
            </Card>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import laravue from 'assets/img/lv-logo.svg';
import discord from 'assets/img/discord.svg';
import telegram from 'assets/img/telegram.svg';
import youtube from 'assets/img/youtube.svg';
import instagram from 'assets/img/instagram.svg';
</script>
