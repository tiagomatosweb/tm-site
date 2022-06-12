<template>
    <div>
        test
        <div class="max-w-2xl mx-auto space-y-9">
            <About />

            <LinksBox />

            <Ebooks />

            <Youtube />
        </div>

        <hr class="border border-gray-200 dark:border-gray-800 -mx-4 mt-9">

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
