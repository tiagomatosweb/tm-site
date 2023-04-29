<template>
    <div class="prose dark:prose-invert max-w-none">
        <ContentRenderer :value="data" />
    </div>

    <div>
<!--        <ClientOnly>-->
<!--            <Disqus shortname="tiagomatosweb-blog"></Disqus>-->
<!--        </ClientOnly>-->
    </div>
</template>

<script setup>
// import { Disqus } from 'vue-disqus';
const route = useRoute()
const { data } = await useAsyncData('blog', () => queryContent(route.path).findOne())
useContentHead(data)
</script>
