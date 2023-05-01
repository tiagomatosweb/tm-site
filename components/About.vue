<template>
    <div>
        <div class="relative flex flex-col md:flex-row rounded-xl">
            <div class="flex-none flex items-center justify-center rounded-full w-16 h-16 mb-6 md:mb-0 md:mr-4">
                <img
                    src="@/assets/img/avatar.webp"
                    alt="Tiago Matos"
                    class="rounded-full"
                >
            </div>

            <div>
                <span class="text-gray-900 dark:text-gray-50"><span class="font-bold text-2xl">Fala jovem  👋🏼,</span> <br><b class="font-black text-3xl">Tiago Matos aqui...</b></span>
            </div>
        </div>

        <div class="text-gray-600 dark:text-gray-300 leading-5 mt-2 space-y-4">
            <p class="leading-6">Atuo como engenheiro de software no mercado australiano e dedico parte do meu tempo a entregar conteúdo de qualidade para programadores Laravel e Vue.</p>
        </div>

        <SocialMedia class="mt-6" />
    </div>
</template>

<script setup>
import SocialMedia from '@/components/SocialMedia.vue';
</script>
