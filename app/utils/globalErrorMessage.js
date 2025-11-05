const messages = {
  InvalidSubscriberException: 'Parece que há um problema com este e-mail. Você pode ter cancelado sua inscrição anteriormente ou este endereço pode ter apresentado problemas de entrega.',
  UserHasBeenTakenException: 'Este e-mail já está cadastrado. Por favor, escolha outro e-mail.',
  ProductTrialAlreadyExists: 'Você já utilizou seu teste grátis para este curso.',
  ProductTrialCreationFailed: 'Não foi possível criar seu teste grátis no momento. Por favor, tente novamente mais tarde ou entre em contato conosco se o problema persistir.',
  ServerErrorException: 'Alguma coisa deu errado!',
};

export default (error = 'ServerErrorException') => messages[error];
