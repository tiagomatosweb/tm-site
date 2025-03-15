<template>
    <Component
        :is="tag"
        class="flex space-x-3 font-bold font-base text-gray-900 dark:text-gray-50"
    >
        <slot />
    </Component>
</template>

<script setup>
    defineProps({
        tag: {
            type: String,
            default: 'div',
        },
    })
</script>
