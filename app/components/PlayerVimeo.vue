<template>
  <ScriptVimeoPlayer
    :id="videoId"
    class="group"
  >
    <template #placeholder="{ placeholder }">
      <div class="relative w-full h-full flex items-center justify-center cursor-pointer">
        <pre>{{ placeholder }}</pre>
        <img
          :src="placeholder"
          alt="Video Placeholder"
          class="absolute w-full h-full"
        >

        <div
          class="relative flex items-center justify-center bg-(--ui-primary) group-hover:bg-(--ui-color-primary-500) transition rounded px-6 py-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            class="size-10 text-white"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </template>
  </ScriptVimeoPlayer>
</template>

<script setup>
const props = defineProps({
  id: {
    type: [String, Number],
    required: true,
  },
  autoplay: Boolean,
})

const videoId = computed(() => process.env.NODE_ENV === 'development' ? '705572557' : props.id)
</script>


<!--<template>-->
<!--  <div class="rounded-lg overflow-hidden">-->
<!--    <div ref="videoRef" class="vimeo-container"/>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import {onMounted, onBeforeUnmount, ref, watch, inject} from 'vue';-->
<!--import {useStorage} from '@vueuse/core';-->
<!--import Vimeo from '@vimeo/player'-->

<!--const props = defineProps({-->
<!--  id: String | Number,-->
<!--  autoplay: Boolean,-->
<!--})-->

<!--const emits = defineEmits(['ended'])-->

<!--const videoRef = ref(null)-->
<!--let vimeoPlayer = null-->

<!--const playback = useStorage('_lv_playback_rate', '1')-->

<!--onMounted(() => {-->
<!--  vimeoPlayer = new Vimeo(videoRef.value, {-->
<!--    id: process.env.NODE_ENV === 'development' ? '705572557' : props.id,-->
<!--    speed: true,-->
<!--    autoplay: props.autoplay,-->
<!--  })-->

<!--  vimeoPlayer.on('ended', () => {-->
<!--    emits('ended')-->
<!--  })-->

<!--  vimeoPlayer.on('playbackratechange', ({playbackRate}) => {-->
<!--    playback.value = playbackRate-->
<!--  })-->

<!--  vimeoPlayer.setPlaybackRate(playback.value)-->
<!--})-->

<!--onBeforeUnmount(() => {-->
<!--  vimeoPlayer.destroy()-->
<!--})-->

<!--watch(() => props.id, (vl) => {-->
<!--  if (vl) {-->
<!--    vimeoPlayer.loadVideo(vl)-->
<!--  }-->
<!--})-->
<!--</script>-->

<!--<style>-->
<!--.vimeo-container {-->
<!--  position: relative;-->
<!--  padding-bottom: 56.25%;-->
<!--}-->

<!--.vimeo-container iframe,-->
<!--.vimeo-container object,-->
<!--.vimeo-container embed {-->
<!--  border: none;-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--}-->
<!--</style>-->
