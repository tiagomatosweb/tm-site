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
  '```php',
  'class UserController',
  '{',
  '    public function _invoke(Request $request)',
  '    {',
  '        $devs = User::query()',
  "            ->where('wants_to_stop_suffering', true)",
  '            ->get();',
  '',
  '        return UserResource::collection($devs);',
  '    }',
  '}',
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
