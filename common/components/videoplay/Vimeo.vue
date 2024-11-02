<template>
  <div class="rounded-lg overflow-hidden">
    <div ref="videoRef" class="vimeo-container"/>
  </div>
</template>

<script setup>
import {onMounted, onBeforeUnmount, ref, watch, inject} from 'vue';
import {useStorage} from '@vueuse/core';
import Vimeo from '@vimeo/player'

const props = defineProps({
  id: String | Number,
  autoplay: Boolean,
})

const emits = defineEmits(['ended'])

const videoRef = ref(null)
let vimeoPlayer = null

const playback = useStorage('_lv_playback_rate', '1')

onMounted(() => {
  vimeoPlayer = new Vimeo(videoRef.value, {
    id: process.env.NODE_ENV === 'development' ? '705572557' : props.id,
    speed: true,
    autoplay: props.autoplay,
  })

  vimeoPlayer.on('ended', () => {
    emits('ended')
  })

  vimeoPlayer.on('playbackratechange', ({playbackRate}) => {
    playback.value = playbackRate
  })

  vimeoPlayer.setPlaybackRate(playback.value)
})

onBeforeUnmount(() => {
  vimeoPlayer.destroy()
})

watch(() => props.id, (vl) => {
  if (vl) {
    vimeoPlayer.loadVideo(vl)
  }
})
</script>

<style>
.vimeo-container {
  position: relative;
  padding-bottom: 56.25%;
}

.vimeo-container iframe,
.vimeo-container object,
.vimeo-container embed {
  border: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>
