const pessoas = [
    { nomeCompleto: 'Cristiano Ronaldo'},
    { nomeCompleto: 'Messi'},
    {nomeCompleto: 'Neymar'},
    {nomeCompleto: 'Lewandowski'},

]

const primeirosNomes = pessoas.map((pessoa) => pessoa.nomeCompleto.split(' ')[0])

console.log(primeirosNomes)