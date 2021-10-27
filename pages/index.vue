<template>
    <div>
        <div class="container mx-auto px-4">
            <About />

            <Ebooks />

            <br>

            <FeaturedBox />

            <br>

            <Youtube />
        </div>

        <hr class="border border-gray-200 dark:border-brand-dark-100 mt-12 mb-8">

        <div class="text-center">
            <a
                href="https://tiagomatos.com"
                target="_blank"
            >
                <img
                    src="@/assets/img/tiagomatos-logo-dark.svg"
                    alt="Tiago Matos"
                    width="120"
                    class="inline-block dark:hidden"
                >

                <img
                    src="@/assets/img/tiagomatos-logo-white.svg"
                    alt="Tiago Matos"
                    width="120"
                    class="hidden dark:inline-block"
                >
            </a>
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>
