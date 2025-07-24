<template>
  <UPageHero
    orientation="horizontal"
    title="Jornada Laravel: do Zero ao Mestre"
    description="A Jornada Laravel é mais do que um curso. É o caminho pra você dominar o framework PHP mais usado do mercado,  entender o que está codando e construir aplicações completas do zero ao deploy."
  >
    <template #top>
      <div
        class="absolute rounded-full dark:bg-primary blur-[300px] size-60 sm:size-80 transform -translate-x-1/2 left-1/2 -translate-y-80"/>
    </template>

    <template #headline>
      <UIcon name="i-custom-laravel" class="size-[56px]"/>
    </template>

    <template #links>
      <div>
        <div class="flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center w-full gap-2">
          <UButton
            size="3xl"
            color="cta"
            trailing-icon="i-lucide-arrow-right"
            class="order-1"
            label="Quero começar agora"
            :href="offerLink.LARAVEL"
          />

          <UButton
            size="xl"
            color="neutral"
            variant="subtle"
            icon="i-lucide-book-open"
            class="order-3 xl:order-2 mt-6 xl:mt-0"
            label="Ver os cursos da Jornada"
            to="jornada-laravel/sobre/o-que-e-a-jornada-laravel#cursos-da-jornada"
            />
            <!-- label="Ver conteúdo do curso" -->

          <!-- <div class="text-sm text-muted order-2 xl:order-3 lg:w-full lg:justify-start mt-1">
            ✅ Acesso imediato com
            <ULink class="underline" to="#bonus">bônus</ULink>
            já liberados.
          </div> -->
        </div>

        <!--        <div class="flex justify-center flex-wrap lg:justify-start gap-6 mt-10">-->
        <!--          <BadgeCourseCount :number="stats?.courses_count"/>-->
        <!--          <BadgeLectureCount :number="stats?.lectures_count"/>-->
        <!--          <BadgeDuration :duration="stats?.duration"/>-->
        <!--        </div>-->
      </div>
    </template>
    <!--    <div-->
    <!--      class="absolute -bottom-10 right-10 w-80 h-96 opacity-10 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"/>-->

    <!--    <div-->
    <!--      class="absolute left-1/2 transform -translate-x-1/2 w-36 h-64 origin-top-left rotate-[35.87deg] opacity-40 bg-gradient-to-b from-blue-400 to-sky-600 rounded-full blur-3xl"/>-->
    <CodeSnippetLaravel/>
  </UPageHero>

  <!--  <UPageCTA-->
  <!--    title="IA é incrível, mas saber codar continua sendo essencial."-->
  <!--    description="Ferramentas como ChatGPT podem acelerar seu trabalho — mas se você depende delas até pra entender o que está fazendo, tá na hora de mudar o jogo."-->
  <!--  >-->
  <!--    Aqui na Jornada Laravel, você aprende a construir com clareza, domínio e segurança.-->
  <!--    A IA pode ser sua aliada. Mas aqui, você aprende a liderar o processo — e não só repetir o que ela te manda.-->
  <!--  </UPageCTA>-->

  <UPageSection
    orientation="horizontal"
    headline="IA é incrível, mas saber codar continua sendo essencial"
    title="Uma jornada eficaz e fácil de seguir para você se tornar um programador raiz, que não depende de IA para codar."
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
      container: 'max-w-6xl lg:items-start',
      title: 'lg:text-4xl leading-normal',
      headline: 'uppercase text-sm text-muted',
    }"
  >
    <template #links>
      <UButton
        label="Garantir minha vaga"
        trailing-icon="i-lucide-arrow-right"
        size="xl"
        :href="offerLink.LARAVEL"
      />
    </template>

    <div class="text-lg space-y-8 leading-8">
      <p>Ferramentas como ChatGPT podem acelerar seu trabalho — mas se você depende delas até pra entender o que está
        fazendo, tá na hora de mudar o jogo.</p>

      <p>Aqui na Jornada Laravel, você aprende a construir com clareza, domínio e segurança.
        A IA pode ser sua aliada. Mas aqui, você aprende a liderar o processo — e não só repetir o que ela te manda.</p>

      <p>Com a Jornada Laravel, você vai além da “vibe”. Vai aprender a usar o framework de forma inteligente e se
        tornar
        um programador pronto para o mercado, seja para buscar emprego ou empreender como freelancer.</p>
    </div>
  </UPageSection>

  <!--  Se você quer aprender o que cada linha de código faz, sem ficar de adivinhação ou dependente de ferramentas,-->
  <!--  este-->
  <!--  curso é para você. Aprenda como criar Saas com cargos e permissões totalmente personalizáveis e se torne um dev-->
  <!--  indispensável na nova realidade dos negócios.-->

  <UPageSection
    title="Esse curso é pra você?"
    description="Não importa onde você está agora. A Jornada Laravel foi feita pra te acompanhar e te preparar pra dar o próximo passo com confiança."
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
      features: 'gap-0'
    }"
  >
    <template #features>
      <UPageCard
        title="Se você ainda é um Dev Iniciante."
        :ui="{
          root: 'rounded-r-none bg-gradient-to-tl from-[#42B883]/10 from-5% via-transparent via-50% to-transparent',
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
        }"
      >
        <template #header>
          <img
            src="@/assets/img/programador-junior.webp"
            alt=""
            class="rounded-tl-md"
          >
        </template>

        <template #description>
          <ProseP class="mt-0">Se você está começando no mundo do Laravel, aqui é o lugar certo.</ProseP>
          <ProseP>Você vai entender cada etapa com clareza e construir seu primeiro projeto do zero, sem
            confusão e sem depender de fórmulas prontas.
          </ProseP>
        </template>
      </UPageCard>

      <UPageCard
        title="Se você é um Dev Júnior"
        :ui="{
          root: 'rounded-none bg-gradient-to-tl from-[#A156FE]/10 from-5% via-transparent via-50% to-transparent',
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
        }"
      >
        <template #header>
          <img
            src="@/assets/img/programador-pleno.webp"
            alt=""
          >
        </template>

        <template #description>
          <ProseP class="mt-0">Você já codou com Laravel, mas ainda sente insegurança ou precisa de ajuda constante?
          </ProseP>
          <ProseP>A Jornada vai te dar autonomia pra tocar suas próprias tarefas, seguir sprints sem travar, e
            parar de correr pro Stack Overflow a cada endpoint.
          </ProseP>
        </template>
      </UPageCard>

      <UPageCard
        title="Se você é um Dev Pleno"
        :ui="{
          root: 'rounded-l-none bg-gradient-to-tl from-[#F93920]/10 from-5% via-transparent via-50% to-transparent',
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
        }"
      >
        <template #header>
          <img
            src="@/assets/img/programador-senior.webp"
            alt=""
            class="rounded-tr-md"
          >
        </template>

        <template #description>
          <ProseP class="mt-0">Você já resolve muita coisa no Laravel, mas sente falta de organização, visão de projeto
            completo ou
            prática com SaaS moderno?
          </ProseP>
          <ProseP>Aqui você vai lapidar seu código, dominar boas práticas e liderar com mais confiança.</ProseP>
        </template>
      </UPageCard>
    </template>

    <div class="text-center">
      <!-- <UButton
        label="Ver como é por dentro"
        size="xl"
        variant="soft"
        icon="i-lucide-code-xml"
      /> -->
    </div>
  </UPageSection>

  <UPageSection
    title="O que você realmente leva ao entrar na Jornada"
    description="Mais do que um curso, a Jornada Laravel te entrega um plano completo de evolução: projeto moderno, suporte real, comunidade ativa e aprendizado que faz sentido."
    :features="[
  {
    title: 'Projeto SaaS',
    description: 'Nada de CRUD genérico. Você constrói uma aplicação moderna com autenticação, permissões e deploy — do início ao fim.',
    icon: 'i-lucide-layout-dashboard',
    orientation: 'vertical'
  },
  {
    title: 'Aprendizado com estrutura',
    description: 'Curso 100% organizado: você aprende em ordem, do básico ao avançado, ganhando confiança a cada módulo.',
    icon: 'i-lucide-list-tree',
    orientation: 'vertical'
  },
  {
    title: 'Código limpo e com propósito',
    description: 'Você entende o porquê de cada linha. Aprende boas práticas, organização e a escrever código profissional.',
    icon: 'i-lucide-braces',
    orientation: 'vertical'
  },
  {
    title: 'Suporte direto e real',
    description: 'Grupo ativo no WhatsApp + suporte direto comigo. Você não fica travado nem sozinho na jornada.',
    icon: 'i-lucide-life-buoy',
    orientation: 'vertical'
  },
  {
    title: 'Comunidade dev ativa',
    description: 'Networking real com alunos evoluindo juntos. Compartilhe códigos, tire dúvidas e cresça em grupo.',
    icon: 'i-fluent-people-team-24-regular',
    orientation: 'vertical'
  },
  {
    title: 'Bônus inclusos na Jornada',
    description: 'Você ganha acesso a conteúdos extras que ampliam o curso principal e aceleram sua evolução como dev.',
    icon: 'i-lucide-gift',
    orientation: 'vertical'
  }
]"
    :ui="{
      root: 'bg-gradient-to-b border-t border-default from-muted dark:from-muted/40 to-default',
      title: 'text-left',
      description: 'text-left'
    }"
  />

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
        variant="soft"
        title="AgendaMe SaaS"
        :ui="{
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
        }"
      >
        <!-- <template #header>
          <img src="@/assets/img/screenshot-agendame.webp" alt="" class="rounded-t-md">
        </template> -->

        <template #description>
          <p>Construa um sistema completo de agendamento com múltiplos usuários, planos e permissões.</p>
          <!-- <UButton
            label="Explorar o projeto"
            variant="link"
            color="solid"
            class="p-0 underline hover:no-underline mt-4"
          /> -->
          <!--          <p class="mt-4">Do backend ao deploy, com tudo que um SaaS de verdade precisa.</p>-->

          <!--          🔐 Autenticação com múltiplos perfis-->

          <!--          🧠 Lógica de agendamento-->

          <!--          ⚙️ Cargos e permissões-->

          <!--          🚀 Deploy pronto pro mundo real-->
        </template>
      </UPageCard>

      <UPageCard
        variant="soft"
        title="MasterClasses"
        :ui="{
          container: 'sm:p-4',
          title: 'text-lg font-semibold'
       }"
      >
        <template #description>
          <p>Tenha acesso a aulas especiais sobre temas modernos que fazem
            diferença no seu dia a dia como dev.</p>
          <!-- <UButton
            label="Ver temas das masterclasses"
            color="solid"
            variant="link"
            class="p-0 underline hover:no-underline mt-4"
          /> -->
        </template>
        <!--        🧠 APIs modernas e boas práticas-->

        <!--        📡 Laravel Reverb e comunicação em tempo real-->

        <!--        ⚒️ Deploy com Laravel Forge-->

        <!--        🧰 Otimização e arquitetura API-->
      </UPageCard>
    </template>

    <!-- <template #links>
      <div class="text-center flex flex-col items-center gap-4">
        <div>
          Quer ver todos os bônus em detalhes?
        </div>

        <UButton
          label="Ver página completa de bônus"
          size="xl"
          variant="soft"
          icon="i-lucide-gift"
        />
      </div>
    </template> -->
  </UPageSection>

  <PageTestimonial/>

  <OfferSection
    offer-invite-title="Junte-se à Elite dos Devs Laravel"
    offer-invite-description="Faça parte de mais dos mais de 2k de alunos que dominam Laravel. Aqui forjamos profissionais altamente qualificados para encarar o mercado."
    offer-full-price="697"
    offer-price="397"
    offer-installment-price="39,62"
    :offer-link="offerLink.LARAVEL"
  />

  <PageAbout/>

  <!-- <UPageCTA
    title="Quer explorar tudo com calma?"
    :ui="{
        container: 'sm:py-12 lg:py-12 sm:gap-8',
        description: '!text-base'
      }"
  >
    <template #description>
      <p>Se ainda tá na dúvida, sem pressa.</p>
      <p>Você pode ver cada detalhe da Jornada: os módulos, os projetos que você vai construir, os bônus que estão
        inclusos e as dúvidas mais comuns — tudo organizado por mim pra te mostrar, com transparência, o que vai rolar
        por dentro.</p>
    </template>

    <template #links>
      <UButton
        label="Explorar detalhes do curso"
        size="xl"
        variant="soft"
      />
    </template>
  </UPageCTA> -->
</template>

<script setup>
import CodeSnippetLaravel from '~/components/Codesnippet/CodeSnippetLaravel.vue';
import PageAbout from '~/components/Page/PageAbout.vue';
import PageTestimonial from '~/components/Page/PageTestimonial.vue';
import OfferSection from '~/components/Offer/OfferSection.vue';
// import BadgeDuration from '~/components/BadgeDuration.vue';
// import BadgeCourseCount from '~/components/BadgeCourseCount.vue';
// import BadgeLectureCount from '~/components/BadgeLectureCount.vue';

// const endpoint = 'api/journeys/laravel/stats'
// const {data: stats} = await useAsyncData(endpoint, () => axios.get(endpoint))
useSeoMeta({
  title: 'Jornada Laravel: Domine Laravel com Projeto Real e Suporte',
  description: 'Transforme sua carreira com um curso prático de Laravel. Aprenda do zero, crie um projeto SaaS, receba suporte real e evolua sem depender de IA.',
})
</script>
