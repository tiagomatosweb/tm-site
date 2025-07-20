<template>
  <UPageGrid>
    <template
      v-for="phase in data.meta.body.filter(o => props.phases.includes(o.label))"
      :key="phase.label"
    >
      <CourseCard
        v-for="course in phase.items"
        :key="course.name"
        :title="course.name"
        :description="course.short_description"
      >
        <template #badges>
          <UBadge
            v-for="badge in course.badges"
            variant="soft"
            v-bind="badge"
          />
        </template>

        <template v-if="course.description && props.description === 'long'">
          <MDC
            class="[&>p:first-child]:mt-0 [&>p:last-child]:mb-0"
            :value="course.description"
          />
        </template>
      </CourseCard>
    </template>
  </UPageGrid>
</template>

<script setup>
const props = defineProps({
  description: {
    type: String,
    default: 'short',
    validator: val => ['long', 'short'].includes(val),
  },
  phases: {
    type: Array,
    default: () => ['Fase 1', 'Fase 2', 'Fase 3'],
  },
})

const path = '/database/laravel/courses'
const {data} = await useAsyncData(path, () =>
  queryCollection('database').where('stem', '=', 'database/laravel/courses').first(),
)
</script>
