let fome = false
let satisfeito = true

if (fome==satisfeito ) {
    console.log('Estou com frescura')
    process.exit()
}

if (fome && !satisfeito) {
    console.log('Vou comer algo');
}  else {
    console.log('Não estou com fome pois já estou satisfeito');
}


