async function fatosDoChuck() {
    const resp = await fetch('https://api.chucknorris.io/jokes/random')
    const data = await resp.json()
    return data.value    
}

async function obterFatosEmSequencia() {
    const fato1 = await fatosDoChuck()
    const fato2 = await fatosDoChuck()
    const fato3 = await fatosDoChuck()
    return ['Sequencia', fato1, fato2, fato3]    
}

function obterFatosEmParalelo() {
    const label = Promise.resolve('Paralelo')
    const fato1 = fatosDoChuck()
    const fato2 = fatosDoChuck()
    const fato3 = fatosDoChuck()
    return Promise.all([label, fato1, fato2, fato3])
}

fatosDoChuck().then(console.log)
obterFatosEmSequencia().then(console.log)
obterFatosEmParalelo().then(console.log)