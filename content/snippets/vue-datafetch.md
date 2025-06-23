```vue
<script setup>
  import axios from 'axios'

  const props = defineProps({
    id: Number
  })

  const {data, status} = useLazyAsyncData(
    'course',
    () => axios.get(`api/courses/${props.id}`)
  )
</script>
```


