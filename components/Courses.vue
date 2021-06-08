<template>
    <div>
        <Heading tag="h2">
            <span>Cursos em breve</span>
            <span>⚡️</span>
        </Heading>

        <div class="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-0 md:flex md:space-x-3">
            <!--            @click.stop.prevent="courseToModal = course"-->
            <Card
                v-for="course in courses"
                :key="course.label"
                class="rounded-xl"
            >
                <div
                    class="flex-1 flex flex-col space-y-4 px-4 py-4 cursor-pointer"
                    @click.stop.prevent="courseLink(course)"
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

                        <div class="inline-flex text-xs font-bold">
                            <div class="tm-gradient">
                                {{ course.description }}
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center space-x-2 text-white bg-blue-gray-200 bg-opacity-50 rounded-md py-2 px-3 text-xs font-medium tracking-widest">
                        <span>{{ course.btn_label }}</span>

                        <svg
                            v-if="course.link"
                            class="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        /></svg>

                        <svg
                            v-else
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
                    </div>
                </div>
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
                    {
                        label: 'Laravel[PRO]',
                        description: 'Baixe e-book grátis',
                        btn_label: 'SAIBA MAIS',
                        link: 'https://pro.tiagomatos.com/curso-laravel-pro/',
                        icon: require('@/assets/img/laravel-pro-icon.svg'),
                        slug: 'laravel-pro',
                    },
                    {
                        label: 'Vue.js{PRO}',
                        description: 'Baixe e-book grátis',
                        btn_label: 'SAIBA MAIS',
                        link: 'https://pro.tiagomatos.com/curso-vuejs-pro/',
                        icon: require('@/assets/img/vuejs-pro-icon.svg'),
                        slug: 'vuejs-pro',
                    },
                    { label: 'Nuxt.js{PRO}', btn_label: 'ME AVISE', link: '', icon: require('@/assets/img/nuxtjs-pro-icon.svg'), slug: 'nuxtjs-pro' },
                    // { label: 'Frontend<RAIZ>', link: '', icon: require('@/assets/img/nuxtjs-pro-icon.svg'), slug: 'frontend-raiz' },
                ],
            };
        },

        methods: {
            courseLink(course) {
                if (course.link) {
                    window.open(course.link, 'blank');
                } else {
                    this.courseToModal = course;
                }
            },
        },
    };
</script>
