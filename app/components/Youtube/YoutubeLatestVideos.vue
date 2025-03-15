<template>
  <div>
    <h2 class="heading-5 mb-4">
      🎥&nbsp;&nbsp;<span class="tm-gradient">Vídeos mais recentes no YouTube</span>
    </h2>

    <div class="grid sm:grid-cols-2 gap-6">
      <div
        v-for="video in videos"
        :key="video.id"
        class="flex-grow"
      >
        <iframe
          width="100%"
          :src="`https://www.youtube.com/embed/${video.resourceId.videoId}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="aspect-video"
        />
      </div>
    </div>

    <div class="mt-5 w-full rounded-xl bg-tm-gradient p-0.5">
      <a
        href="https://www.youtube.com/tiagomatosweb?sub_confirmation=1"
        target="_blank"
        class="flex items-center justify-center text-gray-900 dark:text-gray-50 p-3.5 text-sm font-semibold tracking-wider rounded-xl bg-gray-50 dark:bg-gray-950"
      >
        INSCREVA-SE NO YOUTUBE 🚀
      </a>
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
