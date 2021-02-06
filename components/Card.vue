<template>
    <Component
        :is="tag"
        class="card bg-blue-gray-400 border border-opacity-15 bg-opacity-15"
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
        },

        data() {
            return {};
        },

        methods: {},
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
