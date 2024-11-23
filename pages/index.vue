<template>
  <LandingSection root-class="md:py-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <NuxtLink :to="{ name: 'jornada-laravel-bfcm'}">
        <Card class="bg-red-800/30 dark:bg-red-800/20">
          <CardContent>
            <IconLaravel class="mb-2"/>
            <p class="text-2xl font-medium text-red-900 dark:text-red-100">
              Black Friday da Jornada Laravel: Domine Laravel com até 70% de Desconto!
            </p>
          </CardContent>
        </Card>
      </NuxtLink>

      <NuxtLink :to="{ name: 'jornada-vue-bfcm'}">
        <Card class="bg-green-800/30 dark:bg-green-800/20">
          <CardContent>
            <IconVue class="mb-2"/>

            <p class="text-2xl font-medium text-green-900 dark:text-green-100">
              Black Friday da Jornada Vue: Torne-se um Expert em Vue.js com até 70% OFF
            </p>
          </CardContent>
        </Card>
      </NuxtLink>
    </div>
  </LandingSection>

  <LandingSection root-class="md:py-12">
    <div>
      <AboutGreetings/>
      <AboutBioShort class="mt-3"/>
      <AboutSocialMedia class="mt-6"/>
    </div>
  </LandingSection>

  <LandingSection root-class="md:py-12">
    <YoutubeLatestVideos/>
  </LandingSection>
</template>

<script setup>
// import Ebooks from '@/components/Ebooks.vue'
// import Aulao from '@/components/Aulao.vue';
import AboutGreetings from '~/components/About/AboutGreetings.vue';
import AboutSocialMedia from '~/components/About/AboutSocialMedia.vue';
import YoutubeLatestVideos from '~/components/Youtube/YoutubeLatestVideos.vue';
import LandingSection from '~/common/components/Landing/LandingSection.vue';
import IconLaravel from '~/common/components/Icons/IconLaravel.vue';
import IconVue from '~/common/components/Icons/IconVue.vue';
import AboutBioShort from '~/components/About/AboutBioShort.vue';
// import BannerSaas from '@/components/BannerSaas.vue';
// import dayjs from 'dayjs';
//
// const liveDay = computed(() => {
//     return dayjs().format('dddd')
// })
</script>
