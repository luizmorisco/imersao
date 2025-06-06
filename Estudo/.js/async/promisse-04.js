const verificaNota = (numero) => {
    return new Promise((resolve, reject) => {
        if (numero >= 0 && numero <= 10) {
            resolve('Nota válida!')
        } else {
            reject('Nota inválida!')
        }
    })
}

verificaNota(11)
    .then((result) => console.log(result))
    .catch((error) => console.log(error))