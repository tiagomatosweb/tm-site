<template>
  <form @submit="submit" class="flex items-start gap-1.5">
    <FormField v-slot="{ componentField }" name="email">
      <FormItem class="w-full">
        <FormControl>
          <Input
            type="text"
            placeholder="Seu melhor e-mail"
            v-bind="componentField"
          />
        </FormControl>
        <FormMessage/>
      </FormItem>
    </FormField>

    <Button
      variant="secondary"
      type="submit"
      :loading="isSubmitting"
    >
      {{ props.btnText }}
    </Button>
  </form>
</template>

<script setup>
import {useForm} from 'vee-validate';
import {object, string} from 'yup';
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
const validationSchema = object({
  email: string().required().email().label('E-mail'),
})
const {handleSubmit, isSubmitting, resetForm} = useForm({
  validationSchema,
  initialValues: {
    email: '',
    groups: props.groupsId.length ? props.groupsId : undefined,
  },
})

const submit = handleSubmit(async (values) => {
  try {
    await leadAPI.createSubscriber(values)
    resetForm()
    emit('done')
  } catch (e) {
    console.log(e)
  }

})
</script>
