<template>
    <div>
        <BackBtn :to="{ name: 'blog' }" />

        <div class="prose dark:prose-invert max-w-none">
            <h1>{{ data.title }}</h1>
            <div class="text-xs text-gray-500 tracking-wide">Postado em {{ $dayjs(data.date).format('DD MMMM YYYY') }}</div>

            <ContentRenderer
                :value="data"
            />
        </div>
    </div>


    <div>
<!--        <ClientOnly>-->
<!--            <Disqus shortname="tiagomatosweb-blog" />-->
<!--        </ClientOnly>-->
    </div>
</template>

<script setup>
// import { Disqus } from 'vue-disqus';
import BackBtn from '@/components/BackBtn.vue';

const route = useRoute()
const { data } = await useAsyncData('blog', () => queryContent(route.path).findOne())
useContentHead(data)
</script>
