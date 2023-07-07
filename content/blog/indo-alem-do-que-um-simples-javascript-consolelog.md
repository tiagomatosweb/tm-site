---
title: Indo além do que um simples javascript console.log
description: 'Laravel é o melhor'
date: '2023-04-22'
---

Você está achando que só existe o javascript console.log()? 

O console tem uma série de métodos muito importante para serem utilizados no nosso dia-a-dia de desenvolvimento, então meu jovem eu vou revelar para você alguns métodos do console no javascript.

Mas antes de continuar lendo, eu preparei um vídeo sobre este assunto no meu canal do youtube, else, continue lendo 😀

<iframe class="w-full aspect-video" src="https://www.youtube.com/embed/-3j-LE1d1yg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Certamente o console.log no javascript é o método mais utilizado pela galera do js, já que é o mais simples e não precisa muita configuração.

Quem nunca escreveu `console.log('aqui');`{lang="js"} ou `console.log('cheguei aqui');`{lang="js"}, `console.log('deu certo');`{lang="js"}, ou coisas do tipo para identificar se sua rotina chegou exatamente naquela linha do seu código? 

Todo mundo, inclusive eu! 

Aliás até hoje eu faço isso hahaha.

E se o navegador exibiu essa mensagem significa que o browser leu a minha linha de código.

Para contextualizar, console é uma estratégia do javascript para logar dados no console do seu navegador (browser). Basicamente a gente utiliza para fazer a famosa debugagem e encontrar os erros do nosso código, ou simplesmente para emitir uma mensagem de alerta.

E como já falei, existem vários outros métodos que ninguém nunca te ensinou além do console.log no javascript e é o que veremos agora.

## console.log()

Simplesmente para logar dados no console enviando apenas mensagem simples de texto.

```js
console.log('Minha mensagem');
```

## console.info()

Simplesmente para logar alguma informação no console do browser. Muito semelhante ao console.log, mas em alguns navegadores esse comando traz uma exclamação na frente, como é o caso do Firefox. 

Veja a imagem abaixo.

![Exemplo de console.info](/img/console.info.png)

```js
console.info('Informação');
```

## console.error()

Simplesmente para enviar uma mensagem de erro no console do navegador. Ao utilizar este método perceba que a mensagem vai aparecer em vermelho em alguns navegadores como segue a imagem abaixo.

![Exemplo de console.error](/img/console.error.png)

```js
console.error('Ops! Alguma coisa deu errada.');
```

## console.warn()

Simplesmente para enviar uma mensagem de aviso no console do navegador. Ao utilizar este método perceba que a mensagem vai aparecer em amarelo em alguns navegadores como segue a imagem abaixo.

![Exemplo de console.warn](/img/console.warn.png)

```js
console.warn('Atenção: não faça isso.');
```

## console.asset()

Uma técnica de assertividade para o console. Este método recebe dois parâmetros, o primeiro é um boolean e o segundo a sua mensagem como segue no exemplo abaixo.

Se minha assertividade for falsa, a minha mensagem vai ser impressa no console. Caso contrário, nada será impresso.

```js
console.asset(false, 'Minha mensagem');
```

Um exemplo real usado dentro de várias bibliotecas js que você consome por aí…

```js
const elemento = document.getElementById('meuElemento');
console.asset(elemento, 'Ops! Este elemento não existe.');
```

Caso #meuElemento não exista a mensagem Ops! Este elemento não existe será impressa no console do navegador.

## console.count()

Uma forma simples de exibir contagem direto no console. Vamos criar um for loop e imprimir a quantidade de vezes que este for loop foi rodado. No exemplo a baixo você terá a contagem de 10 vezes no seu console.

```js
for (let x = 0; x < 10; x++) {
    console.count();
}
```

## console.group()

Uma forma rápida para logar dados agrupados no console do navegador.  Para utilizá-lo basta abrir a sessão com console.group(); e fechar com console.groupEnd();. Perceba que é possível fechar e abrir o grupo utilizando o mouse. Uma variação é iniciar a sessão com o console.groupCollapsed(); e o grupo já vem fechado por padrão.

```js
console.group();
console.log('teste 1');
console.log('teste 2');
console.log('teste 3');
console.groupEnd();
```

```js
console.groupCollapsed();
console.log('test 1');
console.log('test 2');
console.log('test 3');
console.groupEnd();
```

## console.table()
Muito parecido com o javascript console.log, mas se você passar um array como parâmetro você terá uma tabela completa das suas informações como segue a imagem abaixo.

![Exemplo de console.table()](/img/console.table.png)

```js
const superHero = ['Batman', 'Hulk', 'Ironman'];
console.table(superHero);
```

## console.time()

Este método inicia uma contagem de tempo na visualização do console. Literalmente usamos ele para saber quanto tempo uma operação leva para se completar.

Por exemplo, vamos supor que você tem uma função que contém uma rotina de programação super complexa e você quer saber exatamente quantos segundos está sendo gasto para completar a operação. Tenhamos:

```js
console.time();
for (i = 0; i < 100000; i++) {
  // rotina complexa
}
console.timeEnd();
```

Neste caso, iniciamos o contador antes da operação e perceba que finalizamos com console.timeEnd(); para indicar o ponto final do contador. Você também pode pode utilizar uma string como parâmetro que é exatamente um label. Dessa forma, você identifica cada cronômetro independente, exemplo:

```js
console.time('total');
        
console.time('operação1');
for (i = 0; i < 100000; i++) {
  // rotina complexa
}
console.timeEnd('operação1');

console.time('operação2');
for (i = 0; i < 100000; i++) {
  // rotina complexa
}
console.timeEnd('operação2');

console.timeEnd('total');
```

Aqui calculamos o tempo total das duas operações e o tempo indivdual de cada operação.

## console.trace()

Esse cara é um pouco mais complicado de explicar, mas é uma forma de você criar um traçado para saber onde seu código foi percorrido, como se fosse um rastro.

Para o nosso exemplo, teremos duas funções user(); e myJobs();. Vamos supor que você precisa chamar myJobs(); dentro da função user(); para exibir a lista de jobs pertencente ao usuário em questão. Neste caso, colocaremos o trace dentro da função myJobs(); e instanciaremos a função user();.

Vamos para o exemplo:

```js
function user() {
    myJobs();
}

function myJobs() {
    console.log('Jobs');
    console.trace();
}

// Instanciando user
user();
```

E o resultado no console seria este aqui:

![Example console.trace](/img/console.trace.png)

## console.clear()

E para limpar toda essa bagunça que a gente fez, basta usar o método clear() que o console do navegador sera limpado.

```js
console.clear();
```

Então é isso aí pessoal, espero que tenham gostado das mágicas além do javascript console.log() e caso tenham alguma dúvida basta utilizar o campo de comentário aqui em baixo. Valeu!
