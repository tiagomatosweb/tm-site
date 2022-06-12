<template>
    <Card class="relative flex items-center rounded-xl">
        <a
            href=""
            class="absolute bottom-2 right-2 flex items-center justify-center w-7 h-7 bg-gray-100 dark:bg-gray-700 rounded-full"
            @click.stop.prevent="toggleMode()"
        >
            <img
                :src="theme === 'dark' ? require('@/assets/img/moon.svg') : require('@/assets/img/sun.svg')"
                alt=""
            >
        </a>

        <div class="flex-none flex items-center justify-center rounded-full w-16 h-16 mr-4">
            <img
                src="@/assets/img/avatar.webp"
                alt="Tiago Matos"
                class="rounded-full"
            >
        </div>

        <div>
            <div>
                <span class="text-gray-900 dark:text-gray-50">👋🏼 <span class="font-light">Olá, eu sou</span> <b class="font-bold">Tiago Matos</b></span>
                <div class="text-sm">🚀 Ajudo devs a decolarem com Laravel e Vue.js</div>
            </div>

            <div class="mt-1 md:flex md:items-center md:space-x-3 space-y-1 md:space-y-0 text-gray-500 dark:text-gray-400">
                <div class="flex items-center space-x-2 text-sm">
                    <div>👨🏻‍💻</div>
                    <div class="truncate">
                        Engenheiro de software
                    </div>
                </div>

                <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-2 text-sm">
                        <div>🏝</div>
                        <div>Brasil</div>
                    </div>

                    <div class="flex items-center space-x-2 text-sm">
                        <div>🦘</div>
                        <div>Australia</div>
                    </div>
                </div>
            </div>
        </div>
    </Card>
</template>

<script>
    export default {
        name: 'About',

        data() {
            return {
                theme: null,
                storageKey: '_tm_theme',
            };
        },

        mounted() {
            if (this.getTheme() === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.setDark();
            } else {
                this.setLight();
            }
        },

        methods: {
            toggleMode() {
                if (this.getTheme() === 'dark') {
                    this.setLight();
                } else {
                    this.setDark();
                }
            },

            setDark() {
                const theme = 'dark';
                document.documentElement.classList.add(theme);
                localStorage.setItem(this.storageKey, theme);
                this.theme = theme;
            },

            setLight() {
                const theme = 'light';
                document.documentElement.classList.remove('dark');
                localStorage.setItem(this.storageKey, theme);
                this.theme = theme;
            },

            getTheme() {
                return localStorage?.getItem(this.storageKey) || null;
            },
        },
    };
</script>
