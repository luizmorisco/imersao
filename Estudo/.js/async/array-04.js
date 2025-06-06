const produtos = [
    {nome: 'camisa', preco: 50.00, categoria: 'roupas'},
    {nome: 'calça', preco: 80.00, categoria: 'roupas'},
    {nome: 'sapato', preco: 120.00, categoria: 'calçados'},
    {nome: 'tênis', preco: 150.00, categoria: 'calçados'},
    {nome: 'mochila', preco: 200.00, categoria: 'acessórios'},
    {nome: 'cinto', preco: 30.00, categoria: 'acessórios'},
]

const maisBarato = produtos.filter((produtos) => produtos.preco < 100)
console.log('Produtos com preço menor que 100 reias: ')

maisBarato.forEach((produtos) => {
    console.log(`Nome ${produtos.nome}, Preço: R$ ${produtos.preco.toFixed(2)}`)
})

const maisCaro = produtos.filter((produtos) => produtos.preco > 100)
console.log('Produtos com preço maior que 100 reias: ')

maisCaro.forEach((produtos) => {
    console.log(`Nome ${produtos.nome}, Preço: R$ ${produtos.preco.toFixed(2)}`)
})

const roupas = produtos.filter((produtos) => produtos.categoria === 'roupas')
console.log('Produtos da categoria roupas: ')
roupas.forEach((produtos) => {
    console.log(`Nome ${produtos.nome}, Preço: R$ ${produtos.preco.toFixed(2)}`)
})

const calçados = produtos.filter((produtos) => produtos.categoria === 'calçados')
console.log('Produtos da categoria calçados: ')
calçados.forEach((produtos) => {
    console.log(`Nome ${produtos.nome}, Preço: R$ ${produtos.preco.toFixed(2)}`)
})

const acessorios = produtos.filter((produtos) => produtos.categoria === 'acessórios')
console.log('Produtos da categoria acessórios: ')
acessorios.forEach((produtos) => {
    console.log(`Nome ${produtos.nome}, Preço: R$ ${produtos.preco.toFixed(2)}`)
})

const quatidadesProdutos = produtos.length
console.log(`Foi comprado o total de ${quatidadesProdutos} produtos.`)
const total = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0)
console.log(`O total dos produtos é: R$ ${total.toFixed(2)}`)
const media = total / produtos.length
console.log(`A média dos produtos é: R$ ${media.toFixed(2)}`)

