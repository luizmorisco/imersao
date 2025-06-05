const pessoa = Object.freeze({
    nome: 'Lukao',
    idade: 30,
    profissao: 'Programador',
    habilidades: ['JavaScript', 'Python', 'Java'],    
})

console.log(`Nome: ${pessoa.nome}`)
console.log(`Idade: ${pessoa.idade}`)
console.log(`Profissão: ${pessoa.profissao}`)
console.log(`Habilidades: ${pessoa.habilidades.join(', ')}`)
console.log(`Quantidade de Habilidades: ${pessoa.habilidades.length}`)


const pessoa2 = {
    nome: 'Lukinhas',
    idade: 28,
    profissao: 'Jogador',
    habilidades: ['Chute', 'Cabeçada', 'Drible'],
}

console.log(`Nome: ${pessoa2.nome}`)
console.log(`Idade: ${pessoa2.idade}`)
console.log(`Profissão: ${pessoa2.profissao}`)
console.log(`Habilidades: ${pessoa2.habilidades.join(', ')}`)
console.log(`Quantidade de Habilidades: ${pessoa2.habilidades.length}`)