<template>
  <SectionFreeLecture
    :lectures="freeLectures"
  />
</template>

<script setup>
import {coursesAPI} from '~/api/courses';

const {data: freeLectures} = useLazyAsyncData('home-free-lectures', () => coursesAPI.getFreeLectures(), {
  transform: r => r.data,
})
</script>
