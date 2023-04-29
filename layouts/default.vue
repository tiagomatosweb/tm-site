<template>
    <div>
        <div class="fixed top-0 inset-x-0 bg-tm-gradient h-[3px] w-full" />

        <div class="flex items-center justify-between mb-14 max-w-7xl mx-auto">
            <div class="flex items-center space-x-3">
                <NuxtLink :to="{ name: 'index' }">
                    <img
                        src="@/assets/img/tm-logo-dark.svg"
                        alt="Tiago Matos"
                        width="40"
                        class="inline-block dark:hidden"
                    >

                    <img
                        src="@/assets/img/tm-logo-light.svg"
                        alt="Tiago Matos"
                        width="40"
                        class="hidden dark:inline-block"
                    >
                </NuxtLink>
            </div>

            <div class="flex items-center space-x-8">
                <div class="flex items-center space-x-3">
                    <NuxtLink :to="{ name: 'blog' }" class="main-menu">Blog</NuxtLink>
                    <NuxtLink to="https://laravue.com.br" class="main-menu" target="_blank">Cursos Laravel e Vue</NuxtLink>
                </div>

                <div>
                    <ColorModeToggle />
                </div>
            </div>
        </div>

        <div class="max-w-3xl mx-auto">
            <slot />
        </div>
    </div>
</template>

<script setup>
    import ColorModeToggle from "@/components/ColorModeToggle";
</script>
