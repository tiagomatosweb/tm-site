<template>
  <div>
    <SectionLeadGen
      lead-group-id="118070622771218165"
      @lead-done="onDone"
    />

    <SectionTestimonial/>

    <SectionAbout wrap-class="max-w-2xl"/>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'lp',
})

const router = useRouter()
function onDone() {
  router.push({ name: 'newsletter-obrigado' })
}
</script>
