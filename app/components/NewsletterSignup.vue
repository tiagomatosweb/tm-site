<template>
  <UCard>
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
      :group-ids="[mailerliteGroups.TM_NEWSLETTER]"
    />
  </UCard>
</template>

<script setup lang="ts">
import LeadGenFormMinimal from '~/components/Leadgen/LeadGenFormMinimal.vue';
</script>
