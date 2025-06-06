const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer.trim().toLowerCase() === 'true');
        });
    });
}

async function main() {
    let chave = await ask('Você tem a chave? (true/false): ');
    let corajoso = await ask('Você é corajoso? (true/false): ');
    let inteligente = await ask('Você é inteligente? (true/false): ');
    let heroi = 'Harald, o Corajoso';

    console.log('O heroi', heroi, 'está na masmorra!');
    console.log('Ele encontra um baú trancado!');

    if (chave && corajoso && !inteligente) {
        console.log('O heroi usa a chave e abre o baú! O baú era um Mímico, ele lutou contra mas perdeu. Seu heroi morreu!');
    }

    if (!chave && corajoso) {
        console.log('O heroi tenta abrir o baú com as mãos, mas é ataco por trás enquanto fazia força. Seu heroi morreu!');
    } 

    if (chave && !corajoso) {
        console.log('O heroi abre o baú com a chave, o baú era um Mímico. Ele corre muito rápido, mas na fuga pisa no proprio pé, cai e bate a cabeça. Seu heroi morreu!');
    }

    if (!chave && !corajoso) {
        console.log('O heroi não abre o baú e vai embora da masmorra, mas no caminho se encontra com um grupo de goblins. Eles o atacam e ele não consegue fugir. Seu heroi morreu!');
    }

    if (chave && corajoso && inteligente) {
        console.log('O heroi examina o baú com cuidado antes de abrir e percebe que é uma baú falso. Em vez de abrir a vasculha o ambiente e encontra um baú verdadeiro com tesouros incríveis! Seu heroi sobreviveu e se tornou rico!');
    }

    rl.close();
}

main();

// comando para executar o código: node ./.js/controle/if-01.1.js