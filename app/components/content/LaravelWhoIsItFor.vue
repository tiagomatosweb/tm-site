<template>
  <UPageGrid>
    <UPageCard title="Se você ainda é um Dev Iniciante.">
      <template #header>
        <img
          src="@/assets/img/programador-junior.webp"
          alt=""
          class="rounded-tl-md"
        >
      </template>

      <template #description>
        <ProseP class="mt-0">Você está começando agora no mundo do Laravel? Então essa Jornada é seu ponto de partida
          ideal.
        </ProseP>
        <ProseP>Aqui você aprende <strong>com clareza e sem confusão</strong>, desde os fundamentos até seu <strong>primeiro
          projeto
          real</strong>, mesmo que
          nunca tenha feito um CRUD na vida.
        </ProseP>
        <ProseP>Nada de fórmula pronta — o foco é entender <strong>o porquê</strong> de cada linha de código.</ProseP>
      </template>
    </UPageCard>

    <UPageCard title="Se você é um Dev Júnior.">
      <template #header>
        <img
          src="@/assets/img/programador-pleno.webp"
          alt=""
        >
      </template>

      <template #description>
        <ProseP class="mt-0">Já fez um curso de Laravel, mas quando vai codar bate a dúvida?</ProseP>

        <ProseP>
          A Jornada vai te ajudar a:
          <ProseUl>
            <ProseLi>Ganhar autonomia real pra tocar suas tarefas sozinho</ProseLi>
            <ProseLi>Seguir sprints sem travar</ProseLi>
            <ProseLi>Parar de viver no Stack Overflow a cada rota</ProseLi>
          </ProseUl>
        </ProseP>

        <ProseP>
          A Jornada vai te dar autonomia pra tocar suas próprias tarefas, seguir sprints sem travar, e
          parar de correr pro Stack Overflow a cada endpoint.
        </ProseP>
      </template>
    </UPageCard>

    <UPageCard title="Se você é um Dev Pleno.">
      <template #header>
        <img
          src="@/assets/img/programador-senior.webp"
          alt=""
          class="rounded-tr-md"
        >
      </template>

      <template #description>
        <ProseP>Já domina a base do Laravel, mas sente que falta organização ou visão de produto completo?</ProseP>
        <ProseP>Aqui você vai:
          <ProseUl>
            <ProseLi>Lapidar seu código com <strong>boas práticas modernas</strong></ProseLi>
            <ProseLi>Aprender sobre arquitetura, SaaS e deploy</ProseLi>
            <ProseLi><strong>Liderar com confiança</strong>, entregando soluções robustas</ProseLi>
          </ProseUl>
        </ProseP>
        <ProseP>É a virada de chave pra quem quer sair do “fazedor de endpoints” e assumir o controle técnico do
          projeto.
        </ProseP>
      </template>
    </UPageCard>
  </UPageGrid>
  <!--  <UPageCard-->
  <!--    title="Se você ainda é um Dev Iniciante"-->
  <!--    orientation="horizontal"-->
  <!--    reverse-->
  <!--  >-->
  <!--    <template #leading>-->
  <!--      👶-->
  <!--    </template>-->
  <!--    <template #description>-->
  <!--      <div class="space-y-4">-->
  <!--        <p>Você está começando agora no mundo do Laravel? Então essa Jornada é seu ponto de partida ideal.</p>-->
  <!--        <p>Aqui você aprende com clareza e sem confusão, desde os fundamentos até seu primeiro projeto real, mesmo que-->
  <!--          nunca-->
  <!--          tenha feito um CRUD na vida.-->
  <!--          Nada de fórmula pronta — o foco é entender o porquê de cada linha de código.</p>-->
  <!--      </div>-->
  <!--    </template>-->

  <!--    <img src="@/assets/img/programador-junior.webp" class="w-full"/>-->
  <!--  </UPageCard>-->

  <!--  <UPageCard-->
  <!--    title="Se você é um Dev Júnior"-->
  <!--    orientation="horizontal"-->
  <!--  >-->
  <!--    <template #leading>-->
  <!--      👩‍💻-->
  <!--    </template>-->
  <!--    <template #description>-->
  <!--      <div class="space-y-4">-->
  <!--        <p>Já fez um curso de Laravel, mas quando vai codar bate a dúvida? <br>-->
  <!--          A Jornada vai te ajudar a:</p>-->
  <!--        <ul>-->
  <!--          <li>Ganhar autonomia real pra tocar suas tarefas sozinho</li>-->
  <!--          <li>Seguir sprints sem travar</li>-->
  <!--          <li>Parar de viver no Stack Overflow a cada rota</li>-->
  <!--        </ul>-->
  <!--        <p>Você aprende a pensar como dev de backend e a construir projetos que funcionam de verdade.</p>-->
  <!--      </div>-->
  <!--    </template>-->

  <!--    <img src="@/assets/img/programador-pleno.webp" class="w-full"/>-->
  <!--  </UPageCard>-->
</template>

<script setup lang="ts">
</script>
