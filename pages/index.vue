<template>
    <div class="container mx-auto px-4">
        <div class="radial1" />
        <div class="lg:flex lg:items-stretch lg:space-x-8">
            <div class="w-full lg:w-2/3 flex flex-col">
                <TMBox />

                <LinksBox class="mt-10 lg:mt-auto" />
            </div>

            <div class="flex-grow mt-12 lg:mt-0">
                <FeaturedBox />
            </div>
        </div>

        <br>

        <Comingsoon />

        <br>

        <Youtube />
    </div>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    .radial1 {
        background: radial-gradient(41.76% 41.76% at 50% 50%, #6583fe 0%, rgba(38, 38, 188, 0) 100%);
        height: 891px;
        opacity: 0.2;
        position: absolute;
        right: -400px;
        top: -397px;
        width: 890px;
    }
</style>
