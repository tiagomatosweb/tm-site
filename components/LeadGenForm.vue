<template>
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
          :loading="loading"
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
</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';
import axios from 'axios';
import intlTelInput from 'intl-tel-input';
import {ref} from 'vue';
import {leadAPI} from '~/api/lead';

const emit = defineEmits(['done'])
const props = defineProps({
  groupId: String
})
const loading = ref(false)
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
    group_id: props.groupId ?? undefined,
  }
})

const {value: phone} = useField('phone')
const submit = handleSubmit(async (values) => {
  loading.value = true
  try {
    await leadAPI.storeLead(values)
    emit('done')
  } catch (e) {
    loading.value = false
  }
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
