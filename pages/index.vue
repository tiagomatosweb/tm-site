<template>
    <div>
        <div class="light light-1" />
        <div class="light light-2" />
        <div class="light light-3" />
        <div class="container mx-auto px-4">
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
            <br>

            <Courses />

            <br>
            <br>

            <Youtube />
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>

<style
    lang="scss"
    scoped
>
.light {
    background: radial-gradient(41.76% 41.76% at 50% 50%, #6583fe 0%, rgba(38, 38, 188, 0) 100%);
    height: 890px;
    opacity: 0.2;
    position: fixed;
    width: 890px;
    z-index: -1;
}

.light-1 {
    right: -400px;
    top: -397px;
}

.light-2 {
    left: -448px;
    top: 2px;
}

.light-3 {
    bottom: -400px;
    right: -400px;
}
</style>
