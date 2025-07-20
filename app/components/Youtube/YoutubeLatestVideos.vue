<template>
  <div>
    <h2 class="heading-5 mb-4">
      🎥&nbsp;&nbsp;<span class="tm-gradient">Vídeos mais recentes no YouTube</span>
    </h2>

    <div class="grid sm:grid-cols-2 gap-8">
      <ScriptYouTubePlayer
        v-for="video in videos"
        :key="video.id"
        :video-id="video.resourceId.videoId"
      >
        <template #awaitingLoad>
          <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00"/>
              <path d="M 45,24 27,14 27,34" fill="#fff"/>
            </svg>
          </div>
        </template>
      </ScriptYouTubePlayer>
    </div>

    <div class="mt-5">
      <UButton
        as="a"
        href="https://www.youtube.com/tiagomatosweb?sub_confirmation=1"
        target="_blank"
        block
        size="xl"
      >
        Inscreva-se no Youtube 🚀
      </UButton>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'

const videos = ref()

onMounted(() => {
  // eslint-disable-next-line
  gapi.load('client', initGapi);
})

function initGapi() {
  const config = useRuntimeConfig()

  // eslint-disable-next-line
  gapi.client.init({
    apiKey: config.public.youtubeApiKey,
  }).then(() => {
    // eslint-disable-next-line
    return gapi.client.request({
      method: 'GET',
      path: '/youtube/v3/playlistItems',
      params: {
        part: 'snippet',
        playlistId: 'UUXUWGUoYNwtRxaRPoB4KocA',
        // playlistId: 'PLcoYAcR89n-qbO7YAVj5S0alABLis_QVU',
        maxResults: 2,
      },
    });
    // Playlist live
    // PLcoYAcR89n-qbO7YAVj5S0alABLis_QVU
  }).then((response) => {
    // console.log(response.result);
    videos.value = response.result.items.map(o => o.snippet);
  }, function (reason) {
    console.log('Error:', reason);
  });
}
</script>
