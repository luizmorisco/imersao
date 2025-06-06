const frutas = ['maçã', 'banana', 'laranja', 'tomate']
const vegetais = ['cenoura', 'batata', 'tomate']

const comida = frutas.concat(vegetais) // concatena os arrays
console.log(comida)

let index = comida.indexOf('tomate') // encontra o índice do tomate
if (index !== -1) {
    comida.splice(index,1) // remove o tomate se encontrado
}

console.log(`Lista de comida sem ordem: ${comida}`)

comida.sort() // ordena o array

console.log(`Lista de comida em ordem: ${comida}`) // resultado com sort

console.log(`Lista de comida ao contraria: ${comida.reverse()}`) // inverte a ordem do array

console.log(typeof 'texto')
console.log(typeof 10)
console.log(typeof true)
console.log(typeof comida)
console.log(typeof comida.length)