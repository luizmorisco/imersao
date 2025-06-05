function retormarUmaFuncao() {
    return function() {
        console.log('Olá, mundo do javascript!');
    }
}

const souUmaFuncao = retormarUmaFuncao();
souUmaFuncao(); // Chama a função retornada

retormarUmaFuncao()(); // Chama a função retornada diretamente