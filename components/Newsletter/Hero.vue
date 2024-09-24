<template>
  <LandingSection class="relative">
    <div class="absolute -bottom-10 right-10 w-80 h-96 opacity-10 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"></div>

    <div class="relative flex flex-col lg:flex-row gap-10">
      <div class="flex flex-col justify-center lg:w-1/2 text-center lg:text-left">
        <SectionHeroTitle text="Conteúdo dev direto na sua inbox!" />

        <div class="mt-5">
          <SectionHeroDescription>
            Junte-se a <span class="tm-gradient font-bold">4k+ leitores</span> e receba dicas, lições e insights retirados do campo de batalha de
            quem respira programação web há mais de 2 décadas.
          </SectionHeroDescription>

          <div class="flex items-center justify-center lg:justify-start gap-2 mt-10">
            <Badge class="bg-yellow-50 dark:bg-yellow-400/10 dark:text-yellow-500 text-yellow-800">Javascript</Badge>
            <Badge class="bg-green-50 dark:bg-green-500/10 dark:text-green-400 text-green-700">Vue</Badge>
            <Badge class="bg-indigo-50 dark:bg-indigo-400/10 dark:text-indigo-400 text-indigo-700">PHP</Badge>
            <Badge class="bg-red-50 dark:bg-red-400/10 dark:text-red-400 text-red-700">Laravel</Badge>
            <Badge>Carreira</Badge>
          </div>
        </div>
      </div>

      <div class="relative lg:w-1/2 max-w-xl lg:max-w-none mx-auto">
        <div class="absolute left-1/2 transform -translate-x-1/2 w-36 h-64 origin-top-left rotate-[35.87deg] opacity-40 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"></div>

        <LeadGenForm
          group-id="118070622771218165"
          @done="onDone"
        />
      </div>
    </div>
  </LandingSection>
</template>

<script setup>
import LeadGenForm from '~/components/LeadGenForm.vue';

const router = useRouter()
function onDone() {
  router.push({ name: 'newsletter-obrigado' })
}
</script>
