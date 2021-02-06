<template>
    <div class="card bg-blue-gray-400 border border-opacity-25">
        <slot />
    </div>
</template>

<script>
    export default {
        name: 'Card',

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
