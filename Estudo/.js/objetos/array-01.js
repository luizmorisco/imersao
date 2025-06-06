const frutas = ['maçã', 'banana', 'laranja'];
console.log(frutas)

console.log(`A primeira fruta é: ${frutas[0]}`)
console.log(`A quantidade de frutas é: ${frutas.length}`)

frutas.push('uva');              // adicionar a uva
console.log('push: ', frutas)

console.log('pop: ', frutas.pop())       // remove a última fruta
console.log(frutas)

frutas.unshift('abacaxi');            // adiciona abacaxi no início
console.log('unshift: ', frutas)        
console.log('shift: ', frutas.shift())
console.log(frutas)

frutas.splice(1, 1); // Remove a banana
console.log('splice: ', frutas)
frutas.splice(0, 1, 'kiwi'); // Substitui a maçã por kiwi
console.log('splice: ', frutas.splice())