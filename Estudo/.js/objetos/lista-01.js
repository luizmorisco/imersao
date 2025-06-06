function Sono() {
    return 'Quero dormir'
}

const lista = [Sono, 10, 'Olá', true, { nome: 'João' }, [1, 2, 3]]

console.log(lista.length)

lista.push(function insonia() {
    return 'Não consigo dormir'
})

console.log(lista[6])