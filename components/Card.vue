<template>
    <Component
        :is="tag"
        class="card bg-blue-gray-400 border"
        :class="{ 'border-opacity-25': !noBorderOpacity, 'bg-opacity-50': !noBgOpacity }"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'Card',

        props: {
            tag: {
                type: String,
                default: 'div',
            },
            noBorderOpacity: {
                type: Boolean,
                default: false,
            },
            noBgOpacity: {
                type: Boolean,
                default: false,
            },
        },
    };
</script>

<style
    lang="scss"
    scoped
>
    .card {
        border-color: #293167;
    }
</style>
