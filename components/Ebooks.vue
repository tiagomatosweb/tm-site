<template>
    <div>
        <Heading tag="h2">
            📚&nbsp;&nbsp;Baixe meus e-books gratuitos
        </Heading>

        <div class="grid grid-cols-2 gap-5">
            <Card
                tag="a"
                href="https://lp.laravue.com.br/ebook-laravel"
                target="_blank"
            >
                <img
                    src="@/assets/img/laravel-ebook-1200x630.webp"
                    alt="Laravel e-book"
                >
            </Card>

            <Card
                tag="a"
                href="https://lp.laravue.com.br/ebook-vue"
                target="_blank"
            >
                <img
                    src="@/assets/img/vue-ebook-1200x630.webp"
                    alt="Vue.js e-book"
                >
            </Card>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
</script>

