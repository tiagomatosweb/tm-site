<template>
    <div>
        <div class="radial1" />
        <div class="container mx-auto px-4">
            <div class="lg:flex lg:items-stretch lg:space-x-8">
                <div class="w-full lg:w-2/3 flex flex-col">
                    <TMBox />

                    <LinksBox class="mt-10 lg:mt-auto" />
                </div>

                <div class="flex-grow mt-12 lg:mt-0">
                    <FeaturedBox />
                </div>
            </div>

            <br>

            <Courses />

            <br>

            <Youtube />
        </div>
    </div>
</template>

<script>
// import { google } from 'googleapis';

    export default {
        mounted() {
            // eslint-disable-next-line
            gapi.load('client', this.start);

        // google.youtube('v3').search.list({
        //     key: 'AIzaSyBt8O2CmvF0VE2_Ao1943C0_Ioq7NMz8MU',
        //     part: 'snippet',
        //     q: 'javascript',
        // }).then((response) => {
        //     console.log(response);
        // });
        // const div = document.createElement('div');
        // div.classList = 'radial1';
        // document.body.append(div);
        },

        methods: {
            start() {
                // 2. Initialize the JavaScript client library.
                // eslint-disable-next-line
                gapi.client.init({
                    apiKey: 'AIzaSyBt8O2CmvF0VE2_Ao1943C0_Ioq7NMz8MU',
                // clientId and scope are optional if auth is not required.
                // 'clientId': 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',
                // 'scope': 'profile',
                }).then(function() {
                    // 3. Initialize and make the API request.
                    // eslint-disable-next-line
                    return gapi.client.request({
                        method: 'GET',
                        path: '/youtube/v3/channels',
                        params: { part: 'snippet', mine: 'true' },
                    });
                }).then(function(response) {
                    console.log(response.result);
                }, function(reason) {
                    console.log('Error: ' + reason.result.error.message);
                });
            },
        },
    };
</script>

<style
    lang="scss"
    scoped
>
.radial1 {
    background: radial-gradient(41.76% 41.76% at 50% 50%, #6583fe 0%, rgba(38, 38, 188, 0) 100%);
    height: 891px;
    opacity: 0.2;
    position: fixed;
    right: -400px;
    top: -397px;
    width: 890px;
    z-index: -1;
}
</style>
