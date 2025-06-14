```vue
<script setup>
  const props = defineProps({
    id: Number
  })

  const {$apiFetch} = useNuxtApp()
  const {data: course, pending} = useLazyAsyncData(
    'course',
    () => $apiFetch(`api/courses/${props.id}`)
  )
</script>
```


