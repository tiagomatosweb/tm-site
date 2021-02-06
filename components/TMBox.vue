<template>
    <Card class="flex items-center space-x-4 rounded-2xl py-5 px-4">
        <Card
            class="flex-none flex items-center justify-center rounded-full p-3"
            style="height: 85px; width: 85px;"
        >
            <img
                src="@/assets/img/avatar.png"
                alt="Tiago Matos"
            >
        </Card>

        <div>
            <div>
                <span class="text-white text-lg md:text-2xl"><span class="font-light">Olá, eu sou</span> <b class="font-bold">Tiago Matos 👋🏼</b></span>
            </div>

            <div class="mt-1 te">
                <div class="flex items-center space-x-2 text-sm">
                    <div>👨🏻‍💻</div>
                    <div>Engenheiro de software</div>
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
