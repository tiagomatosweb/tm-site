<template>
  <CodeIDE>
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
          :class="cn('w-full text-wrap min-h-16 h-auto mt-6 text-2xl font-bold rounded-xl', props.btnClass)"
        >
          {{ props.btnText }}
        </Button>
      </div>
    </form>

    <div class="text-center text-gray-400 text-sm mt-4">Não se preocupe que eu também odeio SPAM.
      Comprometo te enviar apenas conteúdos que agregam valor à sua carreira como dev Laravel e/ou Vue.
    </div>
  </CodeIDE>
</template>

<script setup>
import {useField, useForm} from 'vee-validate';
import {object, string} from 'yup';
import intlTelInput from 'intl-tel-input';
import {ref} from 'vue';
import {leadAPI} from '~/common/api/lead';
import {cn} from '~/lib/utils';
import CodeIDE from '~/common/components/Codesnippet/CodeIDE.vue';

const props = defineProps({
  btnText: {
    type: String,
    default: 'Cadastrar'
  },
  btnClass: {
    type: String,
    default: null
  },
  groupsId: {
    type: Array,
    default: () => []
  },
  onDone: {
    type: Function,
    default: () => true
  },
})
const validationSchema =  object({
  name: string().required().label('Primeiro nome'),
  email: string().required().email().label('E-mail'),
  phone: string().label('WhatsApp'),
})
const {handleSubmit, isSubmitting} = useForm({
  validationSchema,
  initialValues: {
    name: '',
    email: '',
    phone: '',
    groups: props.groupsId.length ? props.groupsId : undefined,
  }
})

const {value: phone} = useField('phone')
const submit = handleSubmit(async (values) => {
  try {
    await leadAPI.createSubscriber(values)
  } catch (e) {
    console.log(e)
  }

  await props.onDone()
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
