<template>
  <div class="flex items-center justify-between h-14 px-4 sm:px-6">
    <div class="flex items-center space-x-3">
      <AppLogo
        logo-type="icon"
        logo-width="40"
      />
    </div>

    <div class="flex items-center space-x-8">
      <div class="flex items-center space-x-3">
        <NuxtLink :to="{ name: 'blog' }" class="main-menu">Blog</NuxtLink>
      </div>

      <div>
        <ColorModeToggle/>
      </div>
    </div>
  </div>
</template>

<script setup>
import ColorModeToggle from '~/components/ColorMode/ColorModeToggle.vue';
import AppLogo from '~/common/components/App/AppLogo.vue';
</script>
