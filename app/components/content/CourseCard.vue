<template>
  <UPageCard
    variant="soft"
  >
    <div
      v-if="$slots.badges"
      class="absolute -top-[10px] right-5 space-x-2"
    >
      <slot name="badges"/>
    </div>

    <template #description>
      <slot/>
    </template>
  </UPageCard>
</template>
