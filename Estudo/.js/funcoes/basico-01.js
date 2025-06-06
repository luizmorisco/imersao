function saudacao() {
    console.log('Seja bem-vindo(a)!');
}

saudacao(); // chamando a função com ()

function saudacaoPara(nome) {
    console.log(`Olá, ${nome}!`);
}

saudacaoPara('Eder');

function saudacaoCompleta(nome, idade) {
    console.log(`Olá, ${nome}! Você tem ${idade} anos.`);
}

saudacaoCompleta('Eder', 41);