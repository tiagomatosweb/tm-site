<template>
  <UHeader :toggle="false">
    <template #left>
      <AppLogo
        logo-type="icon"
        logo-width="40"
      />
    </template>

    <!--    <UNavigationMenu-->
    <!--      :items="quickLinks"-->
    <!--      variant="link"-->
    <!--    />-->

    <template #right>
      <slot name="right"/>

      <UColorModeButton/>
    </template>

    <!-- <template #body>
      <UContentNavigation
        highlight
        :navigation="navigation[0].children"
      />
    </template> -->
  </UHeader>

  <UMain>
    <slot/>
  </UMain>

  <AppFooter />
</template>

<script setup>
import AppLogo from '~/components/App/AppLogo.vue';
import AppFooter from '~/components/App/AppFooter.vue';
const navigation = inject('navigation')
</script>
