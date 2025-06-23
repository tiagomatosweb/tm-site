const messages = {
  InvalidSubscriberException: 'Parece que há um problema com este e-mail. Você pode ter cancelado sua inscrição anteriormente ou este endereço pode ter apresentado problemas de entrega.',
  ServerErrorException: 'Alguma coisa deu errado!',
};

export default (error = 'ServerErrorException') => messages[error];
