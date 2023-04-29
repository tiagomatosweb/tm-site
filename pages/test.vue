<script setup>
const { data } = await useAsyncData('blog', () => queryContent('/blog').findOne())
</script>
<template>
    <ContentRenderer :value="data" />
</template>
