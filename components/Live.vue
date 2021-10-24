<template>
    <Card class="py-5 bg-brand-dark-300 -mx-4">
        <div class="text-center text-sm font-black">
            AULÃO AO VIVO
        </div>

        <div class="text-center">
            Quinta-feira às 18h30
        </div>
    </Card>
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
