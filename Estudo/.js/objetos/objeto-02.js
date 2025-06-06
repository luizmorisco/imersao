const livro = {
    titulo: 'Meditações',
    autor: {
        nome: 'Marco Auréleio',
        idade: 58,
    },
    generos: ['Filosofia', 'Autoajuda', 'Drama'],
    publicado: true,
    anoPublicacao: 1558,
    generoPrincipal: function() {
        return this.generos[0]
    },
}

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor.nome}`);
console.log(`Publicado: ${livro.publicado ? 'Sim' : 'Não'}`);

if (livro.publicado) {
    console.log(`Ano de publicação ${livro.anoPublicacao}`);
    console.log(`Gêneros: ${livro.generos.join(', ')}`);
 } else {
    console.log('O livro ainda não foi publicado.');
 }

console.log(`Gênero principal: ${livro.generoPrincipal()}`);
console.log(JSON.stringify(livro, null, 2));
// Exemplo de acesso a propriedades aninhadas