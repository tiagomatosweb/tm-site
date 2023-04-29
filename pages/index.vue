<template>
    <div>
        <div class="space-y-9">
            <About />

            <Ebooks />

<!--            <Youtube />-->
        </div>

        <hr class="border border-gray-200 dark:border-gray-800 -mx-4 mt-9">

        <div class="text-center py-6">
            <a
                href="https://tiagomatos.com"
                target="_blank"
            >
                <img
                    src="@/assets/img/tiagomatos-logo-dark.svg"
                    alt="Tiago Matos"
                    width="120"
                    class="inline-block dark:hidden"
                >

                <img
                    src="@/assets/img/tiagomatos-logo-white.svg"
                    alt="Tiago Matos"
                    width="120"
                    class="hidden dark:inline-block"
                >
            </a>
        </div>
    </div>
</template>

<script setup>
import About from '@/components/About'
import LinksBox from '@/components/LinksBox'
import Ebooks from '@/components/Ebooks'

import discord from '@/assets/img/discord.svg'
import laravue from '@/assets/img/lv-logo.svg'
import telegram from '@/assets/img/telegram.svg'
import youtube from '@/assets/img/youtube.svg'
import instagram from '@/assets/img/instagram.svg'
import laptop from '@/assets/img/laptop.svg'
</script>
