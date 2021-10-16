<template>
    <div>
        <Heading tag="h2">
            Baixe meus e-books 📚
        </Heading>

        <div class="grid grid-cols-2 gap-5">
            <Card
                tag="a"
                href="https://lp.laravue.com.br/ebook-vue"
                target="_blank"
                class="flex items-center rounded-xl py-2 px-3 bg-brand-dark-300"
            >
                <img
                    src="@/assets/img/vue-ebook-mockup.png"
                    alt="E-book Vue.js"
                > E-book Vue
            </Card>

            <Card
                tag="a"
                href="https://lp.laravue.com.br/ebook-laravel"
                target="_blank"
                class="flex items-center rounded-xl py-2 px-3 bg-brand-dark-300"
            >
                <img
                    src="@/assets/img/laravel-ebook-mockup.png"
                    alt="E-book Laravel"
                > E-book Laravel
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Ebooks',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
