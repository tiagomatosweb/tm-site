---
title: Como incrementar e decrementar campos em tabelas do banco de dados com o framework PHP Laravel
description: Aprenda a utilizar os métodos increment() e decrement() do Laravel Eloquent para incrementar e decrementar campos de tabelas de forma fácil e rápida.
date: '2025-03-08'
---

Fala jovem! Hoje eu vou falar um pouco sobre como incrementar e decrementar campos da
tabela com o
framework PHP Laravel
Eloquent. Essa é uma tarefa bem comum em projetos web, e o Eloquent torna esse processo muito mais fácil e rápido.

Mas antes de começarmos, é importante entendermos o que é o Eloquent. O Eloquent é o ORM (Object-Relational Mapping)

padrão do Laravel. Ele é responsável por mapear as tabelas do banco de dados para objetos da aplicação. Isso significa
que podemos trabalhar com os dados do banco de dados como se eles fossem objetos dentro do nosso código, o que torna o
desenvolvimento muito mais fácil e intuitivo.

Agora que entendemos o que é o Eloquent, vamos falar sobre como incrementar e decrementar campos da tabela.

Digamos que temos uma tabela de usuários e queremos incrementar o número de logins toda vez que um usuário fizer login
no sistema. Para isso, podemos utilizar o método increment() do Eloquent.

Veja o exemplo:

```php [UserController.php]
$user = User::find(1);
$user->increment('login_count');
```

Nesse exemplo, primeiro recuperamos o usuário com o id igual a 1 utilizando o método find do Eloquent. Em seguida,
utilizamos o método increment() para incrementar o valor do campo login_count, que é passado como parâmetro.

Esse método é muito útil quando queremos atualizar um valor numérico na tabela de forma fácil e rápida.

Mas e se quisermos decrementar o valor de um campo?

Para isso, podemos utilizar o método decrement(). Por exemplo, digamos que temos uma tabela de produtos e queremos
decrementar a quantidade disponível toda vez que um produto for vendido.

Veja o exemplo:

```php
$product = Product::find(1);
$product->decrement('quantity');
```

Nesse exemplo, primeiro recuperamos o produto com o id igual a 1 utilizando o método find do Eloquent. Em seguida,
utilizamos o método decrement() para decrementar o valor do campo quantity, que por sua vez é passado como parâmetro.

Além disso, é possível utilizar os métodos increment() e decrement() diretamente em uma consulta do Eloquent. Por
exemplo, podemos atualizar todos os usuários que fizeram login hoje incrementando o número de logins da seguinte forma:

Nesse exemplo, utilizamos o método whereDate para selecionar todos os usuários que fizeram login hoje. Em seguida,
utilizamos o método increment() para incrementar o valor do campo login_count. Esse tipo de operação é muito útil quando
queremos atualizar vários registros de uma só vez.

Uma informação importante sobre os métodos increment() e decrement() do Eloquent é que eles podem receber um segundo
parâmetro que indica a quantidade desejada para incrementar ou decrementar o valor do campo. Isso pode ser muito útil
quando queremos atualizar o valor de um campo com uma quantidade específica.

Por exemplo, no caso do método increment, podemos especificar a quantidade desejada da seguinte forma:

```php
$product = Product::find(1);
$product->increment('quantity', 5);
```

Nesse exemplo, o valor do campo quantity será incrementado em 5. O segundo parâmetro indica a quantidade a ser
incrementada.

Já no caso do método decrement, podemos fazer o mesmo, como no exemplo abaixo:

```php
$product = Product::find(1);
$product->decrement('quantity', 2);
```

Nesse exemplo, o valor do campo quantity será decrementado em 2. Novamente, o segundo parâmetro indica a quantidade a
ser decrementada.

É importante lembrar que o segundo parâmetro dos métodos `increment()` e `decrement()` é opcional. Se ele não for
informado, o valor do campo será incrementado ou decrementado em 1 por padrão.

Por fim, é importante lembrar que os métodos increment() e decrement() são transações seguras. Isso significa que o
Eloquent utiliza o conceito de transações do banco de dados para garantir que a operação seja executada de forma segura
e consistente. Portanto, podemos utilizar esses métodos com tranquilidade em nossos projetos.

Bom pessoal, espero que tenham gostado desse artigo e que ele tenha sido útil para vocês. Como vocês puderam ver, o
Eloquent torna o processo de incrementar e decrementar valores na tabela super fácil.

