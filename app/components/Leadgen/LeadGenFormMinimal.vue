<template>
  <UForm
    :schema="schema"
    :state="state"
    @submit="onSubmit"
  >
    <UAlert
      v-if="feedbackMessage.message"
      variant="soft"
      :color="feedbackMessage.status || 'neutral'"
      :description="feedbackMessage.message"
      class="mb-2"
    />

    <div class="flex items-start gap-1.5">
      <UFormField
        name="email"
        class="w-full"
      >
        <UInput
          v-model="state.email"
          placeholder="Seu melhor e-mail"
          class="w-full"
        />
      </UFormField>

      <UButton
        :label="props.btnText"
        type="submit"
        variant="subtle"
        :loading="isLoading"
      />
    </div>
  </UForm>
</template>

<script setup>
import {string, object} from 'yup'
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
  groupIds: {
    type: Array,
    default: () => [],
  },
})

const schema = object({
  email: string().required().email().label('E-mail'),
})

const isLoading = ref(false)
const feedbackMessage = ref({
  message: '',
  status: '',
})
const state = ref({
  email: '',
})

async function onSubmit({data}) {
  try {
    resetFeedbackMessage()
    isLoading.value = true
    await axios.post('api/mailer/subscribers', {
      group_ids: props.groupIds,
      ...data,
    })
    feedbackMessage.value.message = 'Boa jovem, cadastro realizado com sucesso!'
    feedbackMessage.value.status = 'success'
    emit('done')
  } catch (e) {
    feedbackMessage.value.message = e.message
    feedbackMessage.value.status = 'error'
  } finally {
    isLoading.value = false
  }

}

function resetFeedbackMessage() {
  feedbackMessage.value.message = ''
  feedbackMessage.value.status = ''
}
</script>
