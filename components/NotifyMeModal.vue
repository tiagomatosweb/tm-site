<template>
    <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
            <div
                class="fixed inset-0 transition-opacity"
                aria-hidden="true"
            >
                <div class="absolute inset-0 bg-blue-gray-400 opacity-75" />
            </div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

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
                        <ValidationObserver
                            ref="form"
                            tag="form"
                            @submit.stop.prevent="submit"
                        >
                            <h3
                                id="modal-headline"
                                class="text-lg leading-6 font-medium mb-2"
                            >
                                Me avise 🚀
                            </h3>

                            <div
                                v-if="response.status === 'success'"
                                class="rounded-md bg-green-100 mb-5 p-3 text-green-800"
                            >
                                Seu cadastro foi efetuado com sucesso. Em breve vou te enviar novidades sobre o curso <b class="font-bold">{{ course.label }}</b>
                            </div>

                            <template v-else>
                                <div class="mb-5">
                                    <p class="text-sm">
                                        Informe seu nome e email que vou te enviar novidades sobre o curso <b class="font-bold">{{ course.label }}</b>.
                                    </p>
                                </div>

                                <div
                                    v-if="response.status === 'danger'"
                                    class="rounded-md bg-red-100 mb-5 p-3 text-red-800"
                                >
                                    Oops! Alguma coisa deu errado.
                                </div>

                                <div class="space-y-3">
                                    <ValidationProvider
                                        v-slot="{ errors }"
                                        name="Primeiro nome"
                                        rules="required"
                                        tag="div"
                                    >
                                        <input
                                            v-model="firstName"
                                            type="text"
                                            placeholder="Primeiro nome"
                                            class="block w-full bg-primary-300 focus:ring-primary-100 focus:border-primary-100 border-blue-gray-300 rounded-full px-6 py-3"
                                        >

                                        <div
                                            v-if="!!errors[0]"
                                            class="text-sm text-red-400 mt-1"
                                        >
                                            {{ errors[0] }}
                                        </div>
                                    </ValidationProvider>

                                    <ValidationProvider
                                        v-slot="{ errors }"
                                        name="E-mail"
                                        rules="required|email"
                                        tag="div"
                                    >
                                        <input
                                            v-model="email"
                                            type="email"
                                            placeholder="E-mail"
                                            class="block w-full bg-primary-300 focus:ring-primary-100 focus:border-primary-100 border-blue-gray-300 rounded-full px-6 py-3"
                                        >

                                        <div
                                            v-if="!!errors[0]"
                                            class="text-sm text-red-400 mt-1"
                                        >
                                            {{ errors[0] }}
                                        </div>
                                    </ValidationProvider>

                                    <button
                                        type="submit"
                                        class="tracking-widest w-full px-4 py-3 border border-primary-100 hover:border-primary-200 text-sm font-medium rounded-full text-white bg-primary-100 hover:bg-primary-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-50"
                                        :class="{ 'opacity-25': spinner.submit }"
                                        :disabled="spinner.submit"
                                    >
                                        CADASTRAR
                                    </button>
                                </div>
                            </template>
                        </ValidationObserver>
                    </div>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    import { ValidationObserver, ValidationProvider } from 'vee-validate';

    export default {
        name: 'NotifyMeModal',

        components: {
            ValidationObserver,
            ValidationProvider,
        },

        props: {
            course: {
                type: Object,
                default: () => ({}),
            },
        },

        data() {
            return {
                firstName: '',
                email: '',
                response: {
                    status: '',
                },
                spinner: {
                    submit: false,
                },
            };
        },

        methods: {
            close() {
                this.$emit('close');
            },

            async submit() {
                const validator = await this.$refs.form.validate();
                if (!validator) {
                    return;
                }

                this.spinner.submit = true;
                this.$axios.$post('/v1/leads', {
                    email: this.email,
                    first_name: this.firstName,
                    course: this.course.slug,
                }).then((response) => {
                    const status = response?.status;
                    if (status === 400 || status === 401 || status === 404) {
                        this.response.status = 'danger';
                    } else {
                        this.response.status = 'success';
                    }
                }).finally(() => {
                    this.spinner.submit = false;
                });
            },
        },
    };
</script>
