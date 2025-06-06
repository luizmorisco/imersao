function fatosDoChuck() {
    return fetch('https://api.chucknorris.io/jokes/random')
        .then((responde) => responde.json())
        .then((data) => data.value)
}

const fato1 = fatosDoChuck()
const fato2 = fatosDoChuck()
const fato3 = fatosDoChuck()

Promise.all([fato1, fato2, fato3])
    .then((fatos) => {
        console.log('Fatos do Chuck Norris:')
        console.log(fatos)
    })
    .catch((error) => {
        console.error('Erro ao buscar fatos:', error)
    })
    .finally(() => {
        console.log('Busca de fatos concluída.')
    })