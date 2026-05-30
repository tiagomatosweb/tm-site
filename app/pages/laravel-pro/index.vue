<template>
  <UHeader
      title="Laravel PRO"
      to="/laravel-pro"
      :ui="{ root: 'border-b border-default bg-default/80' }"
    >
      <template #title>
        <img
          :src="laravelProLogo"
          alt="Laravel PRO"
          class="h-auto w-[105px]"
        >
      </template>

      <UNavigationMenu
        :items="headerMenu"
        variant="link"
        class="hidden md:flex"
      />

      <template #right>
        <UButton
          :href="offerLink.LARAVEL"
          color="cta"
          label="Quero entrar"
          class="hidden sm:inline-flex"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="headerMenu"
          orientation="vertical"
          class="-mx-2.5"
        />
        <UButton
          :href="offerLink.LARAVEL"
          color="cta"
          block
          label="Quero entrar"
          class="mt-4"
        />
      </template>
    </UHeader>

    <UPageHero
      orientation="vertical"
      :ui="{
        root: 'bg-neutral-950',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
        headline: 'justify-start mb-4 text-xs font-bold uppercase tracking-widest text-laravel font-normal',
        title: 'text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none tracking-tight text-pretty text-highlighted text-left',
        description: 'mt-6 text-left',
        footer: 'mt-7 w-full',
        links: 'justify-start',
      }"
    >
      <template #headline>
        <span class="inline-block">
          Laravel PRO — API SaaS
        </span>
      </template>

      <template #title>
        <span class="inline-block">
          Construa a API do seu SaaS em Laravel
          <span class="animate-hero-shimmer">sem improviso.</span>
        </span>
      </template>

      <template #description>
        <div class="block">
          <p class="text-lg font-medium text-highlighted">
            Auth, API RESTful, times, permissões, multi-tenant e deploy.
          </p>
          <p class="mt-3.5 text-lg text-muted">
            Você entende as decisões técnicas por trás de um SaaS real e termina com uma base sólida pra reutilizar nos próximos projetos.
          </p>
        </div>
      </template>

      <template #footer>
        <div class="flex flex-col gap-4">
          <div class="flex flex-wrap items-center gap-3">
            <UButton
              :href="offerLink.LARAVEL"
              color="cta"
              size="xl"
              trailing-icon="i-lucide-arrow-right"
              :label="ctaPrimaryLabel"
            />
            <UButton
              :to="freeTrialLink"
              color="neutral"
              variant="outline"
              size="xl"
              label="Testar 2 dias grátis"
              class="ring-1 ring-default"
            />
          </div>

          <p class="text-sm text-muted">
            Comprar agora ou testar grátis por 2 dias, sem cartão.
          </p>

          <div class="mt-5 flex w-full flex-wrap gap-2">
            <UBadge
              color="primary"
              variant="soft"
              label="Acesso imediato"
            />
            <UBadge
              color="success"
              variant="soft"
              label="Garantia de 7 dias"
            />
          </div>
        </div>
      </template>
    </UPageHero>

    <!-- O que você vai aprender -->
    <UPageSection
      id="mapa"
      :ui="{
        root: 'scroll-mt-[--ui-header-height] border-t border-default',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
        headline: 'justify-start text-laravel',
        title: 'max-w-5xl text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-none tracking-tight text-left',
        description: 'text-left space-y-3',
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          O mapa técnico
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.08)"
          class="inline-block"
        >
          O que um backend SaaS precisa ter<br>para crescer sem virar bagunça
        </Motion>
      </template>

      <template #description>
        <Motion
          as="p"
          v-bind="scrollMotion(0.16)"
          class="block"
        >
          Um SaaS não quebra por falta de endpoint. Ele quebra quando auth, tenant, permissões e deploy são tratados como peças soltas.
        </Motion>
      </template>

      <template #body>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          <Motion
            v-for="(item, index) in learnItems"
            :key="item.title"
            v-bind="staggerMotion(index)"
            class="h-full"
          >
          <UPageCard
            variant="subtle"
            class="h-full rounded-lg bg-default/75 ring-1 ring-default"
            :ui="{ container: 'h-full p-5 sm:p-6' }"
          >
            <template #body>
              <UPageFeature
                orientation="vertical"
                :icon="item.icon"
                :title="item.title"
                :description="item.description"
                :ui="{
                  leading: 'flex size-9 items-center justify-center rounded-lg bg-laravel/15 ring-1 ring-laravel/25',
                  leadingIcon: 'size-5 text-laravel',
                  description: 'text-sm leading-relaxed text-muted',
                }"
              />

              <UPageList class="mt-5">
                <UPageFeature
                  v-for="topic in item.topics"
                  :key="topic"
                  icon="i-lucide-check"
                  :description="topic"
                  :ui="{
                    root: 'py-0.5 first:pt-0 last:pb-0',
                    leadingIcon: 'size-4 text-laravel',
                    description: 'text-sm leading-relaxed text-muted',
                  }"
                />
              </UPageList>
            </template>
          </UPageCard>
          </Motion>
        </div>

        <Motion v-bind="scrollMotion(0.2)">
        <UPageCTA
          variant="naked"
          :links="learnCtaLinks"
          :ui="{
            container: 'px-0 pb-0 sm:px-0 sm:pb-0 lg:px-0 lg:pb-0 gap-0',
            title: 'lg:text-3xl font-bold text-highlighted',
          }"
        >
          <template #title>
            Esse é o mapa.<br>
            A trilha te mostra como construir.
          </template>

          <template #description>
            Você constrói uma base backend SaaS peça por peça, entendendo como auth, tenant, permissões e deploy se conectam.
          </template>
        </UPageCTA>
        </Motion>
      </template>
    </UPageSection>

    <!-- Pensamento de engenharia -->
    <UPageSection
      id="pensamento"
      :ui="{
        root: 'border-t border-default bg-elevated/25',
        container: 'max-w-5xl pb-0 sm:pb-0 lg:pb-0',
        wrapper: 'items-start text-left',
        headline: 'justify-start text-laravel',
        title: 'text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight text-left',
        description: 'text-left max-w-3xl',
        body: 'space-y-10',
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          Antes do código
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.08)"
          class="inline-block"
        >
          Backend SaaS começa<br>
          antes do controller.
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.16)"
          class="inline-block"
        >
          Antes de abrir o editor, você aprende a pensar o fluxo: estados, regras, exceções e responsabilidades. Depois disso, o código fica mais simples.
        </Motion>
      </template>

      <template #body>
        <div class="grid gap-16 sm:grid-cols-2">
          <Motion
            v-for="(item, index) in engineeringThinkingItems"
            :key="item.title"
            v-bind="staggerMotion(index)"
          >
          <UPageFeature
            orientation="horizontal"
            :icon="item.icon"
            :title="item.title"
            :description="item.description"
            :ui="{
              leading: 'flex size-9 shrink-0 items-center justify-center rounded-lg bg-laravel/15 ring-1 ring-laravel/25',
              leadingIcon: 'size-5 text-laravel',
            }"
          />
          </Motion>
        </div>

        <Motion
          v-bind="scrollMotion(0.25)"
          class="mt-8 block"
        >
        <UPageCard
          variant="subtle"
          :ui="{ 
            description: 'text-muted',
          }"
        >
          <template #title>
            Código melhor começa com fluxo claro.
          </template>

          <template #description>
            Você aprende a explicar decisões, prever exceções e evitar código que nasce confuso.
          </template>
        </UPageCard>
        </Motion>
      </template>
    </UPageSection>

    <!-- Na prática -->
    <UPageSection
      id="na-pratica"
      :ui="{
        root: 'border-b border-default bg-elevated/25',
        container: 'max-w-5xl pt-12 sm:pt-12 lg:pt-20',
        wrapper: 'items-start text-left',
        headline: 'justify-start text-laravel',
        title: 'text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight text-left',
        description: 'text-left max-w-3xl',
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          Na prática
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.08)"
          class="inline-block"
        >
          Exemplo: magic link<br>
          antes do controller.
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.16)"
          class="inline-block"
        >
          Primeiro o fluxo fica claro. Depois cada etapa vira validação, endpoint, evento ou regra de segurança.
        </Motion>
      </template>

      <template #body>
        <div class="excalidraw-flow">
          <template
            v-for="(step, index) in magicLinkFlowItems"
            :key="step.title"
          >
            <Motion v-bind="flowMotion(index)">
              <div
                class="excalidraw-node"
                :class="[
                  `excalidraw-node--${step.type}`,
                  { 'excalidraw-node--tilt': index % 2 === 1 },
                ]"
              >
                <p class="excalidraw-kicker">
                  {{ step.kicker }}
                </p>
                <p class="excalidraw-title">
                  {{ step.title }}
                </p>
                <p class="excalidraw-description">
                  {{ step.description }}
                </p>

                <div
                  v-if="step.branch"
                  class="excalidraw-branch"
                >
                  {{ step.branch }}
                </div>
              </div>
            </Motion>

            <Motion
              v-if="index < magicLinkFlowItems.length - 1"
              v-bind="flowArrowMotion(index)"
              class="excalidraw-arrow"
            >
              <span />
            </Motion>
          </template>
        </div>
      </template>
    </UPageSection>

    <!-- Trilha -->
    <UPageSection
      id="trilha"
      :ui="{
        root: 'scroll-mt-[--ui-header-height]',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
        headline: 'justify-start text-laravel',
        title: 'text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight text-left',
        description: 'text-left max-w-3xl',
        body: 'space-y-4',
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          A trilha
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.08)"
          class="inline-block"
        >
          Do básico ao backend SaaS<br>
          em produção
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.16)"
          class="inline-block"
        >
          Você começa reforçando a base, evolui para API, organiza a arquitetura, implementa autenticação, entra em multi-tenancy e finaliza colocando o projeto no ar.
        </Motion>
      </template>

      <template #body>
        <Motion
          v-for="(modulo, index) in modulos"
          :key="modulo.title"
          v-bind="staggerMotion(index)"
          class="block w-full"
        >
        <UCard
          class="w-full transition-all duration-300 hover:-translate-y-0.5"
          :ui="{ body: 'p-5 sm:p-6' }"
        >
          <div class="space-y-5">
            <div class="flex items-start gap-4">
              <div class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-laravel/15 ring-1 ring-laravel/25">
                <UIcon
                  :name="modulo.icon"
                  class="size-5 text-laravel"
                />
              </div>

              <div class="flex flex-1 flex-col justify-center">
                <div class="flex flex-wrap items-center gap-2">
                  <UBadge
                    color="neutral"
                    variant="soft"
                    size="sm"
                    :label="`Módulo ${index + 1}`"
                  />
                  <UBadge
                    v-if="modulo.badge"
                    color="warning"
                    variant="soft"
                    size="sm"
                    :label="modulo.badge"
                  />
                </div>

                <h3 class="mt-1 text-lg font-bold leading-5 tracking-tight text-highlighted">
                  {{ modulo.title }}
                </h3>
              </div>
            </div>

            <p class="max-w-2xl text-sm leading-relaxed text-muted">
              {{ modulo.intro }}
            </p>

            <div>
              <UPageFeature
                v-for="bullet in modulo.bullets"
                :key="bullet"
                icon="i-lucide-check"
                :description="bullet"
                :ui="{
                  leadingIcon: 'size-4 text-laravel',
                  description: 'text-sm leading-relaxed text-muted',
                }"
              />
            </div>

          </div>
        </UCard>
        </Motion>

        <Motion
          v-bind="scrollMotion(0.2)"
          class="mt-6 block"
        >
        <UPageCard
          variant="subtle"
          class="bg-laravel/5 ring-1 ring-laravel/20"
          :ui="{
            description: 'text-muted',
          }"
        >
          <template #title>
            Cada módulo prepara o próximo.
          </template>

          <template #description>
            A ideia não é pular de assunto em assunto. É construir uma base backend SaaS com ordem, contexto e propósito.
          </template>
        </UPageCard>
        </Motion>
      </template>
    </UPageSection>

    <!-- IA -->
    <UPageSection
      id="ia"
      :ui="{
        root: 'border-t border-default bg-elevated/15',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
      }"
    >
      <template #body>
        <div class="space-y-8">
          <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <Motion
              v-bind="scrollMotion()"
              class="space-y-5"
            >
              <h2 class="text-3xl font-extrabold leading-tighter text-highlighted sm:text-4xl">
                Se a IA já escreve código,<br>
                <span class="text-laravel">por que aprender Laravel?</span>
              </h2>

              <p class="max-w-2xl text-base leading-relaxed text-muted">
                A IA pode gerar arquivos, controllers e endpoints em segundos. Mas ela não sabe, sozinha, se aquele código faz sentido no seu SaaS: tenant, permissões, segurança, arquitetura e regra de negócio ainda exigem critério técnico.
              </p>
            </Motion>

            <Motion
              v-bind="scrollMotion(0.12)"
              class="rounded-lg border border-laravel/25 bg-laravel/8 p-5 sm:p-6"
            >
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-laravel">
                O ponto não é escrever mais rápido
              </p>
              <p class="mt-3 text-xl font-bold leading-snug text-highlighted">
                É saber avaliar se o código gerado deveria existir daquele jeito.
              </p>
              <p class="mt-3 text-sm leading-relaxed text-muted">
                O curso não existe para competir com a IA. Existe para você saber dirigir, revisar e integrar o que ela entrega.
              </p>
            </Motion>
          </div>

          <Motion
            v-bind="scrollMotion(0.15)"
            class="grid overflow-hidden rounded-lg border border-default bg-default/55 lg:grid-cols-2"
          >
            <div class="p-5 sm:p-6">
              <div class="mb-5 flex items-center gap-3">
                <span class="flex size-9 items-center justify-center rounded-lg bg-success/10 ring-1 ring-success/20">
                  <UIcon
                    name="i-lucide-bot"
                    class="size-5 text-success"
                  />
                </span>
                <h3 class="text-lg font-bold text-highlighted">
                  A IA pode gerar
                </h3>
              </div>

              <ul class="space-y-3">
                <li
                  v-for="item in aiHandlesItems"
                  :key="item"
                  class="flex items-start gap-3 text-sm leading-relaxed text-muted"
                >
                  <UIcon
                    name="i-lucide-check"
                    class="mt-0.5 size-4 shrink-0 text-success"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div class="border-t border-default bg-elevated/35 p-5 sm:p-6 lg:border-l lg:border-t-0">
              <div class="mb-5 flex items-center gap-3">
                <span class="flex size-9 items-center justify-center rounded-lg bg-laravel/15 ring-1 ring-laravel/25">
                  <UIcon
                    name="i-lucide-brain"
                    class="size-5 text-laravel"
                  />
                </span>
                <h3 class="text-lg font-bold text-highlighted">
                  Você precisa decidir
                </h3>
              </div>

              <ul class="space-y-3">
                <li
                  v-for="item in aiDecisionItems"
                  :key="item"
                  class="flex items-start gap-3 text-sm leading-relaxed text-muted"
                >
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="mt-0.5 size-4 shrink-0 text-laravel"
                  />
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>
          </Motion>
        </div>
      </template>
    </UPageSection>

    <PageAbout />

    <!-- Pra quem -->
    <UPageSection
      id="pra-quem"
      :ui="{
        root: 'scroll-mt-[--ui-header-height] border-t border-default',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
        headline: 'text-center text-laravel',
        title: 'max-w-3xl mx-auto text-center text-balance text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight',
        body: 'w-full',
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          Pra quem é
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          Esse curso é pra quem quer sair do tutorial solto
        </Motion>
      </template>

      <template #body>
        <Motion v-bind="scrollMotion(0.15)">
        <div class="overflow-hidden rounded-lg border border-default bg-default/55">
          <div class="grid lg:grid-cols-2">
            <div class="border-b border-default lg:border-b-0 lg:border-r">
              <div class="p-5 sm:p-6">
                <div class="flex items-center gap-3">
                  <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-success/10 ring-1 ring-success/20">
                    <UIcon
                      name="i-lucide-check"
                      class="size-5 text-success"
                    />
                  </span>
                  <h3 class="text-lg font-bold text-highlighted">
                    Esse curso faz sentido se…
                  </h3>
                </div>
              </div>

              <div class="space-y-3 border-t border-default p-5 sm:p-6">
                <Motion
                  v-for="(item, index) in praQuemSim"
                  :key="item"
                  v-bind="staggerMotion(index)"
                  class="group flex items-start gap-4 rounded-md border border-default bg-elevated/25 p-4 transition-colors hover:border-success/40 hover:bg-success/5"
                >
                  <span class="flex h-7 min-w-7 items-center justify-center rounded-md bg-success/10 font-mono text-[11px] font-bold text-success ring-1 ring-success/20">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <p class="text-sm leading-relaxed text-muted">
                    {{ item }}
                  </p>
                </Motion>
              </div>
            </div>

            <div>
              <div class="p-5 sm:p-6">
                <div class="flex items-center gap-3">
                  <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-error/10 ring-1 ring-error/20">
                    <UIcon
                      name="i-lucide-x"
                      class="size-5 text-error"
                    />
                  </span>
                  <h3 class="text-lg font-bold text-highlighted">
                    Talvez não seja pra você se…
                  </h3>
                </div>
              </div>

              <div class="space-y-3 border-t border-default p-5 sm:p-6">
                <Motion
                  v-for="(item, index) in praQuemNao"
                  :key="item"
                  v-bind="staggerMotion(index)"
                  class="group flex items-start gap-4 rounded-md border border-default bg-elevated/25 p-4 transition-colors hover:border-error/40 hover:bg-error/5"
                >
                  <span class="flex h-7 min-w-7 items-center justify-center rounded-md bg-error/10 font-mono text-[11px] font-bold text-error ring-1 ring-error/20">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <p class="text-sm leading-relaxed text-muted">
                    {{ item }}
                  </p>
                </Motion>
              </div>
            </div>
          </div>
        </div>
        </Motion>
      </template>
    </UPageSection>

    <PageTestimonial />

    <!-- Oferta -->
    <UPageSection
      id="oferta"
      :ui="{
        root: 'scroll-mt-[--ui-header-height] border-y border-default bg-elevated/15',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
        headline: 'justify-start text-laravel',
        title: 'text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight text-left',
        description: 'text-left max-w-3xl',
        body: 'space-y-6',
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          Acesso ao Laravel PRO
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.08)"
          class="inline-block"
        >
          Entre no Laravel PRO e <br class="hidden sm:block">construa seu <span class="whitespace-nowrap">backend SaaS</span>
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.16)"
          class="inline-block"
        >
          Acesse a trilha completa para construir, entender e evoluir uma base backend SaaS em Laravel — com suporte, atualizações e comunidade.
        </Motion>
      </template>

      <template #body>
          <div class="grid gap-2 sm:grid-cols-3">
            <Motion
              v-for="(detail, index) in offerProgramDetails"
              :key="detail.label"
              v-bind="staggerMotion(index)"
            >
            <UCard
              variant="soft"
              :ui="{ body: 'p-2 sm:p-2' }"
            >
              <p class="text-[0.65rem] font-bold uppercase tracking-[0.13em] text-muted">
                {{ detail.label }}
              </p>
              <p class="text-sm font-medium leading-snug sm:text-[0.95rem]">
                <NuxtLink
                  v-if="detail.faqValue"
                  :to="`#faq-${detail.faqValue}`"
                  class="text-inherit underline decoration-dotted decoration-muted underline-offset-4 hover:decoration-highlighted"
                >
                  {{ detail.value }}
                </NuxtLink>
                <template v-else>
                  {{ detail.value }}
                </template>
              </p>
            </UCard>
            </Motion>
          </div>

          <Motion
            v-bind="scrollMotion(0.12)"
            class="space-y-3"
          >
            <p class="font-extrabold text-highlighted">
              Você também recebe
            </p>

            <div class="grid max-w-3xl gap-x-10 gap-y-2.5 lg:grid-cols-2">
              <UPageFeature
                v-for="item in offerIncludedBenefits"
                :key="item"
                icon="i-lucide-check"
                :description="item"
                :ui="{
                  root: 'gap-3 py-0',
                  leading: 'mt-0.5',
                  leadingIcon: 'size-4 text-success',
                  description: 'text-sm font-medium leading-relaxed text-muted',
                }"
              />
            </div>
          </Motion>

          <USeparator
            class="w-full"
            size="sm"
            :ui="{ border: 'border-laravel/25' }"
          />

          <div class="flex flex-col items-center">
            <Motion
              v-bind="priceMotion()"
              class="inline-flex flex-col items-stretch gap-6 text-left"
            >
              <div>
                <p class="text-base font-semibold text-toned">
                  12x de
                </p>
                <div class="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <p class="font-poppins text-6xl font-extrabold leading-none text-highlighted sm:text-7xl">
                    R$39,62
                  </p>
                  <p class="text-base font-semibold text-toned">
                    ou R$397 à vista
                  </p>
                </div>
              </div>

              <UButton
                :href="offerLink.LARAVEL"
                color="cta"
                size="3xl"
                block
                trailing-icon="i-lucide-arrow-right"
                :label="ctaPrimaryLabel"
              />

              <div class="space-y-2 text-center">
                <p class="text-sm text-muted">
                  Quer conhecer antes de entrar?
                </p>
                <p class="text-sm text-muted">
                  Teste por 2 dias grátis, sem cartão.
                </p>
                <UButton
                  :to="freeTrialLink"
                  color="neutral"
                  variant="ghost"
                  size="sm"
                  label="Experimentar grátis"
                  class="self-center font-medium text-toned underline-offset-4 hover:underline"
                />

                <p class="pt-2 text-xs text-muted">
                  Precisa falar comigo? Chama no
                  <a
                    :href="whatsappLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium text-success underline-offset-4 transition-colors hover:underline"
                  >WhatsApp</a>.
                </p>
              </div>
            </Motion>
          </div>
      </template>
    </UPageSection>

    <!-- FAQ -->
    <UPageSection
      id="faq"
      :ui="{
        root: 'scroll-mt-[--ui-header-height]',
        container: 'max-w-5xl',
        wrapper: 'items-start text-left',
        title: 'text-3xl sm:text-4xl lg:text-4xl font-extrabold leading-tighter tracking-tight text-left',
      }"
    >
      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          Perguntas frequentes
        </Motion>
      </template>

      <template #body>
        <Motion v-bind="scrollMotion(0.12)">
        <UAccordion
          v-model="faqOpenValue"
          :items="faqItems"
          type="single"
          :unmount-on-hide="false"
          :ui="{ trigger: 'text-base', body: 'text-base text-muted' }"
        >
          <template #body="{ item }">
            <span v-html="item.content" />
          </template>
        </UAccordion>
        </Motion>
      </template>
    </UPageSection>

    <!-- CTA final -->
    <UPageSection
      :ui="{
        root: 'border-t border-default',
        container: 'max-w-3xl',
        wrapper: 'items-start text-left',
        headline: 'text-laravel justify-start',
        title: 'max-w-2xl text-left text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl',
        description: 'max-w-2xl text-left',
      }"
    >
      <template #headline>
        <Motion
          as="span"
          v-bind="scrollMotion()"
          class="inline-block"
        >
          Próximo passo
        </Motion>
      </template>

      <template #title>
        <Motion
          as="span"
          v-bind="scrollMotion(0.1)"
          class="inline-block"
        >
          Agora é construir com direção.
        </Motion>
      </template>

      <template #description>
        <Motion
          as="span"
          v-bind="scrollMotion(0.18)"
          class="inline-block"
        >
          Entre no Laravel PRO e aprenda a construir uma base backend SaaS em Laravel — com auth, arquitetura, tenant, permissões e deploy.
        </Motion>
      </template>

      <template #footer>
        <Motion
          v-bind="scrollMotion(0.28)"
          class="block"
        >
        <UButton
          :href="offerLink.LARAVEL"
          color="cta"
          size="lg"
          trailing-icon="i-lucide-arrow-right"
          :label="ctaPrimaryLabel"
        />
        <p class="mt-8 w-full border-t border-default pt-5 text-sm text-dimmed">
          Acesso imediato · Garantia de 7 dias · Devolução 100% sem burocracia
        </p>
        </Motion>
      </template>
    </UPageSection>

    <AppFooter />
