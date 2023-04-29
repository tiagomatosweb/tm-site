---
title: 'Vue js e os segredos do nextTick'
description: 'Laravel é o melhor'
date: '2023-04-20'
head:
    meta:
        - name: 'keywords'
          content: 'nuxt, vue, content'
        - name: 'robots'
          content: 'index, follow'
        - name: 'author'
          content: 'NuxtLabs'
        - name: 'copyright'
          content: '© 2022 NuxtLabs'
---

# Vue js e os segredos do nextTick
Nesse artigo eu explico como o Vuejs nextTick() funciona durante o seu ciclo. É muito importante entender o que está acontecendo por de trás dos bastidores para que você usufrua de todo o potencial dessa função nativa do Vue js 2.x.

O Vuejs `nextTick()`{lang="js"} é uma função do core do Vue.js 2.0 e está disponível de qualquer componente bastando utilizar simplesmente `this.$nextTick()`. Outra característica do é que ele retorna uma promessa e por isso pode aninhar o .then() ou então implementar o async/await.

`js code inline`{lang="js"}.

Ahh! Não sabe o que é async await no javascript? Dá uma olhada nesse vídeo aqui [https://youtu.be/3158VWp1L9I](https://youtu.be/3158VWp1L9I) e fique por dentro dessa modernidade do js.

<iframe width="100%" height="315" src="https://www.youtube.com/embed/LCSQK_Gcvnk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
