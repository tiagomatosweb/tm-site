<template>
    <div>
        <Heading tag="h2">
            <span>Vídeos mais recentes</span>
            <span>🚀</span>
        </Heading>

        <div class="text-center">
            <iframe
                width="600"
                height="340"
                src="https://www.youtube.com/embed?listType=user_uploads&list=UCXUWGUoYNwtRxaRPoB4KocA"
                frameborder="0"
                allowfullscreen
            />

            <a
                href="https://www.youtube.com/tiagomatosweb?sub_confirmation=1"
                target="_blank"
                class="inline-flex items-center justify-center space-x-2 text-white bg-blue-gray-200 bg-opacity-50 rounded-md py-2 px-10 text-xs font-medium tracking-widest"
            >
                <span>INSCREVA-SE</span>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Youtube',

        data() {
            return {
            };
        },

        methods: {},
    };
</script>
