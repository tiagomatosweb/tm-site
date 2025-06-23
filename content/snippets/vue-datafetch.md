```vue
<script setup>
  const props = defineProps({
    id: Number
  })

  const {data, status} = useLazyAsyncData(
    'courses',
    () => $fetch(`api/courses/${props.id}`)
  )
</script>
```


