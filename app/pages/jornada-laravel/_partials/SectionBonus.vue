<template>
    <UPageSection
    title="🎁 Ganhe mais com a Jornada: bônus inclusos"
    description="Além do curso completo, você ainda leva esses bônus de peso pra acelerar sua evolução como dev."
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
      features: 'lg:grid-cols-2 max-w-5xl mx-auto'
    }"
  >

    <template #features>
      <UPageCard 
        icon="i-simple-icons-whatsapp"
        title="Grupo exclusivo no WhatsApp" 
      />
      <UPageCard 
        icon="i-simple-icons-discord"
        title="Servidor exclusivo no Discord" 
      />
      <UPageCard 
        icon="i-simple-icons-discord"
        title="Acesso às MasterClasses exclusivas" 
      />
      <UPageCard 
        icon="i-custom-saas"
        title="Projeto SaaS completo incluso" 
      />
    </template>
  </UPageSection>
</template>

<script setup>
const {data, status} = useLazyAsyncData('laravel-bonus', () => 
  courseAPI.list({
    include: 'sections',
    filter: {
      ids: '28'
    }
  })
)
</script>