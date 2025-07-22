<template>
  <ul class="space-y-3 mt-4">
    <li
    v-for="(benefit, index) in benefits"
    :key="index"
    class="flex items-start gap-x-2 text-inverted"
    >
    <UIcon name="i-lucide-circle-check" class="text-primary size-5 shrink-0"/>
    {{ benefit }}
  </li>
</ul>
</template>

<script setup>
const benefits = [
  'Todos os cursos da Jornada incluídos',
  '1 ano de acesso ilimitado',
  'Suporte direto comigo via WhatsApp',
  'Grupo exclusivo de alunos no Discord e WhatsApp',
  'Projeto SaaS completo incluso',
  'Acesso às MasterClasses exclusivas',
  'Novas aulas e cursos adicionados regularmente',
  'Certificado digital de conclusão',
]
</script>
