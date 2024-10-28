<template>
  <NuxtLayout name="lp">

    <LandingHero
      title="Jornada Laravel: Do Zero ao Mestre"
      description="Desperte seu potencial em PHP e abra portas para novas oportunidades! Aprenda Laravel de forma prática e crie aplicações web rápidas e robustas."
    >
      <template #before-title>
        <IconLaravel class="mb-2"/>
      </template>

      <template #after-description>
        <!--        <div class="text-gray-600 dark:text-gray-400 mt-6">-->
        <!--          Aprenda conceitos fundamentais como MVC - Model View e Controller e também tópicos avançados como Arquitetura-->
        <!--          API, Autenticação, Fila, Query Builder e muito mais.-->
        <!--        </div>-->
      </template>

      <template #content-right>
        <CodeLaravel/>
      </template>
    </LandingHero>

    <LpLaravelOQueEJornadaLaravel/>

    <LpLaravelParaQuemEEsteCurso/>

<!--    <LpLaravelOQueVouAprender/>-->

    <LpLaravelModulos />

    <LpLaravelPorqueAprenderLaravelComigo/>

    <SectionTestimonial
      title="Transforme sua carreira com a Jornada Laravel"
      description="Junte-se a mais de 1.000 alunos que mudaram suas vidas profissionais e alcançaram novos patamares na programação. Veja como eles se destacaram no mercado!"
    />

    <LpLaravelOQuePossoConstruir />

    <LpLaravelPrequisitos />

    <LpLaravelFaq />

    <LpLaravelAulasGratuitas />

    <LpLaravelOffer />

    <SectionAbout wrap-class="max-w-2xl"/>


<!--    <br><br><br>-->
<!--    <br><br><br>-->
<!--    <br><br><br>-->
<!--    <br><br><br>-->

<!--    <LandingSection>-->
<!--      <div class="max-w-4xl mx-auto">-->
<!--        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10">-->
<!--          <div>-->
<!--            <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/[.01]">-->
<!--              +2k</h2>-->
<!--            <h3 class="text-lg font-bold">de alunos decolando</h3>-->
<!--            <p class="text-gray-500 dark:text-gray-400 text-sm">Milhares de alunos com as carreiras transformadas e-->
<!--              dominando o mercado.</p>-->
<!--          </div>-->

<!--          <div>-->
<!--            <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/[.01]">-->
<!--              +50h</h2>-->
<!--            <h3 class="text-lg font-bold">de video aulas</h3>-->
<!--            <p class="text-gray-500 dark:text-gray-400 text-sm">Centenas de aulas para cobrir tudo o que você precisa-->
<!--              saber sobre Laravel e Vue.</p>-->
<!--          </div>-->

<!--          <div>-->
<!--            <h2 class="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/[.01]">-->
<!--              +20</h2>-->
<!--            <h3 class="text-lg font-bold">cursos otimizados</h3>-->
<!--            <p class="text-gray-500 dark:text-gray-400 text-sm">Cursos do básico até ao avançado para você decolar e-->
<!--              alavancar sua carreira.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </LandingSection>-->

<!--    <LandingSection-->
<!--      title="Por que você deve fazer parte da Jornada Laravel com Tiago Matos?"-->
<!--      description="Descubra 3 motivos pelos quais você não pode ficar de fora dessa comunidade de aprendizado."-->
<!--    >-->
<!--      <div class="max-w-6xl mx-auto">-->
<!--        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">-->
<!--          <Card>-->
<!--            <CardContent>-->
<!--              <div class="flex items-center gap-x-3">-->
<!--                <div-->
<!--                  class="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/[.01]">-->
<!--                  1-->
<!--                </div>-->
<!--                <h3 class="text-base font-bold">Alta demanda por profissionais qualificados</h3>-->
<!--              </div>-->

<!--              <div class="mt-2 md:mt-4">-->
<!--                <p class="text-gray-500 dark:text-gray-400">O mercado está com sede de devs que dominam Laravel. Minha-->
<!--                  missão é fazer você se destacar tanto, que quem vai escolher os projetos é você. Nada de correr atrás,-->
<!--                  você vai estar acima da média.</p>-->
<!--              </div>-->
<!--            </CardContent>-->
<!--          </Card>-->

<!--          <Card>-->
<!--            <CardContent>-->
<!--              <div class="flex items-center gap-x-3">-->
<!--                <div-->
<!--                  class="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/[.01]">-->
<!--                  2-->
<!--                </div>-->
<!--                <h3 class="text-base font-bold">Ser valorizado como especialista</h3>-->
<!--              </div>-->

<!--              <div class="mt-2 md:mt-4">-->
<!--                <p class="text-gray-500 dark:text-gray-400">Aqui, você aprende tudo, desde o básico até as técnicas mais-->
<!--                  avançadas de Laravel. Eu trago anos de experiência prática em cada aula, pra que você construa um-->
<!--                  portfólio de respeito e tenha um diferencial claro no mercado.</p>-->
<!--              </div>-->
<!--            </CardContent>-->
<!--          </Card>-->

