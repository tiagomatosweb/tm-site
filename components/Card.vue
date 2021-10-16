<template>
    <Component
        :is="tag"
        class="card bg-brand-dark-100 border border-blue-900"
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
