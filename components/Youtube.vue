<template>
    <div>
        <Heading tag="h2">
            <span>Vídeos mais recentes</span>
            <span>🚀</span>
        </Heading>

        <div class="md:flex md:items-center md:space-x-3 space-y-3 md:space-y-0">
            <div
                v-for="video in videos"
                :key="video.id"
                class="flex-grow"
            >
                <iframe
                    width="100%"
                    height="315"
                    :src="`https://www.youtube.com/embed/${video.resourceId.videoId}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        </div>

        <div class="text-center mt-5">
            <a
                href="https://www.youtube.com/tiagomatosweb?sub_confirmation=1"
                target="_blank"
                class="bg-brand-light-blue flex items-center justify-center space-x-2 text-gray-50 rounded-xl py-3.5 text-sm font-medium tracking-widest"
            >
                INSCREVA-SE 🚀
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Youtube',

        data() {
            return {
                videos: [],
            };
        },

        mounted() {
            // eslint-disable-next-line
            gapi.load('client', this.start);
        },

        methods: {
            start() {
                // eslint-disable-next-line
                gapi.client.init({
                    apiKey: this.$config.youtubeApiKey,
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
                    this.videos = response.result.items.map(o => o.snippet);
                }, function(reason) {
                    console.log('Error:', reason);
                });
            },
        },
    };
</script>
