function somarTodos(...numeros) {
    let total = 0;
    for (let n of numeros) {
        total += n;
    
    }
    return total;
}

console.log(somarTodos(1, 2, 3, 4, 5)); // Saída: 157
console.log(somarTodos(10, 20, 30)); // Saída: 60
console.log(somarTodos(100, 200, 300, 400, 500)); // Saída: 1500