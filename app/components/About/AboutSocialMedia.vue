<template>
  <div class="flex items-center space-x-3">
    <UButton
      v-for="item in items"
      as="a"
      :href="item.link"
      target="_blank"
      color="neutral"
      variant="subtle"
      class="flex items-center justify-center size-16"
    >
      <UIcon
        :name="item.icon_name"
        :class="item.icon_class"
      />
    </UButton>
  </div>
</template>

<script setup>
const items = [
  {
    icon_name: 'i-lucide-youtube',
    icon_class: '!size-7',
    link: 'https://www.youtube.com/tiagomatosweb?sub_confirmation=1',
  },
  {
    icon_name: 'i-lucide-instagram',
    icon_class: '!size-6',
    link: 'https://www.instagram.com/tiagomatosweb/',
  },
  {
    icon_name: 'i-fa-brands-whatsapp',
    icon_class: '!size-6',
    link: 'https://tmdev.link/dd-whatsapp',
  },
]
</script>
