<template>
    <Card class="flex items-center space-x-4 rounded-2xl py-5 px-4">
        <Card
            class="flex-none flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20"
            no-bg-opacity
        >
            <img
                src="@/assets/img/avatar.png"
                alt="Tiago Matos"
                class="rounded-full"
            >
        </Card>

        <div>
            <div>
                <span class="text-gray-100 text-base md:text-2xl"><span class="font-light">Olá, eu sou</span> <b class="font-bold">Tiago Matos 👋🏼</b></span>
            </div>

            <div class="mt-1 md:flex md:items-center md:space-x-3 space-y-1 md:space-y-0 text-gray-400">
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
        name: 'TMBox',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
