<template>
    <div>
        <BackBtn :to="{ name: 'index' }" />

        <div class="flex flex-col space-y-4">
            <Card
                v-for="post in data"
                :key="post._path"
                class="p-4"
            >
                <NuxtLink
                    :to="post._path"
                    class="text-lg font-bold text-gray-900 dark:text-gray-50"
                >
                    {{ post.title }}
                </NuxtLink>

                <div class="text-xs">{{ post.date }}</div>

                <div class="mt-3">
                    <p>{{ post.description }}</p>
                </div>

                <!--            <NuxtLink-->
                <!--                :to="post._path"-->
                <!--                class="block font-semibold mt-6 text-brand-light-blue text-sm"-->
                <!--            >Continue lendo</NuxtLink>-->
            </Card>
        </div>
    </div>
</template>

<script setup>
import Card from '@/components/Card.vue'
import BackBtn from '~/components/BackBtn.vue';
const { data } = await useAsyncData('blog', () => queryContent('/blog').find())
</script>
