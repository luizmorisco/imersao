async function fatosDoChuck() {   //async é usada para definir uma função assíncrona
    const responde = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await responde.json()
    return data.value
}

const fato1 = fatosDoChuck()
const fato2 = fatosDoChuck()
const fato3 = fatosDoChuck()

Promise.all([fato1, fato2, fato3]).then(console.log)
    //.then((fatos) => {
        //console.log('Fatos do Chuck Norris:')
        //console.log(fatos)
    //})
    //.catch((error) => {
        //console.error('Erro ao buscar fatos:', error)
    //})
    //.finally(() => {
        //console.log('Busca de fatos concluída.')
    //})