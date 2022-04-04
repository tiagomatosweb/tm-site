<template>
    <Card class="flex items-center space-x-4 rounded-xl">
        <div class="flex-none flex items-center justify-center rounded-full w-16 h-16">
            <img
                src="@/assets/img/avatar.png"
                alt="Tiago Matos"
                class="rounded-full"
            >
        </div>

        <div>
            <div>
                <span class="text-gray-900 dark:text-gray-50"><span class="font-light">Olá, eu sou</span> <b class="font-bold">Tiago Matos 👋🏼</b></span>
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
            };
        },

        methods: {},
    };
</script>
