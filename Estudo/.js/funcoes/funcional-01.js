function executarTudo(...funcoes) {
  //funcoes.forEach((funcao) => funcao());
  for (let funcao of funcoes) {
    funcao();
  }
}

const bomDia = () => console.log('Bom dia!');
const boaTarde = () => console.log('Boa tarde!');
const boaNoite = () => console.log('Boa noite!');

executarTudo(bomDia, boaTarde, boaNoite);