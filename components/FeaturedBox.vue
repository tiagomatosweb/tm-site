<template>
    <Card class="relative rounded-2xl p-8">
        <Card
            class="absolute top-0 left-0 -mt-6 ml-4 flex items-center justify-center rounded-full"
            style="height: 55px; width: 55px;"
            no-bg-opacity
        >
            <div class="-ml-0.5 -mt-1">
                <span class="text-sm">🔥</span>
            </div>
        </Card>

        <div class="mt-5">
            <div class="tracking-widest text-xs">
                CURSO
            </div>

            <div class="laravel-api-gradient inline-block font-bold text-xl md:text-2xl mb-2">
                Laravel<span class="font-normal">[API]</span> Vue.js<span class="font-normal">{SPA}</span>
            </div>

            <p class="leading-relaxed mb-5">
                Domine a arquitetura Laravel API e ganhe mais tempo e dinheiro nos seus projetos.
            </p>

            <a
                href="https://pro.tiagomatos.com/laravel-api-vuejs-spa/"
                target="_blank"
                class="flex items-center justify-center space-x-2 text-white bg-blue-gray-300 bg-opacity-50 rounded-full py-3 text-sm font-medium tracking-widest"
            >
                <span>SAIBA MAIS</span>

                <svg
                    class="w-4 h-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.2929 3.29289C10.6834 2.90237 11.3166 2.90237 11.7071 3.29289L17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L11.7071 16.7071C11.3166 17.0976 10.6834 17.0976 10.2929 16.7071C9.90237 16.3166 9.90237 15.6834 10.2929 15.2929L14.5858 11L3 11C2.44772 11 2 10.5523 2 10C2 9.44772 2.44772 9 3 9H14.5858L10.2929 4.70711C9.90237 4.31658 9.90237 3.68342 10.2929 3.29289Z"
                    />
                </svg>
            </a>
        </div>
    </Card>
</template>

<script>
    export default {
        name: 'FeaturedBox',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
