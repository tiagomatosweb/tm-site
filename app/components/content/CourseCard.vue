<template>
  <UPageCard 
    variant="soft"
    :title="props.course.title"
    :description="props.course.short_description"
  >
    <div class="absolute -top-[10px] right-5 space-x-2">
      <UBadge
        v-if="props.course.status == courseStatus.COMING_SOON"
        variant="soft"
        label="Em breve"
        color="warning"
      />
    </div>

    <template #description>
      <MDC
        class="[&>p:first-child]:mt-0 [&>p:last-child]:mb-0"
        :value="props.course.description || ''"
      />
    </template>
  </UPageCard>
</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true
  },
})
</script>
