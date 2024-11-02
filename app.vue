<template>
  <ConfigProvider :use-id="useIdFunction">
    <NuxtLayout>
      <!--        <SeoKit />-->
      <NuxtPage/>
    </NuxtLayout>
  </ConfigProvider>
</template>

<script setup>
import {ConfigProvider} from 'radix-vue'

const useIdFunction = () => useId()
</script>
