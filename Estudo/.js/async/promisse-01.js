const promessaSimples = new Promise((resolve, reject) => {
    resolve('Promessa resolvida!')
})

console.log('Antes da promessa.')
promessaSimples.then((result) => console.log(result))
console.log('Depois da promessa.')