<template>
  <LandingSection
    :headline="props.headline"
    :title="props.title"
    :description="props.description"
  >
    <div class="max-w-4xl mx-auto">
      <div class="space-y-3">
        <Card
          v-for="item in props.items"
          :key="item.title"
        >
          <CardContent class="px-6 py-3">
            <a
              href=""
              class="flex flex-col"
              @click.stop.prevent="item.is_open = !item.is_open"
            >
              <div class="flex items-center justify-between">
                <div class="text-gray-800 dark:text-gray-100 font-medium text-base">{{ item.title }}</div>

                <div>
                  <svg v-if="item.is_open" class="w-5 h-5 text-gray-800 dark:text-gray-200" fill="none"
                       stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                  </svg>
                  <svg v-else class="w-5 h-5 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor"
                       viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>

              <div
                v-if="item.is_open"
                class="pt-4"
              >
                <span
                  v-html="item.text"
                  class="text-gray-800 dark:text-gray-100 space-y-3"
                />
              </div>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
const props = defineProps({
  headline: {
    type: String,
    default: 'FAQ'
  },
  title: {
    type: String,
    default: 'Ficou alguma dúvida? 🤔'
  },
  description: {
    type: String,
    default: 'Veja se a sua dúvida está entre as perguntas mais frequentes que recebemos.'
  },
  items: {
    type: Array,
    default: () => [],
  },
})
</script>
