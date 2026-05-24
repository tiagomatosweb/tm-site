<template>
  <CodeIDE>
    <div class="code">
      <CodeSnippetMarkdown :markdown="snippet" />
    </div>
  </CodeIDE>
</template>

<script setup>
import CodeIDE from './CodeIDE.vue';
import CodeSnippetMarkdown from './CodeSnippetMarkdown.vue';

const snippet = [
  '```vue',
  '<script setup>',
  '  const props = defineProps({',
  '    id: Number',
  '  })',
  '',
  '  const {data, status} = useLazyAsyncData(',
  "    'courses',",
  '    () => $fetch(`api/courses/${props.id}`)',
  '  )',
  '</' + 'script>',
  '```',
].join('\n')
</script>

<style scoped>
::v-deep(.code pre) {
  border: none;
  background: transparent;
  padding: 0;
}

::v-deep(.code > div > div) {
  margin: 0;
}

::v-deep(.code > div > div > button) {
  display: none;
}
</style>
