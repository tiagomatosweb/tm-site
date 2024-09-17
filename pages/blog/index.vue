<template>
    <div>
        <BackBtn :to="{ name: 'index' }" />

        <div class="flex flex-col space-y-4">
            <Card
                v-for="post in data"
                :key="post._path"
                class="relative p-4"
            >
                <div class="text-xs text-gray-500 tracking-wide">{{ $dayjs(post.date).format('DD MMMM YYYY') }}</div>

                <NuxtLink
                    :to="post._path"
                    class="text-lg font-bold text-gray-900 dark:text-gray-50 leading-4"
                >
                    {{ post.title }}
                </NuxtLink>

                <div class="mt-1">
                    <p class="text-sm text-gray-500">{{ post.description }}</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/TMCard.vue'
import BackBtn from '~/components/BackBtn.vue';
const { data } = await useAsyncData('blog', () => queryContent('/blog')
    .sort({ date: -1 })
    .find())
</script>