</template>

<script setup>
import AppFooter from '~/components/App/AppFooter.vue'
import PageAbout from '~/components/Page/PageAbout.vue'
import PageTestimonial from '~/components/Page/PageTestimonial.vue'
import laravelProLogo from '~/assets/img/LaravelPro-WhiteColor.svg'

definePageMeta({
  layout: false,
})

function scrollMotion(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.25 },
    transition: { duration: 0.55, delay },
  }
}

function staggerMotion(index = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.2 },
    transition: { duration: 0.5, delay: index * 0.08 },
  }
}

function flowMotion(index = 0) {
  return {
    initial: { opacity: 0, scale: 0.92, y: 10 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.35 },
    transition: {
      duration: 0.45,
      delay: index * 0.1,
      type: 'spring',
      stiffness: 280,
      damping: 22,
    },
  }
}

function flowArrowMotion(index = 0) {
  return {
    initial: { opacity: 0, scale: 0.6 },
    whileInView: { opacity: 1, scale: 1 },
    inViewOptions: { once: true, amount: 0.5 },
    transition: { duration: 0.35, delay: index * 0.1 + 0.05 },
  }
}

function priceMotion() {
  return {
    initial: { opacity: 0, scale: 0.96, y: 12 },
    whileInView: { opacity: 1, scale: 1, y: 0 },
    inViewOptions: { once: true, amount: 0.4 },
    transition: { duration: 0.6, type: 'spring', stiffness: 220, damping: 20 },
  }
}

