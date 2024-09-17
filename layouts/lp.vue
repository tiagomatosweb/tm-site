<template>
  <div>
    <div class="flex flex-col min-h-screen">
      <div class="text-center py-6">
        <TMLogo
          logo-width="120"
        />
      </div>

      <div>
        <slot/>
      </div>

      <AppFooter class="mt-auto"/>
    </div>
  </div>
</template>

<script setup>
</script>
