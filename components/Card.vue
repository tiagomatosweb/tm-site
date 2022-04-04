<template>
    <Component
        :is="tag"
        class="p-5 bg-gray-200 dark:bg-gray-800"
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
