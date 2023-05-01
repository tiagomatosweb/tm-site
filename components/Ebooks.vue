<template>
    <div>
        <Heading tag="h2">
            📚&nbsp;&nbsp;<span class="tm-gradient">Baixe meus e-books gratuitos</span>
        </Heading>

        <div class="grid sm:grid-cols-2 gap-5">
            <Card
                tag="a"
                href="https://lp.laravue.com.br/ebook-laravel"
                target="_blank"
            >
                <img
                    src="@/assets/img/laravel-ebook-dark.webp"
                    alt="Laravel e-book"
                    class="hidden dark:inline-block"
                >
                <img
                    src="@/assets/img/laravel-ebook-light.webp"
                    alt="Laravel e-book"
                    class="dark:hidden"
                >
            </Card>

            <Card
                tag="a"
                href="https://lp.laravue.com.br/ebook-vue"
                target="_blank"
            >
                <img
                    src="@/assets/img/vue-ebook-dark.webp"
                    alt="Vue.js e-book"
                    class="hidden dark:inline-block"
                >
                <img
                    src="@/assets/img/vue-ebook-light.webp"
                    alt="Vue.js e-book"
                    class="dark:hidden"
                >
            </Card>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
</script>

