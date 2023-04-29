<template>
    <Component
        :is="tag"
        class="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg"
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
    };
</script>
