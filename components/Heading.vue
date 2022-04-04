<template>
    <Component
        :is="tag"
        class="flex items-center space-x-3 font-bold font-base text-gray-900 dark:text-gray-50"
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
