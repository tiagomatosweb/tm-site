---
title: Você ainda escreve queries SQL na mão, igual um guerreiro medieval
slug: sql-na-mao
---

# Você ainda escreve queries SQL na mão, igual um guerreiro medieval

## ❌ Antigo:
```php
$users = mysqli_query($conn, "SELECT * FROM users WHERE active = 1");
```
#### 🔻 **Ineficiente porque:**
- Você precisa escrever SQL manualmente para tudo, o que aumenta a chance de erro
- Se esquecer de sanitizar os dados, pode abrir brechas para **SQL Injection**
- Código fica menos legível e difícil de manter conforme o projeto cresce

## ✅ Novo com Laravel:
```php
$users = User::where('active', 1)->get();
```
#### 🔥 **Por que é melhor?**
- O Eloquent protege automaticamente contra **SQL Injection**
- Código mais curto, fácil de entender e manter
- Mais produtivo, já que você foca na lógica e não na escrita de SQL
