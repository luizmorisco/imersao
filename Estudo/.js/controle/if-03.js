let statusUser = 'banido'; // Poder ser: 'ativo', 'inativo', 'pendente' ou 'banido'

if (statusUser === 'ativo') {
    console.log('Bem vindo de volta! Acesso permitido.');
} else if (statusUser === 'inativo') {
    console.log('Sua conta está inativa. Por favor, entre em contato com o suporte.');
} else if (statusUser === 'banido') {
    console.log('Acesso negado. Sua conta foi banida por violar os termos de serviço.');
} else if (statusUser === 'pendente') {
    console.log('Sua conta ainda não foi verificada. Por favor, verefique seu gmail.');
} else {
    console.log('Status de usuário desconhecido. Por favor, entre em contato com o suporte.');
}

console.log('Obrigado por usar nosso serviço!');