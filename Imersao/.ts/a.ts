function carro (
    modelo: (string) => void, 
    ano: number,
    cor: string,
    preco: number
): void {
    console.log(`Modelo: ${modelo}, Ano: ${ano}, Cor: ${cor}, Preço: R$${preco}`);
}   
carro(
    function (Fusca:string) {return 'Fusca'},
    1969,
    'azul',
    15000
)