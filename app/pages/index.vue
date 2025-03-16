<template>
  <UPageSection :ui="{ container: 'lg:py-12' }">
    <div class="max-w-2xl">
      <AboutGreetings/>
      <AboutBioShort class="mt-6"/>
      <AboutSocialMedia class="mt-4"/>
    </div>
  </UPageSection>

  <UPageSection :ui="{ container: 'lg:py-12' }">
    <MyCourses/>
  </UPageSection>

  <UPageSection :ui="{ container: 'lg:py-12' }">
    <YoutubeLatestVideos/>
  </UPageSection>
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
import MyCourses from '~/components/MyCourses.vue';
// import BannerSaas from '@/components/BannerSaas.vue';
// import dayjs from 'dayjs';
//
// const liveDay = computed(() => {
//     return dayjs().format('dddd')
// })
</script>
