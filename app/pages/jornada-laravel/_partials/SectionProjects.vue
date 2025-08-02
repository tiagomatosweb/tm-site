<template>
  <UPageSection
    title="Projetos que você vai construir"
    description="Não são só exercícios. São aplicações completas que você pode colocar no seu portfólio."
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
      features: 'sm:grid-cols-1 lg:grid-cols-1'
    }"
  >
    <template #features>
      <Spinner v-if="status === 'pending'" />

      <CourseCard
        v-else
        v-for="course in data?.data"
        :key="course.id"
        :course="course"
      />
    </template>
  </UPageSection>
</template>

<script setup>
const {data, status} = useLazyAsyncData('laravel-projects', () => 
  courseAPI.list({
    include: 'sections',
    filter: {
      ids: '40,28,38,39'
    }
  })
)
</script>