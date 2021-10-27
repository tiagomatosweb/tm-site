<template>
    <div>
        <Heading tag="h2">
            Baixe meus e-books 📚
        </Heading>

        <div class="grid grid-cols-2 gap-5">
            <a
                href="https://lp.laravue.com.br/ebook-laravel"
                target="_blank"
                class="flex items-center justify-between rounded py-2 px-3 bg-gray-50 dark:bg-brand-dark-100 border border-gray-200 dark:border-brand-blue-900 text-lg text-gray-700 dark:text-gray-50 font-medium"
            >
                <div class="flex items-center">
                    <img
                        src="@/assets/img/laravel-ebook-mockup.png"
                        alt="E-book Laravel"
                        class="-ml-2"
                        width="80"
                    > Laravel
                </div>

                <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                /></svg>
            </a>

            <a
                href="https://lp.laravue.com.br/ebook-vue"
                target="_blank"
                class="flex items-center justify-between rounded py-1 px-3 bg-gray-50 dark:bg-brand-dark-100 border border-gray-200 dark:border-brand-blue-900 text-lg text-gray-700 dark:text-gray-50 font-medium"
            >
                <div class="flex items-center">
                    <img
                        src="@/assets/img/vue-ebook-mockup.png"
                        alt="E-book Vue.js"
                        width="80"
                    > Vue.js
                </div>

                <svg
                    class="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                /></svg>
            </a>
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
