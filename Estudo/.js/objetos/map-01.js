function triplo(n) {
    return n * 3
}

function multiplicarPor100(n) {
    return n * 100
}

function dividirPor10(n) {
    return n / 10
}

const numeros = [1, 2, 3, 4]

const triplos = numeros.map(triplo).map(multiplicarPor100).map(dividirPor10)
console.log(triplos) 

