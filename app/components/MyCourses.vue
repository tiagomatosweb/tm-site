<template>
  <div>
    <h2 class="heading-5 mb-4">
      👨🏻‍💻&nbsp;&nbsp;<span class="tm-gradient">Meus treinamentos</span>
    </h2>

    <div class="grid sm:grid-cols-2 gap-8">
      <NuxtLink :to="{ name: 'jornada-laravel'}">
        <img
          src="@/assets/img/jornada-laravel-banner.webp"
          alt="Jornada Laravel">
      </NuxtLink>

      <NuxtLink :to="{ name: 'jornada-vue'}">
        <img
          src="@/assets/img/jornada-vue-banner.webp"
          alt="Jornada Vue">
      </NuxtLink>
    </div>
  </div>
</template>
