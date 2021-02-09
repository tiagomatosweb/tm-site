<template>
    <div>
        <Heading tag="h2">
            <span>Em breve</span>
            <span>⚡️</span>
        </Heading>

        <div class="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-0 md:flex md:space-x-3">
            <Card
                v-for="course in courses"
                :key="course.label"
                class="flex-1 flex flex-col space-y-4 rounded-xl px-4 py-4"
            >
                <div>
                    <img
                        :src="course.icon"
                        :alt="course.label"
                    >
                </div>

                <div>
                    <div
                        class="tracking-widest"
                        style="font-size: 10px;"
                    >
                        CURSO
                    </div>
                    <div class="text-white leading-5 font-medium text-lg mb-2 truncate">
                        {{ course.label }}
                    </div>
                </div>

                <a
                    href=""
                    class="flex items-center justify-center space-x-2 text-white bg-blue-gray-200 bg-opacity-50 rounded-md py-2 px-4 text-xs font-medium tracking-widest"
                    @click.stop.prevent="courseToModal = course"
                >
                    <span>ME AVISE</span>

                    <svg
                        class="w-3 h-3"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </a>
            </Card>
        </div>

        <NotifyMeModal
            v-if="courseToModal"
            :course="courseToModal"
            @close="courseToModal = null"
        />
    </div>
</template>

<script>
    export default {
        name: 'Courses',

        data() {
            return {
                courseToModal: null,
                courses: [
                    { label: 'Laravel[PRO]', link: '', icon: require('@/assets/img/laravel-pro-icon.svg') },
                    { label: 'Vue.js{PRO}', link: '', icon: require('@/assets/img/vuejs-pro-icon.svg') },
                    { label: 'Nuxt.js{PRO}', link: '', icon: require('@/assets/img/nuxtjs-pro-icon.svg') },
                    { label: 'Frontend<RAIZ>', link: '', icon: require('@/assets/img/nuxtjs-pro-icon.svg') },
                ],
            };
        },

        methods: {},
    };
</script>
