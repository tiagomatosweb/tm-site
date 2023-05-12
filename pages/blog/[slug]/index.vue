<template>
    <div>
        <BackBtn :to="{ name: 'blog' }" />

        <div class="prose dark:prose-invert max-w-none">
            <ContentRenderer
                :value="data"
            />
        </div>
    </div>


    <div>
        <ClientOnly>
            <Disqus shortname="tiagomatosweb-blog" />
        </ClientOnly>
    </div>
</template>

<script setup>
import { Disqus } from 'vue-disqus';
import BackBtn from '@/components/BackBtn.vue';

const route = useRoute()
const { data } = await useAsyncData('blog', () => queryContent(route.path).findOne())
useContentHead(data)
</script>
