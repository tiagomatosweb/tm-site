<template>
    <div>
        <div class="fixed top-0 inset-x-0 bg-tm-gradient h-[3px] w-full" />

        <div class="flex flex-col h-screen px-6 py-4">
            <div>
                <AppHeader />

                <div class="max-w-4xl mx-auto">
                    <slot />
                </div>
            </div>

            <AppFooter class="mt-auto" />
        </div>
    </div>
</template>

<script setup>
    import AppFooter from '@/components/AppFooter.vue';
    import AppHeader from '@/components/AppHeader.vue';
</script>
