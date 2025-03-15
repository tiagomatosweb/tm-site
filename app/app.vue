<template>
  <UApp>
    <ConfigProvider :use-id="useIdFunction">
      <NuxtLoadingIndicator/>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </ConfigProvider>
  </UApp>
</template>

<script setup>
import {ConfigProvider} from 'radix-vue'

const useIdFunction = () => useId()
</script>
