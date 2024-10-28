<template>
  <SectionFAQ :items="items"/>
</template>

<script setup>
import {ref} from 'vue';

const items = ref([
  {
    title: 'O que é Laravel?',
    text: '<p>Laravel é um framework PHP que facilita o desenvolvimento de aplicações web, oferecendo uma estrutura organizada e recursos avançados que ajudam a construir aplicações robustas e escaláveis.</p>',
    is_open: true,
  },
  {
    title: 'Preciso ter experiência prévia em PHP para aprender Laravel?',
    text: '<p>É importante ter uma noção básica de PHP, incluindo variáveis, estruturas como if e foreach, funções e uma ideia de como usar classes e objetos. Isso ajudará você a acompanhar melhor o conteúdo do curso.</p>',
    is_open: false,
  },
  {
    title: 'Qual é a duração do curso de Laravel?',
    text: '<p>O curso é auto-ritmado, permitindo que você estude no seu próprio tempo. Você terá acesso ilimitado ao material, para que possa aprender de acordo com a sua disponibilidade.</p>',
    is_open: false,
  },
  {
    title: 'Quais projetos posso construir após aprender Laravel?',
    text: '<p>Ao final do curso, você será capaz de construir uma variedade de aplicações, como sistemas de gerenciamento, APIs, aplicações SaaS e muito mais, utilizando as melhores práticas do mercado.</p>',
    is_open: false,
  },
  {
    title: 'Quando terei acesso ao curso de Laravel?',
    text: '<p>Após a confirmação da sua matrícula, você terá acesso imediato a todas as aulas sobre Laravel. Além disso, receberá notificações por e-mail sempre que novas aulas forem adicionadas.</p>',
    is_open: false,
  },
  {
    title: 'O que será aprendido no curso de Laravel?',
    text: '<p>Você aprenderá todos os aspectos do Laravel, desde a instalação e configuração até conceitos avançados como autenticação, API e arquitetura de aplicações. As aulas são 100% práticas, permitindo que você aprenda fazendo.</p>',
    is_open: false,
  },
  {
    title: 'A Jornada Laravel é para iniciantes?',
    text: '<p><strong>Sim!</strong> O curso foi projetado para quem nunca trabalhou com Laravel, mas também para aqueles que já têm alguma familiaridade e desejam aprofundar seus conhecimentos e habilidades.</p>',
    is_open: false,
  },
  {
    title: 'E se eu me arrepender de me inscrever no curso?',
    text: '<p>Você terá 14 dias para explorar o curso e decidir se ele é a escolha certa para você. Se dentro desse período você não estiver satisfeito, devolvemos 100% do seu investimento.</p>',
    is_open: false,
  },
  {
    title: 'Como posso tirar dúvidas sobre Laravel?',
    text: '<p>Após a confirmação da matrícula, você terá acesso a uma área exclusiva para alunos no Discord, onde poderá tirar dúvidas diretamente comigo e interagir com outros alunos que também estão aprendendo Laravel.</p>',
    is_open: false,
  },
  {
    title: 'Quais são as formas de pagamento para o curso de Laravel?',
    text: '<p>O curso aceita uma variedade de formas de pagamento, como cartões de crédito, boleto, pix. Lembre-se de que pagamentos podem levar até 72 horas para serem confirmados em alguns casos.</p>',
    is_open: false,
  },
  {
    title: 'Tem certificado de conclusão do curso de Laravel?',
    text: '<p><strong>Sim!</strong> Ao finalizar o curso, você pode solicitar seu certificado via e-mail, garantindo que você tenha uma certificação que ateste suas habilidades em Laravel.</p>',
    is_open: false,
  },
  {
    title: 'O curso de Laravel terá atualizações?',
    text: '<p><strong>Sim!</strong> Novas aulas e conteúdos sobre Laravel são adicionados mensalmente, para que você sempre tenha acesso às informações mais recentes e relevantes sobre o framework.</p>',
    is_open: false,
  },
])
</script>
