<template>
  <CodeIDE>
    <div class="code">
      <ContentRenderer
        :value="data"
      />
    </div>
  </CodeIDE>
</template>

<script setup>
import CodeIDE from './CodeIDE.vue';

const path = '/snippets/vue-datafetch'
const {data} = await useAsyncData(path, () =>
  queryCollection('snippets').path(path).first(),
)
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
