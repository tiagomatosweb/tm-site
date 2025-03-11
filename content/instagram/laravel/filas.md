---
title: Sistema travando porque não usa filas para tarefas pesadas
slug: sql-na-mao
---

# Sistema travando porque não usa filas para tarefas pesadas
🐢 O usuário clica e fica esperando 5 segundos? Laravel Queues executa tarefas assíncronas sem travar nada.

## ❌ **Antigo:**

```php
mail($to, $subject, $message);
```

### 📉 Nada produtivo porque:
* O usuário **precisa esperar** o e-mail ser enviado antes de continuar ⏳
* Se houver **muitos e-mails**, o servidor pode sobrecarregar 🚨
* **Tarefas longas bloqueiam o sistema**, deixando tudo mais lento 😵‍💫

## ✅ **Novo:** Laravel Queues roda em **background**, sem travar nada!

```php
Mail::to($user)->queue(new WelcomeMail());
```

### 🔥 Por que é melhor?
✅ O envio acontece de forma assíncrona, sem travar o usuário 🚀  
✅ O Laravel gerencia a fila e distribui as tarefas automaticamente  
✅ **Mais rápido e escalável**, ideal para aplicações que enviam muitos e-mails
