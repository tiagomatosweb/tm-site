<template>
  <div class="flex items-center space-x-3">
    <Button
      v-for="item in items"
      as="a"
      :href="item.link"
      target="_blank"
      class="flex items-center justify-center size-16 text-gray-700 dark:text-gray-100 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 shadow-none"
    >
      <Component
        :is="item.icon"
        :class="item.icon_class"
      />
    </Button>
  </div>
</template>

<script setup>
import IconDiscord from '~/common/components/icons/IconDiscord.vue';
import IconTelegram from '~/common/components/icons/IconTelegram.vue';
import IconYoutube from '~/common/components/icons/IconYoutube.vue';
import IconInstagram from '~/common/components/icons/IconInstagram.vue';
import IconWhatsapp from '~/common/components/icons/IconWhatsapp.vue';

const items = [
  {
    icon: IconInstagram,
    icon_class: 'size-6',
    link: 'https://www.instagram.com/tiagomatosweb/'
  },
  {
    icon: IconYoutube,
    icon_class: 'size-7',
    link: 'https://www.youtube.com/tiagomatosweb?sub_confirmation=1'
  },
  {
    icon: IconDiscord,
    icon_class: 'size-7',
    link: 'https://tmdev.link/dd-discord'
  },
  {
    icon: IconWhatsapp,
    icon_class: 'size-6',
    link: 'https://tmdev.link/dd-whatsapp'
  },
  {
    icon: IconTelegram,
    icon_class: 'size-6',
    link: 'https://tmdev.link/dd-telegram'
  },
]
</script>
