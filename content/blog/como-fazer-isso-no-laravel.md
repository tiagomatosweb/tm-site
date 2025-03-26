---
title: 3 sinais de que você ainda programa como se fosse 2010 (e como resolver com Laravel)
description: 'Laravel é o melhor'
date: '2023-04-21'
meta:
  description: 'sdsds'
---

## 1. Você ainda escreve queries SQL na mão, igual um guerreiro medieval

### ❌ Antigo:

```php
$users = mysqli_query($conn, "SELECT * FROM users WHERE active = 1");
```

#### 🔻 **Ineficiente porque:**

- Você precisa escrever SQL manualmente para tudo, o que aumenta a chance de erro
- Se esquecer de sanitizar os dados, pode abrir brechas para **SQL Injection**
- Código fica menos legível e difícil de manter conforme o projeto cresce

### ✅ Novo com Laravel:

```php
$users = User::where('active', 1)->get();
```

#### 🔥 **Por que é melhor?**

- O Eloquent protege automaticamente contra **SQL Injection**
- Código mais curto, fácil de entender e manter
- Mais produtivo, já que você foca na lógica e não na escrita de SQL

---

## 2. Você ainda cria manualmente sistema de autenticação, como se frameworks não existissem

### ❌ Antigo:

```php
  $pdo = new PDO('mysql:host=localhost;dbname=meubanco', 'root', '');
  $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
  $stmt->execute([$_POST['email']]);
  $user = $stmt->fetch();
  
  if ($user && password_verify($_POST['password'], $user['password'])) {
    session_start();
    $_SESSION['user'] = $user['id'];
    echo "Login realizado com sucesso!";
  } else {
    echo "Usuário ou senha inválidos!";
  }
```

#### 🔻 **Por que isso é um pesadelo?**

- Você precisa programar toda a lógica de autenticação do zero
- Risco alto de erros de segurança, como armazenar senhas de forma insegura
- Não tem suporte a funcionalidades modernas, como autenticação 2FA e recuperação de senha

### ✅ Novo com Laravel Fortify:

```shell
  php artisan install fortify
```

E pronto! O Laravel cuida de registro, login, recuperação de senha e autenticação 2FA automaticamente.

#### 🔥 **Por que é melhor?**

- Segurança de alto nível, sem risco de implementar algo inseguro
- Você economiza horas de desenvolvimento, sem precisar reescrever o básico
- Já vem com suporte para autenticação moderna, incluindo 2FA e reset de senha

---

## 3. Seu código é um samba do PHP doido

### ❌ Antigo:

```php 
  <?php
    $pdo = new PDO('mysql:host=localhost;dbname=meubanco', 'root', '');
    $stmt = $pdo->query("SELECT * FROM users");
    $users = $stmt->fetchAll();
  ?>

  <h1>Lista de Usuários</h1>
  <ul>
      <?php foreach ($users as $user): ?>
          <li><?= $user['name']; ?> - <?= $user['email']; ?></li>
      <?php endforeach; ?>
  </ul>
```

#### 🔸 **Longe do ideal porque:**

- Banco de dados misturado com HTML
- Código difícil de manter e escalar conforme o projeto cresce
- Sem separação de responsabilidades, vira uma bagunça total

### ✅ Novo com Laravel (estrutura organizada com MVC):
