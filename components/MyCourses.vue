<template>
  <div>
    <h2 class="heading-5 mb-4">
      👨🏻‍💻&nbsp;&nbsp;<span class="tm-gradient">Meus treinamentos</span>
    </h2>

    <div class="grid sm:grid-cols-2 gap-6">
      <NuxtLink :to="{ name: 'jornada-laravel'}">
        <Card class="flex-grow">
          <CardContent>
            <div class="flex gap-3 items-center justify-center ">
              <IconLaravel/>
              <h2 class="heading-4">Jornada Laravel</h2>
            </div>
          </CardContent>
        </Card>
      </NuxtLink>

      <NuxtLink :to="{ name: 'jornada-vue'}">
        <Card class="flex-grow">
          <CardContent>
            <div class="flex gap-3 items-center justify-center ">
              <IconVue/>
              <h2 class="heading-4">Jornada Vue</h2>
            </div>
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import IconVue from '~/common/components/Icons/IconVue.vue';
import IconLaravel from '~/common/components/Icons/IconLaravel.vue';
</script>