<!--          <Card>-->
<!--            <CardContent>-->
<!--              <div class="flex items-center gap-x-3">-->
<!--                <div-->
<!--                  class="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/[.01]">-->
<!--                  3-->
<!--                </div>-->
<!--                <h3 class="text-base font-bold">Liberdade para trabalhar de qualquer lugar</h3>-->
<!--              </div>-->

<!--              <div class="mt-2 md:mt-4">-->
<!--                <p class="text-gray-500 dark:text-gray-400">-->
<!--                  Você não precisa mudar para a <a-->
<!--                  href="https://www.youtube.com/playlist?list=PLcoYAcR89n-qrx64GhIZfaZTZ06smhK5S"-->
<!--                  target="_blank"-->
<!--                  class="underline hover:no-underline">Austrália 🦘</a> como eu, mas com o conhecimento certo, pode-->
<!--                  trabalhar de qualquer lugar do mundo. Basta se dedicar e aplicar o que ensino. A independência que-->
<!--                  você quer tá a um curso de distância.</p>-->
<!--              </div>-->
<!--            </CardContent>-->
<!--          </Card>-->
<!--        </div>-->
<!--      </div>-->
<!--    </LandingSection>-->

<!--    <LandingSection-->
<!--      title="Para quem é indicado a escola Laravue?"-->
<!--      description="A Escola Laravue foi criada para ensinar cada framework desde o zero até o nível mais avançado. Ou seja, é para você que"-->
<!--      class="bg-gray-50 dark:bg-gray-900"-->
<!--    >-->
<!--      <div class="max-w-4xl mx-auto space-y-20 mt-16">-->
<!--        <div class="flex flex-col md:flex-row items-start gap-4 md:gap-10">-->
<!--          <img-->
<!--            src="@/assets/img/programador-junior.jpg"-->
<!--            alt="Programador Laravue Junior"-->
<!--            class="shrink-0 w-full md:w-[450px] rounded-2xl"-->
<!--          >-->

<!--          <div>-->
<!--            <h3 class="heading-3">Nunca trabalhou com os frameworks-->
<!--              <span class="text-primary">Laravel e Vue</span></h3>-->
<!--            <p class="text-gray-600 dark:text-gray-400 mt-2">Nunca nem viu a cor deles? Não se preocupe, pois durante-->
<!--              as aulas eu te mostro todo o passo-a-passo detalhado e na prática desde a instalação até técnicas super-->
<!--              avançadas.</p>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex flex-col md:flex-row-reverse items-start gap-4 md:gap-10">-->
<!--          <img-->
<!--            src="@/assets/img/programador-pleno.jpg"-->
<!--            alt="Programador Laravue Pleno"-->
<!--            class="shrink-0 w-full md:w-[450px] rounded-2xl"-->
<!--          >-->

<!--          <div>-->
<!--            <h3 class="heading-3">Tem familiaridade com <span-->
<!--              class="text-primary">Laravel e Vue</span> e quer ir pro-->
<!--              próximo nível</h3>-->
<!--            <p class="text-gray-600 dark:text-gray-400 mt-2">Você não é iniciante e quer avançar para o nível PRO. A-->
<!--              Laravue vai te ajudar a dominar as ferramentas e te preparar para encarar os projetos futuros com-->
<!--              segurança.</p>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="flex flex-col md:flex-row items-start gap-4 md:gap-10">-->
<!--          <img-->
<!--            src="@/assets/img/programador-senior.jpg"-->
<!--            alt="Programador Laravue Senior"-->
<!--            class="shrink-0 w-full md:w-[450px] rounded-2xl"-->
<!--          >-->

<!--          <div>-->
<!--            <h3 class="heading-3">Já domina <span class="text-primary">Laravel e Vue</span>,-->
<!--              mas está-->
<!--              perdido para fazer um projeto do Zero ao Deploy</h3>-->
<!--            <p class="text-gray-600 dark:text-gray-400 mt-2">Já domina as ferramentas mas ainda não é 100% seguro? A-->
<!--              Laravue te ajudará a montar projetos de ponta a ponta usando os dois frameworks mais TOP do mercado.</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </LandingSection>-->

<!--    <LandingSection-->
<!--      headline="Pré-requisitos"-->
<!--      title="O que eu preciso saber antes de me matricular?"-->
<!--      description="O curso Laravue é para você que nunca mexeu nesses frameworks ou tem apenas um conhecimento básico."-->
<!--    >-->
<!--      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">-->
<!--        <Card>-->
<!--          <CardContent>-->
<!--            <IconPhp/>-->
<!--            <h3 class="text-lg font-bold mt-2">Conhecimento básico de PHP</h3>-->
<!--            <p class="text-gray-500 dark:text-gray-400">É importante ter uma noção básica de PHP, incluindo variáveis,-->
<!--              estruturas como if e foreach, funções e uma ideia de como usar classes e objetos.</p>-->
<!--          </CardContent>-->
<!--        </Card>-->

