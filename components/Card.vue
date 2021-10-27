<template>
    <Component
        :is="tag"
        class="p-5 bg-gray-50 dark:bg-brand-dark-300 border border-gray-200 dark:border-brand-blue-900"
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
