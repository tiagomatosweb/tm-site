<template>
  <NuxtLayout name="lp">
    <Dialog default-open>
      <DialogContent class="max-w-3xl">
        <div class="flex items-center gap-4">
          <div class="text-5xl">
            🎁
          </div>

          <h2 class="heading-2">Oferta Especial de Black Friday</h2>
        </div>

        <ul class="mt-2 ml-16 list-inside list-disc">
          <li>Jornada Vue com um desconto de até 70%!</li>
          <li>Bla bla bla shit</li>
          <li>Bla bla bla shit</li>
          <li>etc...</li>
        </ul>

        <div class="mt-6">
          <Button
            as="a"
            href="https://chat.whatsapp.com/Lw8LQh3VA1j2Xdvconq6qj"
            target="_blank"
            variant="marketing"
            size="lg"
            class="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:bg-emerald-300 hover:shadow-emerald-500/50 py-8 text-xl font-bold"
          >
            <IconWhatsapp class="size-8 mr-2"/>
            Entre para o grupo do WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>

    <LandingHero
      title="Jornada Vue: da Raiz ao Avançado"
      description="Aprenda Vue.js sem atalhos, entendendo cada recurso do zero. Domine o essencial e avance para técnicas modernas com confiança."
    >
      <template #before-title>
        <IconVue class="mb-2"/>
      </template>

      <template #after-description>
        <Button
          variant="marketing"
          type="submit"
          size="lg"
          class="h-16 mt-6 text-2xl font-bold rounded-xl"
        >
          Matricule-se agora
        </Button>
        <!--        <div class="text-gray-600 dark:text-gray-400 mt-6">-->
        <!--          Aprenda conceitos fundamentais como MVC - Model View e Controller e também tópicos avançados como Arquitetura-->
        <!--          API, Autenticação, Fila, Query Builder e muito mais.-->
        <!--        </div>-->
      </template>

      <template #content-right>
        <CodeVue/>
      </template>
    </LandingHero>

    <LpVueOQueE/>

    <LpVueParaQuemE/>

<!--    <LpVueOQueVouAprender/>-->

    <LpVueModulos />

    <LpVuePorqueAprenderComigo/>

    <SectionTestimonial
      headline="Depoimentos Inspiradores"
      title="Alavanque sua carreira com a Jornada Vue"
      description="Junte-se a mais de 1k alunos que elevaram suas habilidades em Vue.js e conquistaram novas oportunidades. Confira histórias reais de sucesso no mercado!"
    />

    <LpVueOQuePossoConstruir />

    <LpVuePrequisitos />

    <LpVueFaq />

    <LpVueAulasGratuitas />

    <LpVueOffer />

    <SectionAbout wrap-class="max-w-2xl"/>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
})

useHead({
  title: 'Aprenda Vue.js: Torne-se um Especialista em Desenvolvimento de Aplicações Web',
  meta: {
    description: 'Descubra a Jornada Vue e desenvolva aplicações dinâmicas e interativas. Aulas práticas, projetos reais e uma comunidade engajada esperam por você para transformar suas habilidades em programação.'
  }
})

</script>
