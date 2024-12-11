<template>
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
