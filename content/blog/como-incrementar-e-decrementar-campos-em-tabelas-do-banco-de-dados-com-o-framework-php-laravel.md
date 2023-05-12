---
title: Como incrementar e decrementar campos em tabelas do banco de dados com o framework PHP Laravel
description: Aprenda a utilizar os métodos increment() e decrement() do Laravel Eloquent para incrementar e decrementar campos de tabelas de forma fácil e rápida. Saiba mais aqui.
date: '2023-05-12'
---

# Como incrementar e decrementar campos em tabelas do banco de dados com o framework PHP Laravel

Fala jovem! Hoje eu vou falar um pouco sobre como incrementar e decrementar campos da tabela com o framework PHP Laravel Eloquent. Essa é uma tarefa bem comum em projetos web, e o Eloquent torna esse processo muito mais fácil e rápido.

Mas antes de começarmos, é importante entendermos o que é o Eloquent. O Eloquent é o ORM (Object-Relational Mapping) padrão do Laravel. Ele é responsável por mapear as tabelas do banco de dados para objetos da aplicação. Isso significa que podemos trabalhar com os dados do banco de dados como se eles fossem objetos dentro do nosso código, o que torna o desenvolvimento muito mais fácil e intuitivo.

Agora que entendemos o que é o Eloquent, vamos falar sobre como incrementar e decrementar campos da tabela.

Digamos que temos uma tabela de usuários e queremos incrementar o número de logins toda vez que um usuário fizer login no sistema. Para isso, podemos utilizar o método increment() do Eloquent.

Veja o exemplo:

```php
$user = User::find(1);
$user->increment('login_count');
```
Nesse exemplo, primeiro recuperamos o usuário com o id igual a 1 utilizando o método find do Eloquent. Em seguida, utilizamos o método increment() para incrementar o valor do campo login_count, que é passado como parâmetro.

Esse método é muito útil quando queremos atualizar um valor numérico na tabela de forma fácil e rápida.

Mas e se quisermos decrementar o valor de um campo?

Para isso, podemos utilizar o método decrement(). Por exemplo, digamos que temos uma tabela de produtos e queremos decrementar a quantidade disponível toda vez que um produto for vendido.

Veja o exemplo:

```php
$product = Product::find(1);
$product->decrement('quantity');
```


