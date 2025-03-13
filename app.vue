<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLoadingIndicator/>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup>
import {ConfigProvider} from 'radix-vue'

const useIdFunction = () => useId()
</script>
