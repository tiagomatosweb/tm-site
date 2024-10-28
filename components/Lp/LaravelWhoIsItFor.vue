<template>
  <LandingSection
    headline="Para quem é este curso?"
    title="Descubra se a Jornada Laravel é feita para você!"
    description="Conheça os perfis de alunos que vão se beneficiar desse curso e como ele pode transformar sua carreira."
  >
    <div class="max-w-4xl mx-auto">
      <p class="text-xl mb-4">A Jornada Laravel foi criada para ensinar o framework do zero até o nível mais avançado.
        Ou seja, é para você
        que:</p>

      <div class="space-y-20">
        <div class="flex flex-col md:flex-row items-start gap-4 md:gap-10">
          <img
            src="@/assets/img/programador-junior.jpg"
            alt="Programador Laravue Junior"
            class="shrink-0 w-full md:w-[450px] rounded-2xl"
          >

          <div>
            <h3 class="heading-3">Nunca trabalhou com <span class="text-primary">Laravel</span></h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2">Se você nunca viu Laravel e está começando agora, não se
              preocupe! Eu vou te guiar em cada passo, desde a instalação até técnicas super avançadas, tudo na
              prática.</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row-reverse items-start gap-4 md:gap-10">
          <img
            src="@/assets/img/programador-pleno.jpg"
            alt="Programador Laravue Pleno"
            class="shrink-0 w-full md:w-[450px] rounded-2xl"
          >

          <div>
            <h3 class="heading-3">Tem alguma experiência e quer subir de nível</h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2">Se você já tem familiaridade com Laravel e quer se
              aprofundar, esse curso vai te ajudar a dominar as ferramentas e te preparar para encarar projetos
              desafiadores com confiança.</p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-start gap-4 md:gap-10">
          <img
            src="@/assets/img/programador-senior.jpg"
            alt="Programador Laravue Senior"
            class="shrink-0 w-full md:w-[450px] rounded-2xl"
          >

          <div>
            <h3 class="heading-3">Já conhece <span class="text-primary">Laravel</span>, mas está perdido em projetos
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mt-2">Se você já domina Laravel, mas se sente inseguro para
              criar um projeto do zero até o deploy, aqui você aprenderá a construir projetos completos, usando tudo o
              que o framework pode oferecer.</p>
          </div>
        </div>
      </div>
    </div>
  </LandingSection>
</template>
