<template>
    <div>
        <Heading tag="h2">
            <span>Meus links</span>
            <span>🔗</span>
        </Heading>

        <div class="grid grid-cols-2 gap-4">
            <Card
                tag="a"
                href="https://escola.laravue.com.br/"
                target="_blank"
                class="flex items-center space-x-3 rounded-lg px-3 py-3 text-teal-400 dark:text-teal-400 font-bold"
            >
                <div class="flex-none flex items-center justify-center w-8 h-8">
                    <svg
                        width="23"
                        height="14"
                        viewBox="0 0 23 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.35165 13.3956H5.55789C4.08385 13.3956 2.67015 12.804 1.62785 11.7509C0.585536 10.6978 0 9.26949 0 7.78018V0H2.97276V9.67975C2.97236 9.77355 2.9903 9.86651 3.02555 9.95329C3.0608 10.0401 3.11265 10.119 3.17816 10.1854C3.24367 10.2519 3.32155 10.3047 3.40729 10.3406C3.49303 10.3766 3.58493 10.3952 3.67778 10.3952H9.35165V13.3956Z"
                            fill="currentColor"
                        />
                        <path
                            d="M9.35156 0L13.5271 11.4414C13.7359 12.0154 14.114 12.5106 14.6103 12.8601C15.1065 13.2096 15.6969 13.3966 16.3016 13.3956H17.1867L12.3031 0H9.35156Z"
                            fill="currentColor"
                        />
                        <path
                            d="M19.8533 0C19.7037 0.00023078 19.5577 0.0466655 19.435 0.133061C19.3123 0.219456 19.2188 0.341669 19.167 0.483264L17.4421 5.20054C17.102 6.12268 17.102 7.13744 17.4421 8.05959L18.7466 11.6264L23.0002 0H19.8533ZM19.0743 3.83805C18.9352 3.45665 18.9352 3.03779 19.0743 2.65639L19.6925 0.944702C19.7215 0.86552 19.7737 0.797131 19.8422 0.748662C19.9107 0.700194 19.9922 0.673955 20.0759 0.673452H22.0265L19.9677 6.30425L19.0743 3.83805Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>

                <div class="text-xs md:text-sm truncate">
                    Escola LaraVue
                </div>
            </Card>

            <Card
                v-for="link in links"
                :key="link.label"
                tag="a"
                :href="link.href"
                target="_blank"
                class="flex items-center space-x-3 rounded-lg px-3 py-3"
                :class="{ 'text-teal-400 dark:text-teal-400 font-bold': link.label === 'Escola LaraVue' }"
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

<script>
    export default {
        name: 'LinksBox',

        data() {
            return {
                links: [
                    { label: 'LaraVue Discord', img: require('@/assets/img/discord.svg'), img_alt: 'LaraVue Discord', href: 'https://discord.gg/HXGwssB8S4' },
                    { label: 'LaraVue Telegram', img: require('@/assets/img/telegram.svg'), img_alt: 'LaraVue Telegram', href: 'https://t.me/+YhayoHB107AK4kM_' },
                    { label: 'Meu YouTube', img: require('@/assets/img/youtube.svg'), img_alt: 'Youtube /tiagomatosweb', href: 'https://www.youtube.com/tiagomatosweb?sub_confirmation=1' },
                    { label: 'Meu Instagram', img: require('@/assets/img/instagram.svg'), img_alt: 'Instagram @tiagomatosweb', href: 'https://www.instagram.com/tiagomatosweb/' },
                    { label: 'Meu Blog', img: require('@/assets/img/laptop.svg'), img_alt: 'Blog blog.tiagomatos.com', href: 'https://blog.tiagomatos.com/' },
                    // { label: 'Face', img: require('@/assets/img/facebook-f.svg'), img_alt: 'Facebook /tiagomatosweb', href: 'https://www.facebook.com/tiagomatosweb' },
                    // { label: 'Site', img: require('@/assets/img/globe.svg'), img_alt: 'Site tiagomatos.com', href: 'https://tiagomatos.com/' },
                    // { label: 'Escola LaraVue', img: require('@/assets/img/lv.svg'), img_alt: 'Escola LaraVue', href: 'https://escola.laravue.com.br/' },
                ],
            };
        },

        methods: {},
    };
</script>
