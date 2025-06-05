const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o primeiro número: ", function(numero1) {
    rl.question("Digite o segundo número: ", function(numero2) {
        numero1 = Number(numero1);
        numero2 = Number(numero2);

        let soma = numero1 + numero2;
        console.log("A soma dos números é: " + soma);

        rl.close();
    });
});

// fiz a logico porem para aprecer no terminal a ia que fez essa parte.