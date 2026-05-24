<template>
  <Comark
    :markdown="markdown"
    :plugins="codeSnippetPlugins"
  />
</template>

<script setup>
import {codeSnippetPlugins} from './codeSnippetPlugins.js'

defineProps({
  markdown: {
    type: String,
    required: true,
  },
})
</script>
