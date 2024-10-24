<template>
  <NuxtLayout name="lp">
    <LandingSection
      title="Jornada Laravel"
      description="Aprenda a desenvolver projetos modernos como Multi-Tenant SaaS utilizando os dois frameworks que mais crescem no mercado atual – Laravel e Vue.js."
    >
      dsf
    </LandingSection>
    <div class="max-w-6xl mx-auto">
      <h1 class="text-xl sm:text-4xl md:text-5xl xl:text-7xl font-black text-center">
        Jornada Laravel
      </h1>

      <div class="max-w-3xl mx-auto mt-6">
        <p class="text-gray-700 dark:text-gray-300 text-lg md:text-xl text-center">Aprenda a desenvolver projetos
          modernos como <span class="text-primary">Multi-Tenant SaaS</span> utilizando os dois frameworks que mais
          crescem no mercado atual – Laravel e Vue.js.</p>
      </div>
    </div>

    <div class="max-w-4xl mx-auto">
      <img
        src="https://via.placeholder.com/1024x500"
        alt=""
        class="w-full"
      >
    </div>

    <div>
      <div class="max-w-4xl mx-auto mb-12">
        <h2 class="text-xl sm:text-3xl font-extrabold tracking-tight text-center mt-3 mb-4">Ideal para quem quer extrair
          o máximo dos frameworks que mais crescem no mercado
          moderno.
        </h2>
        <div class="max-w-2xl mx-auto">
          <p class="text-gray-600 dark:text-gray-400 text-center">Crie seu próprio produto SaaS com técnicas modernas
            como arquitetura API e Single Page Application (SPA).</p>
        </div>
      </div>

      <div class="max-w-3xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          <div class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-500 bg-opacity-20 mb-2">
              <svg
                class="text-gray-600 dark:text-gray-400 w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  d="M173.8 5.5c11-7.3 25.4-7.3 36.4 0L228 17.2c6 3.9 13 5.8 20.1 5.4l21.3-1.3c13.2-.8 25.6 6.4 31.5 18.2l9.6 19.1c3.2 6.4 8.4 11.5 14.7 14.7L344.5 83c11.8 5.9 19 18.3 18.2 31.5l-1.3 21.3c-.4 7.1 1.5 14.2 5.4 20.1l11.8 17.8c7.3 11 7.3 25.4 0 36.4L366.8 228c-3.9 6-5.8 13-5.4 20.1l1.3 21.3c.8 13.2-6.4 25.6-18.2 31.5l-19.1 9.6c-6.4 3.2-11.5 8.4-14.7 14.7L301 344.5c-5.9 11.8-18.3 19-31.5 18.2l-21.3-1.3c-7.1-.4-14.2 1.5-20.1 5.4l-17.8 11.8c-11 7.3-25.4 7.3-36.4 0L156 366.8c-6-3.9-13-5.8-20.1-5.4l-21.3 1.3c-13.2 .8-25.6-6.4-31.5-18.2l-9.6-19.1c-3.2-6.4-8.4-11.5-14.7-14.7L39.5 301c-11.8-5.9-19-18.3-18.2-31.5l1.3-21.3c.4-7.1-1.5-14.2-5.4-20.1L5.5 210.2c-7.3-11-7.3-25.4 0-36.4L17.2 156c3.9-6 5.8-13 5.4-20.1l-1.3-21.3c-.8-13.2 6.4-25.6 18.2-31.5l19.1-9.6C65 70.2 70.2 65 73.4 58.6L83 39.5c5.9-11.8 18.3-19 31.5-18.2l21.3 1.3c7.1 .4 14.2-1.5 20.1-5.4L173.8 5.5zM272 192c0-44.2-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80zM1.3 441.8L44.4 339.3c.2 .1 .3 .2 .4 .4l9.6 19.1c11.7 23.2 36 37.3 62 35.8l21.3-1.3c.2 0 .5 0 .7 .2l17.8 11.8c5.1 3.3 10.5 5.9 16.1 7.7l-37.6 89.3c-2.3 5.5-7.4 9.2-13.3 9.7s-11.6-2.2-14.8-7.2L74.4 455.5l-56.1 8.3c-5.7 .8-11.4-1.5-15-6s-4.3-10.7-2.1-16zm248 60.4L211.7 413c5.6-1.8 11-4.3 16.1-7.7l17.8-11.8c.2-.1 .4-.2 .7-.2l21.3 1.3c26 1.5 50.3-12.6 62-35.8l9.6-19.1c.1-.2 .2-.3 .4-.4l43.2 102.5c2.2 5.3 1.4 11.4-2.1 16s-9.3 6.9-15 6l-56.1-8.3-32.2 49.2c-3.2 5-8.9 7.7-14.8 7.2s-11-4.3-13.3-9.7z"
                />
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Garantia <span class="text-primary">dobro ou nada</span></h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">A minha garantia é de 14 dias - o dobro da garantia
              obrigatória por lei.
              <a
                href=""
                class="underline hover:no-underline"
                @click.stop.prevent="scrollTo('moneyBack')"
              >Saiba mais
              </a>
            </p>
          </div>

          <div class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-500 bg-opacity-20 mb-2">
              <svg
                class="text-gray-600 dark:text-gray-400 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                ></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2"><span class="text-primary">+300</span> video aulas otimizadas</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">São mais de 300 aulas práticas, direto ao ponto e sem
              enrolação.
              <a
                href=""
                class="underline hover:no-underline"
                @click.stop.prevent="scrollTo('freeLessons')"
              >Veja exemplos
              </a>
            </p>
          </div>

          <div class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-500 bg-opacity-20 mb-2">
              <svg
                class="text-gray-600 dark:text-gray-400 w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2"><span class="text-primary">+30h</span> de conteúdo</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">São mais de 30h de curso com aulas práticas e sem
              enrolação.
              <a
                href=""
                class="underline hover:no-underline"
                @click.stop.prevent="scrollTo('tableOfContent')"
              >Veja o conteúdo programático
              </a>
            </p>
          </div>

          <div class="bg-gray-200 dark:bg-gray-800 rounded-xl p-6">
            <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-500 bg-opacity-20 mb-2">
              <svg
                class="text-gray-600 dark:text-gray-400 w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/>
              </svg>
            </div>
            <h3 class="font-bold text-lg mb-2">Acesso <span class="text-primary">vitalício</span></h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Você terá acesso vitalício e receberá todas as
              atualizações futuras.
              <a
                href=""
                class="underline hover:no-underline"
                @click.stop.prevent="scrollTo('price')"
              >Matricule-se agora
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      id="whoIsFor"
      class="max-w-6xl mx-auto"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-3">Para quem é indicado a
            formação Laravue?</h2>
          <p class="text-gray-700 dark:text-gray-300">O curso Laravue é para você que nunca mexeu nesses frameworks ou
            tem apenas um conhecimento básico.</p>
        </div>

        <div>
          <div class="grid grid-cols-2 gap-6">
            <div>
              <h3 class="md:text-lg text-gray-800 dark:text-gray-200 font-extrabold tracking-tight leading-tight mb-4">
                Quem nunca trabalhou com Laravel ou Vue.js</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Nunca nem viu a cor deles? Não se preocupe, pois
                durante as aulas eu te mostro todo o passo-a-passo detalhado e na prática desde a instalação até
                técnicas super avançadas.</p>
              <a href="" class="inline-flex text-gray-800 dark:text-gray-200 text-sm underline hover:no-underline mt-2"
                 @click.stop.prevent="scrollTo('freeLessons')">Veja exemplos aqui</a>
            </div>

            <div>
              <h3 class="md:text-lg text-gray-800 dark:text-gray-200 font-extrabold tracking-tight leading-tight mb-4">
                Quem já tem familiaridade com os frameowrks</h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm">Perfeito! Este é o local certo para você adquirir
                conhecimentos super avançados e partir para a criação do seu próprio produto SaaS ou pegar aquele freela
                tão desejado.</p>
              <a href="" class="inline-flex text-gray-800 dark:text-gray-200 text-sm underline hover:no-underline mt-2"
                 @click.stop.prevent="scrollTo('freeLessons')">Veja exemplos aqui</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      id="preRequisites"
      class="max-w-6xl mx-auto"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-3">Quais os
            pré-requisitos para a formação Laravue?</h2>
          <p class="text-gray-700 dark:text-gray-300">O curso Laravue é para você que nunca mexeu nesses frameworks ou
            tem apenas um conhecimento básico.</p>
        </div>

        <div>
          <div class="grid grid-cols-2 gap-6">
            <div class="text-center px-0 sm:px-6">
              <svg class="inline-flex" width="46" height="46" viewBox="0 0 46 46" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect width="46" height="46" rx="5" fill="url(#paint0_linear_1060_8389)"/>
                <path
                  d="M14 13L15.5938 31.5625L22.9531 34L30.3594 31.5625L32 13H14ZM28.4375 19H19.8125L20 21.3438H28.25L27.5938 28.2812L23 29.5469H22.9531L18.3125 28.2812L18.0312 24.7188H20.2812L20.4688 26.5L22.9531 27.2031L25.4844 26.5L25.7656 23.5938H17.9375L17.3281 16.7969H28.625L28.4375 19Z"
                  fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear_1060_8389" x1="4.7879" y1="35.6519" x2="24.9391" y2="0.95354"
                                  gradientUnits="userSpaceOnUse">
                    <stop offset="0.00318669" stop-color="#D7602B"/>
                    <stop offset="1" stop-color="#EAA43A"/>
                  </linearGradient>
                </defs>
              </svg>

              <h3 class="text-gray-800 dark:text-gray-200 md:text-lg mt-5">Básico de HTML</h3>
            </div>

            <div class="text-center px-0 sm:px-6">
              <svg class="inline-flex" width="46" height="46" viewBox="0 0 46 46" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect width="46" height="46" rx="5" fill="url(#paint0_linear_1060_8392)"/>
                <path
                  d="M14 13L15.5938 31.5625L23 34L30.3594 31.5625L32 13H14ZM28.6719 16.75L28.4375 19L23.0469 21.2969H23H28.25L27.6406 28.1875L23.0469 29.5L18.4062 28.1406L18.125 24.6719H20.375L20.5625 26.5L23 27.1094L25.5781 26.4062L25.7656 23.5L17.9375 23.4531L17.7969 21.2969L23.0469 19.0938L23.3281 19H17.5625L17.2812 16.75H28.6719Z"
                  fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear_1060_8392" x1="4.7879" y1="35.6519" x2="24.9391" y2="0.95354"
                                  gradientUnits="userSpaceOnUse">
                    <stop offset="0.00318669" stop-color="#349EFE"/>
                    <stop offset="1" stop-color="#005BAE"/>
                  </linearGradient>
                </defs>
              </svg>


              <h3 class="text-gray-800 dark:text-gray-200 md:text-lg mt-5">Básico de CSS</h3>
            </div>

            <div class="text-center px-0 sm:px-6">
              <svg class="inline-flex" width="46" height="46" viewBox="0 0 46 46" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect width="46" height="46" rx="5" fill="url(#paint0_linear_1060_8395)"/>
                <path
                  d="M12.9645 25.2245C13.8712 25.2245 14.5481 25.0573 14.9764 24.7277C15.4 24.4015 15.6927 23.8363 15.8461 23.0479C15.9891 22.311 15.9346 21.7965 15.6842 21.5188C15.4282 21.2352 14.8746 21.0913 14.0389 21.0913H12.59L11.7867 25.2245H12.9645ZM8.22539 30.3159C8.15813 30.3159 8.09425 30.2859 8.05149 30.2339C8.00866 30.1819 7.9913 30.1135 8.00415 30.0475L10.133 19.0944C10.1536 18.9885 10.2464 18.912 10.3543 18.912H14.9425C16.3844 18.912 17.4577 19.3035 18.1323 20.0758C18.8105 20.8522 19.02 21.9374 18.7548 23.3013C18.6469 23.857 18.4613 24.373 18.2031 24.835C17.9447 25.2976 17.6031 25.7256 17.1878 26.1073C16.6906 26.5727 16.1279 26.9101 15.5168 27.1086C14.9153 27.3045 14.1429 27.4039 13.2211 27.4039H11.3632L10.8327 30.1335C10.8121 30.2394 10.7194 30.3159 10.6115 30.3159H8.22539Z"
                  fill="white"/>
                <path
                  d="M24.2256 27.4039C24.1582 27.4039 24.0944 27.3739 24.0517 27.3219C24.0087 27.2699 23.9914 27.2016 24.0042 27.1355L24.9459 22.2892C25.0355 21.8283 25.0134 21.4975 24.8838 21.3577C24.8044 21.2723 24.5661 21.129 23.8612 21.129H22.1552L20.9712 27.2215C20.9506 27.3274 20.8578 27.4039 20.7499 27.4039H18.3827C18.3154 27.4039 18.2516 27.3739 18.2087 27.3219C18.1659 27.2699 18.1485 27.2016 18.1614 27.1355L20.2902 16.1824C20.3108 16.0765 20.4036 16 20.5115 16H22.8787C22.9461 16 23.0099 16.0301 23.0527 16.082C23.0955 16.134 23.1129 16.2023 23.1 16.2684L22.5863 18.9121H24.4216C25.8198 18.9121 26.7679 19.1585 27.3201 19.6657C27.8829 20.183 28.0585 21.0101 27.8421 22.1245L26.8516 27.2215C26.8311 27.3274 26.7383 27.4039 26.6303 27.4039H24.2256Z"
                  fill="white"/>
                <path
                  d="M31.5878 25.2245C32.4945 25.2245 33.1714 25.0573 33.5996 24.7277C34.0233 24.4016 34.316 23.8364 34.4694 23.0479C34.6124 22.311 34.5579 21.7965 34.3075 21.5188C34.0514 21.2352 33.4979 21.0913 32.6622 21.0913H31.2133L30.41 25.2245H31.5878ZM26.8487 30.3159C26.7815 30.3159 26.7176 30.2859 26.6748 30.2339C26.632 30.1819 26.6146 30.1135 26.6274 30.0475L28.7563 19.0944C28.7769 18.9885 28.8697 18.912 28.9776 18.912H33.5657C35.0078 18.912 36.081 19.3035 36.7557 20.0758C37.4339 20.8521 37.6433 21.9374 37.3781 23.3013C37.2701 23.857 37.0845 24.373 36.8264 24.835C36.568 25.2976 36.2264 25.7256 35.8111 26.1073C35.3139 26.5727 34.7512 26.9101 34.14 27.1086C33.5386 27.3045 32.7662 27.4039 31.8444 27.4039H29.9865L29.4561 30.1335C29.4355 30.2394 29.3427 30.3159 29.2347 30.3159H26.8487Z"
                  fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear_1060_8395" x1="4.7879" y1="35.6519" x2="24.9391" y2="0.95354"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#3B3F7D"/>
                    <stop offset="1" stop-color="#999DDC"/>
                  </linearGradient>
                </defs>
              </svg>

              <h3 class="text-gray-800 dark:text-gray-200 md:text-lg mt-5">Básico de PHP e orientação a objetos</h3>
            </div>

            <div class="text-center px-0 sm:px-6">
              <svg class="inline-flex" width="46" height="46" viewBox="0 0 46 46" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect width="46" height="46" rx="5" fill="url(#paint0_linear_1060_8399)"/>
                <path
                  d="M12 11.5H11.5V12V34V34.5H12H34H34.5V34V12V11.5H34H12ZM28.9105 27.6062L28.8893 27.5961L28.8673 27.5881L28.3414 27.3969C27.6339 27.0892 27.1063 26.7705 26.7524 26.3661C26.4113 25.9763 26.2009 25.4712 26.2009 24.7188C26.2009 24.092 26.4409 23.5522 26.8617 23.1657C27.2842 22.7776 27.9187 22.5179 28.7455 22.5179C29.3277 22.5179 29.8059 22.6187 30.1989 22.8276C30.4791 22.9766 30.7333 23.1896 30.9577 23.49L30.191 23.9931C30.062 23.8413 29.9206 23.7053 29.7588 23.5943C29.4492 23.382 29.1017 23.2857 28.6964 23.2857C27.8665 23.2857 27.2143 23.8682 27.2143 24.6696C27.2143 25.1197 27.3647 25.4782 27.6843 25.7696C27.9617 26.0225 28.3553 26.211 28.7861 26.4025C28.7867 26.4028 28.7874 26.403 28.788 26.4033L29.3243 26.6471L29.3316 26.6504L29.3389 26.6535C30.2073 27.0153 30.8117 27.3625 31.2025 27.7841C31.5726 28.1834 31.7812 28.683 31.7812 29.433C31.7812 30.2193 31.4783 30.783 30.9916 31.1627C30.4897 31.5541 29.7495 31.7812 28.8438 31.7812C27.3485 31.7812 26.359 31.1977 25.7622 30.3587L26.6291 29.8881C26.811 30.1208 27.0235 30.3401 27.2824 30.5194C27.69 30.8016 28.1834 30.9643 28.7946 30.9643C29.7501 30.9643 30.7188 30.4317 30.7188 29.433C30.7188 28.9013 30.4708 28.5323 30.1119 28.2568C29.8263 28.0376 29.4377 27.8546 29.0432 27.6688C28.999 27.648 28.9547 27.6271 28.9105 27.6062ZM23.433 29.1875C23.433 30.1458 23.157 30.7719 22.7429 31.1625C22.3236 31.5579 21.6895 31.7812 20.8393 31.7812C19.6479 31.7812 18.8807 31.2762 18.4205 30.5933L19.2766 30.0797C19.3717 30.2299 19.4818 30.3764 19.6134 30.504C19.9086 30.7903 20.291 30.9643 20.7902 30.9643C21.1783 30.9643 21.6107 30.8748 21.9342 30.5304C22.2498 30.1944 22.3705 29.7115 22.3705 29.1384V22.6161H23.433V29.1875Z"
                  stroke="white"/>
                <defs>
                  <linearGradient id="paint0_linear_1060_8399" x1="4.7879" y1="35.6519" x2="24.9391" y2="0.95354"
                                  gradientUnits="userSpaceOnUse">
                    <stop stop-color="#F8871F"/>
                    <stop offset="1" stop-color="#FCEE6D"/>
                  </linearGradient>
                </defs>
              </svg>

              <h3 class="text-gray-800 dark:text-gray-200 md:text-lg mt-5">Básico de Javascript e orientação a
                objetos</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
})
</script>
