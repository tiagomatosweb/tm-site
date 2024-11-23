<template>
  <div class="flex items-center justify-between mb-14 mt-4 max-w-7xl mx-auto">
    <div class="flex items-center space-x-3">
      <AppLogo
        logo-type="icon"
        logo-width="40"
      />
    </div>

    <div class="flex items-center space-x-8">
      <div class="flex items-center space-x-3">
        <!--        <NuxtLink :to="{ name: 'blog' }" class="main-menu">Blog</NuxtLink>-->
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
