<template>
    <Component
        :is="tag"
        class="flex items-center space-x-3 text-lg font-medium text-white"
    >
        <slot />
    </Component>
</template>

<script>
    export default {
        name: 'Heading',

        props: {
            tag: {
                type: String,
                default: 'div',
            },
        },

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
