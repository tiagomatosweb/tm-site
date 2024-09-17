<template>
  <LandingSection
    headline="Depoimentos"
    title="+ de 1k de alunos"
    description="que tiveram as suas carreiras transformadas"
  >
    <div class="column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 xl:columns-4">
      <Card
        v-for="item in testimonials"
        :key="item.author"
        class="break-inside-avoid"
      >
        <CardContent>
          <div class="text-gray-700 dark:text-gray-300 text-sm">
            ”{{ item.comment }}"
          </div>

          <div class="text-gray-900 dark:text-gray-100 text-base font-semibold leading-tight mt-4">
            {{ item.author }}
          </div>
        </CardContent>
      </Card>
    </div>
  </LandingSection>
</template>

<script setup>
const testimonials = [
  {
    author: 'Roberto Machado',
    comment: 'O curso de SaaS com Laravel e VueJS mudou minha vida! De básico a criar e lançar produtos, abriu portas na minha carreira e me deu coragem pra empreender. Recomendo!'
  },
  {
    author: 'Roberto Machado',
    comment: 'O curso de SaaS com Laravel e VueJS mudou minha vida! De básico a criar e lançar produtos, abriu portas na minha carreira e me deu coragem pra empreender. Recomendo!'
  },
  {
    author: 'Roberto Machado',
    comment: 'O curso de SaaS com Laravel e VueJS mudou minha vida! De básico a criar e lançar produtos, abriu portas na minha carreira e me deu coragem pra empreender. Recomendo!'
  },
  {
    author: 'Roberto Machado',
    comment: 'O curso de SaaS com Laravel e VueJS mudou minha vida! De básico a criar e lançar produtos, abriu portas na minha carreira e me deu coragem pra empreender. Recomendo!'
  }
]
</script>
