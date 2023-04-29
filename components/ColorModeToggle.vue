<template>
    <button
        class="flex items-center justify-center"
        @click.stop.prevent="toggle()"
    >
        <img
            :src="isDark ? moon : sun"
            class="w-4 h-4"
        >
    </button>
</template>

<script setup>
import { computed } from 'vue'
import moon from '@/assets/img/moon.svg'
import sun from '@/assets/img/sun.svg'


const colorMode = useColorMode()

const toggle = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const isDark = computed(() => colorMode.value === 'dark')
</script>
