<template>
    <div>
        <div class="space-y-9">
            <About />

            <LinksBox />

            <Ebooks />

            <Youtube />

            <hr class="border border-gray-300 dark:border-gray-700 -mx-4">
        </div>

        <div class="text-center py-6">
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
