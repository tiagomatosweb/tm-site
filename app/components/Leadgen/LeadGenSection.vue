<template>
  <LandingHero
    :title="props.title"
    :title-class="props.titleClass"
    :description-class="props.descriptionClass"
  >
    <template #before-title>
      <slot name="before-title"/>
    </template>

    <template #title>
      <slot name="title"/>
    </template>

    <template #description>
      <slot name="description"/>
    </template>

    <template #after-description>
      <slot name="after-description"/>
    </template>

    <template #content-right>
      <CodeIDE>
        <LeadGenForm
          :btn-text="props.leadBtnText"
          :btn-class="props.leadBtnClass"
          :group-ids="props.leadGroupsId"
          @done="emit('done')"
        />
      </CodeIDE>
    </template>
  </LandingHero>
</template>

<script setup>
import LeadGenForm from '~/components/Leadgen/LeadGenForm.vue';
import LandingHero from '~/components/Landing/LandingHero.vue';
import CodeIDE from '~/components/Codesnippet/CodeIDE.vue';

const emit = defineEmits(['done']);
const props = defineProps({
  title: String,
  titleClass: String,
  description: String,
  descriptionClass: String,
  leadGroupsId: Array,
  leadBtnText: String,
  leadBtnClass: String,
})
</script>
