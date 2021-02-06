<template>
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

        <Comingsoon />

        <br>

        <Youtube />
    </div>
</template>

<script>
    export default {};
</script>
