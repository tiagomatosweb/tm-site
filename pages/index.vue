<template>
    <div>
        <div class="light light-1" />

        <div class="light light-2" />

        <div class="container mx-auto px-4">
            <TMBox />

            <br><br>

            <FeaturedBox />

            <br>

            <LinksBox />

            <br>

            <Youtube />

            <br>
            <br>

            <Courses />

            <hr class="border-blue-gray-200 border-opacity-75 mt-12 mb-8">

            <div class="text-center">
                <a
                    href="https://tiagomatos.com"
                    target="_blank"
                >
                    <img
                        src="@/assets/img/tiagomatos-logo.svg"
                        alt="Tiago Matos"
                        width="120"
                        class="inline-block"
                    >
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {};
</script>

<style
    lang="scss"
    scoped
>
    .light {
        background: radial-gradient(41.76% 41.76% at 50% 50%, #095dff 0%, rgba(9, 93, 255, 0) 100%);
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
        bottom: -400px;
        left: -400px;
    }
</style>
