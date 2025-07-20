<template>
  <UForm
    class="flex flex-col gap-6"
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <UFormField
      label="Primeiro nome"
      required
      name="name"
    >
      <UInput
        v-model="state.name"
        size="xl"
        :ui="{
          base: 'h-12'
        }"
      />
    </UFormField>

    <UFormField
      label="Seu melhor e-mail"
      required
      name="email"
    >
      <UInput
        v-model="state.email"
        placeholder="Aquele e-mail que você abre todos os dias"
        size="xl"
        :ui="{
          base: 'h-12'
        }"
      />
    </UFormField>

    <UFormField
      label="Número do WhatsApp"
      required
      name="phone"
    >
      <UInput
        id="phoneRef"
        v-model="state.phone"
        placeholder="+55 99 999999999"
        size="xl"
        :ui="{
          base: 'h-12',
        }"
      />
    </UFormField>

    <UAlert
      v-if="errorMessage"
      variant="soft"
      color="error"
      :description="errorMessage"
    />

    <div>
      <UButton v-bind="defaultButtonProps"/>
    </div>
  </UForm>

  <div class="text-center text-muted text-sm mt-4">Prometo que não envio SPAM. Só conteúdos úteis que podem mudar a
    forma como você codifica com Laravel/Vue — direto ao ponto e aplicável.
  </div>
</template>

<script setup>
import {object, string} from 'yup';
import intlTelInput from 'intl-tel-input';
import axios from 'axios';

const emit = defineEmits(['done']);
const props = defineProps({
  btnText: {
    type: String,
    default: 'Cadastrar',
  },
  btnClass: {
    type: String,
    default: null,
  },
  buttonProps: {
    type: Object,
    default: () => ({}),
  },
  groupIds: {
    type: Array,
    default: () => [],
  },
})
const defaultButtonProps = computed(() => {
  return {
    type: 'submit',
    color: 'cta',
    size: '2xl',
    label: 'Cadastrar',
    block: true,
    loading: isLoading.value,
    ...props.buttonProps,
  }
})
const isLoading = ref(false)
const errorMessage = ref('')
const state = ref({
  name: '',
  email: '',
  phone: '',
})
const schema = object({
  name: string().required().label('Primeiro nome'),
  email: string().required().email().label('E-mail'),
  phone: string().label('WhatsApp'),
})

async function onSubmit({data}) {
  try {
    errorMessage.value = ''
    isLoading.value = true
    await axios.post('api/mailer/subscribers', {
      group_ids: props.groupIds,
      ...data,
    })
    emit('done', data)
  } catch (e) {
    errorMessage.value = e.message
  } finally {
    isLoading.value = false
  }
}

watch(() => state.value.phone, (vl) => {
  state.value.phone = vl.startsWith('+') ? vl : '+' + vl
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
