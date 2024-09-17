<template>
  <div class="flex items-center justify-between mb-14 mt-4 max-w-7xl mx-auto">
    <div class="flex items-center space-x-3">
      <TMLogo
        logo-type="icon"
        logo-width="40"
      />
    </div>

    <div class="flex items-center space-x-8">
      <div class="flex items-center space-x-3">
<!--        <NuxtLink :to="{ name: 'blog' }" class="main-menu">Blog</NuxtLink>-->
        <NuxtLink to="https://laravue.com.br" class="main-menu" target="_blank">Cursos <span
          class="hidden sm:inline-block">Laravel e Vue</span></NuxtLink>
      </div>

      <div>
        <ColorModeToggle/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorModeToggle from '~/components/ColorModeToggle.vue';
</script>
