<template>
  <UContainer>
    <UPage>
      <template #left>
        <UPageAside>
          <UContentNavigation
            highlight
            :navigation="navigation[0].children"
          />
        </UPageAside>
      </template>

      <slot/>
    </UPage>
  </UContainer>
</template>

<script setup>
const navigation = inject('navigation')
</script>
