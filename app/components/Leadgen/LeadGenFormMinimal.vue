<template>
  <UForm
    :schema="schema"
    :state="state"
    class="flex items-start gap-1.5"
    @submit="onSubmit"
  >
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
      type="submit"
      variant="subtle"
      :loading="isSubmitting"
    >
      {{ props.btnText }}
    </UButton>
  </UForm>

  <!--  <form @submit="submit" class="flex items-start gap-1.5">-->
  <!--    <FormField v-slot="{ componentField }" name="email">-->
  <!--      <FormItem class="w-full">-->
  <!--        <FormControl>-->
  <!--          <Input-->
  <!--            type="text"-->
  <!--            placeholder="Seu melhor e-mail"-->
  <!--            v-bind="componentField"-->
  <!--          />-->
  <!--        </FormControl>-->
  <!--        <FormMessage/>-->
  <!--      </FormItem>-->
  <!--    </FormField>-->

  <!--    <Button-->
  <!--      variant="secondary"-->
  <!--      type="submit"-->
  <!--      :loading="isSubmitting"-->
  <!--    >-->
  <!--      {{ props.btnText }}-->
  <!--    </Button>-->
  <!--  </form>-->
</template>

<script setup>
import {string, object} from 'zod'
import {leadAPI} from '~/common/api/lead';

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
  groupsId: {
    type: Array,
    default: () => [],
  },
})

const schema = object({
  email: string().email(),
})

const state = ref({
  email: '',
})
const isSubmitting = ref(false)

async function onSubmit({data}) {
  try {
    isSubmitting.value = true
    await leadAPI.createSubscriber(data)
    emit('done')
  } catch (e) {
    console.log(e)
  }

  isSubmitting.value = false
}
</script>
