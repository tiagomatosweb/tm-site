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
                class="inline-flex items-center justify-center space-x-2 text-white bg-blue-gray-200 bg-opacity-50 rounded-md py-2 px-10 text-xs font-medium tracking-widest"
            >
                <span>INSCREVA-SE 🚀</span>
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
                    apiKey: 'AIzaSyBt8O2CmvF0VE2_Ao1943C0_Ioq7NMz8MU',
                }).then(() => {
                    // eslint-disable-next-line
                    return gapi.client.request({
                        method: 'GET',
                        path: '/youtube/v3/playlistItems',
                        params: {
                            part: 'snippet',
                            playlistId: 'UUXUWGUoYNwtRxaRPoB4KocA',
                            maxResults: 2,
                        },
                    });
                }).then((response) => {
                    this.videos = response.result.items.map(o => o.snippet);
                }, function(reason) {
                    console.log('Error: ' + reason.result.error.message);
                });
            },
        },
    };
</script>
