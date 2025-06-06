// operadores logicos

// AND
const planejamentoConcluido = true;
const estaSol = true;
const finalDeSemana = true;

const teamPicnic = planejamentoConcluido && estaSol && finalDeSemana; // and - e (&&)
console.log('Vamos fazer um picnic?', teamPicnic);
if (teamPicnic== true) {
    const snakes = 'salgadinhos';
    const drinks = 'refrigerantes';
        console.log('Vai ter', snakes, 'e', drinks, 'para o picnic!');
}

// OR
const estudei = false;
const liumLivro = true;
const naoJoguei = false;

const diaProdutivo = estudei || liumLivro || soJoguei;
console.log('foi um dia produtivo?', diaProdutivo);
if (naoJoguei && !estudei && !liumLivro) {
    console.log('Só joguei e esqueci de estudar');
}

// NOT
const estouCansado = true;
const estouAnimado = false;

const vouDormir = !estouCansado; // not - negação (!)
console.log('Vou dormir?', vouDormir);

if (!estouAnimado) {
    console.log('vou para academia!');
}

// XOR (exclusivo - OU)
 
const usandoTerno = true;
const usandoPolo = true;

const roupaCorreta = usandoTerno !== usandoPolo;
if (usandoPolo == true) {
    console.log('Vou para reunião com a vestimenta errada!');
    if (usandoTerno===usandoPolo) {
        console.log('Vou trocar de roupa!');
    }
}
 else {
    console.log('Vou para reuniao com a vestimenta certa?', roupaCorreta);
}