<!--        <Card>-->
<!--          <CardContent>-->
<!--            <div class="flex gap-2">-->
<!--              <IconHtml5/>-->
<!--              <IconCss3/>-->
<!--            </div>-->
<!--            <h3 class="text-lg font-bold mt-2">Conhecimento de HTML e CSS</h3>-->
<!--            <p class="text-gray-500 dark:text-gray-400">Você deve entender o básico de HTML para criar páginas simples e-->
<!--              de CSS para deixar essas páginas com um visual agradável.</p>-->
<!--          </CardContent>-->
<!--        </Card>-->

<!--        <Card>-->
<!--          <CardContent>-->
<!--            <h3 class="text-lg font-bold mt-2">Familiaridade com o Terminal/CLI</h3>-->
<!--            <p class="text-gray-500 dark:text-gray-400">Familiaridade com o terminal ajuda bastante, pois você precisará-->
<!--              navegar por pastas e rodar comandos básicos para configurar o Laravel e instalar dependências.</p>-->
<!--          </CardContent>-->
<!--        </Card>-->

<!--        <Card>-->
<!--          <CardContent>-->
<!--            <h3 class="text-lg font-bold mt-2">Noções de Banco de Dados</h3>-->
<!--            <p class="text-gray-500 dark:text-gray-400">Conhecimentos básicos em SQL são essenciais, como fazer-->
<!--              consultas (SELECT), inserir (INSERT), atualizar (UPDATE) e apagar (DELETE) dados em um banco de dados-->
<!--              relacional como MySQL.</p>-->
<!--          </CardContent>-->
<!--        </Card>-->
<!--      </div>-->
<!--    </LandingSection>-->

<!--    <LandingSection-->
<!--      headline="TECH MODERNA"-->
<!--      title="Ideal para quem quer extrair o máximo dos frameworks que mais crescem no mercado moderno."-->
<!--      description="Construa Apps com técnicas modernas como arquitetura API e Single Page Application (SPA)."-->
<!--      class="bg-gray-50 dark:bg-gray-900"-->
<!--    >-->
<!--      <div class="max-w-6xl mx-auto">-->
<!--        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">-->
<!--          <Card class="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700">-->
<!--            <CardContent>-->
<!--              <h6 class="heading-6 font-bold">Aulas para todos os níveis</h6>-->
<!--              <p class="text-gray-600 dark:text-gray-300  mt-2">A Escola Laravue é completa não apenas por te-->
<!--                profissionalizar, mas também por ajudar os iniciantes! Temos cursos para cada nível de aprendizado e-->
<!--                domínio dos frameworks.</p>-->
<!--            </CardContent>-->
<!--          </Card>-->

<!--          <Card class="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700">-->
<!--            <CardContent>-->
<!--              <h6 class="heading-6 font-bold">Aulas 100% práticas</h6>-->
<!--              <p class="text-gray-600 dark:text-gray-300  mt-2">Em todas as aulas você verá na prática como-->
<!--                utilizar cada recurso do framework com exemplos reais. Não tem como não fixar o conteúdo.</p>-->
<!--            </CardContent>-->
<!--          </Card>-->

<!--          <Card class="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700">-->
<!--            <CardContent>-->
<!--              <h6 class="heading-6 font-bold">Faça um código limpo</h6>-->
<!--              <p class="text-gray-600 dark:text-gray-300  mt-2">Durante as aulas você vai aprender técnias do-->
<!--                clean code para deixar seu código mais inteligente e de fácil manutenção!</p>-->
<!--            </CardContent>-->
<!--          </Card>-->

<!--          <Card class="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700">-->
<!--            <CardContent>-->
<!--              <h6 class="heading-6 font-bold">Suporte do professor</h6>-->
<!--              <p class="text-gray-600 dark:text-gray-300  mt-2">Eu quero acompanhar o seu crescimento e-->
<!--                solucionar o máximo de dúvidas possíveis, por isso você terá suporte direto do professor.</p>-->
<!--            </CardContent>-->
<!--          </Card>-->

<!--          <Card class="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700">-->
<!--            <CardContent>-->
<!--              <h6 class="heading-6 font-bold">Turbine a sua renda</h6>-->
<!--              <p class="text-gray-600 dark:text-gray-300 mt-2">Dominando esses dois frameworks, você será-->
<!--                capaz de concorrer com qualquer vaga de emprego ou até mesmo assumir aquele freela de ponta a ponta e-->
<!--                fazer uma grana extra.</p>-->
<!--            </CardContent>-->
<!--          </Card>-->

<!--          <Card class="bg-transparent dark:bg-transparent border border-gray-300 dark:border-gray-700">-->
<!--            <CardContent>-->
<!--              <h6 class="heading-6 font-bold">Torne-se um profissional</h6>-->
<!--              <p class="text-gray-600 dark:text-gray-300  mt-2">Deixe a teoria e o medo de lado, entre no campo-->
<!--                de batalha e se torne um Desenvolvedor de verdade, tendo liberdade financeira e geográfica.</p>-->
<!--            </CardContent>-->
<!--          </Card>-->
<!--        </div>-->
<!--      </div>-->
<!--    </LandingSection>-->
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
})
</script>
