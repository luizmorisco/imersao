function esperarSegundos(segundos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, segundos * 1000);
    });
}

async function executar() {
    console.log('Iniciando a espera...');

    await esperarSegundos(3);
    console.log('3 segundos se passaram!');
    
    await esperarSegundos(6);
    console.log('6 segundos se passaram!');

    await esperarSegundos(9);
    console.log('9 segundo se passou!');

    await esperarSegundos(12);
    console.log('12 segundos se passaram!');

    console.log('Finalizando a execução.');
}

executar()