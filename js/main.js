let valorTotal = [0.0, 0.0, 0.0];
let valorProduto = [120.00, 130.00, 115.00];
let qtdProduto = [0,0,0];

function atualizarQuantidade(item) { // Está função atualiza a quantidade de produtos
    let quantidade =  document.getElementById('quantidade' + item);
    let total = document.getElementById('total' + item);
    

    qtdProduto[item] += 1;
    valorTotal[item] =  Number.parseFloat(valorProduto[item]) * qtdProduto[item];
    quantidade.innerHTML = qtdProduto[item];
    total.innerHTML = valorTotal[item].toFixed(2);

    // Chame esta função após cada alteração na quantidade de produtos
    calcularValorTotalCompra();
}

function removerItem(item) { // Está função remove um item do carrinho
    if(qtdProduto[item] > 0) {
        qtdProduto[item] -= 1;
        let quantidade = document.getElementById('quantidade' + item);
        let total = document.getElementById('total' + item);
        quantidade.innerHTML = qtdProduto[item];
        valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtdProduto[item];
        total.innerHTML = valorTotal[item].toFixed(2);

        // Chame esta função após cada alteração na quantidade de produtos
        calcularValorTotalCompra();
    }
}

function calcularValorTotalCompra() { // Está função calcula o valor total da compra
    let valorTotalCompra = document.getElementById('valorTotalCompra');
    let valor = 0;
    for (let i = 0; i < valorTotal.length; i++) {
        valor += valorTotal[i];
    }
    valorTotalCompra.innerHTML = valor.toFixed(2);
}

// Chame esta função após cada alteração na quantidade de produtos
calcularValorTotalCompra();


function removerProdutoDoCarrinho(item) { // Esta função remove um produto do carrinho
    let produto = document.getElementById('produto' + item);
    if (produto) {
        produto.remove();
        valorTotal[item] = 0;
        qtdProduto[item] = 0;
        calcularValorTotalCompra();
    }
}

document.querySelectorAll('.close').forEach((botaoFechar, index) => { // Esta função remove um produto do carrinho
    botaoFechar.addEventListener('click', () => removerProdutoDoCarrinho(index));
});


