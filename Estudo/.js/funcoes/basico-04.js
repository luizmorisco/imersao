function contarVogais(texto) {
    const vogais = 'aeiouAEIOU';
    let contador = 0;
    for (const letra of texto) {
        if (vogais.includes(letra)) {  // inclues verifica se a letra está na string de vogais
            contador++;
        }
    }
    return contador;
}

console.log(contarVogais('javascript')); 
console.log(contarVogais('programação'));
console.log(contarVogais('Imersão JS'));
console.log(contarVogais('UISA'));
console.log(contarVogais(' '));
