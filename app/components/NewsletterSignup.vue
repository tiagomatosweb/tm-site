<template>
  <Card class="bg-transparent dark:bg-transparent border border-gray-200 dark:border-gray-800">
    <CardContent>
      <h2 class="flex text-sm font-semibold text-gray-900 dark:text-gray-100">
        <UIcon
          name="i-lucide-mail"
          class="size-5 mr-2 text-gray-400 dark:text-gray-500"
        />
        Mantenha-se atualizado
      </h2>

      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Receba notificações quando eu publicar algo
        novo.</p>

      <LeadGenFormMinimal
        class="mt-6"
        :groups-id="[mailerliteGroups.TM_NEWSLETTER]"
        @done="onDone"
      />

      <UAlert
        v-if="showMessage"
        variant="subtle"
        color="success"
        description="Boa jovem, cadastro realizado com sucesso!"
        class="mt-4"
      />
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import {mailerliteGroups} from '~/common/utils/mailerlite-groups';
import LeadGenFormMinimal from '~/components/Leadgen/LeadGenFormMinimal.vue';

const showMessage = ref(false);

function onDone() {
  showMessage.value = true;
  setTimeout(() => {
    showMessage.value = false;
  }, 3000);
}
</script>
