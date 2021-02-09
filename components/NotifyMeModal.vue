<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
            <div
                class="fixed inset-0 transition-opacity"
                aria-hidden="true"
            >
                <div class="absolute inset-0 bg-blue-gray-400 opacity-75" />
            </div>

            <Card
                class="relative inline-block align-bottom bg-white rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                no-bg-opacity
            >
                <div class="absolute top-0 right-0 mr-2 mt-2">
                    <a
                        href=""
                        class="opacity-75"
                        @click.stop.prevent="close()"
                    >
                        <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        ><path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                        /></svg>
                    </a>
                </div>

                <div>
                    <div class="text-center">
                        <h3
                            id="modal-headline"
                            class="text-lg leading-6 font-medium mb-2"
                        >
                            Me avise 🚀
                        </h3>

                        <div class="mb-5">
                            <p class="text-sm">
                                Informe seu nome e email que vou te enviar novidades sobre o curso <b class="font-bold">{{ course.label }}</b>.
                            </p>
                        </div>

                        <div class="space-y-3">
                            <input
                                type="text"
                                placeholder="Primeiro nome"
                                class="block w-full bg-primary-300 focus:ring-primary-100 focus:border-primary-100 border-blue-gray-300 rounded-full px-6 py-3"
                            >

                            <input
                                type="email"
                                placeholder="E-mail"
                                class="block w-full bg-primary-300 focus:ring-primary-100 focus:border-primary-100 border-blue-gray-300 rounded-full px-6 py-3"
                            >

                            <button class="tracking-widest w-full px-4 py-3 border border-primary-100 hover:border-primary-200 text-sm font-medium rounded-full text-white bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-50">
                                CADASTRAR
                            </button>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'NotifyMeModal',

        props: {
            course: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
            };
        },

        methods: {
            close() {
                this.$emit('close');
            },
        },
    };
</script>
