<template>
    <div class="bg-tm-gradient rounded-xl p-px">
        <div class="p-5 bg-gray-50 dark:bg-brand-dark-300 rounded-xl">
            <div class="text-center text-sm font-black">
                <div class="tm-gradient">
                    AULÃO AO VIVO
                </div>
            </div>

            <div class="text-center text-lg font-bold text-gray-900 dark:text-gray-50">
                Hoje às 18h30
            </div>

            <div>
                Vídeo
            </div>

            <div class="text-gray-700 dark:text-gray-300">
                Saiba como fazer um deploy com Laravel Forge
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Live',

        data() {
            return {
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
                            playlistId: 'PLcoYAcR89n-qbO7YAVj5S0alABLis_QVU',
                            maxResults: 2,
                        },
                    });
                    // Playlist live
                    // PLcoYAcR89n-qbO7YAVj5S0alABLis_QVU
                }).then((response) => {
                    console.log(response.result);
                    this.videos = response.result.items.map(o => o.snippet);
                }, function(reason) {
                    console.log('Error Live:', reason.result);
                });
            },
        },
    };
</script>
