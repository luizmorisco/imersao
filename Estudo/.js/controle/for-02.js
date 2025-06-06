//const nomes = ['Ana', 'Bia', 'Lia', 'Rafa']
//const idades = [23, 25, 19, 30]
//console.log(nomes)
//console.log(idades)

//const pessoa = { nome: 'Ana', idade: 23} // definindo um objeto 

//const pessoas = [
//    { nome: 'Ana', idade: 23},
//    { nome: 'Bia', idade: 25},
//    { nome: 'Lia', idade: 19},
//    { nome: 'Rafa', idade: 30}
//]

const nomes = ['Camisa', 'Calça', 'Tênis', 'Boné'];
const quantidades = [2, 1, 1, 3];
const precos = [50, 100, 200, 30];
console.log('Arrays: ', nomes, quantidades, precos);

const item = { nome: 'Camisa', quantidade: 2, preco: 50 };
console.log('Objeto: ', item);

const carrinho = [
    { nome: 'Camisa', quantidade: 2, preco: 50 },
    { nome: 'Calça', quantidade: 1, preco: 100 },
    { nome: 'Tênis', quantidade: 1, preco: 200 },
    { nome: 'Boné', quantidade: 3, preco: 30 }
]

let totalCompra = 0;

for (let i = 0; i < carrinho.length; i++) { // lenght é a quantidade de elementos (itens no array) ou seja 4 elementos pois tem 4 nomes
    let item = carrinho[i];
    let subtotal = item.quantidade * item.preco;
    totalCompra += subtotal;
    console.log(`Item: ${item.nome}, Quantidade: ${item.quantidade}, Preço: ${item.preco}, Subtotal: ${subtotal}`);
}

console.log(`Total da compra: ${totalCompra}`);