const ctaPrimaryLabel = 'Quero entrar no Laravel PRO'
const freeTrialLink = { name: 'laravel-pro-2-dias-gratis' }
const whatsappLink = useWhatsappLink('Olá Tiago! Tenho uma dúvida sobre o Laravel PRO.')

const headerMenu = [
  { label: 'Mapa', to: '#mapa' },
  { label: 'Trilha', to: '#trilha' },
  { label: 'Pra quem é', to: '#pra-quem' },
  { label: 'Oferta', to: '#oferta' },
  { label: 'FAQ', to: '#faq' },
]

function scrollToHash(hash) {
  if (!hash) {
    return
  }

  document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const faqOpenValue = ref('0')

function handleRouteHash(hash) {
  if (!hash) {
    return
  }

  const faqMatch = hash.match(/^#faq-(.+)$/)
  if (faqMatch) {
    faqOpenValue.value = faqMatch[1]
    nextTick(() => {
      document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    return
  }

  scrollToHash(hash)
}

const route = useRoute()

watch(() => route.hash, (hash) => {
  handleRouteHash(hash)
})

onMounted(() => {
  handleRouteHash(route.hash)
})

const learnCtaLinks = [{
  to: '#trilha',
  color: 'cta',
  size: 'lg',
  trailingIcon: 'i-lucide-arrow-right',
  label: 'Ver trilha do curso',
  class: 'justify-center',
}]

const learnItems = [
  {
    icon: 'i-lucide-lock-keyhole',
    title: 'Auth de produto',
    description: 'Fluxos de autenticação que fazem sentido para produto: senha, token, recuperação, magic link e login social.',
    topics: ['Sanctum', 'Login com senha', 'Magic link', 'Login social'],
  },
  {
    icon: 'i-lucide-boxes',
    title: 'Arquitetura organizada',
    description: 'Estrutura de projeto pensada para crescer sem virar uma pasta app/ impossível de manter.',
    topics: ['Módulos', 'Organização por feature', 'Responsabilidades claras', 'Código fácil de manter'],
  },
  {
    icon: 'i-lucide-building-2',
    title: 'Tenant e permissões',
    description: 'A parte que separa CRUD simples de backend SaaS real: times, organizações, papéis e isolamento de dados.',
    topics: ['Times', 'Organizações', 'Roles', 'Isolamento por tenant'],
  },
  {
    icon: 'i-lucide-rocket',
    title: 'API pronta para sair do localhost',
    description: 'Endpoints organizados, validados, consumíveis pelo front e preparados para ir ao ar.',
    topics: ['API Resources', 'Validação', 'Filtros', 'Deploy'],
  },
]

const engineeringThinkingItems = [
  {
    icon: 'i-lucide-route',
    title: 'Desenhar antes de implementar',
    description: 'Entradas, saídas, estados e caminhos alternativos antes do controller nascer.',
  },
  {
    icon: 'i-lucide-git-branch',
    title: 'Prever regras e exceções',
    description: 'Convite expirado, tenant errado, permissão negada e token inválido entram no plano.',
  },
  {
    icon: 'i-lucide-message-square-code',
    title: 'Comunicar decisões técnicas',
    description: 'Você aprende a explicar por que a solução existe e quais trade-offs foram feitos.',
  },
  {
    icon: 'i-lucide-brain',
    title: 'Codar com intenção',
    description: 'Cada endpoint nasce de um fluxo claro, não de tentativa e erro.',
  },
]

const magicLinkFlowItems = [
  {
    kicker: '01',
    type: 'start',
    title: 'Pede acesso',
    description: 'Email informado',
  },
  {
    kicker: '02',
    type: 'process',
    title: 'Gerar link',
    description: 'Token + expiração',
  },
  {
    kicker: '03',
    type: 'process',
    title: 'Enviar email',
    description: 'Link de login',
  },
  {
    kicker: '04',
    type: 'decision',
    title: 'Validar token',
    description: 'Usuário + prazo',
    branch: 'não -> 422',
  },
  {
    kicker: '05',
    type: 'success',
    title: 'Login feito',
    description: 'Sessão + user',
  },
]

const praQuemSim = [
  'Já usa Laravel, mas trava em tenant, permissões e arquitetura.',
  'Quer construir backend profissional para Vue, React ou mobile.',
  'É freelancer/indie hacker e quer parar de começar tudo do zero.',
  'Quer entender o porquê das decisões, não só decorar sintaxe.',
]

const praQuemNao = [
  'Procura boilerplate pronto para copiar e colar sem entender.',
  'Quer um curso só de frontend.',
  'Espera teoria sem colocar a mão no código.',
  'Não quer estudar, praticar e revisar seus próprios erros.',
]

const offerProgramDetails = [
  { label: 'Formato', value: 'Trilha online 100% gravada' },
  { label: 'Acesso', value: 'Imediato após pagamento' },
  { label: 'Ritmo', value: 'No seu próprio ritmo' },
  { label: 'Pré-requisito', value: 'PHP OO e banco de dados', faqValue: 'conhecimentos' },
  { label: 'Atualizações', value: 'Inclusas sem custo extra' },
  { label: 'Garantia', value: '7 dias com reembolso integral' },
]

const offerIncludedBenefits = [
  '1 ano de acesso ilimitado',
  'Suporte direto comigo via WhatsApp',
  'Grupo exclusivo de alunos no Discord e WhatsApp',
  'Novas aulas e cursos adicionados regularmente',
  'Certificado digital de conclusão',
]

const modulos = [
  {
    title: 'Laravel Básico',
    icon: 'i-lucide-book-open',
    intro: 'Pra quem precisa fortalecer a base antes de entrar na parte de API e SaaS.',
    bullets: ['MVC, rotas e controllers', 'Eloquent e relacionamentos', 'Validação'],
  },
  {
    title: 'Laravel API',
    icon: 'i-lucide-plug',
    intro: 'Aqui você começa a construir o backend que será consumido por front-end, mobile ou qualquer cliente externo.',
    bullets: ['API RESTful e API Resources', 'Validação e endpoints aninhados', 'Filtros, boas práticas e CORS'],
  },
  {
    title: 'Arquitetura Profissional',
    icon: 'i-lucide-boxes',
    intro: 'Você aprende a organizar o Laravel para o projeto crescer sem virar uma pasta app/ impossível de manter.',
    bullets: ['Modularização', 'Organização por feature', 'Estrutura escalável'],
  },
  {
    title: 'Autenticação',
    icon: 'i-lucide-lock-keyhole',
    badge: 'Em expansão',
    intro: 'A parte que quase todo SaaS precisa, mas que muita gente implementa só pela metade.',
    bullets: ['Sanctum, login e recuperação de senha', 'Login com código e magic link', 'Login social'],
  },
  {
    title: 'Multi-tenancy',
    icon: 'i-lucide-building-2',
    badge: 'Em construção',
    intro: 'Você aprende a lidar com times, organizações, contexto de tenant e isolamento de dados.',
    bullets: ['Organizações e times', 'Tenant context e isolamento de dados', 'Permissões'],
  },
  {
    title: 'Deploy',
    icon: 'i-lucide-rocket',
    intro: 'Porque backend bom não pode morrer no localhost.',
    bullets: ['Cloudflare e VPS', 'Laravel Forge', 'Deploy de projetos Laravel'],
  },
]

const aiHandlesItems = [
  'Models, migrations, controllers e requests',
  'CRUD básico e endpoints repetitivos',
  'Validações, resources e boilerplate',
  'Código que economiza tempo',
]

const aiDecisionItems = [
  'Se a estrutura faz sentido para um SaaS real',
  'Onde começa e termina o contexto do tenant',
  'Qual regra pertence ao domínio, não ao controller',
  'Como proteger permissões sem vazar dados',
]

const faqItems = [
  {
    label: 'Preciso já saber Laravel?',
    content: '<p>Não. A trilha começa do básico, então você consegue acompanhar mesmo se ainda não domina Laravel. Se você já tem experiência, pode avançar mais rápido para API, arquitetura e autenticação.</p>',
  },
  {
    value: 'conhecimentos',
    label: 'Quais conhecimentos eu preciso ter antes de começar?',
    content: '<p>Você não precisa ser expert em Laravel, porque a trilha começa reforçando a base.</p><p>Mas para aproveitar melhor o curso, é importante já ter noção de lógica de programação, PHP orientado a objetos, banco de dados relacional e o básico de HTTP.</p><p>Se você ainda está aprendendo PHP do zero, talvez seja melhor fortalecer essa base primeiro. O Laravel PRO foi pensado para quem quer sair do básico e começar a construir backend de produto.</p>',
  },
  {
    label: 'O curso tem frontend?',
    content: '<p>O foco principal do Laravel PRO é backend API em Laravel.</p><p>Mas você não fica só no Postman ou no Insomnia. Durante a trilha, usamos um playground feito em Vue para testar a API, visualizar os fluxos funcionando e entender como o backend se comporta quando é consumido por um frontend real.</p><p>A ideia não é ensinar Vue do zero aqui, mas te mostrar o backend funcionando em um cenário mais próximo de um produto de verdade.</p>',
  },
  {
    label: 'Por quanto tempo tenho acesso?',
    content: '<p>Você tem 1 ano de acesso ilimitado ao conteúdo, incluindo novas aulas e atualizações adicionadas nesse período.</p>',
  },
  {
    label: 'Tem suporte?',
    content: '<p>Sim. Você tem suporte direto comigo via WhatsApp e acesso aos grupos exclusivos de alunos no Discord e WhatsApp.</p>',
  },
  {
    label: 'Qual a diferença para um starter kit?',
    content: '<p>Um starter kit entrega código pronto. O Laravel PRO te ensina a construir, entender e evoluir essa base, para você não depender de uma caixa-preta.</p>',
  },
  {
    label: 'Posso testar antes de comprar?',
    content: `<p>Sim. Você pode acessar o Laravel PRO por 2 dias grátis, sem cartão de crédito e sem compromisso.</p><p>Assim você conhece a didática, vê a estrutura da trilha e decide se o curso faz sentido pra você antes de entrar de vez.</p><p><a href="${freeTrialLink}" class="font-semibold text-laravel underline underline-offset-4">Testar 2 dias grátis</a></p>`,
  },
  {
    label: 'Posso tirar dúvidas antes de entrar?',
    content: `<p>Sim. Se tiver alguma dúvida sobre o Laravel PRO, acesso, suporte ou se o curso faz sentido para você, pode me chamar no <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="font-medium text-success underline-offset-4 transition-colors hover:underline">WhatsApp</a> antes de entrar.</p>`,
  },
  {
    label: 'Tem garantia?',
    content: '<p>Sim. Você tem 7 dias para testar o curso. Se não fizer sentido pra você, pode pedir reembolso integral dentro do prazo.</p>',
  },
]

useSeoMeta({
  title: 'Laravel PRO — API SaaS | Tiago Matos',
  description: 'Construa o backend do seu SaaS em Laravel: auth, API RESTful, multi-tenant e deploy. Base sólida pra reutilizar nos próximos projetos. Garantia de 7 dias.',
})
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style scoped>
@keyframes hero-shimmer {
  0% {
    background-position: 0% center;
  }

  100% {
    background-position: 200% center;
  }
}

.animate-hero-shimmer {
  background-image: linear-gradient(
    135deg,
    #ff7a5c,
    #ffb199,
    #ffd4c8,
    #ffb199,
    #ff7a5c
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: hero-shimmer 4s ease-in-out infinite alternate;
}

.excalidraw-flow {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.4rem 0.2rem 1.35rem;
}

.excalidraw-node {
  position: relative;
  width: 8.6rem;
  min-height: 5.1rem;
  padding: 0.7rem 0.8rem;
  color: var(--ui-text-highlighted);
  background: rgb(255 250 240 / 0.1);
  border: 1.5px dashed rgb(255 250 240 / 0.35);
  border-radius: 14px 11px 15px 10px;
  transform: rotate(-0.5deg);
}

.excalidraw-node--tilt {
  transform: rotate(0.7deg);
}

.excalidraw-node--start {
  background: rgb(29 78 216 / 0.08);
  border-color: rgb(29 78 216 / 0.45);
}

.excalidraw-node--process {
  background: rgb(249 115 22 / 0.08);
  border-color: rgb(249 115 22 / 0.45);
}

.excalidraw-node--decision {
  background: rgb(124 58 237 / 0.08);
  border-color: rgb(124 58 237 / 0.45);
}

.excalidraw-node--success {
  background: rgb(22 163 74 / 0.08);
  border-color: rgb(22 163 74 / 0.45);
}

.excalidraw-kicker {
  font-size: 0.625rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.58;
}

.excalidraw-title {
  margin-top: 0.25rem;
  font-size: 0.88rem;
  font-weight: 800;
  line-height: 1.15;
}

.excalidraw-description {
  margin-top: 0.25rem;
  font-size: 0.68rem;
  line-height: 1.35;
  opacity: 0.72;
}

.excalidraw-branch {
  position: absolute;
  right: 0.75rem;
  bottom: -0.95rem;
  padding: 0.2rem 0.45rem;
  font-size: 0.68rem;
  font-weight: 800;
  color: #dc2626;
  white-space: nowrap;
  background: #fef2f2;
  border: 1.5px dashed #ef4444;
  border-radius: 999px;
  transform: rotate(-1deg);
  z-index: 1;
}

.excalidraw-arrow {
  position: relative;
  width: 2px;
  height: 1.7rem;
  border-left: 2px dashed color-mix(in srgb, var(--color-laravel) 85%, white);
}

.excalidraw-arrow::after {
  content: '';
  position: absolute;
  left: -4px;
  bottom: -1px;
  width: 9px;
  height: 9px;
  border-bottom: 2px solid color-mix(in srgb, var(--color-laravel) 85%, white);
  border-right: 2px solid color-mix(in srgb, var(--color-laravel) 85%, white);
  transform: rotate(45deg);
}

@media (min-width: 640px) {
  .excalidraw-flow {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .excalidraw-arrow {
    width: 1.7rem;
    height: 2px;
    border-top: 2px dashed color-mix(in srgb, var(--color-laravel) 85%, white);
    border-left: 0;
  }

  .excalidraw-arrow::after {
    right: -1px;
    left: auto;
    top: -5px;
    bottom: auto;
    border-top: 2px solid color-mix(in srgb, var(--color-laravel) 85%, white);
    border-right: 2px solid color-mix(in srgb, var(--color-laravel) 85%, white);
    border-bottom: 0;
  }
}

</style>
