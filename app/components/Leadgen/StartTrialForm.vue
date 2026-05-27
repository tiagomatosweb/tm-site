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
      name="first_name"
    >
      <UInput
        v-model="state.first_name"
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
        type="email"
        :ui="{
          base: 'h-12'
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
</template>

<script setup>
import {object, string} from 'yup';
import axios from 'axios';

const emit = defineEmits(['done']);
const props = defineProps({
  buttonProps: {
    type: Object,
    default: () => ({}),
  },
  productId: {
    type: [String, Number],
    required: true,
  },
})

const defaultButtonProps = computed(() => {
  return {
    type: 'submit',
    color: 'cta',
    size: '2xl',
    label: 'Iniciar teste',
    block: true,
    loading: isLoading.value,
    ...props.buttonProps,
  }
})

const isLoading = ref(false)
const errorMessage = ref('')
const state = ref({
  first_name: '',
  email: '',
})

const schema = object({
  first_name: string().required().label('Primeiro nome'),
  email: string().required().email().label('E-mail'),
})

async function onSubmit({data}) {
  try {
    errorMessage.value = ''
    isLoading.value = true
    await axios.get('sanctum/csrf-cookie')
    await axios.post('api/products/trial', {
      first_name: data.first_name,
      email: data.email,
      product_id: props.productId,
    })
    emit('done', data)
  } catch (e) {
    errorMessage.value = e.message
  } finally {
    isLoading.value = false
  }
}
</script>

