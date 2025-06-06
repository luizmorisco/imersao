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
    console.log('Seu Heroi está dentro da Masmorra sem fim......')
    console.log('Bem-vindo à aventura de Harald, o Corajoso!');
    let chave = await ask('Você tem a chave? (true/false): ');
    let corajoso = await ask('Você é corajoso? (true/false): ');
    let inteligente = await ask('Você é inteligente? (true/false): ');
    let heroi = 'Harald, o Corajoso';

    console.log('O heroi', heroi, 'está na masmorra!');
    console.log('Ele encontra um baú trancado!');

    if (chave && corajoso && !inteligente) {
    console.log('O heroi usa a chave e abre o baú! O baú era um Mímico!');
    let tentaFugir = await ask('O heroi tenta fugir? (true/false): ');
    if (tentaFugir) {
        let espada = await ask('O heroi encontra uma espada durante a fuga, irá pegar ou continuar correndo? (true/false): ');
        if (espada) {
            console.log('Harald corre muito rápido, encontra uma espada durante a fuga, contra-ataca ferozmente e mata o Mímico! Seu heroi sobreviveu!');
        } else {
            console.log('Harald corre muito rápido, mas logo acaba seu fôlego. O Mímico o alcança e o ataca. Seu heroi morreu!');
        }
    } else {
        console.log('O heroi tenta lutar sem fugir, mas o Mímico é muito forte. Seu heroi morreu!');
    }
}   

    if (!chave && corajoso) {
        console.log('O heroi tenta abrir o baú com as mãos, mas é atacado por trás enquanto fazia força. ');
    let furtivo = await ask('Pula pra lado pra desviar? (true/false): ');
    if (furtivo) {
        let golpeFraco = await ask('Harald desvia, voce ira enfrentar esse monstro desconhecido? (true/false):  ');
        if (golpeFraco) {
            console.log('Harald ataca, mas era um ladrao de masmorra e rapidamente rouba todos seus pertences o deixando morrer, Seu heroi morreu!');
        } else {
            console.log('Harald se supreende pois era um ladrao e logo com seu carisma faz amizade e os dois saem da masmorra juntos com o baU, Seu heroi sobreviveu!');
        }
    } else {
        console.log('Harald não desvia e é apunhalado e começa a sangrar. Seu heroi morreu!');
    }
} 

    if (chave && !corajoso) {
        console.log('Harald fica excitando em abrir, o que seu heroi ira fazer?');
        let abrirBau = await ask('Harald ira abrir o bau forçado? (true/false): ');
    if (abrirBau) {
        let fingirMorto = await ask('Ele abre o bau mas era um Mímico, ele pensa em se finger de morto, você irá fazer isso? (true/false):  ');
        if (fingirMorto) {
            console.log('Harald se finge de morto. OMímico vendo essa situação fica com pena o deixa em paz, Seu heroi sobreviveu!');
        } else {
            console.log('Seu heroi tenta correr mas o Mímico é supreendentemente mais rapido, Seu heroi morreu!');
        }
    } else {
        console.log('Harald não abre o bau e continua seu caminho e por sorte cai dentrode uma tumba ja saceada, porem ainda sobrou restos da fortuna e ele sai da masmo. Seu heroi sobreviveu!');
    }
}

    if (!chave && !corajoso) {
        console.log('Harald se depara com um grupo de goblins cercando o bau e os goblins percebem sua presença...')
    let tentarFugir = await ask('Ao encontrar o grupo de goblins, Harald tenta fugir? (true/false): ');
    if (tentarFugir) {
        let seEsconder = await ask('Harald tenta se esconder atrás de uma rocha. Ele permanece escondido? (true/false): ');
        if (seEsconder) {
            console.log('Harald se esconde com sucesso, os goblins passam sem vê-lo. Ele escapa da masmorra em segurança! Seu heroi sobreviveu!');
        } else {
            console.log('Harald sai do esconderijo antes da hora e é visto pelos goblins. Eles o capturam. Seu heroi morreu!');
        }
    } else {
        console.log('Harald enfrenta os goblins, mas são muitos e ele não consegue resistir. Seu heroi morreu!');
    }
}

    if (chave && corajoso && inteligente) {
        console.log('O heroi examina o baú com cuidado antes de abrir e percebe que é uma baú falso.');
    let investigarSala = await ask('Harald decide investigar a sala em busca de pistas? (true/false): ');
    if (investigarSala) {
        let abrirBauVerdadeiro = await ask('Harald encontra um baú verdadeiro escondido. Ele vai abrir? (true/false): ');
        if (abrirBauVerdadeiro) {
            console.log('Harald abre o baú verdadeiro e encontra tesouros incríveis! Seu heroi sobreviveu e se tornou rico!');
        } else {
            console.log('Harald decide não abrir o baú verdadeiro, mas encontra uma passagem secreta e escapa em segurança. Seu heroi sobreviveu!');
        }
    } else {
        console.log('Harald ignora as pistas e vai embora da sala. Ele sobrevive, mas perde a chance de ficar rico.');
    }
}

    // Novas aventuras fora da masmorra, se Harald sobreviveu (PARTE FEITO JUNTO COM IA)
    let sobreviveu = false;
    if (
        (chave && corajoso && !inteligente && espada) ||
        (!chave && corajoso && furtivo && !golpeFraco) ||
        (chave && !corajoso && !abrirBau) ||
        (chave && !corajoso && abrirBau && fingirMorto) ||
        (!chave && !corajoso && tentarFugir && seEsconder) ||
        (chave && corajoso && inteligente && investigarSala && abrirBauVerdadeiro) ||
        (chave && corajoso && inteligente && investigarSala && !abrirBauVerdadeiro) ||
        (chave && corajoso && inteligente && !investigarSala)
    ) {
        sobreviveu = true;
    }

    if (sobreviveu) {
        console.log('\nHarald agora está fora da masmorra, pronto para novas aventuras!');
        let irTaverna = await ask('Harald vai para a taverna celebrar sua vitória? (true/false): ');
        if (irTaverna) {
            let beber = await ask('Harald aceita um desafio de beber com um anão? (true/false): ');
            if (beber) {
                console.log('Harald vence o desafio e ganha respeito dos anões!');
            } else {
                console.log('Harald recusa e acaba ouvindo histórias valiosas de outros aventureiros.');
            }
        } else {
            let visitarMercado = await ask('Harald decide visitar o mercado da cidade? (true/false): ');
            if (visitarMercado) {
                let comprarArmadura = await ask('Harald encontra uma armadura rara. Ele compra? (true/false): ');
                if (comprarArmadura) {
                    console.log('Harald compra a armadura e se sente mais protegido para futuras aventuras!');
                } else {
                    console.log('Harald economiza seu dinheiro, mas perde a chance de se proteger melhor.');
                }
            } else {
                let ajudarAldeao = await ask('Harald encontra um aldeão pedindo ajuda. Ele ajuda? (true/false): ');
                if (ajudarAldeao) {
                    let aceitarMissao = await ask('O aldeão oferece uma missão perigosa. Harald aceita? (true/false): ');
                    if (aceitarMissao) {
                        console.log('Harald parte para uma nova missão e se torna uma lenda local!');
                    } else {
                        console.log('Harald recusa a missão e segue sua vida tranquilamente.');
                    }
                } else {
                    console.log('Harald ignora o aldeão e decide descansar em um campo tranquilo.');
                }
            }
        }
        let explorarFloresta = await ask('Harald quer explorar uma floresta misteriosa próxima? (true/false): ');
        if (explorarFloresta) {
            let seguirTrilha = await ask('Ele encontra uma trilha suspeita. Vai seguir? (true/false): ');
            if (seguirTrilha) {
                console.log('Harald encontra uma criatura mágica e ganha um amuleto de proteção!');
            } else {
                console.log('Harald evita a trilha e encontra frutas raras para vender no mercado.');
            }
        } else {
            console.log('Harald prefere não arriscar e retorna para casa, planejando novas aventuras.');
        }
    }

    

    rl.close();

}
main();

// comando para executar o código: node ./.js/async/async-await-04-jogo.js  ou  node Estudo/.js/async/async-await-04-jogo.js