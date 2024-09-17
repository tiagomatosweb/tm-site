<template>
  <LandingSection class="relative">
    <div class="absolute -bottom-10 right-10 w-80 h-96 opacity-10 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"></div>

    <div class="relative flex flex-col lg:flex-row gap-10">
      <div class="flex flex-col justify-center lg:w-1/2 text-center lg:text-left">
        <h1 class="text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-0">
          Conteúdo dev direto na sua inbox!
        </h1>

        <div class="mt-5">
          <p class="text-2xl">
            Junte-se a <span class="tm-gradient font-bold">4k+ leitores</span> e receba dicas, lições e insights retirados do campo de batalha de
            quem respira programação web há mais de 2 décadas.
          </p>

          <div class="flex items-center justify-center lg:justify-start gap-2 mt-10">
            <Badge class="bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-500 text-yellow-800">Javascript</Badge>
            <Badge class="bg-green-50 dark:bg-green-500/10 dark:text-green-400 text-green-700">Vue</Badge>
            <Badge class="bg-indigo-50 dark:bg-indigo-400/10 dark:text-indigo-400 text-indigo-700">PHP</Badge>
            <Badge class="bg-red-50 dark:bg-red-400/10 dark:text-red-400 text-red-700">Laravel</Badge>
            <Badge>Carreira</Badge>
          </div>
        </div>
      </div>

      <div class="relative lg:w-1/2 max-w-xl lg:max-w-none mx-auto">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-36 h-64 origin-top-left rotate-[35.87deg] opacity-40 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"></div>

        <UiCode>
          <form @submit="submit" class="space-y-6">
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel>Primeiro nome <span class="text-red-400">*</span></FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    v-bind="componentField"
                    class="h-12 text-lg text-white border-gray-600 focus-visible:ring-gray-400 font-medium"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            </FormField>

            <FormField v-slot="{ componentField }" name="email">
              <FormItem>
                <FormLabel>Seu melhor e-mail <span class="text-red-400">*</span></FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Aquele e-mail que você abre todo dia"
                    v-bind="componentField"
                    class="h-12 text-lg text-white border-gray-600 focus-visible:ring-gray-400"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            </FormField>

            <FormField name="phone">
              <FormItem>
                <FormLabel>Número do WhatsApp</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    id="phoneRef"
                    v-model="phone"
                    placeholder="+55 99 999999999"
                    class="h-12 text-lg text-white border-gray-600 focus-visible:ring-gray-400"
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            </FormField>

            <div>
              <Button
                variant="marketing"
                type="submit"
                size="lg"
                :loading="isSubmitting"
                class="w-full h-16 mt-6 text-2xl font-bold rounded-xl"
              >
                Cadastrar
              </Button>
            </div>
          </form>

          <div class="text-center text-gray-400 text-sm mt-4">Não se preocupe que eu também odeio SPAM.
            Comprometo te enviar apenas conteúdos que agregam valor à sua carreira como dev Laravel e/ou Vue.
          </div>
        </UiCode>
      </div>
    </div>
  </LandingSection>

</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';
import axios from 'axios';
import intlTelInput from 'intl-tel-input';
import {ref} from 'vue';

const router = useRouter()
const validationSchema =  object({
  name: string().required().label('Primeiro nome'),
  email: string().required().email().label('E-mail'),
  phone: string().label('WhatsApp'),
  group_id: string().label('WhatsApp'),
})
const {handleSubmit, isSubmitting} = useForm({
  validationSchema,
  initialValues: {
    name: '',
    email: '',
    phone: '',
    group_id: '118070622771218165',
  }
})

const {value: phone} = useField('phone')

const submit = handleSubmit(async (values) => {
  await axios.post('https://n8n.laravue.com.br/webhook/4f93a3cf-34fe-428a-a9bb-a08b81de3846', values)
  await router.push({ name: 'newsletter-obrigado' })
})

watch(phone, (vl) => {
  phone.value = vl.startsWith('+') ? vl : '+' + vl
})

const intInput = ref()
onMounted(() => {
  intInput.value = intlTelInput(document.querySelector('#phoneRef'), {
    strictMode: true,
    separateDialCode: false,
    allowDropdown: false,
    nationalMode: false,
    showFlags: false,
    initialCountry: 'br',
    utilsScript: '/phone.js',
  });
});
</script>
