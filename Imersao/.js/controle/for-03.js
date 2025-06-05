const pedidos = [
    {id: 1, status: 'pendente'},
    {id: 2, status: 'concluido'},
    {id: 3, status: 'entregue'},
    {id: 4, status: 'cancelado'},
    {id: 5, status: 'concluido'},
]

for (let i = 0; i < pedidos.length; i++) {
    let pedido = pedidos[i];

    if (pedido.status === 'pendente') {
        console.log(`Pedido ${pedido.id}: Pendente. Aguarde o despacho.`);
    } else if (pedido.status === 'concluido') {
        console.log(`Pedido ${pedido.id}: Concluido. Em processamento.`);
    } else if (pedido.status === 'entregue') {
        console.log(`Pedido ${pedido.id}: Entregue com sucesso. Obrigado pela preferencia.`);
    } else if (pedido.status === 'cancelado') {
        console.log(`Pedido ${pedido.id}: Cancelado.`);
    } 
    else {
        console.log(`Pedido ${pedido.id}: Status desconhecido.`);
    }
}
console.log('Todos os pedidos foram processados.');

